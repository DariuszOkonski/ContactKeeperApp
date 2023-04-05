import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
} from '../types';

export const contactReducer = (state, action) => {
  // console.log('=== reducer ===');
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) return action.payload;
          return contact;
        }),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: state.contacts.filter(
          (contact) => contact.id === action.payload
        )[0],
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
