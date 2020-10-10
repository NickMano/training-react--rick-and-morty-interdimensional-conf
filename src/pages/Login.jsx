import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

const Login = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName="Nicolas"
              lastName="Manograsso"
              jobTitle="Team Manager camino a Engeneer Manager"
              twitter="NicoManograsso"
            />
          </div>
          <div className="col-6">
            <BadgeForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
