import TitleLogo from '../../../../assets/images/marketplace-icon.png'

export default () => ({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    marginBottom: '30px',
    flexDirection: 'column',
    paddingTop: '60px'
  },
  title: {
    color: '#5e7cff',
    position: 'relative',
    fontSize: '29px',
    textAlign: 'center',
    fontWeight: 700,
    marginBottom: '40px',

    '&::before': {
      position: 'absolute',
      content: `""`,
      width: '20px',
      height: '20px',
      bottom: '6px',
      left: '-25px',
      backgroundImage: `url(${TitleLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '20px',
      backgroundPosition: 'center'
    }
  },
  wrProducts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  propduct: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '42px',
    width: '357px',

    '& img': {
      marginTop: '12px',
      width: '172px',
      height: '138px'
    }
  },
  wrDescription: {
    width: '170px'
  },
  productTitle: {
    color: '#282828',
    fontSize: '18px',
    fontFamily: 'ubMedium'
  },
  duscription: {
    padding: '5px 0 15px 5px',
    fontSize: '10px',
    fontFamily: 'ubMedium'
  },
  oldPrice: {
    position: 'relative',
    paddingLeft: '5px',
    fontSize: '15px',
    fontFamily: 'ubMedium'
  },
  crossOut: {
    position: 'absolute',
    top: '7px',
    left: '2px',
    height: '3px',
    width: '78px',
    backgroundColor: '#ff5f5f',
    opacity: 0.7
  },
  sale: {
    position: 'absolute',
    left: '78px',
    top: '-3px',
    fontSize: '11px',
    fontFamily: 'ubBold'
  },
  price: {
    padding: '3px 0 8px 20px',
    fontSize: '18px',
    fontFamily: 'ubBold'
  },
  button: {
    padding: '5px 50px',
    color: '#5f7cff',
    border: 'none',
    backgroundColor: '#f0f0f0',
    boxShadow: '0px 0px 16px 1px rgba(0,0,0,0.1)',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    fontFamily: 'ubBold',

    '&:focus': {
      outline: 'none'
    }
  }
})
