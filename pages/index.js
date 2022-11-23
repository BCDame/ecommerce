import React from 'react';
import { Product , HeroBanner , FooterBanner } from '../components/index'

const Home = () => {
  return (
    <>
    <HeroBanner />
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <h2>Speakers of many variations</h2>
    </div>
    <div className='products-container'>
      {['product1','product2'].map((product) => product)}
    </div>
    <FooterBanner />
    </>
  )
}

export default Home;
