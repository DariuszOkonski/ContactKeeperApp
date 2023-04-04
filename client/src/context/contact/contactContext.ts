import { createContext } from 'react';
import { initialState } from './contactState';

const ContactContext = createContext(initialState);

export default ContactContext;
