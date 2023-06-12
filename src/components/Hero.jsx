import React from 'react';
import Joyride from 'react-joyride';
import  { useState } from 'react';
import WordAnimation from './WordAnimation';
import './styles/hero.css'
import { CSSTransition } from 'react-transition-group';


const Hero = () => {
    const [showJoyride, setShowJoyride] = useState(false);
    const [joyrideSteps] = useState([
      {
        target: '.portfolio-section',
        content: 'Welcome To My Portfolio',
        placement: 'auto'
      },
      {
        target: '.about-section',
        content: 'About Me',
        placement: 'auto'
      },
      {
        target: '.projects-section',
        content: 'Discover My Projects',
        placement: 'auto'
      },
      {
        target: '.skills-section',
        content: 'Discover My Skills',
        placement: 'auto'
      },
      {
        target: '.testimonials-section',
        content: 'Testimonials',
        placement: 'auto'
      },
      {
        target: '.contact-section',
        content: 'Get in Touch',
        placement: 'auto'
      },
    ]);
  
    const handleJoyrideCallback = (data) => {
      const { status } = data;
  
      if (status === 'finished') {
        setShowJoyride(false);
      }
    };
  
    const handleExploreNow = () => {
      setShowJoyride(true);
    };
  
    return (
      <div id='home' className="center-container">

        <div className="outer-container">

        <CSSTransition
        in={true}
        appear={true}
        timeout={1500}
        classNames="slide-in-left"
      >

          <div className="middle-container">
            <div className="info-group">
              <h1 className="info-group-title">
                Hi, I'm <span className="name">Enes</span>
              </h1>
              <p className="info-group-about">
                I design and develop ‏ <WordAnimation />
              </p>
              <p className="info-group-about">I am studying cyber security</p>
  
              <div className="explore-now">
                <button onClick={handleExploreNow}>Explore Now</button>
              </div>
            </div>
          </div>

          </CSSTransition>
        
          <CSSTransition
        in={true}
        appear={true}
        timeout={1500}
        classNames="slide-in-right"
      >
        <div className="right-container">
            <img src="images/utils4m.png" alt="Resim" />
        </div>

      </CSSTransition>

    </div>
        
  
        <Joyride
          continuous
          scrollToFirstStep
          showProgress
          showSkipButton
          steps={joyrideSteps}
          run={showJoyride}
          callback={handleJoyrideCallback}
        
          styles={{
            options: {
              arrowColor: '#fff',
              backgroundColor: '#fff',
              primaryColor: '#151030',
              textColor: '#040615',
              width: 300,
              cursor: 'none'
            }
          }}

        />

      </div>
    );
  };
  
  export default Hero;