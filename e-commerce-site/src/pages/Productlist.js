import React from 'react';
import Header from '../components/Header';
import ProductExplorer from '../components/ProductExplorer';
import '../styles/explorer.css';

function Productlist() {
  return (
    <div>
      <Header />

      <div>
        <center>
          <h1 >Results</h1>
          <p>Price and other details may vary based on product size and color.</p>
        </center>
      </div>

      <div className="product-container">
        {ProductExplorer.products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imgSrc} alt={product.imgAlt} className="product-image" />
            <h2>{product.title}</h2>
            <p>{product.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productlist;
