import { useReducer } from 'react';
import { contactReducer } from './contactReducer';
import ContactContext from './contactContext';
import { v4 } from 'uuid';
import {
  ADD_ALL_CONTACTS,
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
} from '../types';

export const initialState = {
  contacts: [],
  current: null,
  filtered: null,
};

const ContactStateProvider = (props) => {
  const [contactState, dispatch] = useReducer(contactReducer, initialState);

  const addAllContacts = (contacts) => {
    dispatch({
      type: ADD_ALL_CONTACTS,
      payload: contacts,
    });
  };

  const addContact = (contact) => {
    contact.id = v4();

    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  const setCurrentContact = (id) => {
    dispatch({
      type: SET_CURRENT,
      payload: id,
    });
  };

  const clearCurrentContact = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const updateCurrentContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACT,
      payload: text,
    });
  };

  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contactState,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        updateCurrentContact,
        filterContacts,
        clearFilter,
        addAllContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactStateProvider;
