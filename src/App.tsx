import React from 'react';
import { LoginBox } from './Pages/LoginBox';
import {Routes, Route} from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { NotFound } from './Pages/NotFound';



function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginBox/>} />
      <Route path='/register' element={<SignIn/>} />
      <Route path='*' element={<NotFound/>}/> 
    </Routes>
  );
}

export default App;
