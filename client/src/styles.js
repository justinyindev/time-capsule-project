import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  headingDiv: {
    borderRadius: 25,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Readex Pro',
    color: '#fff',
    margin: 10,
    fontWeight: 500,
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mobile: {
      flexDirection: 'column-reverse'
    }
  }  
}));
