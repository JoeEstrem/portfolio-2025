import "./Kollab.css";
import "../App.css";
import useFadeInOnScroll from '../components/FadeInOnScroll';
import useFadeInOnScrollOversized from "./FadeInOnScrollOversized";

import React from 'react';

function Kollab() {
useFadeInOnScroll('.fade-in-element');
useFadeInOnScrollOversized('.fade-in-element-oversized');

  return (
      <div className="grid">

        <div className="col-12 fade-in-element">
          <h1>Kollab</h1>
        </div>

        <div className="landing-kollab fade-in-element">
          <div className="white-text-box">
            <p>Find the perfect space for your work. Kollab is a curated online marketplace where artists and gallery owners can collaborate to share art with communities.</p>
            <p className="p-note">Front-end development, creative direction, identity design, UI/UX design, web design</p>
          </div>
        </div>

        <div className="text-block fade-in-element">
          <div className="col-4">
            <h2>Brand Identity</h2>
          </div>
          <div className="col-4">
            <p>When people think of art they imagine bursts of colors. When people think of galleries they image a clean pristine experience. The identity of Kollab combines these two concepts together to create a fun yet elevated presence.</p>
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
            <h2>Built for <br />Kollab-oration</h2>
          </div>
          <div className="col-4">
            <p>Designed to connect artists and galleries effortlessly, Kollab is a marketplace where creativity and opportunity meet. Artists can browse spaces, view venue photos, and apply with their work in just a few clicks. Gallery owners can showcase their venues, set rental details, and review applications with ease. </p>
          </div>
        </div>

        <img
          src={require('../imgs/kollab/Kollab-Home-384kb.jpg')}
          alt="Kollab - Home screen design."
          className="img-rectangle-12-col-shadow fade-in-element-oversized"
        />

        <img
          src={require('../imgs/kollab/Kollab-LogIn.jpg')}
          alt="Kollab - Login screen design."
          className="img-rectangle-12-col-shadow fade-in-element"
        />

      </div>
  );
}

export default Kollab;
