import AddContact from '../../components/AddContact/AddContact';
import ContactType from '../../components/ContactType/ContactType';
import './Contacts.css';

function Contacts() {
  return (
    <div className='contacts'>
      <div className='contacts__left-column'>
        <AddContact />
      </div>
      <div className='contacts__right-column'>
        <ContactType />
      </div>
    </div>
  );
}

export default Contacts;
