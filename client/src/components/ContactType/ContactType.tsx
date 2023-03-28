import configText from '../../utils/cofigText';
import Card from '../Card/Card';
import Input from '../Input/Input';
import './ContactType.css';

const contactsArray = [
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
    type: 'Professional',
  },
  {
    id: '3',
    name: 'Harry White',
    email: 'harry@gmail.com',
    phone: '333-333-333',
    type: 'Personal',
  },
  {
    id: '4',
    name: 'John Doe',
    email: 'john@gmail.com',
    phone: '444-444-444',
    type: 'Professional',
  },
];

function ContactType() {
  return (
    <div className='contact-type'>
      <Input
        labelText={configText.input.labelText.filterContexts}
        name={configText.input.name.filterContacts}
        type={configText.input.type.text}
      />

      {contactsArray.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default ContactType;
