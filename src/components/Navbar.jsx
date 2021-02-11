import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { mobileAnimation, lineAnimation } from '../animation';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkWindowSize = (target) => {
      if (target.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkWindowSize(window);

    const handleResize = (event) => {
      checkWindowSize(event.target);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const NavLinks = () => (
    <ul>
      <li>
        <NavLink to='/'>About Us</NavLink>
        <Line {...lineAnimation('/', pathname)} />
      </li>
      <li>
        <NavLink to='/work'>Our Work</NavLink>
        <Line {...lineAnimation('/work', pathname)} />
      </li>
      <li>
        <NavLink to='/contact'>Contact Us</NavLink>
        <Line {...lineAnimation('/contact', pathname)} />
      </li>
    </ul>
  );

  const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <AnimatePresence>
        <Icon>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} onClick={() => setIsOpen(!isOpen)} size='2x' />
        </Icon>
        {isOpen && (
          <MobileContainer key='mobile' variants={mobileAnimation} initial='initial' animate='animate' exit='exit'>
            <NavLinks />
          </MobileContainer>
        )}
      </AnimatePresence>
    );
  };

  return (
    <Nav>
      <h1>
        <NavLink to='/' id='logo'>
          Portfolio
        </NavLink>
      </h1>
      {isMobile ? <NavMobile /> : <NavLinks />}
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 10vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 3;

  @media (max-width: 1300px) {
    padding: 1rem 2rem;
  }

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: 300;
  }

  ul {
    display: flex;
    list-style: none;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  li {
    padding-left: 10rem;
    position: relative;

    @media (max-width: 768px) {
      padding: 0;
      margin-bottom: 3rem;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const MobileContainer = styled(motion.div)`
  position: absolute;
  background-color: #232323;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  transition: all 0.3s ease-in-out;
`;

const Icon = styled(motion.div)`
  z-index: 1;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
`;

const Line = styled(motion.span)`
  display: block;
  height: 0.15rem;
  background: #23d997;
  width: 0%;
  bottom: -0.5rem;
  position: absolute;
`;

export default Navbar;
