import configText from '../utils/cofigText';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { endpoints } from '../utils/endpoints';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation__logo'>
        <i className='fas fa-id-card-alt'></i>
        <h2>{configText.navigation.logo.text}</h2>
      </div>

      <div className='navigation__links'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link to={endpoints.home}>{configText.navigation.links.home}</Link>
          </li>
          <li className='navigation__item'>
            <Link to={endpoints.about}>
              {configText.navigation.links.about}
            </Link>
          </li>
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
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
