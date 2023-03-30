import AccountTitle from '../../components/AccountTitle/AccountTitle';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import configText from '../../utils/cofigText';
import './Login.css';

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNWJkYTY5NTFkZWEyOTllMjU0OWIyIn0sImlhdCI6MTY4MDE5NDk4MiwiZXhwIjoxNjgwNTU0OTgyfQ.syzzB5SZ8Oo1vztGBVo4jA4Jd71UUNvHjNCAwSKOGGI

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
