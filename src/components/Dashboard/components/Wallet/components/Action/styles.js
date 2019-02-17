import GraphLogo from '../../../../../../assets/images/svg/graph.svg'
import SendLogo from '../../../../../../assets/images/svg/sendIcon.svg'

export default theme => ({
  root: {
    width: '870px',
    height: '256px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '90px',

    [theme.breakpoints.down('lg')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  actionsStatistics: {
    width: '260px',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('lg')]: {
      width: '230px',
      height: '175px',
      marginTop: '15px'
    }
  },
  statisticsGraph: {
    width: '170px',
    height: '117px',

    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  form: {
    textAlign: 'center'
  },
  statisticsTitle: {
    position: 'relative',
    fontSize: '29px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '25px',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '16px',
      height: '16px',
      backgroundImage: `url(${GraphLogo})`,
      bottom: '8px',
      left: '-25px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '30px',
      backgroundPosition: 'center'
    }
  },
  actionsSend: {
    width: '260px',
    height: '226px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('lg')]: {
      width: '230px',
      height: '175px'
    }
  },
  sendTitle: {
    position: 'relative',
    color: '#616161',
    fontFamily: 'ubBold',
    fontSize: '39px',
    textAlign: 'center',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '17px',
      height: '17px',
      backgroundImage: `url(${SendLogo})`,
      bottom: '6px',
      left: '-25px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '16px',
      backgroundPosition: 'center'
    }
  },
  wrSendField: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  sendAddressField: {
    width: '215px',
    height: '30px',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#dddddd',
    outline: 'none',
    padding: '10px 20px',
    margin: 0,
    marginTop: '7px',
    borderRadius: '15px',
    fontSize: '9px',

    '&.input-error': {
      border: '1px solid red'
    }
  },
  sendAmmountField: {
    width: '210px',
    height: '30px',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#dddddd',
    outline: 'none',
    padding: '10px 20px',
    margin: 0,
    marginTop: '7px',
    borderRadius: '15px',
    fontSize: '9px',

    '&.input-error': {
      border: '1px solid red'
    }
  },
  invoiceAmmountField: {
    width: '210px',
    height: '30px',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#dddddd',
    outline: 'none',
    padding: '10px 20px',
    margin: 0,
    marginTop: '7px',
    borderRadius: '15px',
    fontSize: '9px'
  },
  sendBtn: {
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    padding: '9px 20px',
    borderRadius: '20px',
    marginTop: '10px',

    '&.disabled': {
      opacity: '0.5',
      cursor: 'default'
    },

    '&:focus': {
      outline: 'none'
    }
  },
  walletTitle: {
    fontSize: '39px',
    fontWeight: 400,

    '& p': {
      margin: 0,
      fontFamily: 'ubBold'
    }
  },
  copyIcon: {
    marginLeft: '10px',
    width: '17px',
    height: '17px',
    cursor: 'pointer'
  },
  walletAddress: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '11px',
    fontFamily: 'ubBold',
    padding: '10px 0',
    color: '#616161',
    textAlign: 'center'
  }
})
