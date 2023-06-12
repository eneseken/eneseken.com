import React from 'react'
import './styles/testimonials.css'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
return (
<section id='testimonials' className="testimonials-section">

<div className="testimonials-section-box">
    <span className="testimonials-text">WHAT OTHERS SAY</span>
    <h2>Testimonials</h2>
</div>

    <div className='main-container'>

    <TestimonialCard 
        paragraph = "I am writing to highly recommend Enes Eken for the position of web developer. During his tenure at auto.nl, Enes consistently impressed us with his exceptional technical skills and dedication to delivering outstanding websites. His proficiency in front-end and back-end development, coupled with his strong problem-solving abilities, make his an invaluable asset to any team."
        img = "images/KristianFulkerson.jpg"
        name = "Kristian Fulkerson"
        job = "Full Stack Developer"
    />

    <TestimonialCard 
        paragraph = "I had the pleasure of working with Enes, Enes displayed an exceptional understanding of web development principles and practices. His proficiency in HTML, CSS, and JavaScript, coupled with his expertise in front-end frameworks, allowed his to create visually stunning and highly functional websites. Enes's attention to detail and commitment is awesome"
        img = "images/RobertGregg.jpg"
        name = "Robert Gregg"
        job = "Software Developer | England"
        height={300}
    />

    <TestimonialCard 
        paragraph = "Throughout his works, Enes' technical expertise in web development was evident. His ability to write clean and efficient code, coupled with his proficiency in various programming languages and frameworks, enabled him to deliver exceptional websites and applications. Enes also excelled in front-end development, creating visually appealing and user-friendly interfaces."
        img = "images/MartijnBovée.jpg"
        name = "Martijn Bovée"
        job = "Freelance Software Developer"
        height={400}
    />
    </div>
    
    
    </section>
    

)
}
