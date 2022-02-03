import React, { Component } from 'react';
import './App.css';

import {
 BrowserRouter as Router,
 Route,
 Routes,
 Switch,
 //Link,
 //Redirect,
} from 'react-router-dom';

//pages
import Signup from './pages/signup';
import Login from './pages/login';
import ForgotPass from './pages/forgotPassword';

class App extends React.Component {
 render() {
  return (
   <Router>
    <Routes>
     <Route exact path="/" element={<Signup />} />
     <Route exact path="/login" element={<Login />} />
     <Route exact path="/forgotPassword" element={<ForgotPass />} />
    </Routes>
   </Router>
  );
 }
}

export default App;
