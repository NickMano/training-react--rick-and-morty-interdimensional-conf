import React from "react";
import "../styles/components/Badge.scss";

const BadgeForm = (props) => {
  return (
    <>
      <h1>NEW ATTENDANT</h1>
      <form className="badge-form">
        <label>First Name</label>
        <input type="text" name="firstName" />
        <label>Last Name</label>
        <input type="text" />
        <label>Mail</label>
        <input type="text" />
        <label>Job Title</label>
        <input type="text" placeholder="Short description" />
        <label>Twitter</label>
        <input type="text" placeholder="without @" />
        <button>Save</button>
      </form>
    </>
  );
};

export default BadgeForm;
