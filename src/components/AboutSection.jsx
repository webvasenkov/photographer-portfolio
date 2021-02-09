import React from 'react';
import { motion } from 'framer-motion';
import { About, Description, Hide, Image } from '../styles';
import home1 from '../assets/images/home1.png';

const AboutSection = () => {
  return (
    <About className='about'>
      <Description className='description'>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image className='image'>
        <img src={home1} alt='Gay with a camera' />
      </Image>
    </About>
  );
};

export default AboutSection;
