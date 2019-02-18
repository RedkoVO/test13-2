import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import TransactionHistory from '../../../containers/TransactionHistory/AsyncTransactionHistory'
import Wallet from '../components/Wallet'
import Loyalty from '../components/Loyalty'
import Marketplace from '../components/Marketplace'

import styles from './styles'

const Dashboard = ({
  classes,
  allBalance,
  isDisabledButton,
  onSubmit,
  onCopyKey,
  addressKey,
  handleChangeBalance,
  curencySelectValue
}) => (
  <main>
    <div className={classes.root}>
      <Wallet
        onSubmit={onSubmit}
        onCopyKey={onCopyKey}
        addressKey={addressKey}
        isDisabledButton={isDisabledButton}
        allBalanceResult={allBalance && allBalance.result}
        handleChangeBalance={handleChangeBalance}
        curencySelectValue={curencySelectValue}
      />
      <TransactionHistory
        addressKey={addressKey}
        currency={curencySelectValue}
      />
      <Loyalty />
      <Marketplace />
    </div>
  </main>
)

Dashboard.propTypes = {
  classes: PropTypes.object,
  allBalance: PropTypes.object,
  isDisabledButton: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCopyKey: PropTypes.func,
  addressKey: PropTypes.string,
  handleChangeBalance: PropTypes.func,
  curencySelectValue: PropTypes.object
}

export default withStyles(styles)(Dashboard)
