import { Link } from 'react-router-dom';
import configText from '../../utils/cofigText';
import { endpoints } from '../../utils/endpoints';
import './Home.css';
import { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;

  return (
    <div className='home'>
      <div className='home__buttons'>
        {!isAuthenticated ? (
          <>
            <Link className='btn btn-main' to={endpoints.register}>
              {configText.home.buttons.register}
            </Link>
            <Link className='btn btn-main' to={endpoints.login}>
              {configText.home.buttons.login}
            </Link>
          </>
        ) : (
          <h1 className='home__header'>Contact Keeper App</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
