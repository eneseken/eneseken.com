import React from 'react'
import './styles/skillsCard.css'

export default function SkillsCard(props) {

const {icon, title, desc} = props;

return (
    <div className="skills-card">
    <span className='skills-icon-container'>
        <img alt='icon' src={icon} />
    </span>
    <div className="title-container">
        <h2 className="card-title">{title}</h2>
    </div>
    <div className="content-container">
        <p> {desc} </p>
    </div>
    </div>
)
}
