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

const initialValues = {
  loading: false,
  updateSuccess: false,
  updateError: '',
  signupError: '',
  signinError: '',
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case EDIT_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        updateError: action.payload,
        signupError: '',
        signinError: '',
        updateSuccess: false,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        updateError: '',
        signupError: '',
        signinError: '',
        updateSuccess: true,
      };
    case EDIT_USER_CLEANUP:
      return {
        ...state,
        loading: false,
        updateError: '',
        signupError: '',
        signinError: '',
        updateSuccess: false,
      };
    case USER_LOGOUT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateError: '',
        signupError: '',
        signinError: '',
        updateSuccess: false,
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        updateError: action.payload,
        signupError: '',
        signinError: '',
        updateSuccess: false,
      };
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        updateError: '',
        signupError: '',
        signinError: '',
        updateSuccess: false,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        updateError: '',
        signupError: '',
        signinError: action.payload,
        updateSuccess: false,
      };
    case USER_SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        updateError: '',
        signupError: '',
        signinError: '',
        updateSuccess: false,
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        updateError: '',
        signupError: action.payload,
        signinError: '',
        updateSuccess: false,
      };
    default:
      return state;
  }
};

export default userReducer;
