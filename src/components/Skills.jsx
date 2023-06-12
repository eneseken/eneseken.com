import React, { useEffect, useRef } from 'react';
import SkillsCard from './SkillsCard';
import './styles/skills.css';

const Skills = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      const carousel = carouselRef.current;
      const firstItem = carousel.querySelector('.carousel-item');
      const marginLeft = getComputedStyle(firstItem).marginLeft;

      firstItem.animate(
        { marginLeft: `-${marginLeft}` },
        { duration: 1000, fill: 'forwards' }
      );

      setTimeout(() => {
        firstItem.style.marginLeft = '0';
        carousel.querySelector('.carousel-inner').appendChild(firstItem);
      }, 1000);
    }, 1000);

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <section id='skills' className="skills-section">

    <div className="skills-section-box">
    <span className="skills-text">My Abilities</span>
        <h2>Discover My <span>Skills</span></h2>
    </div>

    <div className='skills-card-section'>
    <SkillsCard 
      icon="images/icons/icon1.png"
      title="Communicate Effectively"
      desc="Proficient in conveying ideas with clarity, utilizing active listening and adapting communication style to diverse audiences to ensure understanding and engagement."
    />
    
    <SkillsCard 
      icon="images/icons/icon2.png"
      title="Analytical Thinking"
      desc="Strong problem-solving ability, adept at breaking down complex issues, gathering relevant data, and applying logical reasoning to make informed decisions."
    />

    <SkillsCard 
      icon="images/icons/icon3.png"
      title="Creative Problem-Solving"
      desc="Innovative, critical thinker who generates unique solutions, pushing boundaries to overcome challenges and exceed expectations."
    />
    </div>
  

    <div className="container">
      <div className="carousel" ref={carouselRef}>

        <div className="divider">
            <h2 className="divider-title">Programs & Programing Langs I know</h2>
        </div>

        <div className="carousel-inner">
          <img className="carousel-item" src="https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/assets/tech/html.png?raw=true" alt="Slide 1" />
          <img className="carousel-item" src="https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/assets/tech/css.png?raw=true" alt="Slide 2" />
          <img className="carousel-item" src="https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/assets/tech/javascript.png?raw=true" alt="Slide 3" />
          <img className="carousel-item" src="https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/assets/tech/reactjs.png?raw=true" alt="Slide 4" />
          <img className="carousel-item" src="https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/assets/tech/tailwind.png?raw=true" alt="Slide 5" />
          <img className="carousel-item" src="https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/assets/tech/nodejs.png?raw=true" alt="Slide 6" />
          <img className="carousel-item" src="https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/assets/tech/git.png?raw=true" alt="Slide 7" />
          <img className="carousel-item" src="https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/assets/tech/figma.png?raw=true" alt="Slide 8" />
          <img className="carousel-item" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="Slide 9" />
      </div>

      </div>

    </div>

    </section>

    
  );
};

export default Skills;