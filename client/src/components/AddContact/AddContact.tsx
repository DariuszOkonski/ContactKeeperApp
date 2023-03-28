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
        name={configText.input.name.name}
        type={configText.input.type.text}
      />
      <Input
        labelText={configText.input.labelText.email}
        name={configText.input.name.email}
        type={configText.input.type.email}
      />
      <Input
        labelText={configText.input.labelText.phone}
        name={configText.input.name.phone}
        type={configText.input.type.text}
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
