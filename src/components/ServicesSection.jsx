import React from 'react';
import clock from '../assets/images/clock.svg';
import diaphragm from '../assets/images/diaphragm.svg';
import money from '../assets/images/money.svg';
import teamwork from '../assets/images/teamwork.svg';
import home2 from '../assets/images/home2.png';
const ServicesSection = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          Hight <span>quality</span> services
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src={clock} alt='icon-clock' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='icon-teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={diaphragm} alt='icon-diaphragm' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={money} alt='icon-money' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={home2} alt='camera' />
      </div>
    </div>
  );
};

export default ServicesSection;
