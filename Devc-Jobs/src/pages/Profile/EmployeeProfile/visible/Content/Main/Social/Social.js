
import React, { Component } from 'react'
import  { FaPlus,FaPen, FaTwitter,FaDribbble,FaBehance,FaGithub,FaLinkedin, } from 'react-icons/fa'
import SkillModal from "../Skillsets/skillModal/Skillmodal"
import SocialModal from "../Social/socialModal/SocialModal"
import './Social.css'


class Social extends Component {
  
  render() {
    return (
      <div>
      <div className = "social bg-white box-shadow-bottom border-r-xs font-sm">
        <div className = "Socoial-flex d-flex align-items-center justify-content-between">
            <p className = "font-weight-bold font-md">Social account</p>
            <FaPlus 
            onClick = {this.props.openSocial}
            className = " cursor-pointer color-primary-dark-blue"/>
        </div>
        <hr/> 
        <div className = "Twitter-flex d-flex align-items-center justify-content-between padding-xs">
          <p className = ""> <FaTwitter className = 'margin-right-sm color-primary-light'/>Twitter</p>
            <FaPen className = "color-primary-dark-blue"/>
        </div>
        <hr/> 

        <div className = "Dribbble-flex d-flex align-items-center justify-content-between padding-xs">
          <p className = ""> <FaDribbble className = 'margin-right-sm color-primary-light'/>Dribbble</p>
            <FaPen className = "color-primary-dark-blue"/>
        </div>
        <hr/> 
        <div className = "Behance-flex d-flex align-items-center justify-content-between padding-xs">
          <p className = ""> <FaBehance className = 'margin-right-sm color-primary-light'/>Behance</p>
            <FaPen className = "color-primary-dark-blue"/>
        </div>
        <hr/> 

        <div className = "Github-flex d-flex align-items-center justify-content-between padding-xs">
          <p className = ""> <FaGithub className = 'margin-right-sm color-primary-light'/>Github</p>
            <FaPen className = "color-primary-dark-blue"/>
        </div>
        <hr/> 

        <div className = "LinkdIn-flex d-flex align-items-center justify-content-between padding-xs">
          <p className = ""> <FaLinkedin className = 'margin-right-sm color-primary-light'/>LinkedIn</p>
            <FaPen className = "color-primary-dark-blue"/>
        </div> 
      </div> 
      <SkillModal
        handleSubmit = {this.props.handleSubmit}
        skill = {this.props.skill}
        OpenSkillStyle = {this.props.OpenSkillStyle}
          setWrapperRef = {this.props.setWrapperRef}
        /> 
      <SocialModal
        OpenSocialStyle  = {this.props.OpenSocialStyle}/>
      </div> 
    )
  }
}

export default Social
