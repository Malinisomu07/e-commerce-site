import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import bannerImage from '../assets/banner.png';
import homeProducts from '../components/homeProducts';
import '../styles/homepage.css';

function Home() {
  return (
    <div>
      <Header />
      <div className='banner-container'>
        <img src={bannerImage} alt="Shopping Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Go Shopping Without <span style={{ color: '#fe2d02', fontStyle: 'italic' }}>Makeup</span>!</h1>
        </div>
      </div>

      <div className="container">
        <h1>Products<span style={{ color: '#fe2d02' }}> Available</span></h1>

        <div className="product-container">
          {Object.keys(homeProducts.products).map((key, index) => (
            <div key={index} className="product-item">
              <img src={homeProducts.products[index].imgSrc} alt={`Product ${index + 1}`} className="product-image" /><br/><br/>
              <h5>{homeProducts.products[index].title}</h5>
              <Link to="/productlist">
                <button className='explore'>{homeProducts.products[index].buttonText}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
