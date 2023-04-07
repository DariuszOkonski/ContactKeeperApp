import { useContext, useState, useEffect } from 'react';
import configText from '../../utils/cofigText';
import Card from '../Card/Card';
import Input from '../Input/Input';
import './ContactType.css';
import ContactContext from '../../context/contact/contactContext';
import NoElement from '../NoElement/NoElement';
import { endpointsExpress } from '../../utils/endpoints';
import AuthContext from '../../context/auth/authContext';

function ContactType() {
  const [find, setFind] = useState('');
  const [foundContacts, setFoundContacts] = useState([]);

  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const {
    contactState,
    deleteContact,
    setCurrentContact,
    clearCurrentContact,
    filterContacts,
  } = useContext(ContactContext);

  useEffect(() => {
    if (!contactState.filtered) {
      setFoundContacts(contactState.contacts);
    } else {
      setFoundContacts(contactState.filtered);
    }
  }, [contactState]);

  useEffect(() => {
    filterContacts(find);
  }, [find]);

  const onDelete = (_id) => {
    console.log('onDeleteToken: ', token);

    if (token) {
      deleteContact(_id);
      console.log('delete Contact: ', _id);
      console.log(endpointsExpress.deleteContact(_id));

      deleteRequest(endpointsExpress.deleteContact(_id), token);
      clearCurrentContact();
      clearInput();
    }
  };

  const deleteRequest = async (url, token) => {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          origin: '*',
          'Content-Type': 'application/json',
          [configText.auth.token]: token,
        },
      });

      const data = await response.json();
      console.log('DELETED');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onEdit = (_id) => {
    setCurrentContact(_id);
  };

  const clearInput = () => {
    setFind('');
  };

  return (
    <div className='contact-type'>
      <Input
        labelText={configText.input.labelText.filterContexts}
        name={configText.input.name.filterContacts}
        type={configText.input.type.text}
        value={find}
        onChange={(e) => setFind(e.target.value)}
      />

      {foundContacts.length === 0 && (
        <NoElement text={configText.NoElement.text} />
      )}

      {foundContacts &&
        foundContacts.length > 0 &&
        foundContacts.map((card) => (
          <Card key={card._id} {...card} onDelete={onDelete} onEdit={onEdit} />
        ))}
    </div>
  );
}

export default ContactType;
