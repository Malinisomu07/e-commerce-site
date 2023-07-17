import React from 'react';
import Header from '../components/Header';
import ProductExplorer from '../components/ProductExplorer';
import { Link } from 'react-router-dom';
import productview from '../pages/Productview';



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
            <h3>{product.title}</h3>
            <p>{product.content}</p>
            <Link to= {`/Productview?id=${product.ID}`}>
              <button>{ProductExplorer.products[index].buttonText}</button>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Productlist;
