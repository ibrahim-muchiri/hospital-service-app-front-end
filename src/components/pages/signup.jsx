import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
 render() {
  return (
   <div>
    <div className="container">
     <div className="form-div">
      <form>
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
       />
      </form>
     </div>
    </div>
   </div>
  );
 }
} //End of the class

export default Signup;
