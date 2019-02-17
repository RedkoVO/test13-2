import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../../../MenuNavigation/Desktop/AsyncMenuNavigation'
import UserBlock from '../components/UserBlock'

import styles from './styles'

const HeaderMain = props => {
  const { classes, balance, handleLogout } = props

  return (
    <header className={classes.root}>
      <MenuNavigation type="main" />
      <UserBlock
        balance={balance && balance.shortBalance}
        handleLogout={handleLogout}
      />
    </header>
  )
}

HeaderMain.propTypes = {
  classes: PropTypes.object,
  handleLogout: PropTypes.func,
  balance: PropTypes.object
}

export default withStyles(styles)(HeaderMain)
