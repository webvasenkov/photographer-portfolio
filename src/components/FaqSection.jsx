import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>

      <div className='question'>
        <h4>How Do I Start?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit!</p>
        </div>
        <span className='faq-line' />
      </div>
      <div className='question'>
        <h4>Daily Schedule</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit!</p>
        </div>
        <span className='faq-line' />
      </div>
      <div className='question'>
        <h4>Different Payment Methods</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit!</p>
        </div>
        <span className='faq-line' />
      </div>
      <div className='question'>
        <h4>What Products do you offer.</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit!</p>
        </div>
        <span className='faq-line' />
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: 300;
  }

  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
