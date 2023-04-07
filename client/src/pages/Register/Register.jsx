import { useContext, useEffect, useState } from 'react';
import AccountTitle from '../../components/AccountTitle/AccountTitle';
import Button from '../../components/Button/Button';
import ErrorsList from '../../components/ErrorsList/ErrorsList';
import Input from '../../components/Input/Input';
import usePostRequest from '../../hooks/usePostRequest';
import configText from '../../utils/cofigText';
import { errorTimeOut } from '../../utils/constants';
import { endpoints, endpointsExpress } from '../../utils/endpoints';
import './Register.css';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [showError, setShowError] = useState(false);
  const [dataError, setDataError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const { data, loading, postRequest } = usePostRequest();
  const { registerUser, registerFailed } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (data && data.errors) {
      setErrors(data);
      registerFailed();
    }

    console.log('!!! register data: ', data);
    if (data && data.loggedUser && data.loggedUser.token) {
      registerUser(data.loggedUser);
      // navigate(endpoints.contacts);
    }
  }, [data, loading]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length !== rePassword.length) {
      const errors = {
        errors: [{ msg: configText.errors.differentLenghts }],
      };
      setErrors(errors);
      return;
    }

    if (password !== rePassword) {
      const errors = {
        errors: [{ msg: configText.errors.different }],
      };
      setErrors(errors);
      return;
    }

    const body = {
      name,
      email,
      password,
    };

    await postRequest(endpointsExpress.users, body);
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
    <>
      <form className='register'>
        {showError && <ErrorsList errors={dataError?.errors} />}
        <AccountTitle
          prefix={configText.accountRegister.prefix}
          postfix={configText.accountRegister.postfix}
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
          labelText={configText.input.labelText.password}
          name={configText.input.name.password}
          type={configText.input.type.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          labelText={configText.input.labelText.confirmPassword}
          name={configText.input.name.rePassword}
          type={configText.input.type.password}
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <Button
          clsName='btn btn-primary btn-wide'
          text={configText.buttons.register}
          onClick={(e) => onSubmit(e)}
        />
      </form>
    </>
  );
}

export default Register;
