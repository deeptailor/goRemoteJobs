import React from 'react';
import IsMobile from '../../util/isMobile.js';

import Sidebar from '../sidebar/sidebar.jsx';



class Main extends React.Component{
  constructor(props){
    super(props);
    this.changeOverlayWidth = this.changeOverlayWidth.bind(this);
    this.state = {overlayWidth:'100%', overlayMin:false, sidebar: 0, sideBarSize:30, isMobile: false}
  }

  componentWillMount(){
    if (IsMobile.any()) {
      this.setState({sideBarSize: 100, isMobile: true})
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
