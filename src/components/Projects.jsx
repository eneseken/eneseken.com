import React, { useState, useEffect } from 'react';
import './styles/projects.css';
import ProjectsCard from './ProjectsCard';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export default function Projects() {
const projects = [
    {
    image:'https://repository-images.githubusercontent.com/367734756/facb6b80-b5dc-11eb-98a5-d127459478a5',
    title: 'Password Manager',
    content: "This application is a three-page web app built using ReactJS and Bootstrap. It consists of three main pages: 'My Passwords', 'Generate Password', and the 'Home' page. The app's main feature is the ability to generate passwords and save them to the 'My Passwords' page using fetch and json-server",
    tags: ['#reactjs', '#bootstrap', '#fetch', '#json-server'],
    },
    {
    image: 'https://gcdn.bionluk.com/uploads/message/c6e0e14d-4b6f-4d05-9192-0bd4a019e204.png',
    title: 'Car Rental',
    content: 'This project is a simple car rental system designed and developed using PHP. The system allows users to browse and search for available cars based on their preferences such as car type, brand, or price range. They can proceed with the reservation by providing their personal details and rental period.',
    tags: ['#php', '#bootstrap'],
    },
    {
    image: 'images/excelapp.png',
    title: 'Excel Table Price App',
    content: 'This project is a price application program that allows you to get customized results using data from an Excel spreadsheet. This software allows users to select product features and make comparisons between different price options depending on their choices.',
    tags: ['#python', '#excel'],
    },
    {
    image: 'https://editor.analyticsvidhya.com/uploads/75412speech-recognition-python.png',
    title: 'Voice Assistant App',
    content: 
    "This Python application responds by voice to questions asked by the user. The audio received using the user's microphone is processed by the speech recognition element and tries to understand the user's question. Then, the application retrieves information from Wikipedia...",
    tags: ['#python', '#speech', '#wikipedia', '#assistant'],
    }
    
];

const [startIndex, setStartIndex] = useState(0);
  const [isFirstProject, setIsFirstProject] = useState(true);
  const [isLastProject, setIsLastProject] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1056);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNextProject = () => {
    if (startIndex + (isSmallScreen ? 1 : 2) < projects.length) {
      setStartIndex(startIndex + (isSmallScreen ? 1 : 2));
      setIsFirstProject(false);
      setIsLastProject(startIndex + (isSmallScreen ? 2 : 3) >= projects.length);
    }
  };

  const handlePreviousProject = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - (isSmallScreen ? 1 : 2));
      setIsFirstProject(startIndex - (isSmallScreen ? 1 : 2) === 0);
      setIsLastProject(false);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + (isSmallScreen ? 1 : 2));

  return (
    <section id='projects' className='projects-section'>
      <div className='projects-section-box'>
        <span className='mywork-text'>My Work</span>
        <h2 className='discover-my-projects'>
          Discover My <span>Projects</span>
        </h2>
        <p className='projects-desc'>
          Following projects showcase my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </p>
        <div className='projects-card-section'>

          <button className={`previous ${isFirstProject ? 'disabled' : ''}`} onClick={handlePreviousProject}>
            <FaAngleLeft />
          </button>

          {visibleProjects.map((project) => (
            <ProjectsCard
              key={project.title}
              image={project.image}
              title={project.title}
              content={project.content}
              tags={project.tags}
            />
          ))}

          <button className={`next ${isLastProject ? 'disabled' : ''}`} onClick={handleNextProject}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
}