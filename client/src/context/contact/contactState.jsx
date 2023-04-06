import { useReducer } from 'react';
import { contactReducer } from './contactReducer';
import ContactContext from './contactContext';
import { v4 } from 'uuid';
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
} from '../types';

export const initialState = {
  contacts: [
    {
      id: '1',
      name: 'Jill Johnson',
      email: 'jill@gmail.com',
      phone: '111-111-111',
      type: 'Personal',
    },
    {
      id: '2',
      name: 'Sara Watson',
      email: 'sara@gmail.com',
      phone: '222-222-222',
      type: 'Personal',
    },
    {
      id: '3',
      name: 'Harry White',
      email: 'harry@gmail.com',
      phone: '333-333-333',
      type: 'Professional',
    },
    {
      id: '4',
      name: 'Samuel L Jackson',
      email: 'samuel@gmail.com',
      phone: '335-355-333',
      type: 'Personal',
    },
  ],
  current: null,
  filtered: null,
};

const ContactStateProvider = (props) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

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
        state,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        updateCurrentContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactStateProvider;
