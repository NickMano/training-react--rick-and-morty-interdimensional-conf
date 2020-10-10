import React, {useState} from "react";
import "../styles/components/BadgeForm.scss";

const BadgeForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [twitter, setTwitter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className='badge-form__container'>
      <h1>NEW ATTENDANT</h1>
      <form onSubmit={handleSubmit} className="badge-form">
        <label>First Name</label>
        <input 
          onChange={e => setFirstName(e.target.value)} 
          type="text" 
          name="firstName" 
          value={firstName} 
        />
        <label>Last Name</label>
        <input 
          onChange={e => setLastName(e.target.value)} 
          type="text" 
          name='lastName' 
          value={lastName} 
        />
        <label>Mail</label>
        <input 
          onChange={e => setMail(e.target.value)} 
          type="email" 
          name='mail' 
          value={mail}
        />
        <label>Job Title</label>
        <input 
          onChange={e => setJobTitle(e.target.value)} 
          type="text" 
          name='jobTitle' 
          value={jobTitle}
        />
        <label>Twitter</label>
        <input 
          onChange={e => setTwitter(e.target.value)} 
          type="text" 
          name='twitter' 
          value={twitter}  
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default BadgeForm;
