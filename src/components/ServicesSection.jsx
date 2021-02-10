import React from 'react';
import styled from 'styled-components';
import { About, Description, Image } from '../styles';
import { useScroll } from './useScroll';
import { fadeAnimation } from '../animation';
import clock from '../assets/images/clock.svg';
import diaphragm from '../assets/images/diaphragm.svg';
import money from '../assets/images/money.svg';
import teamwork from '../assets/images/teamwork.svg';
import home2 from '../assets/images/home2.png';

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services className='services' ref={element} variants={fadeAnimation} animate={controls}>
      <Description>
        <h2>
          Hight <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='icon-clock' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} alt='icon-teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='icon-diaphragm' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} alt='icon-money' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image className='image'>
        <img src={home2} alt='camera' />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background-color: #fff;
      padding: 1rem;
      color: #000;
    }
  }
`;

export default ServicesSection;
