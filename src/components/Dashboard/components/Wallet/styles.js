export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 25px 0 25px',
    width: '100%',
    boxSizing: 'border-box',

    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  wallet: {
    paddingTop: '30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      paddingBottom: '20px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      alignItems: 'center',
      paddingBottom: '20px',
      marginBottom: '20px'
    }
  },

  wrBalance: {},
  title: {
    fontSize: '30px',
    fontFamily: 'ubLight'
  },
  balance: {
    fontSize: '56px',
    fontFamily: 'ubBold'
  },
  addFunds: {
    marginTop: '10px',
    padding: '9px 30px',
    fontSize: '20px',
    fontFamily: 'ubBold',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '#f0f0f0',
    backgroundColor: '#5e7cff',
    borderRadius: '20px',
    cursor: 'pointer',

    '&.disabled': {
      opacity: '0.5',
      cursor: 'default'
    },

    '&:focus': {
      outline: 'none'
    }
  },
  wrChooseCurrency: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    width: '312px'
  },
  chooseCurrency: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    width: '150px',
    height: '33px',
    fontSize: '15px',
    fontFamily: 'ubBold',
    border: '3px solid #363636',
    borderRadius: '20px',
    cursor: 'pointer'
  }
})
