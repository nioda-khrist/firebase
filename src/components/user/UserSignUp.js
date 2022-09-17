import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import FormikControl from '../forms/FormikControl';
import * as Yup from 'yup';
import { userSignup } from '../../redux';
import { connect } from 'react-redux';
import { SignUpStyle } from './styles';

const UserSignUp = ({ userSignup, loading, error }) => {
  const [popUp, setPopUp] = useState(false);
  const ShowPopup = () => {
    setPopUp((prevPopUp) => !prevPopUp);
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Required'),
  });

  const onSubmit = (values) => {
    userSignup(values);
  };

  const classes = SignUpStyle();

  return (
    <React.Fragment>
      <Button
        variant='text'
        onClick={ShowPopup}
        className={classes.btn}
        fullWidth
      >
        SIGN UP
      </Button>
      <Dialog open={popUp} onClose={ShowPopup} maxWidth='sm' fullWidth>
        <DialogTitle className={classes.title}>Sign Up</DialogTitle>
        <DialogContent classes={{ root: classes.content }}>
          <DialogContentText>
            Etiam posuere urna ac dictum efficitur. Phasellus egestas tellus
            arcu, pretium porta orci ultricies sed.
          </DialogContentText>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className={classes.form}>
                  <FormikControl
                    control='input'
                    type='email'
                    name='email'
                    label='Email Address'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <FormikControl
                    control='input'
                    type='password'
                    name='password'
                    label='Password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <FormikControl
                    control='input'
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {error && (
                    <Typography variant='subtitle2' className={classes.error}>
                      {error}
                    </Typography>
                  )}
                  <div className={classes.btnContainer}>
                    <Button
                      onClick={ShowPopup}
                      color='primary'
                      variant='outlined'
                    >
                      Cancel
                    </Button>
                    <Button type='submit' color='primary' variant='contained'>
                      Register
                    </Button>
                  </div>
                  <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color='inherit' />
                  </Backdrop>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.signupError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignup: (data) => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);
