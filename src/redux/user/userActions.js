import {
  EDIT_USER_SUCCESS,
  EDIT_USER_LOADING,
  EDIT_USER_FAILURE,
  EDIT_USER_CLEANUP,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_LOADING,
  USER_LOGOUT_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOADING,
  USER_LOGIN_FAILURE,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_LOADING,
} from './userTypes';

export const editUserLoading = () => {
  return {
    type: EDIT_USER_LOADING,
  };
};

export const editUserSuccess = () => {
  return {
    type: EDIT_USER_SUCCESS,
  };
};

export const editUserFailure = (error) => {
  return {
    type: EDIT_USER_FAILURE,
    payload: error,
  };
};

export const editUser = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(editUserLoading());
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        photoURL: data.photoURL,
        displayName: data.displayName,
      })
      .then(() => {
        dispatch(editUserSuccess());
        /* generate new token to update after https://stackoverflow.com/questions/61937587/how-to-get-valid-token-from-react-firebase-f%C3%BCr-nodesjs-server-verification */
      })
      .catch((error) => {
        dispatch(editUserFailure(error.message));
      });
  };
};

export const userLogoutLoading = () => {
  return {
    type: USER_LOGOUT_LOADING,
  };
};

export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

export const userLogoutFailure = (error) => {
  return {
    type: USER_LOGOUT_FAILURE,
    payload: error,
  };
};

export const userLogout = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(userLogoutLoading());
    const firestore = getFirebase();
    firestore
      .auth()
      .signOut()
      .then(() => {
        dispatch(userLogoutSuccess());
      })
      .catch((error) => {
        dispatch(userLogoutFailure(error.message));
      });
  };
};

export const userLoginLoading = () => {
  return {
    type: USER_LOGIN_LOADING,
  };
};

export const userLoginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS,
  };
};

export const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};

export const userLogin = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(userLoginLoading());
    const firestore = getFirebase();
    firestore
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        dispatch(userLoginSuccess());
      })
      .catch((error) => {
        dispatch(userLoginFailure('Invalid Email or Password'));
      });
  };
};

export const userSignupLoading = () => {
  return {
    type: USER_SIGNUP_LOADING,
  };
};

export const userSignupSuccess = () => {
  return {
    type: USER_SIGNUP_SUCCESS,
  };
};

export const userSignupFailure = (error) => {
  return {
    type: USER_SIGNUP_FAILURE,
    payload: error,
  };
};

export const userSignup = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase();
    dispatch(userSignupLoading());
    firestore
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        dispatch(userSignupSuccess());
      })
      .catch((error) => {
        dispatch(userSignupFailure(error.message));
      });
  };
};

export const editUserCleanUp = () => {
  return {
    type: EDIT_USER_CLEANUP,
  };
};

export const userCleanUp = () => {
  return (dispatch) => {
    dispatch(editUserCleanUp());
  };
};
