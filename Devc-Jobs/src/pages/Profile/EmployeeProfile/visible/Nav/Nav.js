import React, { Component } from 'react'
import TalentP from '../../../images/TalentP-light.png'
import vector from '../../../images/Vector.png'
import profilePics from '../../../images/Profile-pics.svg'
import employerPics from '../../../images/Employer-pics.svg'
import l from '../../../images/l-light.png'
//import { SignIn, SignUp } from '../../../../../pages';
 import { routeNames } from '../../../../../pages/types';
import  { FaBell, FaAngleDown } from 'react-icons/fa'
//import  { FaFontAwesome } from 'react-icons/fa'
//import { IconContext } from 'react-icons/lib/cjs'
import {Link} from 'react-router-dom'
import MobileNav from './Mobile-nav'
import './Nav.css'


 class Nav extends Component {
  constructor(props){
    super(props)
     this.state = {
       openShareProfile: false
     }
  }

  changeOpenProfile = () => {
    const {openShareProfile} = this.state;
    this.setState({openShareProfile: !openShareProfile })
  }

    shareProfileStyle = () => {
        return{
          display: this.state.openShareProfile?
           '': 'none'
        }
    }
  
  render() {
    //const  {openShareProfile} =  this.state
    const {route, routeToDashboard} = this.props
    return (
      <div className = "nav">
        <div className ="section">
					<div className =" section-1">
						<span><img alt = "logo" src = {TalentP}/></span>
						<span><img alt = "logo" src = {vector}/></span>
						<span><img alt = "logo" src = {l}/></span>
          </div>
          
          <div className = " section-2">
          { route === "employer"? "" :
            <div className = " Available">
              <label className ="switch">
                <input type = "checkbox"/>
                <span className = "slider round">
                </span>
              </label>
              <span className ="small-font available">Available for hire</span>
            </div>
          }
            <div className = "notification">
              <FaBell/> 
            </div> 
            <div className = "profile-section">
            <div className = "profile-pics">
            {route === 'employer'?
              <img className = "" alt = 'Employer-pics' src = {employerPics}></img>:
              <img className = "" alt = 'Profile-pics' src = {profilePics}></img>
              }
              
            </div>
            <div className ="profile-name">
            {route === 'employer'?
              <p className = "name">Adelanke Adelanke</p>:
              <p className = "name">Genesis Anosike</p>
            }
              {route === "employer"? 
              <span className ="small-font">Employer</span>: <span className ="small-font">Employee</span>
              }

            </div>
            <div  className = "angle-down dark-blue cursor-pointer">
            <p onClick = {this.changeOpenProfile}><FaAngleDown/></p>  
            
            </div>
            </div> 
          </div> 
				</div>
        <MobileNav
          route = {route} routeToDashboard = {routeToDashboard}
          changeOpenProfile = {this.changeOpenProfile}
        />
        <div className = "share-profile font-xs " style = {this.shareProfileStyle()}>
          <p className = "cursor-pointer">Profile</p>
          <p className = "cursor-pointer">Share-profile</p>
          <Link to = {`/${routeNames.signin}`} className = "red cursor-pointer">Sign out</Link>
        </div>
      </div>
    )
  }
}

export default Nav
