import configText from '../../utils/cofigText';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { endpoints } from '../../utils/endpoints';
import { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Navigation = () => {
  const { authState } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  return (
    <div className='navigation'>
      <Link className='navigation__logo' to={endpoints.home}>
        <i className='fas fa-id-card-alt'></i>
        {!isAuthenticated ? (
          <h2>{configText.navigation.logo.text}</h2>
        ) : (
          <h4>
            {configText.navigation.logo.user} {authState.user.name}
          </h4>
        )}
      </Link>

      <div className='navigation__links'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link to={endpoints.home}>{configText.navigation.links.home}</Link>
          </li>

          {isAuthenticated && (
            <>
              <li className='navigation__item'>
                <Link to={endpoints.contacts}>
                  {configText.navigation.links.contacts}
                </Link>
              </li>
              <li className='navigation__item'>
                <Link to={endpoints.about}>
                  {configText.navigation.links.about}
                </Link>
              </li>
            </>
          )}

          {!isAuthenticated && (
            <>
              <li className='navigation__item'>
                <Link to={endpoints.register}>
                  {configText.navigation.links.register}
                </Link>
              </li>
              <li className='navigation__item'>
                <Link to={endpoints.login}>
                  {configText.navigation.links.login}
                </Link>
              </li>
            </>
          )}

          {isAuthenticated && (
            <li className='navigation__item'>
              <Link to={endpoints.logout}>
                {configText.navigation.links.logout}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
