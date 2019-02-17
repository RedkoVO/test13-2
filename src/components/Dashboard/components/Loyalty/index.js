import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import styles from './styles'

const Loyalty = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.title}>Loyalty Propgram</div>

    <div className={classes.transactionsTable}>
      <div className={cn(classes.tableHead, classes.tableRow)}>
        <div className={classes.tableData}>line</div>
        <div className={classes.tableData}>users</div>
        <div className={classes.tableData}>conditions</div>
        <div className={classes.tableData}>earn</div>
        <div className={classes.tableData} />
      </div>
      <div className={classes.tableWrapper}>
        <div className={classes.tableContentWrap}>
          <div className={classes.tableRow}>
            <div className={classes.tableData}>
              <span>1</span>
            </div>
            <div className={classes.tableData}>
              <span>28</span>
            </div>
            <div className={classes.tableData}>
              <span>5%</span>
            </div>
            <div className={classes.tableData}>
              <span>28700 cpt</span>
            </div>
            <div className={cn(classes.tableData, classes.showMore)}>
              <span>Show more</span>
            </div>
          </div>

          <div className={classes.tableRow}>
            <div className={classes.tableData}>
              <span>2</span>
            </div>
            <div className={classes.tableData}>
              <span>98</span>
            </div>
            <div className={classes.tableData}>
              <span>2.5%</span>
            </div>
            <div className={classes.tableData}>
              <span>34000 cpt</span>
            </div>
            <div className={cn(classes.tableData, classes.showMore)}>
              <span>Show more</span>
            </div>
          </div>

          <div className={classes.tableRow}>
            <div className={classes.tableData}>
              <span>3</span>
            </div>
            <div className={classes.tableData}>
              <span>144</span>
            </div>
            <div className={classes.tableData}>
              <span>2%</span>
            </div>
            <div className={classes.tableData}>
              <span>68700 cpt</span>
            </div>
            <div className={cn(classes.tableData, classes.showMore)}>
              <span>Show more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Loyalty.propTypes = {}

export default withStyles(styles)(Loyalty)
