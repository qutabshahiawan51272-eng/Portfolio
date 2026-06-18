import React, { useState } from 'react';
import './Certifications.css';

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);

  const certificationsData = [
    {
      title: "WordPress Basics Certification",
      issuer: "BIIT (2025)",
      image: "/certificates/cert1.jpg"
    },
    {
      title: "ServiceNow Fundamentals Certification",
      issuer: "BIIT (January 20, 2024)",
      image: "/certificates/cert2.jpg"
    },
    {
      title: "Designing AI Chat Bots using Python",
      issuer: "BIIT AI Society (December 23, 2023)",
      image: "/certificates/cert3.jpg"
    },
    {
      title: "Winner — Naat Competition",
      issuer: "BIIT University (2024)",
      image: null
    },
    {
      title: "Winner — National Song Competition",
      issuer: "BIIT University (2023)",
      image: null
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">
          <span>My Credentials</span>
          Certifications & Achievements
        </h2>
        <div className="certifications-grid animate-on-scroll">
          {certificationsData.map((cert, index) => (
            <div className="cert-card card" key={index}>
              <div className="cert-icon-wrapper">
                <span className="cert-icon">🏆</span>
              </div>
              <h3 style={{marginTop: '1rem'}}>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.image && (
                <button 
                  className="btn btn-outline" 
                  onClick={() => setModalImage(cert.image)}
                  style={{marginTop: '1rem', padding: '0.4rem 1rem', fontSize: '0.85rem'}}
                >
                  View Certificate
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setModalImage(null)}>&times;</span>
            <img src={modalImage} alt="Certification" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
