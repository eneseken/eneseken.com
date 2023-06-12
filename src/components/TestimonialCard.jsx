import React from 'react'
import './styles/testimonials.css'

export default function TestimonialCard(props) {

    const {paragraph, img, name, job} = props;

  return (

    
    <div className="box" >
    <div className="card-container">
        <p>{paragraph}</p>
      </div>
      
      <div className="container-inner">
      <img className="circle" src={img} alt='profile'/>
        <div className="info-box">
          <div className="name">{name}</div>
          <div className="job">{job}</div>
        </div>
      </div>
      
    
  </div>
  )
}
