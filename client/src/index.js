import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContactStateProvider from './context/contact/contactState';
import AuthStateProvider from './context/auth/authState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactStateProvider>
      <AuthStateProvider>
        <App />
      </AuthStateProvider>
    </ContactStateProvider>
  </React.StrictMode>
);
