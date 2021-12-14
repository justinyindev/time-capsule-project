import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  font: {
    color: 'white',
    fontWeight: 'bold',
    padding: 5
  },
  loading: {
    padding: 5,
    display: 'flex',
    color: 'white'
  },
  actionDiv: {
    textAlign: 'center',
  },
}));
