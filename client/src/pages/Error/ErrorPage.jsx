import './ErrorPage.css';
import configText from '../../utils/cofigText';

const Error = () => {
  return (
    <div className='error'>
      <h1 className='error__text'>{configText.error.text}</h1>
    </div>
  );
};

export default Error;
