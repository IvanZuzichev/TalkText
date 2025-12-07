import React from 'react';
import './Logo.css';
import logoImage from '../../assets/Logo/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <img 
          src={logoImage} 
          alt="VoiceNotes Logo" 
          className="logo-image"
        />
      </div>
      <div className="logo-text">
        <h1 className="logo-title">TalkText</h1>
        <p className="logo-subtitle">Ваш умный помощник</p>
      </div>
    </div>
  );
};

export default Logo;