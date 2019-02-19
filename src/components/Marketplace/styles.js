export default theme => ({
  root: {},
  slider: {},
  sliderImage: {
    width: '100%'
  },
  dots: {
    display: 'block',
    width: '60px',
    margin: '0 auto',
    marginTop: '15px'
  },
  wrBreadcrumb: {
    fontSize: '15px',
    fontFamily: 'ubMedium',

    '& span': {
      color: '#8c8c8c'
    }
  },
  wrCheckbox: {},
  wrTopPart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '25px',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#323232'
      }
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  iOSIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#48a3dd'
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1]
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none'
    }
  },
  wrProducts: {
    '& img': {
      width: '700px',
      margin: '0 auto',
      display: 'block',
      marginTop: '20px',
      marginBottom: '100px'
    }
  }
})
