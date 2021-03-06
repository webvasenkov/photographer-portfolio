import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ScrollTop } from '../components';

const MovieDetail = ({ movies }) => {
  const history = useHistory();
  const url = history.location.pathname;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url)[0];
    setMovie(currentMovie);
  }, [movies, url]);

  if (!movie) {
    return <div>Loading</div>;
  }

  return (
    <Details variants={pageAnimation} initial='initial' animate='animate' exit='exit'>
      <HeadLine>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt={movie.title} />
      </HeadLine>
      <Awards>
        {movie.awards.map((award) => (
          <Award key={award.title} {...award} />
        ))}
      </Awards>
      <ImageDisplay>
        <img src={movie.secondaryImg} alt={movie.title} />
      </ImageDisplay>
      <ScrollTop />
    </Details>
  );
};

const Details = styled(motion.div)`
  color: #fff;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -65%);
    font-weight: 700;
    font-size: 3rem;
  }

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

const Awards = styled.ul`
  list-style: none;
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1300px) {
    margin: 5rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AwardStyle = styled.li`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    display: block;
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// Award component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <span className='line' />
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
