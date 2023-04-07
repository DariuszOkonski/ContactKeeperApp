import configText from '../../utils/cofigText';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../types';

export const authReducer = (state, action) => {
  switch (action.type) {
    // case REGISTER_SUCCESS:
    //   localStorage.setItem(configText.auth.token, action.payload);
    //   return {
    //     ...state,
    //     token: action.payload,
    //     isAuthenticated: true,
    //     // user: null,
    //   };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem(configText.auth.token);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem(configText.auth.token, action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        user: {
          date: action.payload.date,
          email: action.payload.email,
          name: action.payload.name,
        },
      };
    default:
      return state;
  }
};
