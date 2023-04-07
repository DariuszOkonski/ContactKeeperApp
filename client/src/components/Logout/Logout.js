import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../utils/endpoints';

function Logout() {
  const { logoutUser } = useContext(AuthContext);
  const navigation = useNavigate();

  useEffect(() => {
    logoutUser();
    navigation(endpoints.home);
  }, []);
  return null;
}

export default Logout;
