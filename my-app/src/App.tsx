import React from 'react';
import { Route, Routes} from 'react-router-dom'

import Home from './components/home';
import LoginPage from './components/auth/login';

function App() {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<LoginPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
