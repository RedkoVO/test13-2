import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import withStyles from '@material-ui/core/styles/withStyles'

import { shortBalance } from '../../../../utils/math'

import Action from './components/Action'

import styles from './styles'

const Wallet = ({
  classes,
  onSubmit,
  allBalanceResult = {},
  addressKey,
  onCopyKey,
  isDisabledButton,
  handleChangeBalance,
  curencySelectValue = {}
}) => (
  <div className={classes.root}>
    <div className={classes.wallet}>
      <div className={classes.wrBalance}>
        <div className={classes.title}>Available balance</div>
        <div className={classes.balance}>
          {!isEmpty(allBalanceResult) && curencySelectValue.currency
            ? shortBalance(
                allBalanceResult[curencySelectValue.currency].balance
              )
            : 0}
        </div>
        <button className={classes.addFunds}>Add Funds</button>
      </div>

      <div className={classes.wrChooseCurrency}>
        <div
          className={classes.chooseCurrency}
          onClick={() => handleChangeBalance('EUR')}
        >
          EUR 34.15
        </div>
        <div
          className={classes.chooseCurrency}
          onClick={() => handleChangeBalance('USD')}
        >
          USD 36.35
        </div>
        <div className={classes.chooseCurrency}>VND 893359.19</div>
        <div
          className={classes.chooseCurrency}
          onClick={() => handleChangeBalance('CNY')}
        >
          CNY 259.47
        </div>
        <div
          className={classes.chooseCurrency}
          onClick={() => handleChangeBalance('EUR')}
        >
          EUR 34.15
        </div>
        <div
          className={classes.chooseCurrency}
          onClick={() => handleChangeBalance('USD')}
        >
          USD 36.35
        </div>
      </div>
    </div>

    <Action
      onSubmit={onSubmit}
      isDisabledButton={isDisabledButton}
      addressKey={addressKey}
      onCopyKey={onCopyKey}
    />
  </div>
)

Wallet.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  onCopyKey: PropTypes.func,
  allBalanceResult: PropTypes.object,
  addressKey: PropTypes.string,
  isDisabledButton: PropTypes.bool,
  handleChangeBalance: PropTypes.func,
  curencySelectValue: PropTypes.object
}

export default withStyles(styles)(Wallet)
