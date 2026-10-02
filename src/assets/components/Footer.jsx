// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="footer-brand">
              <h3 className="footer-logo">Safe Drive</h3>
              <p className="footer-tagline">Rental Car Center</p>
            </div>
            <p className="footer-description">
              Your trusted partner for safe and comfortable car rentals. 
              We provide the best vehicles at affordable prices.
            </p>
          </Col>
          
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <p><FaMapMarkerAlt /> Pottuvil Road, Monaragala</p>
              <p><FaPhone /> 077 368 5478</p>
              <p><FaEnvelope /> info@safedrive.com</p>
            </div>
          </Col>
          
          <Col lg={4} md={12}>
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Safe Drive Rental Car Center. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;