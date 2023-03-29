import { useEffect, useState } from 'react';
import AccountTitle from '../../components/AccountTitle/AccountTitle';
import Button from '../../components/Button/Button';
import ErrorsList from '../../components/ErrorsList/ErrorsList';
import Input from '../../components/Input/Input';
import usePostRequest from '../../hooks/usePostRequest';
import configText from '../../utils/cofigText';
import { errorTimeOut } from '../../utils/constants';
import { endpointsExpress } from '../../utils/endpoints';
import './Register.css';

function Register() {
  const [showError, setShowError] = useState<boolean>(false);
  const [dataError, setDataError] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');

  const { data, loading, postRequest } = usePostRequest();

  useEffect(() => {
    if (data && data.errors) {
      setErrors(data.errors);
    }
  }, [data, loading]);

  const onSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (password.length !== rePassword.length) {
      const errors = [{ msg: 'Passwords have different lenghts' }];
      setErrors(errors);
    }

    if (password !== rePassword) {
      const errors = [{ msg: 'Passwords are different' }];
      setErrors(errors);
    }

    const body = {
      name: 'John Doe',
      email: 'john@gmail.com',
      password: 'Test_1234',
    };

    postRequest(endpointsExpress.users, body);
  };

  const setErrors = (errors: any[]) => {
    setDataError(errors);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setDataError([]);
    }, errorTimeOut);
  };

  return (
    <>
      <form className='register'>
        {showError && <ErrorsList errors={dataError} />}
        <AccountTitle
          prefix={configText.accountRegister.prefix}
          postfix={configText.accountRegister.postfix}
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
          labelText={configText.input.labelText.password}
          name={configText.input.name.password}
          type={configText.input.type.password}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Input
          labelText={configText.input.labelText.confirmPassword}
          name={configText.input.name.rePassword}
          type={configText.input.type.password}
          value={rePassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRePassword(e.target.value)
          }
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
