import { useContext } from 'react';
import configText from '../../utils/cofigText';
import Card from '../Card/Card';
import Input from '../Input/Input';
import './ContactType.css';
import ContactContext from '../../context/contact/contactContext';
import NoElement from '../NoElement/NoElement';

function ContactType() {
  const { state, deleteContact } = useContext(ContactContext);

  console.log(state);

  const onDelete = (id) => {
    deleteContact(id);
  };

  const onEdit = (id) => {
    console.log('editContact: ', id);
  };

  return (
    <div className='contact-type'>
      <Input
        labelText={configText.input.labelText.filterContexts}
        name={configText.input.name.filterContacts}
        type={configText.input.type.text}
      />

      {state.contacts.length === 0 && (
        <NoElement text={configText.NoElement.text} />
      )}

      {state.contacts.length > 0 &&
        state.contacts.map((card) => (
          <Card key={card.id} {...card} onDelete={onDelete} onEdit={onEdit} />
        ))}
    </div>
  );
}

export default ContactType;
