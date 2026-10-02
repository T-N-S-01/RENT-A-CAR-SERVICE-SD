// src/pages/JoinUs.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaCar, FaCheckCircle } from 'react-icons/fa';
import './JoinUs.scss';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', vehicleType: '', experience: '', message: '' });
  };
  
  return (
    <section className="joinus-page">
      <Container>
        <div className="page-header text-center mb-5">
          <h1 className="page-title fade-up">Join With Us</h1>
          <p className="page-subtitle slide-right">Become a partner driver and grow with Safe Drive</p>
        </div>
        
        {submitted && (
          <Alert variant="success" className="success-alert">
            <FaCheckCircle /> Thank you for your interest! We'll contact you within 48 hours.
          </Alert>
        )}
        
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="join-content slide-left">
              <h2>Why Partner With Safe Drive?</h2>
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon"><FaCar /></div>
                  <div>
                    <h4>Regular Income</h4>
                    <p>Earn a steady income with our competitive revenue sharing model</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><FaCheckCircle /></div>
                  <div>
                    <h4>Full Support</h4>
                    <p>24/7 customer and technical support for all our partners</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><FaEnvelope /></div>
                  <div>
                    <h4>Marketing Assistance</h4>
                    <p>We promote your vehicles through our platform and marketing channels</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="join-form slide-right">
              <h3>Partner Application Form</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label><FaUser /> Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label><FaEnvelope /> Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label><FaPhone /> Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label><FaCar /> Vehicle Type</Form.Label>
                  <Form.Select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="suv">SUV</option>
                    <option value="van">Van</option>
                    <option value="luxury">Luxury</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Driving Experience (Years)</Form.Label>
                  <Form.Control
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    placeholder="Years of driving experience"
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Additional Information</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about yourself..."
                  />
                </Form.Group>
                
                <Button type="submit" className="btn-submit w-100">
                  Submit Application
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinUs;