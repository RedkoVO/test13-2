import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import Avatar from '../../../../../../assets/images/user.jpg'

import styles from './styles'

const UserBlock = ({ classes, handleLogout }) => (
  <div className={classes.root}>
    <div className={classes.user}>
      <div className={classes.userBlock}>
        <div className={classes.wrBalance}>
          <div className={classes.balance}>
            <img src={Avatar} alt="" />
            200000 cpt
          </div>
          <div className={classes.title}>Available balance</div>
        </div>
        <div className={classes.userHello}>
          <div className={classes.helloTitle}>Hello, anonymous</div>
          <Link to={'/'} className={classes.userVerification}>
            KYC VERIFICATION
          </Link>
        </div>
        <div className={classes.userPhoto}>
          <img src={Avatar} alt="" />
        </div>
        <div
          className={cn(classes.headerMenuItem, classes.wrLogout)}
          onClick={() => handleLogout()}
        >
          <i className={cn(classes.menuIcon, classes.logout)} />
        </div>
      </div>
    </div>
  </div>
)

UserBlock.propTypes = {
  classes: PropTypes.object,
  balance: PropTypes.string,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(UserBlock)
