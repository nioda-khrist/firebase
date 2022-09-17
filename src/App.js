import React from 'react';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './config/fbConfig';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute, Unauthorized } from './components';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Products from './pages/Products';

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3bad96',
      contrastText: '#fff',
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}>
          <main>
            <CssBaseline />
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <ProtectedRoute path='/settings' component={Settings} />
                <Route path='/products' component={Products} />
                <Route path='*' component={Unauthorized} />
              </Switch>
            </Router>
          </main>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
