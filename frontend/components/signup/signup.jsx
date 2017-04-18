import React from 'react';

class Signup extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="login-container">
        <h1 className="form-title"><span className="bold">Sign Up</span>&nbsp;for your account</h1>
        <div className="form-login">
          <div><i className="fa fa-user" aria-hidden="true"></i><input type="name" placeholder="First and Last Name"></input></div>
          <div><i className="fa fa-envelope" aria-hidden="true"></i><input type="email" placeholder="Email"></input></div>
          <div>
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            <input list="education" placeholder="Education"></input>
              <datalist id="education">
                <option value="High School" />
                <option value="Bachelor's" />
                <option value="Master's" />
                <option value="Doctorate" />
              </datalist>
          </div>
          <div><i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder="Password"></input></div>
          <div><i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder="Confirm Password"></input></div>
        </div>
        <div className="submit-button">Sign Up</div>
      </div>
    )
  }
}

export default Signup;
