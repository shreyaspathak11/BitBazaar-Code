import React from 'react';
import { Navigate } from 'react-router-dom'; // Add missing import

import Carousel from './Carasol';
import AboutSection from './About';
import Testimonials from './Testimonial';
import LastSection from './LastSection';
import Hero from './Hero';
import Header from './Header';
import Footer from './Footer';

const Home = ({ isAuthenticated }) => {
  return (
    isAuthenticated ? (
      <>
        <Header />
        <Hero />
        <Carousel />
        <AboutSection />
        <Testimonials />
        <LastSection />
        <Footer />
      </>
    ) : (<Navigate to="/" />)
  );
};

export default Home;
