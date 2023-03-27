import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { endpoints } from './utils/endpoints';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />

        <div className='container'>
          <Routes>
            <Route path={endpoints.home} element={<h1>HOME</h1>} />
            <Route path={endpoints.about} element={<h1>ABOUT</h1>} />
            <Route path={endpoints.register} element={<h1>REGISTER</h1>} />
            <Route path={endpoints.login} element={<h1>LOGIN</h1>} />
          </Routes>
        </div>

        {/* <i className='fas fa-envelope-open'></i> */}
        {/* <i className='fas fa-phone'></i> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
