import { useState } from 'react';
import AccountTitle from '../../components/AccountTitle/AccountTitle';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { ErrorMessage } from '../../interfaces/general';
import configText from '../../utils/cofigText';
import { errorTimeOut } from '../../utils/constants';
import './Login.css';

function Login() {
  const [showError, setShowError] = useState<boolean>(false);
  const [dateError, setDataError] = useState<ErrorMessage | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('onsubmit');
  };

  const setErrors = (errors: ErrorMessage) => {
    setDataError(errors);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setDataError(null);
    }, errorTimeOut);
  };

  return (
    <div className='login'>
      <AccountTitle
        prefix={configText.accountLogin.prefix}
        postfix={configText.accountLogin.postfix}
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

      <Button
        clsName='btn btn-primary btn-wide'
        text={configText.buttons.login}
        onClick={onSubmit}
      />
    </div>
  );
}

export default Login;
