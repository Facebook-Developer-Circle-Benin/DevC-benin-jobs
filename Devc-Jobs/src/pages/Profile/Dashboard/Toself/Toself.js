import React from 'react'
import profilePics from '../../images/Profile-pics.svg'
import  { FaMapMarkerAlt, FaRegEnvelope,FaPhoneAlt, FaTwitter,FaDribbble,FaBehance } from 'react-icons/fa'
import './Toself.css'

const Toself = () => {
  return (
    <div className = "dashboard">
      <div className ="dashboard-title">
      <h1>Dashboard</h1>
      </div>
      <div className = "dashboard-numbers">
        <div className = "jobs job-available bg-primary-dark">
          <p className = "font-lg">3,052</p>
          <p className = "font-xs">JOBS</p>
          <p className = "font-xs">AVAILABLE</p>
        </div>
        <div className = "jobs job-applied ">
        <p className = "font-lg">12</p>
        <p className = "font-xs">JOBS</p>
        <p className = "font-xs">APPLIED FOR</p>
        </div>
        <div className = " jobs pending-application bg-primary-light">
        <p className = "font-lg">16</p>
        <p className = "font-xs">PENDING</p>
        <p className = "font-xs">APPLICATIONS</p>
        </div>
      </div>
      <div className = "second-div">
      <div className ="contact">
        <p className = "font-weight-bold margin-vertical-sm">Contact Information</p>
      <div className = "contact-details">
        <div className = "image-details">
         <img className = "border-r-circle margin-bottom-s image" src = {profilePics} alt ="profile-pics"/>
         <p className = "font-md font-weight-bold margin-top-sm color-primary-dark-blue">Genesis Anosike</p>
         <p>UI/UX Designer</p>
        </div>
        <div className = "main-details small-font">
          <p className ="margin-top"><FaMapMarkerAlt className = "margin-right"/> Ibadan,Nigeria</p>
          <p className ="margin-top"><FaRegEnvelope  className = "margin-right"/> anasikegenesis@gmail.com</p>
          <p className ="margin-top"><FaPhoneAlt className = "margin-right"/>0801 - 234 - 5678</p>
          <div className = "portfolio-links">
            <p>Portfolio</p>
            <p className ="margin-top"><FaTwitter className = "margin-right"/> @Anosike_UI</p>
            <p className ="margin-top"><FaDribbble className = "margin-right"/>https://dribble/com</p>
            <p className ="margin-top"><FaBehance className = "margin-right"/> https://www.behance.net</p>
          </div>
        </div>
      </div>
      </div>
      <div className = "Software-Assessment">
        <p className = "color-primary-dark-blue font-md font-weight-bold margin-vertical-sm">Software Assessment</p>
        <div className = 'progress-div'>
        <div className ="figma-div">
          <p className = "small-font">Figma</p>
          <progress max= "100" value ="85"></progress>
        </div>
        <div className ="adobexd-div margin-top-sm">
          <p className = "small-font">Adobe XD</p>
          <progress max= "100" value ="75"></progress>
        </div>
        <div className ="photoshop-div margin-top-sm">
          <p className = "small-font">Photoshop</p>
          <progress max= "100" value ="60"></progress>
        </div>
        <div className ="ux-div margin-top-sm">
          <p className = "small-font">UX Research</p>
          <progress max= "100" value ="90"></progress>
        </div>
        <div className ="mockflow-div margin-top-sm">
          <p className = "small-font">Mockflow</p>
          <progress max= "100" value ="70"></progress>
        </div>
        </div>  
      </div>
      </div>
    </div>
  )
}

export default Toself
