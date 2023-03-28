import { Link } from 'react-router-dom';
import { endpoints } from '../../utils/endpoints';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__buttons'>
        <Link className='btn btn-main' to={endpoints.register}>
          Register
        </Link>
        <Link className='btn btn-main' to={endpoints.login}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
