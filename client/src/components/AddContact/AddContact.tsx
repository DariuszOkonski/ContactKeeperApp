import { useEffect, useState } from 'react';
import configText from '../../utils/cofigText';
import AccountTitle from '../AccountTitle/AccountTitle';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './AddContact.css';
import { ErrorMessage } from '../../interfaces/general';
import ErrorsList from '../ErrorsList/ErrorsList';
import usePostRequest from '../../hooks/usePostRequest';
import { errorTimeOut } from '../../utils/constants';
import { endpointsExpress } from '../../utils/endpoints';
import Select from '../Select/Select';

const AddContact = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const [dataError, setDataError] = useState<ErrorMessage | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [type, setType] = useState<string>(
    configText.select.options.professional
  );

  const { data, loading, postRequest } = usePostRequest();

  useEffect(() => {
    if (data && data.errors) {
      setErrors(data);
    }
  }, [data, loading]);

  const setErrors = (errors: ErrorMessage) => {
    setDataError(errors);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setDataError(null);
    }, errorTimeOut);
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(endpointsExpress.contacts);
  };

  const onClear = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('onClear');
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Input
        labelText={configText.input.labelText.email}
        name={configText.input.name.email}
        type={configText.input.type.email}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <Input
        labelText={configText.input.labelText.phone}
        name={configText.input.name.phone}
        type={configText.input.type.text}
        value={phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPhone(e.target.value)
        }
      />

      <Select
        labelText={configText.select.labelText.type}
        name={configText.select.name.select}
        value={type}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setType(e.target.value)
        }
      />

      <Button
        clsName='btn btn-primary btn-wide mtb-small'
        text={configText.buttons.addContact}
        onClick={onSubmit}
      />

      <Button
        clsName='btn btn-dark btn-wide'
        text={configText.buttons.clear}
        onClick={onClear}
      />
    </div>
  );
};

export default AddContact;
