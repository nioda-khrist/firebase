import {
  Backdrop,
  Button,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../forms/FormikControl';
import { connect } from 'react-redux';
import { userLogin } from '../../redux';
import { SignInStyle } from './styles';

const UserLogin = ({ userLogin, loading, error }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Not Valid Email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    userLogin(values);
  };

  const classes = SignInStyle();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='email'
                label='Email Address'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FormikControl
                control='input'
                type='password'
                label='Password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {error && (
                <Typography variant='subtitle2' className={classes.error}>
                  {error}
                </Typography>
              )}
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.btn}
              >
                SIGN IN
              </Button>
              <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color='inherit' />
              </Backdrop>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.signinError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(userLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
