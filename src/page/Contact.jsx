import React from 'react';
import ContactHero from '../components/ContactHero';
import Companies from '../components/Companies';
import Help from '../Help';
import Frequently from '../components/Frequently';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <ContactHero />
      <Companies />
      <Help />
      <Frequently />
      <Footer />
    </>
  );
}

export default Contact;
