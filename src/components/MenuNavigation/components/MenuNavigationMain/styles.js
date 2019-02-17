export default theme => ({
  root: {
    position: 'absolute',
    left: 0,
    top: '80px',
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    width: '177px',
    height: '545px',
    backgroundColor: '#282828',
    margin: 0,
    padding: 0,
    paddingTop: '20px',
    borderBottomRightRadius: '25px',
    boxSizing: 'border-box',

    '& li': {
      height: '45px',
      margin: 0,
      padding: 0,
      marginTop: '5px',
      backgroundColor: '#2c2c2c'
    },

    '&.dark': {
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: 'rgba(0,0,0, 0.71)',

      '& li': {
        '& a': {
          color: '#fff'
        }
      },

      [theme.breakpoints.down('md')]: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '500px',
        height: '112px',
        margin: 0,
        padding: '0 0 10px 0',
        borderBottomRightRadius: '25px',
        borderBottomLeftRadius: '25px',
        backgroundColor: 'rgba(0,0,0,0.74)',
        order: 2
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        margin: 0
      }
    },

    [theme.breakpoints.down('md')]: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '500px',
      height: '80px',
      margin: 0,
      padding: '0 0 10px 0',
      borderBottomRightRadius: '25px',
      borderBottomLeftRadius: '25px',
      order: 2
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      margin: 0
    }
  },
  headerMenuItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: '15px',
    textDecoration: 'none',
    color: '#3f99d8',
    fontSize: '13px',
    fontFamily: 'ubMedium',
    verticalAlign: 'bottom',
    textTransform: 'uppercase',

    '& svg path': {
      fill: '#3f99d8 !important'
    },

    '&:hover svg path': {
      fill: '#fff !important'
    },

    '&:hover, &:active': {
      color: '#fff',
      backgroundColor: '#3f99d8'
    },

    '&.active': {
      color: '#fff',
      backgroundColor: '#3f99d8'
    },

    '&.active svg path': {
      fill: '#fff !important'
    },

    [theme.breakpoints.down('md')]: {
      width: '40px'
    }
  },
  menuIcon: {
    display: 'block',
    height: '20px',
    width: '20px',
    marginRight: '15px',
    borderRadius: '5px'
  }
})
