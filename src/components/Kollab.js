import "./Kollab.css";
import useFadeInOnScroll from '../components/FadeInOnScroll';

import React from 'react';

function Kollab() {
  useFadeInOnScroll('.fade-in-element');

  return (
      <div class="grid">

        <div class="col-12 fade-in-element">
          <h1>Kollab</h1>
        </div>

        <div class="landing fade-in-element">
          <div class="white-text-box">
            <p>Find the perfect space for you work. Kollab is a curated online marketplace where artists and small gallery owners can collaborate to share art with communities.</p>
            <p class="p-note">Identity design, web design, front-end development</p>
          </div>
        </div>

        <div class="text-block fade-in-element">
          <div class="col-4">
            <h2>Brand Identity</h2>
          </div>
          <div class="col-4">
            <p>When people think of art they imagine bursts of colors. When people think of galleries they image a clean pristine experience. The identity of Kollab combines those two concepts together to create a fun yet high-class presence.</p>
          </div>
        </div>

        <div class="col-12">
          <h3>New Gifts at Every Turn</h3>
          <p class="p-note">Facebook carousel</p>
        </div>
        <div class="img-square-4"></div>
        <div class="img-square-4"></div>
        <div class="img-square-4"></div>
        <div class="img-square-4"></div>

        <div class="col-12">
          <h3>Savannah Bee Company</h3>
          <p class="p-note">Instagram story</p>
        </div>
        <div class="img-square-4"></div>
        <div class="img-square-4"></div>
        <div class="img-square-4"></div>
        <div class="img-square-4"></div>

        <div class="col-12">
          <h3>Prodcut Highlights</h3>
          <p class="p-note">Pinterest Pins</p>
        </div>
        <div class="img-rectangle-2"></div>
        <div class="img-rectangle-2"></div>

        <div class="text-block">
          <div class="col-4">
            <h2>Print Media</h2>
          </div>
          <div class="col-4">
            <p>I started with creative ideation, followed by collaborating with a photographer to capture the necessary visuals. I then handled final editing and compiled the content into completed assets.</p>
          </div>
        </div>

        <div class="col-12">
          <h3>Welcome to the Neighborhood</h3>
          <p class="p-note">Home mailer</p>
        </div>
        <div class="img-rectangle-2-hor"></div>
        <div class="img-rectangle-2-hor"></div>

        <div class="col-12">
          <h3>Home Sweet (New) Home</h3>
          <p class="p-note">Home mailer</p>
        </div>
        <div class="img-rectangle-2-hor"></div>
        <div class="img-rectangle-2-hor"></div>


      </div>
  );
}

export default Kollab;
