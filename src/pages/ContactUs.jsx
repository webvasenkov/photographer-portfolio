import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, fadeAnimation } from '../animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { ScrollTop } from '../components';

const ContactUs = () => {
  return (
    <Contact variants={pageAnimation} initial='initial' animate='animate' exit='exit'>
      <Hide>
        <Title variants={fadeAnimation}>Contact Us</Title>
      </Hide>
      <SocialNetworks variants={fadeAnimation}>
        <Social>
          <SocialLink href='https://github.com/webvasenkov' target='_blank'>
            <SocialIcon icon={faGithub} />
            GitHub
          </SocialLink>
        </Social>
        <Social>
          <SocialLink href='https://linkedin.com/in/webvasenkov/' target='_blank'>
            <SocialIcon icon={faLinkedin} />
            LinkedIn
          </SocialLink>
        </Social>
        <Social>
          <SocialLink href='https://t.me/webvasenkov' target='_blank'>
            <SocialIcon icon={faTelegram} />
            Telegram
          </SocialLink>
        </Social>
      </SocialNetworks>
      <ScrollTop />
    </Contact>
  );
};

const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
`;

const SocialNetworks = styled(motion.ul)`
  margin: 2.5rem 0 0 3rem;
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2.5rem 0 0 0;
  }
`;

const Social = styled.li`
  position: relative;
  margin: 0 2rem;
  @media (max-width: 768px) {
    margin: 0 0 2rem;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

export default ContactUs;
