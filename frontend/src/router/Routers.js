// import React from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// import Home from './../pages/Home';
// import Tours from './../pages/Tours';
// import TourDetails from './../pages/TourDetails';
// import Login from './../pages/Login';
// import Register from './../pages/Register';
// import SearchResultList from './../pages/SearchResultList';
// import About from "./../pages/About";
// import ContactUs from "./../pages/Contact";
// import Thankyou from '../pages/Thankyou';
// import SubscriptionPage from '../pages/SubscriptionPage'; 

// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/register" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/tours" element={<Tours />} />
//       <Route path="/tours/:id" element={<TourDetails />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/tours/search" element={<SearchResultList />} />
//       <Route path='/thank-you'  element={<Thankyou />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<ContactUs />} />
//       <Route path="/subscribe" element={<SubscriptionPage />} />
//     </Routes>
//   );
// };

// export default Routers;





import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import About from './../pages/About'; // Importing the corrected About component
import ContactUs from './../pages/Contact';
import Thankyou from './../pages/Thankyou';
import SubscriptionPage from './../pages/SubscriptionPage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/thank-you" element={<Thankyou />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/subscribe" element={<SubscriptionPage />} />
    </Routes>
  );
};

export default Routers;
