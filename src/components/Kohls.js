import './Kohls.css';
import useFadeInOnScroll from '../components/FadeInOnScroll';

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
        <div class="img-square-4 fade-in-element">

        </div>
        <div class="img-square-4 fade-in-element"></div>
        <div class="img-square-4 fade-in-element"></div>
        <div class="img-square-4 fade-in-element"></div>


        <div class="col-12 fade-in-element">
          <h3 class="fade-in-element">Savannah Bee Company</h3>
          <p class="p-note">Instagram story</p>
        </div>
        <div class="img-square-4 fade-in-element"></div>
        <div class="img-square-4 fade-in-element"></div>
        <div class="img-square-4 fade-in-element"></div>
        <div class="img-square-4 fade-in-element"></div>

        <div class="col-12 fade-in-element">
          <h3>Product Highlights</h3>
          <p class="p-note">Pinterest Pins</p>
        </div>


          <img
            src={require('../imgs/kohls/kohls-pinterest-pin-15PO-mens-jackets.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-2 fade-in-element"
          />
         <img
            src={require('../imgs/kohls/kohls-pinterest-pin-25PO-mens-style.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-2 fade-in-element"
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
            src={require('../imgs/kohls/welcome-to-the-neighborhood-front.jpg')}
            alt="Kohl's 15% off mens jackets Pinterest pin"
            className="img-rectangle-2-hor fade-in-element"
          />

        <div class="col-12 fade-in-element">
          <h3>Home Sweet (New) Home</h3>
          <p class="p-note">Home mailer</p>
        </div>
        <div class="img-rectangle-2-hor fade-in-element"></div>
        <div class="img-rectangle-2-hor fade-in-element"></div>
      </div>
  );
}

export default Kohls;
