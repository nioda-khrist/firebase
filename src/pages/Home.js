import React from 'react';
import { UserLogin, UserData, UserSignUp } from '../components';
import { connect } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { signinStyles, userStyles } from './styles';

const Home = ({ isLogged }) => {
  return !isLogged ? <HaveUser /> : <NoUser />;
};

const HaveUser = () => {
  const classes = userStyles();
  return (
    <React.Fragment>
      <div className={classes.userHeader}></div>
      <Container fixed component='section'>
        <Grid container justify='center'>
          <Grid item sm={6}>
            <UserData />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const NoUser = () => {
  const classes = signinStyles();
  return (
    <Container fixed component='section'>
      <Grid container justify='center' className={classes.root}>
        <Grid item sm={3} className={classes.leftContainer}>
          <div>
            <Typography variant='h4' component='h2' gutterBottom>
              Welcome Back!
            </Typography>
            <Typography variant='subtitle1' component='p' gutterBottom>
              No Account? Sign Up now and start your journey with us
            </Typography>
            <UserSignUp />
          </div>
        </Grid>
        <Grid item sm={6} className={classes.rightContainer}>
          <div>
            <Typography variant='h4' component='h1' gutterBottom>
              Sign In
            </Typography>
            <Typography variant='body2' component='p' gutterBottom>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </Typography>
            <UserLogin />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.firebase.auth.isEmpty,
  };
};

export default connect(mapStateToProps)(Home);
