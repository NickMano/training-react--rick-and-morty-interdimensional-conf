import React from "react";
import "./BadgeForm.scss";

const BadgeForm = (props) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(props.form);
  }

  return (
      <form onSubmit={handleSubmit} className="badge-form">
        <h2>NEW ATTENDANT</h2>
        <hr />
        <label>First Name</label>
        <input 
          onChange={props.handleChange} 
          type="text" 
          name="firstName" 
          value={props.form.firstName} 
        />
        <label>Last Name</label>
        <input 
          onChange={props.handleChange} 
          type="text" 
          name='lastName' 
          value={props.form.lastName} 
        />
        <label>Mail</label>
        <input 
          onChange={props.handleChange} 
          type="email" 
          name='mail' 
          value={props.form.mail}
        />
        <label>Job Title</label>
        <input 
          onChange={props.handleChange} 
          type="text" 
          name='jobTitle' 
          value={props.form.jobTitle}
        />
        <label>Twitter</label>
        <input 
          onChange={props.handleChange} 
          type="text" 
          name='twitter' 
          value={props.form.twitter}  
        />
        <button className="btn btn--terciary">Save</button>
      </form>
  );
};

export default BadgeForm;
