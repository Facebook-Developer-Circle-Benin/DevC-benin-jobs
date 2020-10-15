import React, { Component } from 'react'
import  { FaMinus, FaPlus } from 'react-icons/fa'
import './Upload.css'
class Upload extends Component {
  render() {
    return (
      <div className = "upload ">
          <div className = "CV bg-white  box-shadow-bottom border-r-xs">
            <div className = "CV-flex ">
              <p className = "font-weight-bold">CV</p>
              <p className = "font-xs">File uploaded</p>
              <p className = "bg-primary-light text-center margin-top-sm margin-right-md  border-r-xs color-white btn-width-2 ">View file</p>
            </div>
            <FaMinus className ="color-primary-dark-blue cursor-pointer"/>
          </div>  
          <div className = "Portfolio bg-white box-shadow-bottom border-r-xs">
            <div className = "Portfolio-flex  ">
              <p className = "font-weight-bold">Portfolio</p>
              <p className = "font-xs">Upload file</p>
              <p className = "bg-gray-dark text-center margin-top-sm margin-right-md  border-r-xs color-white btn-width-2 ">View file</p>
            </div>
            <input type ='file' id ="Uploadfile"/> 
            <label htmlFor = "Uploadfile">
            <FaPlus className ="color-primary-dark-blue cursor-pointer"/>
            </label>
          </div>  
      </div>
    )
  }
}

export default Upload
