import React from 'react'
import './styles/footer.css'
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';

export default function Footer() {
  return (
<footer className="site-footer">

    <div className="container">

      <div className="row">

      
        <div className="categories-container">
          <h6>Latest Projects</h6>
          <ul className="footer-links">
            <li><a href="/">Car Rent</a></li>
            <li><a href="/">Job IT</a></li>
            <li><a href="/">Tic-Tac-Toe</a></li>
            <li><a href="/">Calculator</a></li>
          </ul>
        </div>

        <div className="links-container">
          <h6>Site Map</h6>
          <ul className="footer-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Discover My Projects</a></li>
            <li><a href="#skills">Discover My Skills</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
        

        <div className="about-container">
          <h6>Get the 2023 Front-End Web Developer Roadmap 🗺️</h6>
          <p className="text">This roadmap will provide you with a step-by-step journey and project ideas that will accelerate your career. Follow me on <a style={{color: '#fff'}} href='https://github.com/eneseken' target='blank'>github</a>  to get the roadmap.</p>
        </div>


      </div>

    </div>

    <div className='container' id='divider'>
      <div className='social-icons'>
      <a href='https://github.com/eneseken' target='blank'><FaGithub  size={20} color='#fff'/></a> 
      <a href='https://www.linkedin.com/in/enes-eken-5b4984233/' target='blank'><FaLinkedin size={20} color='#fff'/></a> 
      <a className='blank-link' href='/' target='_self'><FaDiscord size={20} color='#fff'/></a>
      <a className='blank-link' href='/' target='_self'><FaInstagram size={20} color='#fff'/></a>
      <a className='blank-link' href='/' target='_self'><FaTwitter size={20} color='#fff'/></a>
      <a className='blank-link' href='/' target='_self'><FaYoutube size={20} color='#fff'/></a>
      
      </div>
      <div className='copyright'>
      <p className='text'>Copyright © 2023 👻 Enes Eken All Rights Reserved.</p>
      </div>
    </div>

</footer>
  )
}
