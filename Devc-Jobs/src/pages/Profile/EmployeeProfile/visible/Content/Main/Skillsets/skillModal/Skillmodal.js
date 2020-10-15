import React, { Component } from 'react';
import  { FaAngleDown,  FaSearch } from 'react-icons/fa'
import "./Skillmodal.css"

class modal extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
     this.setState(
     {[name]: value}
    )
    console.log(event.target.value)
 }

  onFormSubmit = (event) => {
   event.preventDefault();
   this.setState({input: ''});
   this.props.handleSubmit(this.state.input)
  }

  render() {
    return (
      <div className ="modal" style = {this.props.OpenSkillStyle} ref = {this.props.setWrapperRef}>
      <p className = "font-weight-bold font-md">Add skill</p>
         <hr/>
        <div className = "search-field"> 
         <FaSearch className = "modal-icon search-icon"/>
         <input
         className = "input-skill"
         type = 'text'
         name= 'input'
         placeholder = "Enter skill..."
         value = {this.state.input}
          onChange = {this.handleChange}
         />
         <FaAngleDown className = " modal-icon color-primary-dark-blue down-icon"/>
         </div>
         <div className = "skill-button">
           <button onClick = {this.onFormSubmit}>Add skill</button>
         </div>
      </div>
    )
  }
}

export default modal
