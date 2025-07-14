import React from "react";
import Header from "./../components/header/Header";
import AboutTheIncubator from "../components/About the Incubator/AboutTheIncubator";
import FooterList from "../components/footer-list/FooterList";
import StartupJourney from "../components/Startup-Journey/StartupJourney";
import NetworkInnovation from "../components/NetworkInnovation/NetworkInnovation";
import MentorExpertNetwork from "../components/MentorExpertNetwork/MentorExpertNetwork";
export default function Home() {
  return (
    <>
      <div className="home ">
        <Header />
        <AboutTheIncubator />
        <FooterList />
        <StartupJourney />
        <NetworkInnovation />
        <MentorExpertNetwork />
      </div>
    </>
  );
}
