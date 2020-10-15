import React, { Component } from 'react'
import Visible from './visible/visible'
import GuestOnly from "./GuestOnly/GuestOnly"

class EmployeeProfile extends Component {
  render() {
    return (
      <div>
         <Visible/> 
         <GuestOnly/>
      </div>
    )
  }
}

export default EmployeeProfile
