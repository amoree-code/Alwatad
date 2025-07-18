import React from "react";
import HeroAbout from "../components/HeroAbout";
import Companies from "../components/Companies";
import Mission from "../components/Mission";
import Offer from "../components/Offer";
import Founder from "../components/Founder";
import Incubator from "../components/Incubator";
import IncubatorAbout from "../components/IncubatorAbout";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <HeroAbout />
      <Companies />
      <Mission />
      <Offer />
      <Founder />
      <Incubator />
      <IncubatorAbout />
      <Footer />
    </>
  );
}

export default About;
