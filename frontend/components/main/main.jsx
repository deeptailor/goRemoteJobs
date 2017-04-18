import React from 'react';

import Sidebar from '../sidebar/sidebar.jsx';

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

class Main extends React.Component{
  constructor(props){
    super(props);
    this.changeOverlayWidth = this.changeOverlayWidth.bind(this);
    this.state = {overlayWidth:'100%', overlayMin:false, sidebar: 0, sideBarSize:30}
  }

  componentWillMount(){
    if (isMobile.any()) {
      this.setState({sideBarSize: 80})
    }
  }

  changeOverlayWidth(){
    return () => {
      if(this.state.overlayMin){
        this.setState({overlayWidth: '100%', overlayMin:false, sidebar: 0});
      } else {
        this.setState({overlayWidth: `${100-this.state.sideBarSize}%`, overlayMin:true, sidebar: this.state.sideBarSize});
      }
    }
  }

  render(){
    return(
      <div className="main-container">
        <div className="main-overlay" style={{width: this.state.overlayWidth}}>
          <navigation className="navigation-container">
            <div className="navigation-logo"><img src="https://res.cloudinary.com/deeptailor/image/upload/c_scale,w_522/v1492465630/goRemoteJobs/goRemote-logo.png"></img></div>
            <div className="navigation-hamburger" onClick={this.changeOverlayWidth(60)}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
          </navigation>
        </div>
        <Sidebar width={this.state.sidebar}/>
      </div>
    );
  }
}

export default Main;
