import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import homeProducts from '../components/homeProducts';
import { Link } from 'react-router-dom';
import { dataProvider } from '../components/reducer/initialreducer';
import ProductsviewData from '../components/ProductsviewData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cart.css';


function Cart() {
  const { removeFromCart,cartInfo, updateCount } = useContext(dataProvider);
  const price = 80000;

 
  const increaseQuantity = (item, id) => {
    const index = cartInfo.findIndex(element => element.id === id);
  
    if (index !== -1) {
      const updatedCart = [...cartInfo]; // Create a shallow copy of cartInfo
      updatedCart[index].count += 1; // Update the count
      updateCount(id, updatedCart[index].count); // Pass the new count to the updateCount function
    }
  };
  
  const decreaseQuantity = (item, id) => {
    const index = cartInfo.findIndex(element => element.id === id);
  
    if (index !== -1) {

      const updatedCart = [...cartInfo]; // Create a shallow copy of cartInfo
      if (updatedCart[index].count > 0) {
        updatedCart[index].count -= 1; // Update the count only if it is greater than 0
        if(updatedCart[index].count==0){
          const isremove = window.confirm('Are you sure you want to remove the product from the cart?');
          if (isremove) {
            // Perform the necessary action
            // Add your code here
            handleRemove(id)
            console.log('Action confirmed!');
          } else {
            updatedCart[index].count += 1;
            // User cancelled the action
            console.log('Action cancelled!');
          }
        }
        updateCount(id, updatedCart[index].count); // Pass the new count to the updateCount function
      }
    }
  };
  

const getTotalPrice = () => {
  return  price;
};

const handleRemove = (id) => {
removeFromCart(id)
};

const handlePlaceOrder = () => {

};


return (
  <div>
    <Header />

    <div className="cart-container" style={{ fontFamily: 'Chivo Mono' }}>
      <div className="row">
        <div className="col-8">
          <div className="card">
            {
            cartInfo.map  (item =>(
          
              <div className="productInfo" key={item.id}>

                <div className="imageContainer ">
                  <p className="Description">
                    <b>{ProductsviewData[item.id].Description}</b>
                  </p>
                  <img src={ProductsviewData[item.id].imgSrc} alt="img" className="cart-image" />




                  <p className="productTitle">
                    <b>{ProductsviewData[item.id].Name}</b>
                  </p>

                  <div className="productContent ">

                    <div className="price">₹ {ProductsviewData[item.id].Price["Original Price"]}</div>
                    <button className="removeButton" onClick={()=>handleRemove(item.id)} style={{ marginLeft: '250px', borderRadius: '5px' }}>
                      <FontAwesomeIcon icon={faTrash} size="lg" className="removeIcon" /> Remove
                    </button>
                  </div>
                </div>


                <div className="iconContainer">
                  <button className="iconButton" onClick={() => increaseQuantity(item,item.id)}>
                    <FontAwesomeIcon icon={faPlus} size="lg" className="icon" />
                  </button>
                  <span className="cart">
                    {item.count}
                  </span>
                  <button className="iconButton" onClick={() => decreaseQuantity(item,item.id)}>
                    <FontAwesomeIcon icon={faMinus} size="lg" className="icon" />
                  </button>
                </div>
              </div>

            ))
            }
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="priceDetails">
              <div className="priceItem">
                <div>
                  <b>Price (1 item) : </b> ₹ {getTotalPrice()}
                </div>
              </div>
              <div className="priceItem">
                <div>
                  <b>Delivery Charge : </b> Free
                </div>
              </div><hr />
              <div className="totalAmount">
                <div><b>Total Amount : </b> ₹ {getTotalPrice()}</div>
              </div><br />
              <div className="placeOrderButton">
                <Link to="/Checkout">
                  <center>
                    <button onClick={handlePlaceOrder} className="btn btn-primary">
                      Place Order
                    </button></center>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <center>
          <h1><b>
            Products<span style={{ color: '#fe2d02' }}> Available</span></b>
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
            <h4>{homeProducts.products[index].title}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
export default Cart;
