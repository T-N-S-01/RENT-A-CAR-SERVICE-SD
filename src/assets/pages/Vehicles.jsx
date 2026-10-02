// src/pages/Vehicles.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGasPump, FaUsers, FaCog, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Vehicles.scss';
import vehicles from '../data/vehicles';

const Vehicles = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredVehicles = filter === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.type.toLowerCase() === filter.toLowerCase());
  
  return (
    <section className="vehicles-page">
      <Container>
        <div className="page-header text-center mb-5">
          <h1 className="page-title fade-up">Our Vehicle Fleet</h1>
          <p className="page-subtitle slide-right">Choose from our wide range of quality vehicles</p>
        </div>
        
        <div className="filter-section mb-5">
          <div className="filter-buttons">
            <Button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              All Vehicles
            </Button>
            <Button 
              className={filter === 'sedan' ? 'active' : ''} 
              onClick={() => setFilter('sedan')}
            >
              Sedans
            </Button>
            <Button 
              className={filter === 'hatchback' ? 'active' : ''} 
              onClick={() => setFilter('hatchback')}
            >
              Hatchbacks
            </Button>
            <Button 
              className={filter === 'Hybrid' ? 'active' : ''} 
              onClick={() => setFilter('Hybrid')}
            >
              Hybrid
            </Button>
            <Button 
              className={filter === 'Van' ? 'active' : ''} 
              onClick={() => setFilter('Van')}
            >
              Van
            </Button>
          </div>
        </div>
        
        <Row>
          {filteredVehicles.map((vehicle, index) => (
            <Col lg={4} md={6} key={vehicle.id} className="mb-4">
              <div className="vehicle-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="vehicle-image">
                  <img src={vehicle.image} alt={vehicle.name} />
                  <div className="vehicle-type-badge">{vehicle.type}</div>
                </div>
                <div className="vehicle-details">
                  <h3 className="vehicle-name">{vehicle.name}</h3>
                  <div className="vehicle-specs">
                    <span><FaUsers /> {vehicle.seats} Seats</span>
                    <span><FaCog /> {vehicle.transmission}</span>
                    <span><FaGasPump /> {vehicle.fuel}</span>
                  </div>
                  <div className="vehicle-features">
                    {vehicle.features.map((feature, i) => (
                      <Badge key={i} bg="light" text="dark">{feature}</Badge>
                    ))}
                  </div>
                  <div className="vehicle-price">
                    <span className="price">LKR {vehicle.price.toLocaleString()}</span>
                    <span className="per-day">/day</span>
                  </div>
                  <div className="vehicle-mileage">Free mileage   :  <strong>{vehicle.freeMileageLabel}</strong></div>
                  <div className="vehicle-KM">Price per km  :  <strong>{vehicle.perKm}</strong></div>
                  <Button as={Link} to="/booking" className="btn-book-now">
                    <FaCalendarAlt /> Book Now
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Vehicles;