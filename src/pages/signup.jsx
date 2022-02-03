import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {
 constructor() {
  super();
  this.state = {
   name: '',
   email: '',
   password: '',
   confirmPassword: '',
  };

  this.changeName = this.changeName.bind(this);
  this.changeEmail = this.changeEmail.bind(this);
  this.changePassword = this.changePassword.bind(this);
  this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
 } //End of the constructor

 changeName(e) {
  this.setState({
   name: e.target.value,
  });
 }
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
 changeConfirmPassword(e) {
  this.setState({
   confirmPassword: e.target.value,
  });
 }

 onSubmit(e) {
  e.preventDefault();

  const registered = {
   name: this.state.name,
   email: this.state.email,
   password: this.state.password,
   confirmPassword: this.state.confirmPassword,
  };

  axios
   .post('http://127.0.0.1:7000/api/v1/customers/signup', registered)
   .then((response) => console.log(response.data));

  this.setState({
   name: '',
   email: '',
   password: '',
   confirmPassword: '',
  });
 }

 render() {
  return (
   <div>
    <div className="container">
     <div className="form-div">
      <form onSubmit={this.onSubmit}>
       <h2>Fill in the the fields for you to be signed up</h2>
       <input
        type="text"
        placeholder="Name"
        onChange={this.changeName}
        value={this.state.name}
        className="form-control form-group"
       />

       <input
        type="text"
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
        type="password"
        placeholder="ConfirmPassword"
        onChange={this.changeConfirmPassword}
        value={this.state.confirmPassword}
        className="form-control form-group"
       />
       <input
        type="submit"
        className="btn btn-danger btn-block"
        value="submit"
        className="form-control form-group"
       />
       <h1>
        <Link to="/login">login anyway?</Link>
       </h1>
      </form>
     </div>
    </div>
   </div>
  );
 }
} //End of the class

export default Signup;
