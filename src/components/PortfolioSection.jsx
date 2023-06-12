import React from 'react';
import './styles/portfolioSection.css'



function PortfolioSection() {

return (
    <section id='portfolio' className="portfolio-section">

    <div className="portfolio-section-box">
        <h2>Welcome To My <span>Portfolio</span></h2>
        <p>Welcome to my web design portfolio, where creativity comes to life. <br/> Explore and be inspired.</p>
        <video id="video" src="images/video.mp4" autoPlay muted loop playsInline/>
    </div>

    </section>
);
}

export default PortfolioSection;
