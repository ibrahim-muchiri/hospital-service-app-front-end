import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
 constructor() {
  super();

  this.state = {
   email: '',
   password: '',
  };
  this.changeEmail = this.changeEmail.bind(this);
  this.changePassword = this.changePassword.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
 } //End of the contructor
 changeEmail(e) {
  this.setState({
   email: e.target.value,
  });
 }
 changePassword(e) {
  this.setState({
   password: e.target.value,
  });
 }

 onSubmit(e) {
  this.preventDefault();

  const LogedIn = {
   email: this.state.email,
   password: this.state.password,
  };
  axios
   .post('http://127.0.0.1:7000/api/v1/customers/login', LogedIn)
   .then((response) => console.log(response.data));

  this.setState({
   email: '',
   password: '',
  });
 }

 render() {
  return (
   <div>
    <div className="container">
     <div className="form-div">
      <form onSubmit={this.onSubmit}>
       <h3>Please, provide the email and password.</h3>
       <input
        type="email"
        placeholder="Email"
        onChange={this.changeEmail}
        value={this.state.email}
        className="form-control form-group"
       />

       <input
        type="password"
        placeholder="Password"
        onChange={this.changePassword}
        value={this.state.password}
        className="form-control form-group"
       />
       <input
        type="submit"
        className="btn btn-danger btn-block"
        value="submit"
       />
       <h2>
        <Link to="/forgotPassword?">forgotPassword?</Link>
       </h2>
      </form>
     </div>
    </div>
   </div>
  );
 }
} //End of class

export default Login;
