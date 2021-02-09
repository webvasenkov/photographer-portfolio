import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <h1>
        <NavLink to='/' id='logo'>
          Portfolio
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to='/'>About Us</NavLink>
        </li>
        <li>
          <NavLink to='/work' href='#'>
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' href='#'>
            Contact Us
          </NavLink>
        </li>
      </ul>
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

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: 300;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Navbar;
