import './Kohls.css';
import useFadeInOnScroll from '../components/FadeInOnScroll';
import NGaER1 from '../imgs/kohls/NGaET-1.mp4';
import NGaER2 from '../imgs/kohls/NGaET-2.mp4';
import NGaER3 from '../imgs/kohls/NGaET-3.mp4';
import NGaER4 from '../imgs/kohls/NGaET-4.mp4';
import SBC1 from '../imgs/kohls/SBC-1-1.mp4';
import SBC4 from '../imgs/kohls/SBC-4-1.mp4';



import React from 'react';

function Kohls() {
  useFadeInOnScroll('.fade-in-element');

  return (
      <div className="grid">

        <div className="col-12 fade-in-element">
          <h1>Kohl's</h1>
        </div>

        <div className="landing-kohls fade-in-element">
          <div className="white-text-box">
            <p>Kohl’s is one of the leading American retailers, dedicated to supporting families through life’s everyday moments.</p>
            <p className="p-note">Social media, print media</p>
          </div>
        </div>

        <div className="text-block fade-in-element">
          <div className="col-4">
            <h2>Social Media</h2>
          </div>
          <div className="col-4">
            <p>I started with creative ideation, followed by collaborating with a photographer to capture the necessary visuals. I then handled final editing and compiled the content into completed assets.</p>
          </div>
        </div>

        <div class="col-12 fade-in-element">
          <h3>New Gifts at Every Turn</h3>
          <p class="p-note">Facebook carousel</p>
        </div>

         <video autoPlay loop muted playsInline className="img-square-3-col fade-in-element">
          <source src={NGaER1} type="video/mp4" />
        </video>
        <video autoPlay loop muted playsInline className="img-square-3-col fade-in-element">
          <source src={NGaER2} type="video/mp4" />
        </video>
        <video autoPlay loop muted playsInline className="img-square-3-col fade-in-element">
          <source src={NGaER3} type="video/mp4" />
        </video>
        <video autoPlay loop muted playsInline className="img-square-3-col fade-in-element">
          <source src={NGaER4} type="video/mp4" />
        </video>


        <div class="col-12 fade-in-element">
          <h3 class="fade-in-element">Savannah Bee Company</h3>
          <p class="p-note">Instagram story</p>
        </div>
        <video autoPlay loop muted playsInline className="img-rectangle-3-col fade-in-element">
          <source src={SBC1} type="video/mp4" />
        </video>
         <img
            src={require('../imgs/kohls/SBC-2.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-3-col fade-in-element"
          />
         <img
            src={require('../imgs/kohls/SBC-3.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-3-col fade-in-element"
          />
          <video autoPlay loop muted playsInline className="img-rectangle-3-col fade-in-element">
            <source src={SBC4} type="video/mp4" />
          </video>

        <div class="col-12 fade-in-element">
          <h3>Product Highlights</h3>
          <p class="p-note">Pinterest Pins</p>
        </div>


          <img
            src={require('../imgs/kohls/kohls-pinterest-pin-15PO-mens-jackets.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-4-col fade-in-element"
          />
         <img
            src={require('../imgs/kohls/kohls-pinterest-pin-25PO-mens-style.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-4-col fade-in-element"
          />
          <img
            src={require('../imgs/kohls/kohls-pinterest-pin-shop-jason-wu.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-4-col fade-in-element hide-tablet-size"
          />


        <div class="text-block fade-in-element">
          <div class="col-4">
            <h2>Print Media</h2>
          </div>
          <div class="col-4">
            <p>I started with creative ideation, followed by collaborating with a photographer to capture the necessary visuals. I then handled final editing and compiled the content into completed assets.</p>
          </div>
        </div>

        <div class="col-12 fade-in-element">
          <h3>Welcome to the Neighborhood</h3>
          <p class="p-note">Home mailer</p>
        </div>

          <img
            src={require('../imgs/kohls/welcome-to-the-neighborhood-front.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-2-hor fade-in-element"
          />
          <img
            src={require('../imgs/kohls/welcome-to-the-neighborhood-back.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-2-hor fade-in-element"
          />

        <div class="col-12 fade-in-element">
          <h3>Home Sweet (New) Home</h3>
          <p class="p-note">Home mailer</p>
        </div>
         <img
            src={require('../imgs/kohls/Home-sweet-new-home-front.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-2-hor fade-in-element"
          />
          <img
            src={require('../imgs/kohls/Home-sweet-new-home-back.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-2-hor fade-in-element"
          />

      </div>
  );
}

export default Kohls;
