import { useContext, useState, useEffect } from 'react';
import configText from '../../utils/cofigText';
import Card from '../Card/Card';
import Input from '../Input/Input';
import './ContactType.css';
import ContactContext from '../../context/contact/contactContext';
import NoElement from '../NoElement/NoElement';

function ContactType() {
  const [find, setFind] = useState('');
  const [foundContacts, setFoundContacts] = useState([]);

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

  const onDelete = (id) => {
    deleteContact(id);
    clearCurrentContact();
    clearInput();
  };

  const onEdit = (id) => {
    setCurrentContact(id);
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
