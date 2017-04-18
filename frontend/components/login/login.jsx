import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="login-container">
        <h1 className="form-title"><span className="bold">Sign In</span>&nbsp;to your account</h1>
        <div className="form-login">
          <div><i className="fa fa-envelope" aria-hidden="true"></i><input type="email" placeholder="Email"></input></div>
          <div><i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder="Password"></input></div>
          <div><i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder="Confirm Password"></input></div>
        </div>
      </div>
    )
  }
}

export default Login;
