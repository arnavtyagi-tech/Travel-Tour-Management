import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Modal and Button
import '../styles/SubscriptionPage.css'; // Custom styles
import logos from '../assets/images/logo.png'; // Path to your logo image

const SubscriptionPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [membershipType, setMembershipType] = useState('regular'); // Default membership type
  const [discount, setDiscount] = useState(0);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [amount, setAmount] = useState(0); // Amount to be paid after discount
  const [showGratitude, setShowGratitude] = useState(false); // For showing gratitude popup

  // Define membership amounts
  const membershipAmounts = {
    regular: 1000, // Regular membership amount
    premium: 2000   // Premium membership amount
  };

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        console.log('Razorpay script loaded');
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleSubscribe = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Calculate discount based on the day of the week and membership type
    calculateDiscount();

    console.log(`Subscribing email: ${email}`);
    
    // Assuming subscription is successful:
    setIsSubscribed(true); // Update state to reflect subscription status
    setShowModal(true); // Show modal on successful subscription
  };

  const calculateDiscount = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 - Sunday, 6 - Saturday

    let weekendDiscount = 0;
    if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
      weekendDiscount = 10; // Example discount of 10%
    }

    let membershipDiscount = membershipType === 'premium' ? 10 : 0; // Premium members get an additional 10% discount

    // Total discount calculation
    setDiscount(weekendDiscount + membershipDiscount);
  };

  // Calculate total amount after discount
  const calculateTotalAmount = () => {
    const baseAmount = membershipAmounts[membershipType];
    const totalDiscount = discount;
    
    return baseAmount - (baseAmount * totalDiscount / 100);
  };

  const handleRazorpayPayment = () => {
    const totalAmount = calculateTotalAmount();

    if (window.Razorpay) {
      const options = {
        key: 'rzp_test_GFDuCQAYS65RbS', // Replace with your Razorpay key
        amount: totalAmount * 100, // Amount in smallest currency unit (paise)
        currency: 'INR',
        name: 'TravelEase',
        description: 'Tour Booking Payment',
        image: 'https://example.com/logo.png', // Replace with your logo URL
        handler: function (response) {
          // Trigger the falling stars effect when payment is successful
          setShowGratitude(true); // Show gratitude popup after successful payment
          createFallingStars(); // Trigger the falling stars animation
        },
        prefill: {
          name: 'Customer Name', // Replace with customer's name
          email: email, // Prefill with customer's email
          contact: '1234567890', // Replace with customer's contact number
        },
        notes: {
          address: 'Customer Address',
        },
        theme: {
          color: '#F37254',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      alert('Razorpay script not loaded');
    }
  };

  // Create falling stars effect
  const createFallingStars = () => {
    const container = document.createElement('div');
    container.className = 'falling-stars-container';

    // Generate 20 stars
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'falling-star';
      star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed
      container.appendChild(star);
    }

    // Append to body
    document.body.appendChild(container);

    // Remove stars after animation duration
    setTimeout(() => {
      document.body.removeChild(container);
    }, 5000); // Adjust the duration of the falling stars
  };

  const handleCloseGratitudePopup = () => {
    setShowGratitude(false); // Close gratitude popup
    window.location.reload(); // Reload the page to reset subscription process
  };

  return (
    <section className="subscription-page">
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <img src={logos} alt="Logo" className="logo mb-4" />
            <h2 className="mb-3">"Travel Easier, Travel Better: Join the Travel-Ease Family!"</h2>
            <p className="mb-4">Stay updated with our latest offers and news.</p>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="text-center">
            {isSubscribed ? (
              <div className="thank-you-message">
                <p className="text-success">Thank you for subscribing!</p>
                <p>Discount unlocked: {discount}%</p>
                <p>Premium Charges: ₹{calculateTotalAmount().toFixed(2)}</p>
                <Button onClick={handleRazorpayPayment} className="btn btn-success">
                  Pay Now
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="subscription-form">
                <div className="mail mb-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>

                <div className="membership mb-3">
                  <label htmlFor="membership">Select Membership Type:</label>
                  <select
                    id="membership"
                    value={membershipType}
                    onChange={(e) => setMembershipType(e.target.value)}
                    className="form-select"
                  >
                    <option value="regular">Regular - ₹{membershipAmounts.regular}</option>
                    <option value="premium">Premium - ₹{membershipAmounts.premium}</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-25">Subscribe</button>
              </form>
            )}
          </Col>
        </Row>
      </Container>

      {/* Gratitude Full Screen Popup */}
      {showGratitude && (
        <div className="gratitude-popup">
          <div className="gratitude-content">
            <h2>Thank You for Your Payment!</h2>
            <div className="stars">
              <span role="img" aria-label="star">🌟</span>
              <span role="img" aria-label="star">🌟</span>
              <span role="img" aria-label="star">🌟</span>
              <span role="img" aria-label="star">🌟</span>
              <span role="img" aria-label="star">🌟</span>
            </div>
            <p>Your transaction was successful, and we appreciate your support!</p>
            <Button onClick={handleCloseGratitudePopup} className="btn btn-primary">Close</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SubscriptionPage;

