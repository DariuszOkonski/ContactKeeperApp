import { useReducer } from 'react';
import { contactReducer } from './contactReducer';
import ContactContext from './contactContext';
import { v4 } from 'uuid';
import { ADD_CONTACT, DELETE_CONTACT } from '../types';

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
  ],
  editId: null,
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

  return (
    <ContactContext.Provider value={{ state, addContact, deleteContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactStateProvider;
