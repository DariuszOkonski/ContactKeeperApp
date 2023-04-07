import { useContext, useEffect, useState } from 'react';
import AccountTitle from '../../components/AccountTitle/AccountTitle';
import Button from '../../components/Button/Button';
import ErrorsList from '../../components/ErrorsList/ErrorsList';
import Input from '../../components/Input/Input';
import usePostRequest from '../../hooks/usePostRequest';
import configText from '../../utils/cofigText';
import { errorTimeOut } from '../../utils/constants';
import { endpoints, endpointsExpress } from '../../utils/endpoints';
import './Login.css';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showError, setShowError] = useState(false);
  const [dataError, setDataError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { data, loading, postRequest } = usePostRequest();
  const { loginUser, loginFailed } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (data && data.errors) {
      setErrors(data);
      loginFailed();
    }

    if (data && data.loggedUser && data.loggedUser.token) {
      loginUser(data.loggedUser);
      navigate(endpoints.contacts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  const onSubmit = async (e) => {
    e.preventDefault();

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
