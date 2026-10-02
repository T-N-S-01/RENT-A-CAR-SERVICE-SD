// src/pages/Booking.jsx
import React, { useMemo, useState } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.scss';
import vehicles from '../data/vehicles';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleId: vehicles[0].id,
  });
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedVehicle = useMemo(
    () => vehicles.find(vehicle => vehicle.id === Number(formData.vehicleId)),
    [formData.vehicleId]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setImagePreview('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setImagePreview(String(reader.result || ''));
    reader.readAsDataURL(file);
  };

  const handleBooking = (event) => {
    event.preventDefault();
    if (selectedVehicle && pickupDate && returnDate) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const calculateDays = () => {
    if (pickupDate && returnDate) {
      const diffTime = Math.abs(returnDate - pickupDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const freeMileage = selectedVehicle ? calculateDays() * selectedVehicle.freeMileagePerDay : 0;
  const totalPrice = selectedVehicle ? selectedVehicle.price * calculateDays() : 0;
  
  return (
    <section className="booking-page">
      <Container>
        <div className="page-header text-center mb-5">
          <h1 className="page-title fade-up">Booking Details Form</h1>
          <p className="page-subtitle slide-right">Select a car, upload an image, and choose your rental dates</p>
        </div>
        
        {showSuccess && (
          <Alert variant="success" className="booking-alert">
            Booking submitted successfully! We'll contact you shortly.
          </Alert>
        )}
        
        <div className="booking-form-shell">
          <Form className="booking-form" onSubmit={handleBooking}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>

            <div className="date-grid mb-3">
              <Form.Group>
                <Form.Label>Pick-up Date</Form.Label>
                <DatePicker
                  selected={pickupDate}
                  onChange={date => setPickupDate(date)}
                  selectsStart
                  startDate={pickupDate}
                  endDate={returnDate}
                  minDate={new Date()}
                  className="form-control"
                  placeholderText="Select pick-up date"
                  dateFormat="MMMM d, yyyy"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Return Date</Form.Label>
                <DatePicker
                  selected={returnDate}
                  onChange={date => setReturnDate(date)}
                  selectsEnd
                  startDate={pickupDate}
                  endDate={returnDate}
                  minDate={pickupDate || new Date()}
                  className="form-control"
                  placeholderText="Select return date"
                  dateFormat="MMMM d, yyyy"
                  disabled={!pickupDate}
                  required
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Select Car</Form.Label>
              <Form.Select name="vehicleId" value={formData.vehicleId} onChange={handleChange}>
                {vehicles.map(vehicle => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.name} - {vehicle.type}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <p className='advancefee'><strong>Notice : </strong>Upload Advance Fee Bank Receipt</p>
              <Form.Label>Image Upload</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
            </Form.Group>

            <div className="form-preview mb-4">
              
              <div className="preview-card">
                {imagePreview ? (
                  <img src={imagePreview} alt="Uploaded preview" />
                ) : (
                  <div className="preview-placeholder">Uploaded image preview</div>
                )}
              </div>

              <div className="vehicle-card-preview">
                
                <img src={selectedVehicle.image} alt={selectedVehicle.name} />
                <div>
                  <h4>{selectedVehicle.name}</h4>
                  <p>{selectedVehicle.type}</p>
                  <span>LKR {selectedVehicle.price.toLocaleString()} / day</span>
                </div>
              </div>
            </div>

            {pickupDate && returnDate && (
              <div className="price-breakdown mb-4">
                <h5>Booking Summary</h5>
                <div className="breakdown-item">
                  <span>Days</span>
                  <span>{calculateDays()}</span>
                </div>
                <div className="breakdown-item">
                  <span>Free mileage</span>
                  <span>{freeMileage} km</span>
                </div>
                <div className="breakdown-item">
                  <span>Vehicle rate</span>
                  <span>LKR {selectedVehicle.price.toLocaleString()} / day</span>
                </div>
                <div className="breakdown-item">
                  <span>Price per km</span>
                  <span>{selectedVehicle.perKm}</span>
                </div>
                <div className="breakdown-item">
                  <span>Features</span>
                  <span>{selectedVehicle.features.join(', ')}</span>
                </div>
                <div className="breakdown-total">
                  <span>Total:</span>
                  <span>LKR {totalPrice.toLocaleString()}</span>
                </div>
                <div className='notice'>
                  <p><strong>Notice:</strong> The applicable rate per kilometer for any distance driven exceeding your allocated free mileage will be added to this total amount, based on the specific vehicle type.</p>
                </div>
              </div>
            )}

            <Button type="submit" className="btn-book w-100" disabled={!pickupDate || !returnDate}>
              Submit Booking
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default Booking;