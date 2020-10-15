import React, { Component } from 'react'
import  { FaAngleDown,  FaSearch } from 'react-icons/fa'
import "./SocialModal.css"

class SocialModal extends Component {
  render() {
    return (
      <div className = "modal social-link"  style = {this.props.OpenSocialStyle}>
      <p className = "font-weight-bold font-md">Add social media link</p>
      <hr/>
      <div className = "search-field"> 
        <FaSearch className = "modal-icon search-icon"/>
         <input
         className = "input-skill"
         type = 'text'
         placeholder = "social media.."
        />
        <FaAngleDown className = " modal-icon color-primary-dark-blue down-icon"/>
        </div>
          <div className = "search-field"> 
          <input
           className = "input-skill"
           type = 'text'
          />
          </div>
        <div className = "search-field"> 
         <p className ="margin-top-sm font-sm">Account link</p>
         <input
         className = "input-skill"
         type = 'text'
        />
        </div>
        <div className = "skill-button">
          <button>Add link</button>
        </div>    
      </div>
    )
  }
}

export default SocialModal
