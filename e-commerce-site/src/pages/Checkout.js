import React, { useEffect,useState,useContext } from 'react';
import Header from '../components/Header';
import { dataProvider } from '../components/reducer/initialreducer';
import '../styles/checkout.css';



function Checkout() {
  const { removeFromCart,cartInfo, updateCount,addOrder,clearCart } = useContext(dataProvider);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [orderSummary, setOrderSummary] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [totalCount, setTotalCount] = useState(cartInfo.reduce((total, item) => {
    return total + item.count;
  }, 0));
  const [totalPrice, setTotalPrice] = useState(cartInfo.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0));


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOrderSummaryChange = (e) => {
    setOrderSummary(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const generateOrderId = () => {
    // Get the current timestamp
    const timestamp = Date.now().toString();

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    // Concatenate timestamp and random number to create the order ID
    const orderId = `${timestamp}-${randomNumber}`;
    setOrderId(orderId);
  };

  // useEffect hook to generate the order ID when the component mounts
  useEffect(() => {
    generateOrderId();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can process the order data, send it to the server, etc.
    const orderData = {
      orderId, // Add the generated order ID to the order data
      name,
      email,
      cartInfo,
      address,
      pincode,
      country,
      mobileNumber,
      orderSummary,
      paymentMethod,
      totalCount,
      totalPrice,
    };

    setIsOrderPlaced(true);

    addOrder(orderData);

    console.log('orderData', orderData);



    // Reset the form after submission
    setName('');
    setEmail('');
    setAddress('');
    setPincode('');
    setCountry('');
    setMobileNumber('');
    setOrderSummary('');
    setPaymentMethod('COD');
    clearCart()
  };



  return (
    <div>
      <Header />

      <div className="checkout-container">
        <center>
          <h2>Checkout</h2>
        </center>
        <div className="checkout-card">
          <div>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email ID:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                  required
                  className="form-control" 
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="pincode">Pin Code:</label>
                <input
                  type="text"
                  id="pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                  required
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={handleCountryChange}
                  required
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  required
                  className="form-control" 
                />
              </div>

              <div className="form-group1">
                <label htmlFor="orderSummary"><b> Order Summary : </b></label>
                

              <div className="form-group2">
                <label>Total Items:</label> 
                <input
                  id="orderSummary"
                  value={totalCount}
                  onChange={handleOrderSummaryChange}
                  required
                  className="form-control" >
                  </input>
                
              </div>

              <div className="form-group2">
                <label>Total Price: </label>
                <input
                  id="orderSummary"
                  value={totalPrice}
                  onChange={handleOrderSummaryChange}
                  required
                  className="form-control" >
                  </input>               

              </div>
              </div>

              


              <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  className="form-control" 
                >
                  <option value="COD">Cash on Delivery</option>
                  {/* <option value="Card">Credit/Debit Card</option>
                  <option value="Paypal">PayPal</option> */}
                </select>
              </div>

              {isOrderPlaced && (
                <div className="success-message">
                  Order Placed Successfully! <span role="img" aria-label="tick-mark">&#x2705;</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
