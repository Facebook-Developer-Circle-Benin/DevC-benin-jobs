import React, { Component } from 'react'
import EmployeeProfile from './EmployeeProfile/EmployeeProfile'
import '../../styles/App.scss';
import './profileApp.scss'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <EmployeeProfile/>
      </div>
      )
  }
}

export default Dashboard
