import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { endpoints, endpointsExpress } from './utils/endpoints';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Error from './pages/Error/ErrorPage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Contacts from './pages/Contacts/Contacts';
import configText from './utils/cofigText';
import { useContext, useEffect } from 'react';
import AuthContext from './context/auth/authContext';

function App() {
  const { loginUser } = useContext(AuthContext);

  const checkIfLoggedIn = async () => {
    const token = localStorage.getItem(configText.auth.token);

    if (token) {
      const user = await getLoggedInUser(endpointsExpress.auth, token);
      const loggedUser = {
        token,
        date: user.date,
        email: user.email,
        name: user.name,
      };

      loginUser(loggedUser);
    }
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const getLoggedInUser = async (url, token) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          origin: '*',
          'x-auth-token': token,
        },
      });

      if (!response.ok) {
        throw Error();
      }

      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />
        <div className='container'>
          <Routes>
            <Route path={endpoints.home} element={<Home />} />
            <Route path={endpoints.contacts} element={<Contacts />} />
            <Route path={endpoints.about} element={<About />} />
            <Route path={endpoints.register} element={<Register />} />
            <Route path={endpoints.login} element={<Login />} />
            <Route path={endpoints.notFound} element={<Error />} />
            <Route
              path={endpoints.error}
              element={<Navigate to={endpoints.notFound} replace />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
