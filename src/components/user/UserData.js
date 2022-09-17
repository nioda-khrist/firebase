import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux';
import { userStyle } from './styles';

const UserData = ({ userLogout, displayName, photoURL, email }) => {
  const classes = userStyle();
  return (
    <div className={classes.root}>
      <img
        src={photoURL ? photoURL : 'https://via.placeholder.com/150x150'}
        alt='User Profile'
        className={classes.media}
      />
      <Typography variant='h6' component='h2' gutterBottom>
        {displayName}
      </Typography>
      <Typography
        variant='body2'
        component='p'
        gutterBottom
        className={classes.data}
      >
        <span>Email:</span> {email}
      </Typography>
      <div className={classes.btnContainer}>
        <Button
          variant='contained'
          color='primary'
          to='/settings'
          component={Link}
        >
          Edit
        </Button>
        <Button onClick={() => userLogout()} variant='outlined' color='primary'>
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(userLogout()),
  };
};

const mapStateToProps = (state) => {
  return {
    displayName: state.firebase.auth.displayName,
    photoURL: state.firebase.auth.photoURL,
    email: state.firebase.auth.email,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
