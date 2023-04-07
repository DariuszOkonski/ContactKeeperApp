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
import AuthContext from '../../context/auth/authContext';

const AddContact = () => {
  const [showError, setShowError] = useState(false);
  const [dataError, setDataError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState(configText.select.options.professional);

  const {
    addContact,
    contactState,
    clearCurrentContact,
    updateCurrentContact,
    addAllContacts,
  } = useContext(ContactContext);
  const { authState } = useContext(AuthContext);

  const { data, loading, postRequest } = usePostRequest();

  useEffect(() => {
    if (authState.token) {
      getAllContacts(authState.token);
    }
  }, [data]);

  const getAllContacts = async (token) => {
    let allUsers = await getAllUsers(endpointsExpress.contacts, token);

    addAllContacts(allUsers);
  };

  useEffect(() => {
    if (data && data.errors) {
      setErrors(data);
    }

    if (contactState.current) {
      setName(contactState.current.name);
      setEmail(contactState.current.email);
      setPhone(contactState.current.phone);
      setType(contactState.current.type);
    } else {
      clearState();
    }
  }, [data, loading, contactState]);

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

    const body = {
      name,
      email,
      phone,
      type,
    };

    let token = null;
    if (authState && authState.token) {
      token = authState.token;
    }

    await postRequest(endpointsExpress.contacts, body, token);

    if (data && !data.errors) {
      addContact(body);
      clearState();
    }
  };

  const getAllUsers = async (url, token) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          origin: '*',
          [configText.auth.token]: token,
        },
      });

      if (!response.ok) {
        throw Error();
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const onClear = (e) => {
    e.preventDefault();
    clearCurrentContact();
    clearState();
  };

  const onEdit = (e) => {
    e.preventDefault();
    // console.log('onEdit: ');

    const body = {
      id: contactState.current.id,
      name,
      email,
      phone,
      type,
    };

    // console.log(body);
    updateCurrentContact(body);
    clearCurrentContact();
    clearState();
  };

  return (
    <div className='add-contact'>
      {showError && <ErrorsList errors={dataError?.errors} />}
      <AccountTitle
        prefix={
          !contactState.current
            ? configText.addContact.prefixAdd
            : configText.addContact.prefixEdit
        }
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

      {!contactState.current ? (
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

      {contactState.current && (
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
