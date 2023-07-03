import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import homeProducts from '../components/homeProducts';
import macbookImage from '../assets/explore-img/macbook.png';

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 80000; 

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const getTotalPrice = () => {
    return quantity * price;
  };

  const handleRemove = () => {
    
  };

  const handlePlaceOrder = () => {
    
  };

  return (
    <div>
      <Header />

      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.productInfo}>
            <div style={styles.imageContainer}>
              <img src={macbookImage} alt="macbook" style={styles.image} />
              <div style={styles.iconContainer}>
                <button style={styles.iconButton} onClick={increaseQuantity}>
                  <FontAwesomeIcon icon={faPlus} size="lg" style={styles.icon} />
                </button>
                <span style={styles.quantity}>{quantity}</span>
                <button style={styles.iconButton} onClick={decreaseQuantity}>
                  <FontAwesomeIcon icon={faMinus} size="lg" style={styles.icon} />
                </button>
              </div>
            </div>
            <div style={styles.productContent}>
              <p style={styles.productTitle}>
                <b>Apple 2020 MacBook Air Laptop M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray.</b>
              </p>
              <div style={styles.price}>₹ {getTotalPrice()}</div>
              <button style={styles.removeButton} onClick={handleRemove}>
                <FontAwesomeIcon icon={faTrash} size="lg" style={styles.removeIcon} />
                Remove
              </button>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.priceDetails}>
            <div style={styles.priceItem}>
              <div><b>Price (1 item):</b>  ₹ {getTotalPrice()}</div>   
            </div>
            <div style={styles.priceItem}>
              <div><b>Delivery Charge:</b> Free</div>
              
            </div>
            <div style={styles.totalAmount}>
              <div>Total Amount</div>
              <div>₹ {getTotalPrice()}</div>
            </div>
            <div style={styles.placeOrderButton}>
              <button onClick={handlePlaceOrder}>Place Order</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <center>
          <h1>
            Products<span style={{ color: '#fe2d02' }}> Available</span>
          </h1>
        </center>
      </div>
      <div className="product-container">
        {Object.keys(homeProducts.products).map((key, index) => (
          <div key={index} className="product-item">
            <img
              src={homeProducts.products[index].imgSrc}
              alt={`Product ${index + 1}`}
              className="product-image"
            />
            <h2>{homeProducts.products[index].title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderBottom: '1px solid black',
  },
  card: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    height: '300px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    margin: '0 10px',
    marginTop:'20px',
    marginBottom:'80px',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '200%',
    height: 'auto',
    marginBottom: '10px',
  },
  iconContainer: {
    position: 'absolute',
    bottom: '10px',
    right: '-40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-50px',
  },
  iconButton: {
    background: '#fe2d02',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    margin: '0',
  },
  icon: {
    margin: '4 5px',
    color: 'white',
  },
  quantity: {
    margin: '0 10px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
  },
  productContent: {
    marginLeft: '120px',
    flexGrow: 1,
    textAlign: 'justify',
  },
  productTitle: {
    marginBottom: '10px',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30px',
    color: 'red',
  },
  removeButton: {
    background: '#fe2d02',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    color: 'white',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  removeIcon: {
    marginRight: '5px',
  },
  priceDetails: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  priceItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  totalAmount: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  placeOrderButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
};

export default Cart;
