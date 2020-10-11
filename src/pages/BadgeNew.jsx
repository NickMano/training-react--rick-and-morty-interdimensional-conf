import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Badge from "../components/Badge/Badge";
import BadgeForm from "../components/BadgeForm/BadgeForm";

const BadgeNew = () => {
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
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={form.firstName ? form.firstName : "Nicolas"}
              lastName={form.lastName ? form.lastName : "Manograsso"}
              jobTitle={form.jobTitle ? form.jobTitle : "Team Manager camino a Engeneer Manager"}
              twitter={form.twitter ? form.twitter : "NicoManograsso"}
            />
          </div>
          <div className="col-6">
            <BadgeForm handleChange={handleChange} form={form} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
