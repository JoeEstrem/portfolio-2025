import "./HousingJapan.css";
import useFadeInOnScroll from '../components/FadeInOnScroll';


import React from 'react';

function HousingJapan() {
useFadeInOnScroll('.fade-in-element');

  return (
      <div className="grid">

        <div className="col-12 fade-in-element">
          <h1>Housing Japan</h1>
        </div>

        <div className="landing-housing-japan fade-in-element">
          <div className="white-text-box">
            <p>Tokyo’s premier luxury real estate company, trusted by global clients for over two decades. From landmark developments by Mori Building to residences designed by renowned architect Kengo Kuma, Housing Japan represents the finest properties in Japan.</p>
            <p className="p-note">Identity design, social media, print media, e-mail, web design</p>
          </div>
        </div>

        <div className="text-block fade-in-element">
          <div className="col-4">
            <h2>Identity Design</h2>
          </div>
          <div className="col-4">
            <p>I started with creative ideation, followed by collaborating with a photographer to capture the necessary visuals. I then handled final editing and compiled the content into completed assets.</p>
          </div>
        </div>

        <div class="text-block fade-in-element">
          <div class="col-4">
            <h2>Social Media</h2>
          </div>
          <div class="col-4">
            <p>I started with creative ideation, followed by collaborating with a photographer to capture the necessary visuals. I then handled final editing and compiled the content into completed assets.</p>
          </div>
        </div>

        <div class="text-block fade-in-element">
          <div class="col-4">
            <h2>Other</h2>
          </div>
          <div class="col-4">
            <p>I started with creative ideation, followed by collaborating with a photographer to capture the necessary visuals. I then handled final editing and compiled the content into completed assets.</p>
          </div>
        </div>




      </div>
  );
}

export default HousingJapan;
