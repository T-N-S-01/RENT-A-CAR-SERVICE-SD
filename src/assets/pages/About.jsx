// src/pages/About.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaCar, FaAward, FaHeart } from 'react-icons/fa';
import './About.scss';
import owner from '../img/owner.png';

const stats = [
  { icon: <FaCar />, value: 5, suffix: '+', label: 'Cars' },
  { icon: <FaUsers />, value: 500, suffix: '+', label: 'Happy Customers' },
  { icon: <FaAward />, value: 2026, suffix: '', label: 'Founded' },
  { icon: <FaHeart />, value: 100, suffix: '%', label: 'Customer Satisfaction' }
];

const About = () => {
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  const hasTriggeredRef = useRef(false);
  const hasTriggeredStatsRef = useRef(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredStatsRef.current) {
          hasTriggeredStatsRef.current = true;
          setStatsVisible(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) {
      return;
    }

    const duration = 1400;
    const startTime = window.performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setAnimatedStats(stats.map(({ value }) => Math.round(value * progress)));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    const animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [statsVisible]);
  
  return (
    <section className={`about-page ${isVisible ? 'is-visible' : ''}`} ref={aboutRef}>
      <Container>
        <div className="page-header text-center mb-5 reveal-block">
          <div className="hero-badge fade-up">Startup launched in 2026</div>
          <h1 className="page-title fade-up">About Safe Drive</h1>
          <p className="page-subtitle slide-right">A startup car rental business built for trusted, modern travel</p>
        </div>

        <div className="startup-strip mb-5 reveal-block">
          <div className="startup-pill">Founder-led</div>
          <div className="startup-pill" style={{ transitionDelay: '0.08s' }}>5+ Cars</div>
          <div className="startup-pill" style={{ transitionDelay: '0.16s' }}>Flexible Rentals</div>
          <div className="startup-pill" style={{ transitionDelay: '0.24s' }}>Local Service</div>
        </div>
        
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content reveal-block">
              <h2 className="about-heading">Who We Are</h2>
              <p>
                Safe Drive Rental Car Center is a startup business launched in 2026.
                We currently operate a growing fleet of 5+ cars and focus on safe,
                reliable, and affordable vehicle rental services.
              </p>
              <p>
                Located at Pottuvil Road, we are building a trusted rental service for
                customers in Monaragala and surrounding areas. Our goal is to deliver
                quality vehicles and dependable service from day one.
              </p>
              <div className="contact-info">
                <h3>Contact Us</h3>
                <p><strong>Location:</strong> Pottuvil Road, Monaragala</p>
                <p><strong>Phone:</strong> 077 368 5478 / 077 220 3007</p>
              </div>

              {/* <div className="founder-info">
                <h3>Founder</h3>
                <p><strong>Name:</strong> Ishan Sellahewa</p>
                <p><strong>Role:</strong> Founder &amp; Owner</p>
              </div> */}
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-image reveal-block">
              <div className="owner-card">
                <div className="owner-image-wrap">
                  <img src={owner} alt="Ishan Sellahewa" className="img-fluid owner-image" />
                </div>
                <div className="owner-caption">
                  <span className="owner-label">Founder &amp; Owner</span>
                  <h3>Ishan Sellahewa</h3>
                  <p>Driving Safe Drive forward with a startup mindset and customer-first service.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="vision-band mb-5 reveal-block">
          <div className="vision-card">
            <span className="vision-kicker">Built for growth</span>
            <h3>Clean process, modern fleet, quick response</h3>
            <p>We keep the rental experience simple, fast, and reliable while scaling carefully from our 2026 launch.</p>
          </div>
          <div className="vision-card" style={{ transitionDelay: '0.12s' }}>
            <span className="vision-kicker">Startup energy</span>
            <h3>Fresh brand, local trust</h3>
            <p>Our focus is on building long-term trust with every trip, every booking, and every customer conversation.</p>
          </div>
        </div>
        
        <div className={`stats-section ${statsVisible ? 'is-visible' : ''}`} ref={statsRef}>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index} className="mb-4">
                <div className="stat-card reveal-block" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{animatedStats[index]}{stat.suffix}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        <div className="mission-section text-center mt-5 reveal-block">
          <h2 className="mission-title">Our Mission</h2>
          <p>
            To provide safe, reliable, and affordable transportation solutions while 
            maintaining the highest standards of customer service and vehicle quality.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;