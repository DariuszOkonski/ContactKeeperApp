import { useReducer } from 'react';
import { authReducer } from './authReducer';
import AuthContext from './authContext';
import configText from '../../utils/cofigText';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../types';
import useGetRequest from '../../hooks/useGetRequest';

export const initialState = {
  token: localStorage.getItem(configText.auth.token),
  isAuthenticated: null,
  user: null,
  // loading: true,
  // error: null,
};

const AuthStateProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user
  // register user
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
  // login user
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

  // logout
  // clear errors

  return (
    <AuthContext.Provider
      value={{ state, registerUser, registerFailed, loginUser, loginFailed }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStateProvider;
