import React from 'react';
import styled from 'styled-components';
import { Toggle } from '../components';
import { useScroll } from './useScroll';
import { zoomAnimation } from '../animation';
import { About } from '../styles';
import { AnimateSharedLayout } from 'framer-motion';

function FaqSection() {
  const [element, controls] = useScroll();

  return (
    <Container>
      <Faq ref={element} variants={zoomAnimation} animate={controls}>
        <h2>
          Any questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title='How Do I Start?'>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit!</p>
            </div>
          </Toggle>
          <Toggle title='Daily Schedule'>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit!</p>
            </div>
          </Toggle>
          <Toggle title='Different Payment Methods'>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit!</p>
            </div>
          </Toggle>
          <Toggle title='What Products do you offer.'>
            <div className='answer'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit!</p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </Container>
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

const Container = styled.div`
  overflow: hidden;
`;

export default FaqSection;
