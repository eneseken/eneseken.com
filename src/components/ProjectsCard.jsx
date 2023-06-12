import React from 'react'
import { useState } from 'react';
import './styles/projectsCard.css'

export default function ProjectsCard(props) {

const {image, title, content, tags} = props;
const [isHovered, setIsHovered] = useState(false);


const getTagColor = (tag) => {
    switch (tag) {
    case '#html':
        return '#E44A21';
    case '#css':
        return '#224BE4';
    case '#javascript':
        return '#E4A220';
    case '#reactjs':
        return '#20A5DC';
    case '#python':
        return '#E4A220';
    case '#php':
        return '#4f5b93';
    case '#bootstrap':
        return '#7C14FC';
    default:
        return 'linear-gradient(to left, #8961F6, #2980B9)';
    }
};


const handleHover = () => {
    setIsHovered(true);
};

const handleMouseLeave = () => {
    setIsHovered(false);
};



return (
    <div className="projects-card">

    <div className="image-container"
    onMouseEnter={handleHover}
    onMouseLeave={handleMouseLeave}
    >
    
    <span className='icon-container'>
        <img  alt='github' src='images/githublogo.png'/>
    </span>
    

    <a href="https://github.com/eneseken/" target='blank'>
    <img
    src={isHovered ? 'images/sitepreview.png' : image}
    alt=""
    className="card-image"
    />
    </a>
    
    
    

    </div>

    <div className="title-container">
        <h2 className="card-title">{title}</h2>
    </div>

    <div className="content-container">
        <p> {content} </p>
    </div>

    <div className="tags-container">
        {tags.map((tag) => (
          <p
            key={tag}
            style={{ background: getTagColor(tag) }}
            className="tag"
          >
            {tag}
          </p>
        ))}
    </div>

   

    
    </div>  
  )
}
