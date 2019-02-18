import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import withStyles from '@material-ui/core/styles/withStyles'

import SliderImg from '../../assets/images/marketplace_slider.png'
import DotsImg from '../../assets/images/slider-dots.png'

import styles from './styles.js'

const Marketplace = ({ classes, products, checked, handleCheckbox }) => (
  <main>
    <div className={classes.root}>
      <div className={classes.slider}>
        <img className={classes.sliderImage} src={SliderImg} alt="" />
        <img className={classes.dots} src={DotsImg} alt="" />
      </div>

      <div className={classes.wrTopPart}>
        <div className={classes.wrBreadcrumb}>
          Categories / Clothes / Shoes / <span>Sneackers</span>
        </div>

        <div className={classes.wrCheckbox}>
          Bussines
          <Switch
            classes={{
              switchBase: classes.iOSSwitchBase,
              bar: classes.iOSBar,
              icon: classes.iOSIcon,
              iconChecked: classes.iOSIconChecked,
              checked: classes.iOSChecked
            }}
            disableRipple
            checked={checked}
            onChange={() => handleCheckbox()}
            value="checked"
          />
          Personal
        </div>
      </div>
    </div>
  </main>
)

Marketplace.propTypes = {
  classes: PropTypes.object,
  products: PropTypes.array,
  handleCheckbox: PropTypes.func,
  checked: PropTypes.bool
}

export default withStyles(styles)(Marketplace)
