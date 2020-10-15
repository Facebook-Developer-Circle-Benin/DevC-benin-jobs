import React, { Component } from 'react';
import profilePics from '../../../../images/Profile-pics.svg';
import  { FaStar, FaMapMarkerAlt, FaRegEnvelope, FaPhone } from 'react-icons/fa';
import './EditProfile.css';


class Editprofile extends Component {
  render() {
    return (
      <div className = "edit-profile bg-white box-shadow-bottom border-r-xs">
        <div className = "div-1 text-center padding-md">
          <img className = "border-r-circle margin-bottom-sm"src = {profilePics} alt = "Profile-pics"/>
          <p className ="margin-bottom-xs color-primary-dark-blue font-weight-bold font-lg">Genesis Anosike</p>
          <p className ="margin-bottom-xs font-xs">UI/UX Designer</p> 
          <span className = "color-primary-light ">
            <FaStar className ="margin-bottom-sm"/>
            <FaStar  className ="margin-bottom-sm"/>
            <FaStar className ="margin-bottom-sm"/>
            <FaStar className ="margin-bottom-sm"/>
            <FaStar className ="margin-bottom-sm"/>
          </span>
          <hr/>
        </div>
        <div className = "div-2 padding-left-md font-xs">
        <p className ="margin-bottom-xs"><FaMapMarkerAlt/> Ibadan,Nigeria</p>
        <p className ="margin-bottom-xs"><FaRegEnvelope/> anosikegenesis@gmail.com</p>
        <p className ="margin-bottom-sm"><FaPhone/> 0801-234-5678</p>
         <hr/>
        </div>
        <div className = "bg-primary-light text-center margin-top-sm margin-left-sm padding-xs border-r-xs color-white">
          <p className = "">Edit profile</p>
        </div>
      </div>
    )
  }
}

export default Editprofile
