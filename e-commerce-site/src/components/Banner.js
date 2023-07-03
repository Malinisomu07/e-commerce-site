import React from 'react';
import bannerImage from '../assets/banner.png';


function Banner() {
  return (
    <>
    <div className='banner-container'>
        <img src={bannerImage} alt="Shopping Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Go Shopping Without <span style={{ color: '#fe2d02', fontStyle: 'italic' }}>Makeup</span>!</h1>
        </div>
      </div>
      </>
  );
}

export default Banner;
