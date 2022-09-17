import { TextField } from '@material-ui/core';
import { ErrorMessage } from 'formik';
import React from 'react';
import TextError from './TextError';

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <TextField
        fullWidth
        variant='outlined'
        label={label}
        name={name}
        {...rest}
        id={name}
        margin='dense'
        size='small'
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
