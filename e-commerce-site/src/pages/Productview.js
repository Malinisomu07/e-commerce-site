import React from 'react';
import Header from '../components/Header';
import macbookImage from '../assets/explore-img/macbook.png';

function ProductView() {
  return (
    <div>
      <Header />

      <div style={styles.container}>
        <div>
          <img src={macbookImage} alt="macbook" style={styles.image} />
          <div style={styles.buttons}>
            <button style={styles.button}>Buy now</button>
            <button style={styles.button}>Add to Cart</button>
          </div>
        </div>

        <div style={styles.card}>
          <p><b>Apple 2020 MacBook Air Laptop M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray</b></p>

          <p>
            <b>Visit the Apple Store</b><br/>
            4.8 out of 5 stars    19,529 ratings | 865 answered questions<br/>
            Amazon's Choice for "macbook air 13 inch"<br/>
            Climate Pledge Friendly Climate Pledge Friendly<br/>
            <b>Price:</b> $703.99
          </p>

          <p>
            <b>In Stock</b><br/>
            Capacity: 256GB<br/>
            Color: Space Gray
          </p>

          <p>
            <b>Brand:</b> Apple<br/>
            <b>Model Name:</b> MacBook Air<br/>
            <b>Screen Size:</b> 13.3 Inches<br/>
            <b>Color:</b> Space Gray<br/>
            <b>Hard Disk Size:</b> 256 GB<br/>
            <b>Ram Memory Installed Size:</b> 8 GB<br/>
            <b>Special Feature:</b> Backlit Keyboard<br/>
            <b>Graphics Card:</b> Description
          </p>

          <p>
            <b>About this item</b><br/>
            <b>All-Day Battery Life</b> – Go longer than ever with up to 18 hours of battery life.<br/>
            <b>Powerful Performance</b> – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.<br/>
            <b>Superfast Memory</b> – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.<br/>
            <b>Stunning Display</b> – With a 13.3 inch Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.
          </p>
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
      },
      image: {
        width: '100%',
        height: '300px',
        

        
      },
  buttons: {
    display: 'flex',
    marginTop: '20px',
  },
  button: {
    marginRight: '30px',
    marginLeft:'30px',
    padding: '10px 20px',
    backgroundColor: '#fe2d02',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  card: {
    backgroundColor: 'rgb(255 255 255 / 48%)',
    borderRadius: '30px',
    boxShadow: 'rgb(174 164 161 / 27%) 4px 4px 4px',
    padding: '20px',
    color: 'rgb(46 46 46)',
    marginLeft: '10%',
    marginTop: '40px',
    width: '40%',
  },
};

export default ProductView;
