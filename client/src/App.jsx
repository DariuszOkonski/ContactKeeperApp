import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { endpoints } from './utils/endpoints';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Error from './pages/Error/ErrorPage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Contacts from './pages/Contacts/Contacts';
import ContactStateProvider from './context/contact/contactState';
import AuthStateProvider from './context/auth/authState';

function App() {
  return (
    <ContactStateProvider>
      <AuthStateProvider>
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
      </AuthStateProvider>
    </ContactStateProvider>
  );
}

export default App;
