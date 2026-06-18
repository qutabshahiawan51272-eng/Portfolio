import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span>Get In Touch</span>
          Contact Me
        </h2>
        <div className="contact-content animate-on-scroll">
          <p className="contact-text">
            I'm currently available for new opportunities. Whether you have a question or just want to connect, I'll try my best to get back to you!
          </p>
          <div className="contact-links">
            <a href="mailto:umarfayyaz98466@gmail.com" className="contact-item card">
              <FiMail className="contact-icon" />
              <span>umarfayyaz98466@gmail.com</span>
            </a>
            <a href="tel:+923105298166" className="contact-item card">
              <FiPhone className="contact-icon" />
              <span>+92 310 5298166</span>
            </a>
            <a href="https://linkedin.com/in/umarfayyaz-/" target="_blank" rel="noreferrer" className="contact-item card">
              <FiLinkedin className="contact-icon" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Umar Fayyaz. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
