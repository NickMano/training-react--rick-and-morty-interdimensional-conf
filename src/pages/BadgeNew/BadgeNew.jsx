import React, {useState} from "react";
import './BadgeNew.scss'
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Badge from "../../components/Badge/Badge";
import BadgeForm from "../../components/BadgeForm/BadgeForm";

const BadgeNew = () => {
  const cssClassName = "BadgeNew";

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    jobTitle: '',
    twitter: '',
  });

  const handleChange = e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
  }

  return (
    <>
      <Navbar />
      <Hero />
      <div className="grid">
        <div className={`${cssClassName}__badge`}>
          <Badge
            firstName={form.firstName ? form.firstName : "Rick"}
            lastName={form.lastName ? form.lastName : "Sanchez"}
            jobTitle={form.jobTitle ? form.jobTitle : "Viajero interdimensional"}
            twitter={form.twitter ? form.twitter : "RickSanchez"}
          />
        </div>
        <div className={`${cssClassName}__badgeForm`}>
          <BadgeForm handleChange={handleChange} form={form} />
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
