import AccountTitle from '../../components/AccountTitle/AccountTitle';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import configText from '../../utils/cofigText';
import './Register.css';

function Register() {
  return (
    <div className='register'>
      <AccountTitle
        prefix={configText.accountRegister.prefix}
        postfix={configText.accountRegister.postfix}
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
        labelText={configText.input.labelText.password}
        name={configText.input.name.password}
        type={configText.input.type.password}
      />
      <Input
        labelText={configText.input.labelText.confirmPassword}
        name={configText.input.name.rePassword}
        type={configText.input.type.password}
      />
      <Button
        clsName='btn btn-primary btn-wide'
        text={configText.buttons.register}
      />
    </div>
  );
}

export default Register;
