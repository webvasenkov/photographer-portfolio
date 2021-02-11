import React from 'react';
import styled from 'styled-components';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeAnimation, photoAnimation } from '../animation';

const Movie = ({ title, mainImg, url, index }) => {
  const [element, controls] = useScroll();

  return (
    <MovieContainer ref={element} animate={controls} variants={fadeAnimation}>
      <Link to={url}>
        <Title variants={fadeAnimation}>{title}</Title>
        <Image>
          <motion.img variants={photoAnimation} src={mainImg} alt={title} />
        </Image>
      </Link>
    </MovieContainer>
  );
};

const MovieContainer = styled(motion.div)`
  position: relative;
  padding-bottom: 10rem;

  @media (max-width: 1300px) {
    padding-bottom: 5rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    filter: brightness(70%);
    @media (max-width: 468px) {
      height: 50vh;
    }
  }
`;

const Title = styled(motion.h2)`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  font-weight: 700;
  cursor: pointer;
  z-index: 1;
  color: #fff;

  @media (max-width: 468px) {
    top: 25%;
    transform: translate(-50%, -25%);
    font-size: 2rem;
  }
`;

const Image = styled.div`
  overflow: hidden;
  border-radius: 15px;
`;

export default Movie;
