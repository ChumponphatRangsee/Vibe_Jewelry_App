import React from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HeroSection from '../components/Home/HeroSection';
import TrendingCarousel from '../components/Home/TrendingCarousel';
import InspirationGrid from '../components/Home/InspirationGrid';
import NewArrivals from '../components/Home/NewArrivals';

const Home = () => {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <HomeHeader />
      <HeroSection />
      <TrendingCarousel />
      <InspirationGrid />
      <NewArrivals />
    </div>
  );
};

export default Home;
