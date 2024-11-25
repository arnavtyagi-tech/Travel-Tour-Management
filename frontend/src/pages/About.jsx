import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import experienceImg from '../assets/images/experience.png';
import Subtitle from "./../shared/Subtitle";
import '../styles/about.css';
import '../styles/home.css';
import chatbotIcon from '../assets/images/imageLogo.png';

const About = () => {
  // State to toggle chatbot visibility
  const [showChatbot, setShowChatbot] = useState(false);

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <>
      {/* About Section */}
      <div className="about-image"></div>
      <div className="about-para">
        <h1>We are TravelWorld</h1>
        <p>
          Nurtured from the seed of a single idea to empower the traveller with easy & instant travel bookings providing comprehensive choices, TravelWorld is a pioneer in India’s online travel space. Founded by Deep Kalra in the year 2000, TravelWorld began its journey by serving the US-India travel market with best-value products & services, powered by robust technology and round-the-clock customer support.
        </p>
        <p>
          After successfully consolidating its position as a customer-first brand, known for its reliability and transparency, TravelWorld launched its India operations in 2005.
        </p>
        <p>
          As low-cost flight carriers were introduced in India, the number of Indians opting for online travel solutions also increased rapidly. And TravelWorld answered the call of the hour by bringing the convenience of booking flights, hotels, and holiday packages in just a few clicks.
        </p>
        <p>
          Over the years, we have partnered with many leading brands from the aviation & hospitality industries, creating fruitful partner relations for business expansion opportunities. We also entered the homestays & villas segment and continue to procure increased market share. With this, we also entered the ground transport space and commenced offering cab, bus & train booking services.
        </p>
        <p>
          What makes our story even stronger is the performance of our newly launched segments, like myBiz—our comprehensive business travel suite—and myPartner—an exclusive platform for travel agents. Entering the Gulf market is our latest feat, where we offer power-packed deals on flights & hotels.
        </p>
      </div>

      {/* Experience Section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle="Experience" />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Maxime amet quos nobis, facere dolorum deserunt officia.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="Experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Chatbot Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '30px',
          height: '100px',
          width: '100px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: '1000',
        }}
      >
        <img
          src={chatbotIcon}
          alt="Chatbot"
          style={{ width: '100px', height: '100px' }}
        />
      </button>

      {/* Chatbot iframe */}
      {showChatbot && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/17/07/20241117073438-229OFMC2.json"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            border: 'none',
            zIndex: '1000',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          title="Chatbot"
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
          }}
        ></iframe>
      )}
    </>
  );
};

export default About;
