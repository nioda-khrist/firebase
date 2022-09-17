import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLogged) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/unauthorized',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

const MapStateToProps = (state) => {
  return {
    isLogged: state.firebase.auth.isEmpty,
  };
};

export default connect(MapStateToProps)(ProtectedRoute);
