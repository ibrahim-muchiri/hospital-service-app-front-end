import React from 'react';

class ForgotPass extends React.Component {
 constructor() {
  super();

  this.state = {
   email: '',
  };

  this.changeEmail = this.changeEmail.bind(this);
 } //End of constructor
 changeEmail(e) {
  this.setState({
   email: e.target.value,
  });
 }

 render() {
  return (
   <div>
    <div className="container">
     <div className="form-div">
      <form>
       <h2>Please provide your email</h2>
       <input
        type="email"
        placeholder="Email"
        onChange={this.changeEmail}
        value={this.state.email}
        className="btn btn-danger btn-block"
       />
       <input
        type="submit"
        className="btn btn-danger btn-block"
        value="submit"
       />
      </form>
     </div>
    </div>
   </div>
  );
 }
} //End of the class

export default ForgotPass;
