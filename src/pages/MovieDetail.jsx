import React, { useState, useEffect } from 'react';
import { movieState } from '../movieState';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  const [movies, setMovies] = useState(movieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url)[0];
    setMovie(currentMovie);
  }, [movies, url]);

  if (!movie) {
    return <div>Loading</div>;
  }

  return (
    <Details>
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
    </Details>
  );
};

const Details = styled.div`
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
    transform: translate(-50%, -10%);
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
  align-items: flex-start;
  justify-content: space-around;
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
