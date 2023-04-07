import { useReducer } from 'react';
import { authReducer } from './authReducer';
import AuthContext from './authContext';
import configText from '../../utils/cofigText';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../types';

export const initialState = {
  token: localStorage.getItem(configText.auth.token),
  isAuthenticated: null,
  user: null,
};

const AuthStateProvider = (props) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const registerUser = (token) => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: token,
    });
  };

  const registerFailed = () => {
    dispatch({
      type: REGISTER_FAIL,
    });
  };
  const loginUser = (loggedUser) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loggedUser,
    });
  };

  const loginFailed = () => {
    dispatch({
      type: LOGIN_FAIL,
    });
  };

  const logoutUser = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        registerUser,
        registerFailed,
        loginUser,
        loginFailed,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStateProvider;
