import { Link } from 'react-router-dom';
import configText from '../../utils/cofigText';
import { endpoints } from '../../utils/endpoints';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__buttons'>
        <Link className='btn btn-main' to={endpoints.register}>
          {configText.home.buttons.register}
        </Link>
        <Link className='btn btn-main' to={endpoints.login}>
          {configText.home.buttons.login}
        </Link>
      </div>
    </div>
  );
};

export default Home;
