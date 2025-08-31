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

        <div className="image-wth-caption col-3">
          <img
            src={require('../imgs/wanikani/WaniKani-Home.png')}
            alt="WaniKani - Home screen concept"
            className="img-rectangle-3-col fade-in-element"
          />
          <p className="caption">Home</p>
        </div>
        <div className="image-wth-caption col-3">
          <img
            src={require('../imgs/wanikani/WaniKani-Profile.png')}
            alt="WaniKani - Profile screen concept"
            className="img-rectangle-3-col fade-in-element"
          />
          <p className="caption">Profile</p>
        </div>
        <div className="image-wth-caption col-3">
          <img
            src={require('../imgs/wanikani/WaniKani-Kanji.png')}
            alt="WaniKani - Kanji question screen concept"
            className="img-rectangle-3-col fade-in-element"
          />
          <p className="caption">Question (Kanji)</p>
        </div>
      <div className="image-wth-caption col-3">
       <img
          src={require('../imgs/wanikani/WaniKani-Pause.png')}
          alt="WaniKani - Pause screen concept"
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Pause</p>
        </div>

        <div className="image-wth-caption col-3">
          <img
            src={require('../imgs/wanikani/WaniKani-Vocab.png')}
            alt="WaniKani - Vocab screen concept"
            className="img-rectangle-3-col fade-in-element"
          />
          <p className="caption">Question (Vocab)</p>
        </div>
        <div className="image-wth-caption col-3">
          <img
            src={require('../imgs/wanikani/WaniKani-Correct.png')}
            alt="WaniKani - Correct answer screen concept"
            className="img-rectangle-3-col fade-in-element"
          />
          <p className="caption">Correct answer</p>
        </div>
        <div className="image-wth-caption col-3">
          <img
            src={require('../imgs/wanikani/WaniKani-Wrong.png')}
            alt="WaniKani - Wrong answer screen concept"
            className="img-rectangle-3-col fade-in-element"
          />
          <p className="caption">Wrong answer</p>
        </div>
        <div className="image-wth-caption col-3">
          <img
            src={require('../imgs/wanikani/WaniKani-Radical.png')}
            alt="WaniKani - Radical question screen concept"
            className="img-rectangle-3-col fade-in-element"
          />
          <p className="caption">Question (Radical)</p>
        </div>


      </div>
  );
}

export default WaniKani;
