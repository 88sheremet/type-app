import React from 'react';
import { Route, Routes} from 'react-router-dom'

import Home from './components/home';
// import LoginPage from './components/auth/login';
import PrivateRoute from './utils/router/privateRoute';
// import RegisterPage from './components/auth/register';
import AuthRootComponent from './components/auth';

function App() {
  return (
    <div >
    <Routes>
      <Route element={<PrivateRoute/>}>
      <Route path='/' element={<Home/>}/>
      </Route>
    
      <Route path='login' element={<AuthRootComponent/>}/>
      <Route path='register' element={<AuthRootComponent/>}/>
    </Routes>
    </div>
  );
}

export default App;
