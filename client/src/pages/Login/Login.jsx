import { useEffect, useState } from 'react';
import AccountTitle from '../../components/AccountTitle/AccountTitle';
import Button from '../../components/Button/Button';
import ErrorsList from '../../components/ErrorsList/ErrorsList';
import Input from '../../components/Input/Input';
import usePostRequest from '../../hooks/usePostRequest';
import configText from '../../utils/cofigText';
import { errorTimeOut } from '../../utils/constants';
import { endpointsExpress } from '../../utils/endpoints';
import './Login.css';

function Login() {
  const [showError, setShowError] = useState(false);
  const [dataError, setDataError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { data, loading, postRequest } = usePostRequest();

  useEffect(() => {
    if (data && data.errors) {
      setErrors(data);
    }

    console.log('!!! login data: ', data);
  }, [data, loading]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(endpointsExpress.auth);

    const body = {
      email,
      password,
    };

    await postRequest(endpointsExpress.auth, body);
  };

  const setErrors = (errors) => {
    setDataError(errors);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setDataError(null);
    }, errorTimeOut);
  };

  return (
    <div className='login'>
      {showError && <ErrorsList errors={dataError?.errors} />}
      <AccountTitle
        prefix={configText.accountLogin.prefix}
        postfix={configText.accountLogin.postfix}
      />
      <Input
        labelText={configText.input.labelText.email}
        name={configText.input.name.email}
        type={configText.input.type.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        labelText={configText.input.labelText.password}
        name={configText.input.name.password}
        type={configText.input.type.password}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        clsName='btn btn-primary btn-wide'
        text={configText.buttons.login}
        onClick={onSubmit}
      />
    </div>
  );
}

export default Login;
