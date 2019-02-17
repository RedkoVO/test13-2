import TransactionLogo from '../../../assets/images/svg/transactions.svg'
import WalletLogo from '../../../assets/images/svg/wallet.svg'
import MoneyTransactLogo from '../../../assets/images/svg/moneyTransact.svg'
import StatusLogo from '../../../assets/images/svg/status.svg'
import TimeLogo from '../../../assets/images/svg/time.svg'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px',
    boxSizing: 'border-box',
    marginBottom: '30px',

    [theme.breakpoints.down('md')]: {
      width: '510px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '480px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px'
    }
  },
  tabs: {
    paddingBottom: '20px',
    backgroundColor: '#eaeaea',
    borderRadius: '20px'
  },
  tabsList: {
    display: 'flex',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '45px',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'ubBold',
    color: '#eaeaea',
    backgroundColor: '#c2c2c2',
    cursor: 'pointer',

    '&.react-tabs__tab--selected': {
      color: '#575757',
      background: 'none'
    },
    '&.left': {
      borderTopLeftRadius: '20px'
    },
    '&.right': {
      borderTopRightRadius: '20px'
    },
    '&:focus': {
      outline: 'none'
    }
  },

  transactionsTitle: {
    position: 'relative',
    fontSize: '29px',
    fontWeight: 700,
    color: '#5e7cff',
    textAlign: 'center',
    marginBottom: '40px',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '20px',
      height: '20px',
      bottom: '6px',
      left: '-25px',
      backgroundImage: `url(${TransactionLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '30px',
      backgroundPosition: 'center'
    }
  },
  transactionsTable: {
    width: '800px',
    height: '135px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '11px',

    [theme.breakpoints.down('sm')]: {
      height: '165px'
    }
  },
  tableData: {
    paddingLeft: '40px',
    fontSize: '14px',
    fontWeight: 400,
    boxSizing: 'border-box',

    [theme.breakpoints.down('lg')]: {
      paddingLeft: '35px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '11px',
      paddingLeft: '15px'
    }
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e3e3e3',
    marginBottom: '7px',
    minHeight: '30px',
    paddingRight: '25px',
    boxSizing: 'border-box',
    borderRadius: '15px',
    width: '790px',

    [theme.breakpoints.down('lg')]: {
      paddingRight: '10px',
      width: '765px'
    },
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      minHeight: '50px',
      width: '500px'
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      minHeight: '50px',
      width: '470px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '310px'
    }
  },
  tableHead: {
    alignItems: 'flex-end',
    paddingBottom: '5px',
    marginBottom: 0,
    background: 'none',

    '& $tableData': {
      fontSize: '10px',
      fontWeight: 700
    },

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon1: {
    position: 'relative',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '12px',
      height: '12px',
      bottom: '3px',
      left: '20px',
      backgroundImage: `url(${WalletLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '15px 12px',
      backgroundPosition: 'center',

      [theme.breakpoints.down('xs')]: {
        bottom: 0,
        left: '15px'
      }
    }
  },
  icon2: {
    position: 'relative',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '12px',
      height: '12px',
      bottom: '3px',
      left: '22px',
      backgroundImage: `url(${MoneyTransactLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '12px',
      backgroundPosition: 'center',

      [theme.breakpoints.down('xs')]: {
        bottom: 0,
        left: '15px'
      }
    }
  },
  icon3: {
    position: 'relative',

    '&.send': {
      color: 'red'
    },
    '&.receive': {
      color: 'green'
    },

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '12px',
      height: '12px',
      bottom: '3px',
      left: '19px',
      backgroundImage: `url(${StatusLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',

      [theme.breakpoints.down('xs')]: {
        bottom: 0,
        left: 0
      }
    }
  },
  icon4: {
    position: 'relative',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '12px',
      height: '12px',
      bottom: '3px',
      left: '22px',
      backgroundImage: `url(${TimeLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '12px',
      backgroundPosition: 'center',

      [theme.breakpoints.down('xs')]: {
        bottom: 0,
        left: 0
      }
    }
  },
  col1: {
    width: '48%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('md')]: {
      flexBasis: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '30px'
    }
  },
  col2: {
    width: '15%',
    paddingLeft: '40px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('md')]: {
      flexBasis: '30%'
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '32%',
      paddingLeft: '30px'
    }
  },
  col3: {
    width: '12%',
    paddingLeft: '35px',

    [theme.breakpoints.down('md')]: {
      flexBasis: '30%'
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '26%',
      paddingLeft: '30px'
    }
  },
  col4: {
    width: '23%',

    [theme.breakpoints.down('md')]: {
      flexBasis: '40%'
    }
  },
  tableWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'scroll',
    overflowX: 'hidden',

    '&:focus': {
      outline: 'none'
    }
  },
  tableContentWrap: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',

    [theme.breakpoints.down('md')]: {
      paddingRight: '5px'
    }
  },
  wrTableBtns: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '31px',
    boxSizing: 'border-box',
    marginTop: '18px'
  },
  moreButton: {
    padding: '9px 40px 9px 30px',
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    border: 'none',
    cursor: 'pointer',

    '&:first-child': {
      borderRadius: '20px 0 0 20px'
    },
    '&:last-child': {
      borderRadius: '0 20px 20px 0'
    },
    '&:focus': {
      outline: 'none'
    }
  }
})
