import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { UserEdit } from '../components';
import { settingStyles } from './styles';

const Settings = () => {
  const classes = settingStyles();
  return (
    <Container fixed>
      <Grid container justify='center' className={classes.root}>
        <Grid item sm={5}>
          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            className={classes.title}
          >
            Settings
          </Typography>
          <UserEdit />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;
