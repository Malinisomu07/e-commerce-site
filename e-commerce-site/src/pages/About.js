import React from 'react';
import Header from '../components/Header';
import bannerImage from '../assets/banner.png';


function About() {
  return (
    <div>
      <Header />
      <div className='banner-container'>
        <img src={bannerImage} alt="Shopping Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Go Shopping Without <span style={{ color: '#fe2d02', fontStyle: 'italic' }}>Makeup</span>!</h1>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.card}>
          <center>
            <h1>About Us</h1>
          </center>
          <p>
            <b>MYNTRA APP</b>
            <br />
            Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or iOS device today and experience shopping like never before!
            <br /><br />
            <b>HISTORY OF MYNTRA</b>
            <br />
            Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
            <br /><br />
            The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or iOS device this very minute to experience fashion like never before.
            <br /><br />
            <b>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</b>
            <br />
            Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
            <br /><br />
            Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved ones and avail our gift services for special occasions.
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
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: '30px',
    boxShadow: 'rgb(174 164 161 / 27%) 4px 4px 4px',
    padding: '20px',
    color: '#545454',
    width: '80%',
  },
};

export default About;
