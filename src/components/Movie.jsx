import React from 'react';
import styled from 'styled-components';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeAnimation, lineAnimation, photoAnimation } from '../animation';

const Movie = ({ title, mainImg, url, index }) => {
  const [element, controls] = useScroll();

  return (
    <MovieContainer ref={element} animate={controls} variants={fadeAnimation}>
      <motion.h2 variants={fadeAnimation}>{title}</motion.h2>
      <motion.div variants={lineAnimation} className='line'></motion.div>
      <Link to={url}>
        <Image>
          <motion.img variants={photoAnimation} src={mainImg} alt={title} />
        </Image>
      </Link>
    </MovieContainer>
  );
};

const MovieContainer = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Image = styled.div`
  overflow: hidden;
`;

export default Movie;
