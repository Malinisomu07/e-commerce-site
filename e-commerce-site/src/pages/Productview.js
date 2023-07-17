import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import productviewdata from '../components/ProductsviewData';
import { dataProvider } from '../components/reducer/initialreducer';

function ProductView() {
  const {addtoCart} = useContext(dataProvider);

  const location = useLocation();
  const searchParameter = new URLSearchParams(location.search);
  const id = searchParameter.get('id');
  const product = productviewdata[id];


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div style={styles.productContainer}>
        <img src={product.imgSrc} alt={product.imgAlt} style={styles.productImage} />
        <div style={styles.productDescription}>
          <div style={styles.projectCard}>
            <h2 style={styles.heading}>{product.Name}</h2>
            <p style={styles.description}>{product.Description}</p>
            <div style={styles.productPrice}>
              <span style={styles.originalPrice}>
                <b>Original Price:</b> ₹ {product.Price['Original Price']}
              </span>
              <br />
              <br />
              <span style={styles.offerPrice}>
                <b>Offer Price:</b> ₹ {product.Price['Offer Price']}
              </span>
              <br />
            </div>
            <div style={styles.buttons}>
              <Link to="/Checkout">
                <button style={styles.button}>Buy now</button>
              </Link>
             
                <button onClick={()=>addtoCart(id)} style={styles.button}> Add to Cart</button>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;

const styles = {
  productContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    marginLeft: '200px',
    marginTop: '50px',
  },
  productImage: {
    width: '200px',
    height: 'auto',
    marginRight: '30px',
  },
  productDescription: {
    // flex: 1,
    marginLeft: '10px',
    width: '600px',
  },
  projectCard: {
    backgroundColor: 'rgb(255 255 255 / 52%)',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 10px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  productPrice: {
    marginBottom: '20px',
  },
  originalPrice: {
    textDecoration: 'line-through',
    marginRight: '10px',
  },
  offerPrice: {
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
  },
  button: {
    marginRight: '10px',
  },
};
