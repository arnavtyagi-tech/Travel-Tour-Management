import React, { useEffect, useRef, useState,useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import NewsLetter from './../shared/Newsletter';
import useFetch from './../hooks/useFetch'; 
import { BASE_URL } from '../utils/config'; 
import {AuthContext} from './../context/AuthContext';



const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user}=useContext(AuthContext);

  // Fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // Destructure properties only if tour is defined
  const { photo, title, desc, price, address, reviews = [], city, distance, maxGroupSize } = tour || {};

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Format date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // Submit request to the server
  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
   
    try{
      if(!user || user===undefined ||user===null){
        alert("Please sign in");
      }

      const reviewObj={
        username:user?.username,
        reviewText,
        rating:tourRating
      }
      
      const res= await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })

      const result= await res.json()
      if(!res.ok){
        return alert(result.message)
      }
       alert(result.message);
    }catch(err){
      alert(err.message);
    }
    // later will call our api
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading......</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg='8'>
                <div className="tour__content">
                  <img src={photo} alt={title} />
                  <div className='tour__info'>
                    <h2>{title}</h2>
                    <div className='d-flex align-items-center gap-5'>
                      <span className='tour__rating d-flex align-items-center'>
                        <i className='ri-star-s-fill' style={{ color: "var(--secondary-color)", marginRight: '4px' }}></i>
                        {avgRating === 0 ? "Not rated" : `${avgRating} (${reviews.length})`}
                      </span>
                      <span>
                        <i className="ri-map-pin-user-fill" style={{ marginRight: '0px' }}></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span><i className="ri-map-pin-2-line" style={{ marginRight: '0px' }}></i> {city}</span>
                      <span><i className="ri-money-dollar-circle-line" style={{ marginRight: '0px' }}></i> ₹{price} /per person</span>
                      <span><i className="ri-map-pin-time-line" style={{ marginRight: '0px' }}></i> {distance} k/m</span>
                      <span><i className="ri-group-line" style={{ marginRight: '0px' }}></i> {maxGroupSize} people</span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  {/* Tour reviews section */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        {[1, 2, 3, 4, 5].map(rating => (
                          <span key={rating} onClick={() => setTourRating(rating)}>
                            {rating} <i className="ri-star-s-fill"></i>
                          </span>
                        ))}
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews.map((review, index) => (
                        <div key={index} className="review__item">
                          <img src={avatar} alt="Avatar" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating} <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* Tour reviews section end */}
                </div>
              </Col>

              <Col lg='4'>
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default TourDetails;