import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import { NavHashLink as NavLink } from 'react-router-hash-link'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import { ReactComponent as WalletLogo } from '../../../../assets/images/svg/wallet.svg'
import { ReactComponent as VexchangeLogo } from '../../../../assets/images/svg/vexchange.svg'
import { ReactComponent as ShopdLogo } from '../../../../assets/images/svg/shopBag.svg'
import { ReactComponent as PlayLogo } from '../../../../assets/images/svg/play.svg'
import { ReactComponent as SocialLogo } from '../../../../assets/images/svg/social.svg'
import { ReactComponent as SettingsLogo } from '../../../../assets/images/svg/settings.svg'

import styles from './styles'

const MenuNavigation = ({ classes, page }) => (
  <ul className={cn(classes.root, { dark: page === 'dark' })}>
    <li>
      <NavLink
        exact
        to={'/'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <WalletLogo className={classes.menuIcon} />
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to={'/deposit'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <WalletLogo className={classes.menuIcon} />
        Deposit
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/games'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <ShopdLogo className={classes.menuIcon} />
        Marketplace
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to={'/vchange'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <VexchangeLogo className={classes.menuIcon} />
        Exchange
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/transaction'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <WalletLogo className={classes.menuIcon} />
        Transaction
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/comission'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <PlayLogo className={classes.menuIcon} />
        Commissions
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/support'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <SocialLogo className={classes.menuIcon} />
        Support
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/settings'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <SettingsLogo className={classes.menuIcon} />
        Settings
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/help'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <ShopdLogo className={classes.menuIcon} />
        Help
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/propmotion'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <SocialLogo className={classes.menuIcon} />
        Propmotion
      </NavLink>
    </li>
  </ul>
)

MenuNavigation.propTypes = {
  classes: PropTypes.object,
  page: PropTypes.string
}

export default withStyles(styles)(MenuNavigation)
