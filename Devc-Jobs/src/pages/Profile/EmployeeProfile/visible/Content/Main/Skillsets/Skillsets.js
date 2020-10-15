import React, { Component } from 'react'
import  { FaPlus,FaRegTrashAlt } from 'react-icons/fa'
// import Modal from "./skillModal/modal"
//import uuid from "react-uuid"
import "./Skill.css"

class Skillsets extends Component {
  render() {
    return (
      <div>
        <div className = "skill bg-white box-shadow-bottom border-r-xs">
          <div className = "CV-flex d-flex align-items-center justify-content-between">
              <p className = "font-weight-bold font-md">Skillsets</p>
              <FaPlus 
              onClick = {this.props.openSkill}
              className = "color-primary-dark-blue cursor-pointer"/>
          </div>
          <hr/>
            {this.props.skill.map (data =>
          <div>
            <div className = "CV-flex d-flex align-items-center justify-content-between padding-vertical-xs">
              <span className = "font-xs"><input className = "margin-horizontal-xs" type = "checkbox"/>{data.skillset}</span>
              <FaRegTrashAlt
              onClick = {this.props.deleteSkill.bind(this, data.id)}
              className = " trash color-primary-dark-blue cursor-pointer"/>
            </div>
            <hr/>
          </div>
          
          )}
        </div>           
      </div>
    )
  }
}

export default Skillsets
