import { useReducer } from 'react';
import { authReducer } from './authReducer';
import AuthContext from './authContext';
import configText from '../../utils/cofigText';

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
  const registerUser = (user) => {};
  // login user
  // logout
  // clear errors

  return (
    <AuthContext.Provider value={{ state }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStateProvider;
