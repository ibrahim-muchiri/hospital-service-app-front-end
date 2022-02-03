import React, { Component } from 'react';
import './App.css';

import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link,
 Redirect,
} from 'react-router-dom';

//pages
import Signup from './components/pages/signup';

class App extends React.Component {
 render() {
  return (
   <Router>
    <Route path="/" component={Signup} />
   </Router>
  );
 }
}

export default App;
