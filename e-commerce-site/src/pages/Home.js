import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import homeProducts from '../components/homeProducts';
import '../styles/homepage.css'


function Home() {
  return (
    <div>
      <Header />
      <Banner/>
    
      <div>
        <center><h1>Products<span style={{ color: '#fe2d02' }}> Available</span></h1></center>
      </div>
      <div className="product-container">
        {Object.keys(homeProducts.products).map((key, index) => (
          <div key={index} className="product-item">
            <img src={homeProducts.products[index].imgSrc} alt={`Product ${index + 1}`} className="product-image" />
            <h2>{homeProducts.products[index].title}</h2>
            <button>{homeProducts.products[index].buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
