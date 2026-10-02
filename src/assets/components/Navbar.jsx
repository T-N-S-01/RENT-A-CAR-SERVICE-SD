// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaCar, FaBars } from 'react-icons/fa';
import logo from '../img/logo.png';
import './Navbar.scss';

const Navbar = ({ variant = 'default' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed={variant === 'default' ? 'top' : undefined}
      className={`navbar-transparent ${variant === 'hero' ? 'navbar-hero' : ''} ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="brand" onClick={() => setExpanded(false)}>
          <div className="logo-wrapper">
            <img src={logo} alt="Safe Drive" className="logo" onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }} />
            {/* <FaCar className="logo-fallback" /> */}
          </div>
          {/* <div className="brand-text">
            <span className="brand-name">Safe Drive</span>
            <span className="brand-tagline">Rental Car Center</span>
          </div> */}
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <FaBars />
        </BootstrapNavbar.Toggle>
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/booking">
              Booking
            </Nav.Link>
            <Nav.Link as={Link} to="/vehicles">
              Our Vehicles
            </Nav.Link>
            <Nav.Link as={Link} to="/join-us">
              Join With Us
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;