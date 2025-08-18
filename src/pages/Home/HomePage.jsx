import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Service_info from './Service_info';
import IndustrySection from '../Industry/IndustrySection';
import Industry from '../Industry/Industry';
import ContactSection from './ContactSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Service_info />
      <IndustrySection />
      <Industry />
      <ContactSection />
    </div>
  );
};

export default HomePage;
