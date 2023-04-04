import React, { useReducer } from 'react';
import { contactReducer } from './contactReducer';
import { ADD_CONTACT } from '../types';
import { InitialState } from '../../interfaces/general';
import ContactContext from './contactContext';

interface ContactStateProps {
  children: React.ReactNode;
}

export const initialState: InitialState = {
  contacts: [
    {
      id: 1,
      name: 'Jill Johnson',
      email: 'jill@gmail.com',
      phone: '111-111-111',
      type: 'personal',
    },
    {
      id: 2,
      name: 'Sara Watson',
      email: 'sara@gmail.com',
      phone: '222-222-222',
      type: 'personal',
    },
    {
      id: 3,
      name: 'Harry White',
      email: 'harry@gmail.com',
      phone: '333-333-333',
      type: 'professional',
    },
  ],
};

const ContactStateProvider = (props: ContactStateProps) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={state}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactStateProvider;
