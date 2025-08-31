import "./WaniKani.css";
import useFadeInOnScroll from '../components/FadeInOnScroll';


import React from 'react';

function WaniKani() {
useFadeInOnScroll('.fade-in-element');

  return (
      <div className="grid">

        <div className="col-12 fade-in-element">
          <h1>WaniKani</h1>
        </div>

        <div className="landing-wanikani fade-in-element">
          <div className="white-text-box">
            <p>WaniKani, created by Tofugu, is an online platform dedicated to helping learners master Japanese kanji and vocabulary through a mnemonic-based approach and spaced repetition system. Users progress through levels, building on previously learned material for a structured learning experience.</p>
            <p className="p-note">UI/UX design, app design</p>
          </div>
        </div>

        <div className="text-block fade-in-element">
          <div className="col-4">
            <h2>Mobile Experience</h2>
          </div>
          <div className="col-4">
            <p>Notably, WaniKani does not have a mobile app, prompting me to take on the challenge of designing an experience Japanese learners can take with them anywhere.</p>
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
          className="img-rectangle-12-col-shadow fade-in-element"
        />

        <img
          src={require('../imgs/kollab/Kollab-LogIn.jpg')}
          alt="Kollab - Login screen design."
          className="img-rectangle-12-col-shadow fade-in-element"
        />

      </div>
  );
}

export default WaniKani;
