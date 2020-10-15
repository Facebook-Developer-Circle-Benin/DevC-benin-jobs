import React, { Component } from 'react'
import "./Side.css"

class Side extends Component {
  render() {
   //const {route, routeToDashboard} = this.props;
    const {route, routeToDashboard} = this.props;
    return (
      <div className = 'side-bar'>
        <div className = "sidebar-content" >
          <ul>
          {route === "employer" ?  <li className = " side-padding  cursor-pointer blue-hover">Dashboard</li>:
          <li onClick = {routeToDashboard} className = " side-padding  cursor-pointer blue-hover">Dashboard</li>
          }
          <li className = "side-padding  cursor-pointer">Message</li>
          <li className = "side-padding  cursor-pointer">Employers</li>
          <li className = "side-padding  cursor-pointer">Support</li>
          <li className = "side-padding  cursor-pointer">Settings</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Side