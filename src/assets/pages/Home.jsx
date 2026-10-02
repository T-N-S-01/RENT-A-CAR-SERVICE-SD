// src/pages/Home.jsx
import React, { useMemo, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCar, FaShieldAlt, FaHeadset, FaClock, FaStar, FaRegStar, FaImage, FaPaperPlane } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import heroVideo from '../video/V1.mp4';
import aquaImg from '../img/aqua.png';
import eliteImg from '../img/elite.png';
import wagonRImg from '../img/wagon r.png';
import './Home.scss';

const Home = () => {
  const initialReviews = useMemo(() => ([
    {
      id: 1,
      name: 'Kasun Perera',
      rating: 5,
      review: 'Smooth booking, friendly service, and the car was in excellent condition.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
    },
    {
      id: 2,
      name: 'Nimal Fernando',
      rating: 4,
      review: 'Very reliable and affordable. The pickup process was quick and easy.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400'
    },
    {
      id: 3,
      name: 'Chathu Silva',
      rating: 5,
      review: 'Great support and a clean vehicle. I will definitely book again.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    }
  ]), []);

  const features = [
    { icon: <FaCar />, title: 'Premium Fleet', desc: 'Wide range of well-maintained vehicles' },
    { icon: <FaShieldAlt />, title: 'Full Insurance', desc: 'Comprehensive coverage for your safety' },
    { icon: <FaHeadset />, title: '24/7 Support', desc: 'Round-the-clock customer assistance' },
    { icon: <FaClock />, title: 'Flexible Booking', desc: 'Easy cancellation and rescheduling' }
  ];

  const cars = [
    {
      name: 'Toyota Aqua',
      image: aquaImg,
      type: 'Hybrid Hatchback',
      price: 'From LKR 6,000/day',
      size: 'large'
    },
    {
      name: 'Toyota Elite',
      image: eliteImg,
      type: 'Hatchback',
      price: 'From LKR 4,500/day',
      size: 'medium'
    },
    {
      name: 'Suzuki Wagon R',
      image: wagonRImg,
      type: 'Hatchback',
      price: 'From LKR 5,000/day',
      size: 'compact'
    }
  ];

  const videos = [heroVideo, heroVideo, heroVideo, heroVideo];
  const [reviews, setReviews] = useState(initialReviews);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    review: ''
  });
  const [reviewImagePreview, setReviewImagePreview] = useState('');

  const handleReviewChange = (event) => {
    const { name, value } = event.target;
    setReviewForm(previous => ({ ...previous, [name]: value }));
  };

  const handleReviewImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setReviewImagePreview('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setReviewImagePreview(String(reader.result || ''));
    reader.readAsDataURL(file);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    setReviews(previous => [
      {
        id: Date.now(),
        name: reviewForm.name,
        rating: Number(reviewForm.rating),
        review: reviewForm.review,
        image: reviewImagePreview || `https://ui-avatars.com/api/?name=${encodeURIComponent(reviewForm.name || 'Customer')}&background=0d6efd&color=fff`
      },
      ...previous
    ]);

    setReviewForm({ name: '', rating: 5, review: '' });
    setReviewImagePreview('');
  };

  const renderStars = (rating) => (
    Array.from({ length: 5 }).map((_, index) => (
      index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
    ))
  );
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <Navbar variant="hero" />
        <div className="hero-overlay"></div>
        <Container className="hero-container">
          <div className="hero-content fade-up">
            <h1 className="hero-title">
              <span className="title-line">Drive with</span>
              <span className="brand-lockup">
                <span className="SAFE">SAFE</span>
                <span className="brand-divider" aria-hidden="true"></span>
                <span className="DRIVE">DRIVE</span>
              </span>
              <span className="title-highlight">Confidence & Safety</span>
            </h1>
            <p className="hero-subtitle">
              Experience the best car rental service in Monaragala. Quality vehicles, competitive prices, and exceptional service.
            </p>
            <div className="hero-buttons">
              <Button as={Link} to="/booking" className="btn-primary btn-lg">
                Book Now
              </Button>
              <Button as={Link} to="/vehicles" className="btn-outline btn-lg">
                View Vehicles
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Ticker */}
      <section className="ticker-section ticker-section--hero" aria-hidden="true">
        <div className="ticker-track">
          <span>Premium Vehicles</span>
          <span>Easy Booking</span>
          <span>Safe Drive</span>
          <span>Premium Vehicles</span>
          <span>Easy Booking</span>
          <span>Safe Drive</span>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title slide-left">Why Choose Safe Drive?</h2>
            <p className="section-subtitle slide-right">
              We provide the best car rental experience in the region
            </p>
          </div>
          <Row className="mt-5">
            {features.map((feature, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="feature-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Cars Section */}
      <section className="cars-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title slide-left">Featured Cars</h2>
            <p className="section-subtitle slide-right">
              A quick look at some of our popular rental options
            </p>
          </div>

          <Row className="mt-5">
            {cars.map((car, index) => (
              <Col lg={4} md={6} key={car.name} className="mb-4">
                <div className={`car-card car-card--${car.size} fade-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="car-image">
                    <img src={car.image} alt={car.name} />
                  </div>
                  <div className="car-details">
                    <span className="car-type">{car.type}</span>
                    <h3 className="car-name">{car.name}</h3>
                    <p className="car-price">{car.price}</p>
                    <Button as={Link} to="/vehicles" className="btn-car">
                      View Vehicles
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Hero Ticker */}
      <section className="ticker-section ticker-section--hero" aria-hidden="true">
        <div className="ticker-track">
          <span>Premium Vehicles</span>
          <span>Easy Booking</span>
          <span>Safe Drive</span>
          <span>Premium Vehicles</span>
          <span>Easy Booking</span>
          <span>Safe Drive</span>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="video-section">
        <Container fluid className="p-0 video-section__container">
          <Row className="g-0 video-grid">
            {videos.map((video, index) => (
              <Col lg={6} md={6} key={index} className="p-0">
                <div className="video-card fade-up" style={{ animationDelay: `${index * 0.08}s` }}>
                  <video
                    className="video-card__media"
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Video Ticker */}
      <section className="ticker-section ticker-section--video" aria-hidden="true">
        <div className="ticker-track">
          <span>Vehicle Videos</span>
          <span>Watch Our Fleet</span>
          <span>Drive with Confidence</span>
          <span>Vehicle Videos</span>
          <span>Watch Our Fleet</span>
          <span>Drive with Confidence</span>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to hit the road?</h2>
            <p className="cta-subtitle">Book your perfect car today and enjoy the journey</p>
            <Button as={Link} to="/booking" className="btn-cta btn-lg">
              Start Your Journey
            </Button>
          </div>
        </Container>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title slide-left">Customer Reviews</h2>
            <p className="section-subtitle slide-right">
              Share your feedback and see what our customers say about Safe Drive
            </p>
          </div>

          <Row className="reviews-layout mt-5">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="review-form-card fade-up">
                <div className="review-form-heading">
                  <FaPaperPlane />
                  <div>
                    <h3>Leave Your Feedback</h3>
                    <p>Upload your image, choose a star rating, and write your review.</p>
                  </div>
                </div>

                <Form className="review-form" onSubmit={handleReviewSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={reviewForm.name}
                      onChange={handleReviewChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Star Rate</Form.Label>
                    <div className="star-picker" aria-label="Select star rating">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          className={`star-button ${Number(reviewForm.rating) >= value ? 'active' : ''}`}
                          onClick={() => setReviewForm(previous => ({ ...previous, rating: value }))}
                          aria-label={`${value} star${value > 1 ? 's' : ''}`}
                        >
                          <FaStar />
                        </button>
                      ))}
                      <span className="star-value">{reviewForm.rating}/5</span>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="review"
                      value={reviewForm.review}
                      onChange={handleReviewChange}
                      placeholder="Write your experience here..."
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Upload Your Image</Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={handleReviewImageUpload} />
                  </Form.Group>

                  <div className="review-upload-preview mb-4">
                    {reviewImagePreview ? (
                      <img src={reviewImagePreview} alt="Review upload preview" />
                    ) : (
                      <div className="review-upload-placeholder">
                        <FaImage />
                        <span>Image preview</span>
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="btn-review-submit w-100">
                    Submit Review
                  </Button>
                </Form>
              </div>
            </Col>

            <Col lg={7}>
              <Row>
                {reviews.map((review, index) => (
                  <Col md={6} className="mb-4" key={review.id}>
                    <div className="review-card fade-up" style={{ animationDelay: `${index * 0.08}s` }}>
                      <div className="review-card__image">
                        <img src={review.image} alt={review.name} />
                      </div>
                      <div className="review-card__body">
                        <div className="review-card__stars">{renderStars(review.rating)}</div>
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;