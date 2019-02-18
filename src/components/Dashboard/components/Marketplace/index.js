import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Image1 from '../../../../assets/images/jbl.png'
import Image2 from '../../../../assets/images/ariel.png'
import Image3 from '../../../../assets/images/hat.png'
import Image4 from '../../../../assets/images/cross.png'

import styles from './styles'

const Marketplace = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.title}>Marketplace</div>

    <div className={classes.wrProducts}>
      <div className={classes.propduct}>
        <img src={Image1} alt="" />
        <div className={classes.wrDescription}>
          <div className={classes.productTitle}>JBL PHU KIEN</div>
          <div className={classes.duscription}>
            Donec eget purus eget quam lobortis condimentum. Suspendisse lectus
            massa, elementum sit amet.
          </div>
          <div className={classes.oldPrice}>
            <div className={classes.crossOut} />
            434.21 cpt <div className={classes.sale}>50% sale</div>
          </div>
          <div className={classes.price}>234.21 cpt</div>
          <button className={classes.button}>Buy now!</button>
        </div>
      </div>

      <div className={classes.propduct}>
        <img src={Image2} alt="" />
        <div className={classes.wrDescription}>
          <div className={classes.productTitle}>Ariel</div>
          <div className={classes.duscription}>
            Donec eget purus eget quam lobortis condimentum. Suspendisse lectus
            massa, elementum sit amet.
          </div>
          <div className={classes.oldPrice}>
            <div className={classes.crossOut} />
            434.21 cpt <div className={classes.sale}>50% sale</div>
          </div>
          <div className={classes.price}>234.21 cpt</div>
          <button className={classes.button}>Buy now!</button>
        </div>
      </div>

      <div className={classes.propduct}>
        <img src={Image3} alt="" />
        <div className={classes.wrDescription}>
          <div className={classes.productTitle}>Hat</div>
          <div className={classes.duscription}>
            Donec eget purus eget quam lobortis condimentum. Suspendisse lectus
            massa, elementum sit amet.
          </div>
          <div className={classes.oldPrice}>
            <div className={classes.crossOut} />
            434.21 cpt <div className={classes.sale}>50% sale</div>
          </div>
          <div className={classes.price}>234.21 cpt</div>
          <button className={classes.button}>Buy now!</button>
        </div>
      </div>

      <div className={classes.propduct}>
        <img src={Image4} alt="" />
        <div className={classes.wrDescription}>
          <div className={classes.productTitle}>Cross</div>
          <div className={classes.duscription}>
            Donec eget purus eget quam lobortis condimentum. Suspendisse lectus
            massa, elementum sit amet.
          </div>
          <div className={classes.oldPrice}>
            <div className={classes.crossOut} />
            434.21 cpt <div className={classes.sale}>50% sale</div>
          </div>
          <div className={classes.price}>234.21 cpt</div>
          <button className={classes.button}>Buy now!</button>
        </div>
      </div>
    </div>
  </div>
)

Marketplace.propTypes = {}

export default withStyles(styles)(Marketplace)
