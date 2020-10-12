import React from "react";
import "./BadgeForm.scss";

const BadgeForm = (props) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(props.form);
  }

  return (
    <div className='badge-form__container'>
      <h1>NEW ATTENDANT</h1>
      <form onSubmit={handleSubmit} className="badge-form">
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
        <button className="btn--primary">Save</button>
      </form>
    </div>
  );
};

export default BadgeForm;
