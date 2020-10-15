import React, { Component } from 'react'
//import profilePics from '../../../../images/Profile-pics.svg'
import Editprofile from './Editprofile'
import Uploads from './Upload'
import Skillsets from './Skillsets/Skillsets'
import Social from './Social/Social'
import uuid from "react-uuid"
import './Main.css'



class Main extends Component {
  constructor (props){
    super(props)
    this.state = {
      openSkill : false,
      openSocial : false,
      skill: [
        {
          id: uuid(),
          skillset: 'UI/UX Design'
        },

        {
          id: uuid(),
          skillset: 'Javascript'
        },
        {
          id: uuid(),
          skillset: 'HTML 5'
        },
        {
          id: uuid(),
          skillset: 'CSS 3'
        },

        {
          id: uuid(),
          skillset: 'Bootstrap'
        }
              
      ]
      
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  

  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  
  
  
  // alert if clicked on outside of element
  
  handleClickOutside(event) {
    if(this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({openSkill: false})
    }
  }


  handleSubmit = (input, id) => {
    const {skill} = this.state
    const newSkill = {
      id: uuid(),
      skillset: input,
    } 
    this.setState({skill: [...skill, newSkill]}) 
 }


 deleteSkill = (id) => {
  this.setState({skill: [...this.state.skill.filter(
     data => data.id !== id    
  )]
  })
  console.log(id)
}


  openSkill = () => {
    this.setState({openSkill: true})
  }

  
  openSocial = () => {
    this.setState({openSocial: true})
  }


    OpenSkillStyle = () =>{
      return{
        display: this.state.openSkill?  '' : "none"
      }
    }

    OpenSocialStyle = () =>{
      return{
        display: this.state.openSocial?  '' : "none"
      }
    }

  render() {
    return (
      <div className = "">
      <div className = "main">
       <div className = "Editprofile">
        <Editprofile/>
        </div>
        <div className = "upload-section">
        <Uploads/>  
        <Skillsets 
         handleSubmit = {this.handleSubmit}
        skill = {this.state.skill}
        openSkill = {this.openSkill}
          deleteSkill = {this.deleteSkill}
        />
        <Social 
        setWrapperRef = {this.setWrapperRef}
        handleSubmit = {this.handleSubmit}
        openSocial = {this.openSocial}
        OpenSkillStyle = {this.OpenSkillStyle()} 
        OpenSocialStyle = {this.OpenSocialStyle()}/>
        </div>
      </div>
      </div>
    )
  }
}

export default Main
