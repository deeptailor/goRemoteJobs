import React from 'react';

import Login from '../login/login.jsx';
import Signup from '../signup/signup.jsx';

class Sidebar extends React.Component{
  constructor(props){
    super(props)
    this.showForm = this.showForm.bind(this);
    this.state = {login: true}
  }

  showForm(name){
    return () => {
      if(name === 'login'){
        this.setState({login: true})
      } else {
        this.setState({login: false});
      }
    }
  }

  renderLoginSignUp(){
    if(this.state.login){
      return (<Login />);
    } else {
      return (<Signup />);
    }
  }

  render(){
    return(
      <div className="sidebar-container" style={{width:`${this.props.width}%`}}>
        <div className="login-signup-container">
          <div className="l-button" onClick={this.showForm('login')}>
            <i className="fa fa-unlock" aria-hidden="true"></i>
            <div className="label">
              <h1>Sign In</h1>
              <h2>Access Your Account</h2>
            </div>
          </div>
          <div className="separator"></div>
          <div className="l-button" onClick={this.showForm('signup')}>
            <i className="fa fa-user-plus" aria-hidden="true"></i>
            <div className="label">
              <h1>Sign Up</h1>
              <h2>Create Your Account</h2>
            </div>
          </div>
        </div>
        {this.renderLoginSignUp()}
        <div className="terms-of-service-container"></div>
      </div>
    )
  }
}

export default Sidebar;
