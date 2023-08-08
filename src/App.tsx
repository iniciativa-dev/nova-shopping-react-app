import React from 'react';
import * as C from './App.styles';
import { LoginAdm } from './Pages/LoginAdm';
import {Routes, Route} from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { NotFound } from './Pages/NotFound';
import { Registers } from './Pages/Registers';
import { NewStorage } from './Pages/NewStorage';



function App() {
  return (
    <C.Container>
          <Routes>
            <Route path='/' element={<LoginAdm/>} />
            <Route path='/register' element={<SignIn/>} />
            <Route path='/registers' element={<Registers/>} />
            <Route path='/newstorage' element={<NewStorage/>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
    </C.Container>
  );
}

export default App;
