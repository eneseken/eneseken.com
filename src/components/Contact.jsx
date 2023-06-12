import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Confetti from 'react-confetti';
import './styles/contact.css';

export default function Contact() {
const [isEmailSent, setIsEmailSent] = useState(false);

function sendEmail(e) {
    e.preventDefault();

    emailjs
    .sendForm('service_dlmbyp8', 'template_oaqgktb', e.target, 'XcWUqMUb3ymBdD2Cw')
    .then(
    (result) => {
        console.log(result.text);
        setIsEmailSent(true);
        setTimeout(() => {
        setIsEmailSent(false);
        }, 5000); 
    },
    (error) => {
        console.log(error.text);
    }
    );

e.target.reset();
}

return (
    <section id='contact' className="contact-section">
    <div className="contact-section-box">
        <span className="contact-text">Get in Touch</span>
        <h2>Contact.</h2>
    </div>

    <form className="contactForm" onSubmit={sendEmail}>
        <div className="inputBox">
        
        {isEmailSent && (
        <Confetti className='confetti'
            gravity={0.3} 
            recycle={false} 
            run={5} 
        />
        )}

        <input type="text" name='from_name' minLength="1" required />
        <span>Full Name</span>
        </div>

        <div className="inputBox">
        <input type="email" minLength="1" name="user_email" required />
        <span>Email</span>
        </div>

        <div className="inputBox">
        <textarea type="text" minLength="1" name="message" required></textarea>
        <span>Type your Message...</span>
        </div>

        <div className="inputBox">
        <input type="submit" minLength="2" value={isEmailSent ? 'Sent' : 'Send'} style={{ background: isEmailSent ? 'green' : '' }} />
        
        </div>
    </form>
    </section>
);
}