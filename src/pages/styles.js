import { makeStyles } from '@material-ui/core';

export const userStyles = makeStyles((theme) => ({
  userHeader: {
    width: '100%',
    height: '200px',
    backgroundColor: '#3aaf9f',
  },
}));

export const signinStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    height: '500px',
  },
  leftContainer: {
    backgroundColor: '#3aaf9f',
    borderRadius: '10px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    color: '#fff',
    '& h2': {
      fontWeight: '600',
    },
    '& p': {
      fontWeight: '300',
    },
  },
  rightContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    padding: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '&>div': {
      maxWidth: '400px',
    },
    '& h1': {
      color: '#3bad96',
      fontWeight: '500',
    },
    '& p': {
      fontWeight: '300',
    },
  },
}));

export const settingStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },
  title: {
    color: '#3bad96',
    fontWeight: '500',
  },
}));
