import { useContext, useEffect, useState } from 'react';
import configText from '../../utils/cofigText';
import AccountTitle from '../AccountTitle/AccountTitle';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './AddContact.css';
import ErrorsList from '../ErrorsList/ErrorsList';
import usePostRequest from '../../hooks/usePostRequest';
import { errorTimeOut } from '../../utils/constants';
import { endpointsExpress } from '../../utils/endpoints';
import Select from '../Select/Select';
import ContactContext from '../../context/contact/contactContext';

const AddContact = () => {
  const [showError, setShowError] = useState(false);
  const [dataError, setDataError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState(configText.select.options.professional);

  const { addContact, state, clearCurrentContact, updateCurrentContact } =
    useContext(ContactContext);

  const { data, loading, postRequest } = usePostRequest();

  useEffect(() => {
    console.log('addContact: ', data);
    if (data && data.errors) {
      setErrors(data);
    }

    if (state.current) {
      setName(state.current.name);
      setEmail(state.current.email);
      setPhone(state.current.phone);
      setType(state.current.type);
    } else {
      clearState();
    }
  }, [data, loading, state]);

  const setErrors = (errors) => {
    setDataError(errors);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setDataError(null);
    }, errorTimeOut);
  };

  const clearState = () => {
    setName('');
    setEmail('');
    setPhone('');
    setType(configText.select.options.professional);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(endpointsExpress.contacts);

    const body = {
      name,
      email,
      phone,
      type,
    };
    await postRequest(endpointsExpress.contacts, body);

    if (data && !data.errors) {
      console.log('Add Contact ==========');
      addContact(body);
      clearState();
    }
  };

  const onClear = (e) => {
    e.preventDefault();
    clearCurrentContact();
    clearState();
  };

  const onEdit = (e) => {
    e.preventDefault();
    console.log('onEdit: ');

    const body = {
      id: state.current.id,
      name,
      email,
      phone,
      type,
    };

    console.log(body);
    updateCurrentContact(body);
    clearCurrentContact();
    clearState();
  };

  return (
    <div className='add-contact'>
      {showError && <ErrorsList errors={dataError?.errors} />}
      <AccountTitle
        prefix={configText.addContact.prefix}
        postfix={configText.addContact.postfix}
      />

      <Input
        labelText={configText.input.labelText.name}
        name={configText.input.name.name}
        type={configText.input.type.text}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        labelText={configText.input.labelText.email}
        name={configText.input.name.email}
        type={configText.input.type.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        labelText={configText.input.labelText.phone}
        name={configText.input.name.phone}
        type={configText.input.type.text}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Select
        labelText={configText.select.labelText.type}
        name={configText.select.name.select}
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      {!state.current ? (
        <Button
          clsName='btn btn-primary btn-wide mtb-small'
          text={configText.buttons.addContact}
          onClick={onSubmit}
        />
      ) : (
        <Button
          clsName='btn btn-success btn-wide mtb-small'
          text={configText.buttons.edit}
          onClick={onEdit}
        />
      )}

      {state.current && (
        <Button
          clsName='btn btn-dark btn-wide'
          text={configText.buttons.clear}
          onClick={onClear}
        />
      )}
    </div>
  );
};

export default AddContact;
