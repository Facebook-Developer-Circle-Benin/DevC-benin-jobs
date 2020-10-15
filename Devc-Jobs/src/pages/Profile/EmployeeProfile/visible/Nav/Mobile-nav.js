import React, { Component } from 'react'
import  { FaBell, FaAngleDown, FaBars } from 'react-icons/fa'
import profilePics from '../../../images/Profile-pics.svg'
import employerPics from '../../../images/Employer-pics.svg'
import TalentP from '../../../images/TalentP-light.png'
import vector from '../../../images/Vector.png'
import l from '../../../images/l-light.png'




class Mobilenav extends Component {
  constructor(props){
    super(props)
    this.state = {
       showSideBar: false
    }
    
    //Note: Refs provide  a way to access DOM nodes or React elements created in the render method

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

}

componentDidMount() {
  document.addEventListener('mousedown', this.handleClickOutside);
}

componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
}


// Set the wrapper ref(one of the function to close the side bar when clicked outside)

setWrapperRef(node) {
  this.wrapperRef = node;
}



// alert if clicked on outside of element

handleClickOutside(event) {
  if(this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    this.setState({showSideBar: false})
  }
}

  showSideBarStyle   = () => {
    return{
      width: this.state.showSideBar? 
      '150px' : '0px',
    }
  }



  showSideBar = () => {
    this.setState({showSideBar: !this.state.showSideBar})
  }

  render() {
    const {route, routeToDashboard} = this.props;
    return (
      <div>
          <div className = "mobile-view">
          <div className ="">
           <FaBars
            className = "dark-blue font-md cursor-pointer" 
            onClick = {this.showSideBar}
          />
          </div>
          {route === "employer" ?
          <div className ="name-stack">
            <span className = "name dark-blue strong font-sm">Adelanke</span><br/>
            <span className ="font-xs">Employer</span>
          </div> :
           <div className ="name-stack">
            <span className = "name dark-blue strong font-sm">Genesis Anosike</span><br/>
            <span className ="font-xs">Employee</span>
          </div>
          }
          <div className = "profile-pics">
          {route ==="employer"?
            <img className = "" alt = 'Employer-pics' src = {employerPics}></img>:
            <img className = "" alt = 'Profile-pics' src = {profilePics}></img>
          }
          </div>
          <div className = "mobile-notification dark-blue">
            <FaBell/> 
          </div>
          <div className = "angle-down dark-blue">
            <FaAngleDown onClick = {this.props.changeOpenProfile}/>
          </div>
        </div>
        <div className = "sidebar" style = {this.showSideBarStyle()}>
        <div className ="mobile-section-1">
          <div className = "talent">
					<span><img alt = "logo" src = {TalentP}/></span>
					<span><img alt = "logo" src = {vector}/></span>
					<span><img alt = "logo" src = {l}/></span>
          </div>
          {/* <div className = "close-button">
           <p className ="close-button font-lg color-white">&times;</p>
          </div> */}
        </div>
        <div className = 'mobile-side' ref = {this.setWrapperRef}>
        <div className = "mobile-sidebar-content font-sm" >
        {route === "employer"? <li 
          className = "side-padding cursor-pointer blue-hover">Dashboard</li>:
          <li 
          onClick = {routeToDashboard}
          className = "side-padding cursor-pointer blue-hover">Dashboard</li>}
          <li className = "side-padding cursor-pointer">Message</li>
          <li className = "side-padding cursor-pointer">Employers</li>
          <li className = "side-padding cursor-pointer">Support</li>
          <li className = "side-padding cursor-pointer">Settings</li>
        </div>
        </div>
        </div>      
      </div>
    )
  }
}

export default Mobilenav
