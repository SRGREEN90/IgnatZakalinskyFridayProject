import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import Login from './common/Login';
import NewPassword from "./common/NewPassword";
import Registration from './common/Registration';
import Profile from './common/Profile';
import PasswordRecovery from "./common/PasswordRecovery";
import Test from './common/Test';
import Header from "./navbar/Header";

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path={'/404'} element={<h1 style={{textAlign: 'center', color: 'red'}}>404:PAGE NOT FOUND</h1>}/>
        <Route path={'login'} element={<Login/>}/>
        <Route path={'newpassword'} element={<NewPassword/>}/>
        <Route path={'passwordrecovery'} element={<PasswordRecovery/>}/>
        <Route path={'/'} element={<Profile/>}/>
        <Route path={'registration'} element={<Registration/>}/>
        <Route path={'test'} element={<Test/>}/>
        <Route path={'*'} element={<Navigate to={'/404'}/>}/>


      </Routes>
    </div>
  );
}

export default App;
