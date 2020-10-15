import React from 'react'
import  { FaStar, FaMapMarkerAlt } from 'react-icons/fa'
import profilePics from '../../images/Profile-pics.svg'
import './Toemployer.css'


const Toemployer = ()=> {
  return (
    <div className = "to-employer">
      <div className = "edit-profile bg-white box-shadow-bottom border-r-xs">
        <div className = "div-1 text-center padding-md">
          <img className = "border-r-circle margin-bottom-sm"src = {profilePics} alt = "Profile-pics"/>
          <p className ="margin-bottom-xs color-primary-dark-blue font-weight-bold font-lg">Genesis Anosike</p>
          <p className ="margin-bottom-xs font-xs">UI/UX Designer</p> 
          
          <p className ="margin-bottom-xs"><FaMapMarkerAlt/> Ibadan,Nigeria</p>
          <hr/>
        </div>
        <div className = "div-2  font-xs text-center margin-bottom-sm">
        <p>Employer ratings</p>
        <span className = "color-primary-light font-lg ">
            <FaStar className ="margin-bottom-sm margin-right-xs"/>
            <FaStar  className ="margin-bottom-sm margin-right-xs "/>
            <FaStar className ="margin-bottom-sm margin-right-xs"/>
            <FaStar className ="margin-bottom-sm margin-right-xs"/>
            <FaStar className ="margin-bottom-sm margin-right-xs"/>  
        </span>
        
         <hr/>
        </div>
        <p className = "text-center">Genesis is currently available to hire</p>
        <div className = "bg-primary-light text-center margin-top-sm margin-left-sm padding-xs border-r-xs color-white">
          <p className = "">Hire Genesis</p>
        </div>
      </div>
      <div className = "right-flex">
      <div className = "skill bg-white box-shadow-bottom border-r-xs">
            <div className = "CV-flex d-flex align-items-center justify-content-between">
            <p className = "font-weight-bold font-md">Skillsets</p>
    
            </div>
            <hr/>
            <div className = "CV-flex d-flex align-items-center justify-content-between padding-vertical-xs">
            <span className = "font-xs"><input className = "margin-horizontal-xs" type = "checkbox"/>UI/UX Design</span>
            
            </div>
            <hr/>

            <div className = "CV-flex d-flex align-items-center justify-content-between padding-vertical-xs">
            <span className = "font-xs"><input className = "margin-horizontal-xs" type = "checkbox"/>JavaScript</span>
           
            </div>
            <hr/>

            <div className = "CV-flex d-flex align-items-center justify-content-between padding-vertical-xs">
            <span className = "font-xs"><input className = "margin-horizontal-xs" type = "checkbox"/>HTML 5</span>
           
            </div>
            <hr/>

            <div className = "CV-flex d-flex align-items-center justify-content-between padding-vertical-xs">
            <span className = "font-xs"><input className = "margin-horizontal-xs" type = "checkbox"/>CSS 3</span>
            </div>
            <hr/>
            <div className = "CV-flex d-flex align-items-center justify-content-between padding-vertical-xs">
            <span className = "font-xs"><input className = "margin-horizontal-xs" type = "checkbox"/>Bootstrap</span>
            </div>
          </div>  
          <div className = "employer-portfolio bg-white  box-shadow-bottom border-r-xs">
              <p className = "">Portfolio</p>
              <p className = "bg-primary-light text-center margin-top-sm  border-r-xs color-white btn-width-2 ">View file</p>
            </div> 
            </div>      
      </div>
  )
}

export default Toemployer
