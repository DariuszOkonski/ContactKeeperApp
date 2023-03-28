import AccountTitle from '../../components/AccountTitle/AccountTitle';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import configText from '../../utils/cofigText';
import './Login.css';

function Login() {
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
      />
      <Input
        labelText={configText.input.labelText.password}
        name={configText.input.name.password}
        type={configText.input.type.password}
      />

      <Button
        clsName='btn btn-primary btn-wide'
        text={configText.buttons.login}
      />
    </div>
  );
}

export default Login;
