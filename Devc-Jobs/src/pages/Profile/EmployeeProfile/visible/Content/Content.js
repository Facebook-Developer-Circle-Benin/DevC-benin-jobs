import React, { Component } from 'react'
import Side from './Side/Side'
import Main from './Main/Main'
import './Content.css'
import DashBoardToSelf from "../../../Dashboard/Toself/Toself"
import DashBoardToEmployer from "../../../Dashboard/Toemployer/Toemployer"

class Content extends Component {
  
  render() {
    const {route, routeToDashboard} = this.props;
    return (
      <div className ="content">
        <div className="">
          <Side routeToDashboard = {routeToDashboard} 
            route = {route}
          />
        </div>
        <div className = "Main">
         {route === "main"?
          <Main />: 
          route === "dashboard" ?
          <DashBoardToSelf/> :  
          route === "employer" ?
          <DashBoardToEmployer/> : (
            <Main/>
          )
         }
        </div>

      </div>
    )
  }
}

export default Content
