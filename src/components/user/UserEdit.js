import {
  Backdrop,
  Button,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import FormikControl from '../forms/FormikControl';
import { connect } from 'react-redux';
import { editUser, userCleanUp } from '../../redux';
import { Link } from 'react-router-dom';
import { editStyles } from './styles';

const UserEdit = ({
  displayName,
  photoURL,
  email,
  editUser,
  loading,
  error,
  updateSuccess,
  userCleanUp,
}) => {
  const initialValues = {
    photoURL: photoURL ?? '',
    displayName: displayName ?? '',
    email: email ?? '',
  };

  const validationSchema = Yup.object({
    photoURL: Yup.string(),
    displayName: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Not Valid Email'),
  });

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    editUser(values);
  };

  const classes = editStyles();

  useEffect(() => {
    return () => {
      if (updateSuccess) {
        userCleanUp();
      }
    };
  }, [updateSuccess, userCleanUp]);

  return (
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
              label='Photo URL'
              name='photoURL'
              onChange={formik.handleChange}
              value={formik.values.photoURL}
            />
            <FormikControl
              control='input'
              label='Name'
              name='displayName'
              onChange={formik.handleChange}
              value={formik.values.displayName}
            />
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {updateSuccess && (
              <Typography variant='subtitle2' className={classes.success}>
                Update Successful
              </Typography>
            )}
            {error && (
              <Typography variant='subtitle2' className={classes.error}>
                {error}
              </Typography>
            )}
            <div className={classes.btnContainer}>
              <Button type='submit' variant='contained' color='primary'>
                Update Profile
              </Button>
              <Button
                to='/'
                component={Link}
                variant='outlined'
                color='primary'
              >
                Back To Profile
              </Button>
            </div>
            <Backdrop className={classes.backdrop} open={loading}>
              <CircularProgress color='inherit' />
            </Backdrop>
          </Form>
        );
      }}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (data) => dispatch(editUser(data)),
    userCleanUp: () => dispatch(userCleanUp()),
  };
};

const mapStateToProps = (state) => {
  return {
    displayName: state.firebase.auth.displayName,
    photoURL: state.firebase.auth.photoURL,
    email: state.firebase.auth.email,
    loading: state.user.loading,
    error: state.user.updateError,
    updateSuccess: state.user.updateSuccess,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
