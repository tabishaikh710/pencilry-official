import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import styles from "../style/bg.module.css";
import JobListingSection from '../components/JobListingSection';  // Correct import

function HomePage() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.homeHero}`}>
        <div className="container">
          <HeroSection />
        </div>
      </section>
  
      {/* Job Listing Section */}
      <JobListingSection /> {/* Correct component usage */}

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default HomePage;
