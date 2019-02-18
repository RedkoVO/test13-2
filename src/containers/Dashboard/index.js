import compose from 'recompose/compose'
import { withProps, withHandlers, withState, lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import isEqual from 'lodash/isEqual'
import BigNumber from 'bignumber.js'

import {
  getWork,
  getAllBalanceInfo,
  sendMoney
} from '../../redux/actions/balance'
import { getAllBalanceInfoSelector } from '../../selectors/balance'

import Crypto from '../../crypto/crypto'
import validate from './validate'
import { getBigNumberAmount } from '../../utils/math'

import AsyncDashboardDesktop from '../../components/Dashboard/Desktop/AsyncDashboardDesktop'

const FORM_NAME = 'sendMoney'

const mapStateToProps = state => ({
  allBalance: getAllBalanceInfoSelector(state)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isDisabledButton', 'setDisabledButton', false),
  withState('curencySelectValue', 'setCurencySelectValue', {}),
  withState('textToCopy', 'setTextToCopy', false),
  withHandlers({
    handleChangeBalance: ({ setCurencySelectValue, allBalance }) => value => {
      setCurencySelectValue({
        currency: value,
        code: allBalance.result[value].code
      })
    },

    onCopyKey: ({ setTextToCopy, textToCopy }) => () => {
      setTextToCopy(!textToCopy)
    },

    onSubmit: ({
      handleSubmit,
      curencySelectValue,
      setDisabledButton,
      isDisabledButton,
      dispatch,
      allBalance
    }) =>
      handleSubmit(variables => {
        if (!isDisabledButton) {
          setDisabledButton(!isDisabledButton)

          dispatch(
            getWork({
              hash: allBalance.result[curencySelectValue.currency].lastBlock
            })
          )
            .then(res => {
              if (res.success) {
                const acc = {
                  publicKey: localStorage.getItem('publicKey'),
                  secretKey: localStorage.getItem('secretKey'),
                  address: localStorage.getItem('address')
                }
                const toAddress = variables.addressKey
                const amount = getBigNumberAmount(variables.amount)
                const work = res.result.work
                const currencyInfo = {
                  code: curencySelectValue.code,
                  currency: curencySelectValue.currency,
                  lastBlock:
                    allBalance.result[curencySelectValue.currency].lastBlock,
                  balance: new BigNumber(
                    allBalance.result[curencySelectValue.currency].balance
                  )
                }
                const getCryptoBlock = Crypto.sign.formSendBlock(
                  acc,
                  toAddress,
                  amount,
                  work,
                  currencyInfo
                )

                const data = {
                  block: getCryptoBlock
                }

                dispatch(sendMoney(data))
                  .then(res => {
                    if (res.result.hash) {
                      const getCryptoInfo = Crypto.account.accountFromSecret(
                        localStorage.getItem('secretKey')
                      )

                      if (localStorage.getItem('secretKey')) {
                        const data = {
                          address: getCryptoInfo.address
                        }
                        dispatch(getAllBalanceInfo(data))
                      }

                      dispatch(reset('sendMoney'))
                      setDisabledButton(false)
                    }
                  })
                  .catch(err => {
                    console.log('ERROR send money:', err)
                  })
              }
            })
            .catch(err => {
              console.log('ERROR get work:', err)
            })
        }
      })
  }),
  lifecycle({
    componentDidMount() {
      const { allBalance, setCurencySelectValue } = this.props
      if (!!allBalance) {
        setCurencySelectValue({
          code: allBalance.result['EUR'].code,
          currency: allBalance.result['EUR'].currency
        })
      }
    },
    componentDidUpdate(prevProps) {
      const {
        allBalance,
        setCurencySelectValue,
        curencySelectValue
      } = this.props
      if (!isEqual(prevProps.allBalance, allBalance)) {
        const curency = curencySelectValue.currency
          ? curencySelectValue.currency
          : 'EUR'

        if (!!allBalance.result[curency]) {
          setCurencySelectValue({
            code: allBalance.result[curency].code,
            currency: allBalance.result[curency].currency
          })
        }
      }
    }
  }),
  withProps(() => ({
    addressKey: localStorage.getItem('address')
  })),
  pure
)(AsyncDashboardDesktop)
