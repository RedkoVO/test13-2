import TitleLogo from '../../../../assets/images/loyalty-icon.png'

export default theme => ({
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
  transactionsTable: {
    width: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '11px',

    [theme.breakpoints.down('sm')]: {
      height: '165px'
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
  tableData: {
    paddingLeft: '40px',
    fontSize: '14px',
    fontWeight: 400,
    boxSizing: 'border-box',
    width: '15%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

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
  showMore: {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
})
