import React from 'react';
import { Movie } from '../components';
import { motion } from 'framer-motion';
import { pageAnimation, sliderAnimation, slideAnimation } from '../animation';
import styled from 'styled-components';

const OurWork = ({ movies }) => {
  const movieList = movies.map((movie, index) => {
    const { title, mainImg, url } = movie;
    return <Movie key={movie.title} title={title} mainImg={mainImg} url={url} index={index} />;
  });

  return (
    <Work variants={pageAnimation} initial='initial' animate='animate' exit='exit'>
      <Frames variants={sliderAnimation}>
        <Frame1 variants={slideAnimation} />
        <Frame2 variants={slideAnimation} />
        <Frame3 variants={slideAnimation} />
        <Frame4 variants={slideAnimation} />
      </Frames>
      {movieList}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: #fff;

  h2 {
    padding: 1rem 0;
  }
`;

// Frame Animation
const Frames = styled(motion.div)`
  z-index: 2;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;

const createFrame = (color) => {
  return styled(Frame1)`
    background-color: ${color};
  `;
};

const Frame2 = createFrame('#ff8efb');
const Frame3 = createFrame('#8ed2ff');
const Frame4 = createFrame('#8effa0');

export default OurWork;
