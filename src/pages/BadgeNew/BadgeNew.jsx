import React, {useState} from "react";
import './BadgeNew.scss'
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
      <Hero />
      <div className={`${cssClassName}__grid grid`}>
        <div className={`${cssClassName}__badge`}>
          <Badge
            firstName={form.firstName ? form.firstName : "Rick"}
            lastName={form.lastName ? form.lastName : "Sanchez"}
            jobTitle={form.jobTitle ? form.jobTitle : "Viajero interdimensional"}
            twitter={form.twitter ? form.twitter : "RickSanchez_C137_ok"}
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
