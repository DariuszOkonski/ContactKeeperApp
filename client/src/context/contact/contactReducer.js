import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  ADD_ALL_CONTACTS,
} from '../types';

export const contactReducer = (state, action) => {
  // console.log('=== reducer ===');
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case ADD_ALL_CONTACTS:
      return {
        ...state,
        contacts: [...action.payload.contacts],
        filtered: [...action.payload.contacts],
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        filtered: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        filtered: state.filtered.filter(
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
        filtered: state.filtered.map((contact) => {
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
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
