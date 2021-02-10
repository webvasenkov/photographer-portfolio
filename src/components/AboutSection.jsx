import React from 'react';
import { motion } from 'framer-motion';
import { titleAnimation, fadeAnimation, photoAnimation } from '../animation';
import { About, Description, Hide, Image } from '../styles';
import { Wave } from '../components';
import home1 from '../assets/images/home1.png';

const AboutSection = () => {
  return (
    <About className='about'>
      <Description className='description'>
        <div className='title'>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact us</motion.button>
      </Description>
      <Image className='image'>
        <motion.img variants={photoAnimation} src={home1} alt='Gay with a camera' />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
