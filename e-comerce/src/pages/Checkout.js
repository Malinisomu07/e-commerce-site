import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/checkout.css';

function Checkout() {
  const [email, setEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderSummary, setOrderSummary] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleOrderSummaryChange = (e) => {
    setOrderSummary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />

      <div className="checkout-container">
        <center><h2>Checkout</h2></center>
        <div style={styles.card}>
        <div>
  <form onSubmit={handleSubmit} className="checkout-form">
    <div className="form-group">
      <label htmlFor="email">Email ID:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="address">Delivery Address:</label>
      <textarea
        id="address"
        value={deliveryAddress}
        onChange={handleAddressChange}
        required
      ></textarea>
    </div>

    <div className="form-group">
      <label htmlFor="summary">Order Summary:</label>
      <textarea
        id="summary"
        value={orderSummary}
        onChange={handleOrderSummaryChange}
        required
      ></textarea>
    </div>
    <button type="submit" className="submit-button">
      Place Order
    </button>
  </form>
</div>
</div>

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
      maxWidth: '800px',
      height: '350px',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      borderRadius: '5px',
      margin: '0 10px',
      marginTop:'20px',
      marginBottom:'80px',
    },

}

export default Checkout;
