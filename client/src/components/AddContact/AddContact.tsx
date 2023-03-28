import configText from '../../utils/cofigText';
import AccountTitle from '../AccountTitle/AccountTitle';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './AddContact.css';

const AddContact = () => {
  return (
    <div className='add-contact'>
      <AccountTitle
        prefix={configText.addContact.prefix}
        postfix={configText.addContact.postfix}
      />

      <Input
        labelText={configText.input.labelText.name}
        name='name'
        type='text'
      />
      <Input
        labelText={configText.input.labelText.email}
        name='name'
        type='text'
      />
      <Input
        labelText={configText.input.labelText.phone}
        name='name'
        type='text'
      />

      <Button
        clsName='btn btn-primary btn-wide mtb-small'
        text={configText.buttons.addContact}
      />

      <Button clsName='btn btn-dark btn-wide' text={configText.buttons.clear} />
    </div>
  );
};

export default AddContact;
