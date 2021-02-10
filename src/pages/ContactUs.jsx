import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUs = () => {
  return (
    <motion.div variants={pageAnimation} initial='initial' animate='animate' exit='exit'>
      Contact Us
    </motion.div>
  );
};

export default ContactUs;
