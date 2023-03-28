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
      <Input labelText='Name' name='name' type='text' />
      <Input labelText='E-mail' name='email' type='email' />
      <Input labelText='Password' name='password' type='password' />
      <Input labelText='Confirm Password' name='re-password' type='password' />
      <Button clsName='btn btn-primary btn-wide' text='Register' />
    </div>
  );
}

export default Register;
