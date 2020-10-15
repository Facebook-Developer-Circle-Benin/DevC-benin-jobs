import React, { Component } from 'react'
import './visible.scss'
import Nav from './Nav/Nav'
import Content from './Content/Content'

class visible extends Component {
  constructor(props){
    super(props)
      this.state ={
         route: "main"
      }
  }

  routeToDashboard = ()=> {
    this.setState({route: "dashboard"})
    console.log('done')
  }

  render() {
    const {route} = this.state
    return (
      <div className = "visible-profile">
        <Nav route = {route} routeToDashboard = {this.routeToDashboard}/>
        <Content route = {route} routeToDashboard = {this.routeToDashboard} />
      </div>
    )
  }
}

export default visible
