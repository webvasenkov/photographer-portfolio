import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { AboutSection, ServicesSection, FaqSection } from '../components';

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial='initial' animate='animate' exit='exit'>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
