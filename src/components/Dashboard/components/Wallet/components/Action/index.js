import React from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Field, Form } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import InputField from '../../../../../App/components/Form/InputField'

import CopyIcon from '../../../../../../assets/images/svg/copy.svg'

import styles from './styles'

const Action = ({
  classes,
  onSubmit,
  isDisabledButton,
  addressKey,
  onCopyKey
}) => (
  <div className={classes.root}>
    <div className={classes.actionsSend}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <span className={classes.sendTitle}>Send now</span>
        <div className={classes.wrSendField}>
          <Field
            name="addressKey"
            type="text"
            className={classes.sendAddressField}
            component={InputField}
            placeholder="Put address you want to send the money"
          />
        </div>
        <div className={classes.wrSendField}>
          <Field
            name="amount"
            type="text"
            className={classes.sendAmmountField}
            component={InputField}
            placeholder="Set ammount"
          />
        </div>
        <button
          type="submit"
          className={cn(classes.sendBtn, { disabled: isDisabledButton })}
        >
          Send money
        </button>
      </Form>
    </div>

    <div className={classes.walletTitle}>
      <p>My Address:</p>
      <div className={classes.walletAddress}>
        {addressKey}
        <CopyToClipboard text={addressKey} onCopy={() => onCopyKey()}>
          <img className={classes.copyIcon} src={CopyIcon} alt="" />
        </CopyToClipboard>
      </div>
    </div>
  </div>
)

Action.propTypes = {
  classes: PropTypes.object,
  addressKey: PropTypes.string,
  onCopyKey: PropTypes.func,
  isDisabledButton: PropTypes.bool
}

export default withStyles(styles)(Action)
