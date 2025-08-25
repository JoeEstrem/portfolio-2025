import "./Kollab.css";
import useFadeInOnScroll from '../components/FadeInOnScroll';


import React from 'react';

function Kollab() {
useFadeInOnScroll('.fade-in-element');

  return (
      <div className="grid">

        <div className="col-12 fade-in-element">
          <h1>Kollab</h1>
        </div>

        <div className="landing-kollab fade-in-element">
          <div className="white-text-box">
            <p>Find the perfect space for your work. Kollab is a curated online marketplace where artists and small gallery owners can collaborate to share art with communities.</p>
            <p className="p-note">Front-end development, identity design, UI/UX design, web design</p>
          </div>
        </div>

        <div className="text-block fade-in-element">
          <div className="col-4">
            <h2>Brand Identity</h2>
          </div>
          <div className="col-4">
            <p>When people think of art they imagine bursts of colors. When people think of galleries they image a clean pristine experience. The identity of Kollab combines those two concepts together to create a fun yet high-class presence.</p>
          </div>
        </div>

        <img
          src={require('../imgs/kollab/Kollab-Logo-gradient.png')}
          alt="Kollab - find the perfect place for your work. Logo."
          className="img-rectangle-8-col fade-in-element"
        />
        <img
          src={require('../imgs/kollab/kollab-brand-identity-mockup.jpg')}
          alt="Kollab - find the perfect place for your work. Logo."
          className="img-rectangle-4-col fade-in-element"
        />

        <div className="text-block fade-in-element">
          <div className="col-4">
            <h2>Web Design</h2>
          </div>
          <div className="col-4">
            <p>Design and devloped. </p>
          </div>
        </div>


           <img
          src={require('../imgs/kollab/Kollab-landing-1.jpg')}
          alt="Kollab - find the perfect place for your work. Logo."
          className="img-rectangle-8-col fade-in-element"
        />


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
            className="img-rectangle-4-col fade-in-element"
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

export default Kollab;
