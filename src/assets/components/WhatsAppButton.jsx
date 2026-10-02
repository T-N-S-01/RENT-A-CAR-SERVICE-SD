// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.scss';

const WhatsAppButton = () => {
  const phoneNumber = "94773685478";
  const message = "Hello! I'm interested in renting a car from Safe Drive.";
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppButton;