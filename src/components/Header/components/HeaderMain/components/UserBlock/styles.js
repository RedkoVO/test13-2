import LogoutLogo from '../../../../../../assets/images/logout.png'

export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 0 15px 0',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',

    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      marginLeft: 0
    }
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      width: '500px',
      paddingTop: '20px',
      height: '92px',
      paddingBottom: '20px',
      backgroundColor: '#f5f5f5'
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      margin: 0
    }
  },
  userBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  userHello: {
    margin: 0,
    textAlign: 'center',
    fontFamily: 'ubLight',
    fontSize: '17px',
    fontWeight: 100
  },
  helloTitle: {
    marginBottom: '10px'
  },
  userVerification: {
    display: 'block',
    fontFamily: 'ubBold',
    fontSize: '10px',
    fontWeight: '500',
    color: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  },
  userPhoto: {
    height: '50px',
    width: '50px',
    display: 'block',
    borderRadius: '50%',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.1)',
    margin: '0 15px',

    '& img': {
      height: '100%',
      width: '100%',
      borderRadius: '50%'
    }
  },
  wrLogout: {
    marginRight: '10px',
    cursor: 'pointer'
  },
  menuIcon: {
    display: 'block',
    minHeight: '35px',
    width: '35px',
    borderRadius: '5px'
  },
  logout: {
    backgroundImage: `url(${LogoutLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '17px 17px',
    backgroundPosition: 'center'
  },
  wrBalance: {
    marginRight: '50px'
  },
  balance: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontFamily: 'ubLight',
    fontSize: '17px',
    fontWeight: 100,

    '& img': {
      marginRight: '5px',
      width: '18px',
      height: '18px',
      borderRadius: '100%'
    }
  },
  title: {
    fontFamily: 'ubBold',
    fontSize: '10px',
    fontWeight: 900,
    textTransform: 'uppercase'
  }
})
