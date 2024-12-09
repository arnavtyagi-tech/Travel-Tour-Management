import React from "react";
import Slider from "react-slick";
import "./../styles/about.css";
import image1 from "../assets/images/gallery-01.jpg";
import image2 from "../assets/images/gallery-02.jpg";
import image3 from "../assets/images/gallery-03.jpg";
import image4 from "../assets/images/gallery-04.jpg";
import image14 from "../assets/images/tour-img07.jpg";
import image13 from "../assets/images/tour.jpg";
import image12 from "../assets/images/gallery-06.jpg";
import image11 from "../assets/images/image-copy.png";
import image5 from "../assets/images/tour-img06.jpg";
import image6 from "../assets/images/tour-img05.jpg";
import image7 from "../assets/images/tour-img04.jpg";
import image8 from "../assets/images/tour-img02.jpg";
import image9 from "../assets/images/tour-img03.jpg";
import image10 from "../assets/images/tour-img01.jpg";
import { FaPlane, FaMapMarkedAlt, FaHotel, FaUmbrellaBeach, FaPassport } from "react-icons/fa";


const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <span>❯</span>
  </div> 
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <span>❮</span>
  </div>
);

const AboutTravelWorld = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => <div className="custom-dot"></div>, 
  };

  return (
    <div className="aboutus-page">
      {/* Header Section */}
      <div className="aboutus-container">
        <div className="text-container">
          <h1 className="catchy-heading">
            <span className="travel">Travel</span> <span className="world">World</span>
          </h1>
          <h2 className="where-healing">Explore the World Your Way</h2>
          <h3 className="subheading">
            Embark on Unforgettable Adventures with{" "}
            <span className="text-secondary">Expert Planning</span> and{" "}
            <span className="text-secondary">Seamless Travel</span>
          </h3>
        </div>
        <div className="image-container">
          <div className="images-grid">
            <img src={image1} alt="Breathtaking destinations" className="header-image" />
            <img src={image2} alt="Luxury stays" className="header-image" />
            <img src={image3} alt="Exotic beaches" className="header-image" />
            <img src={image4} alt="Cultural experiences" className="header-image" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="heading">
          <h2 className="services-heading">
            Our Travel Services
          </h2>
        </div>
        <div className="services-container">
          <div className="service-box">
            <div className="service-icon">
              <FaPlane />
            </div>
            <h3 className="service-heading" style={{ color: "#f0f0f0", fontSize: "1.5rem", marginBottom: "10px", fontWeight: "normal"}}>Tour Bookings</h3>
            <p className="service-description">
              Seamless tour booking to destinations across the globe.
            </p>
          </div>
          <div className="service-box">             
            <div className="service-icon">
              <FaMapMarkedAlt />
            </div>
            <h3 className="service-heading" style={{ color: "#f0f0f0", fontSize: "1.5rem", marginBottom: "10px", fontWeight: "normal"}}>Cultural Experiences</h3>
            <p className="service-description">
              Explore local cultures through exclusive tours and events.
            </p>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <FaHotel />
            </div>
            <h3 className="service-heading" style={{ color: "#f0f0f0", fontSize: "1.5rem", marginBottom: "10px", fontWeight: "normal"}}>Subscriptions</h3>
            <p className="service-description">
              Unlock exclusive travel deals and benefits with our tailored subscription plans.
            </p>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <FaUmbrellaBeach />
            </div>
            <h3 className="service-heading" style={{ color: "#f0f0f0", fontSize: "1.5rem", marginBottom: "10px", fontWeight: "normal"}}>Beach Getaways</h3>
            <p className="service-description">
              Relax at exotic beach destinations with exclusive deals.
            </p>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <FaPassport />
            </div>
            <h3 className="service-heading" style={{ color: "#f0f0f0", fontSize: "1.5rem", marginBottom: "10px", fontWeight: "normal"}}>Local Travel Guides</h3>
            <p className="service-description">
              Explore your destination like a local with expert guides for every city.
            </p>
          </div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="slider-section" style={{ marginTop: "40px" }}>
        <h2 className="slider-heading">Explore Our Destinations</h2>
        <Slider {...sliderSettings}>
          <div>
            <img src={image7} alt="Destination 1" className="slider-image" />
          </div>
          <div>
            <img src={image6} alt="Destination 2" className="slider-image" />
          </div>
          <div>
            <img src={image5} alt="Destination 3" className="slider-image" />
          </div>
          <div>
            <img src={image14} alt="Destination 4" className="slider-image" />
          </div>
          <div>
            <img src={image13} alt="Destination 5" className="slider-image" />
          </div>
          <div>
            <img src={image12} alt="Destination 6" className="slider-image" />
          </div>
          <div>
            <img src={image11} alt="Destination 7" className="slider-image" />
          </div>
          <div>
            <img src={image8} alt="Destination 7" className="slider-image" />
          </div>
          <div>
            <img src={image9} alt="Destination 7" className="slider-image" />
          </div>
          <div>
            <img src={image10} alt="Destination 7" className="slider-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutTravelWorld;
