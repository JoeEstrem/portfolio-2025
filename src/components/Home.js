import "./Home.css";
import useFadeInOnScroll from './FadeInOnScroll';

import React from 'react';

function Home() {
  useFadeInOnScroll('.fade-in-element');

  return (
    <div className="grid me-page-margin">

      <div className="col-5 fade-in-element">
        <img
          src={require('../imgs/me/Me-Ichou-1.jpg')}
          alt="Joe Estrem vibin' it up in fall"
          className="square"
        />
      </div>

      <div className="col-4 fade-in-element">
        <h1>Hi, I'm Joe</h1>
        <p>I'm a Creative based in Tokyo, Japan. I've had the opportunity to work with companies like Smiles Mobile Remittance, Housing Japan, Kohl's, Children's Wisconsin, Wisconsin Lottery, Yamaha, and more. Outside of work, I enjoy documenting my travels through film photography, searching for the perfect cup of coffee, or unwinding with a good book or video game.</p>
      </div>

      <div className="col-12 fade-in-element">
        <h3 className="fade-in-element">Travel Film Photography</h3>
      </div>

      <div className="image-wth-caption col-3">
        <img
          src={require('../imgs/me/Asakusa-SkyTree-Film.jpg')}
          alt="Film photography - Asakusa Tokyo Japan."
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Asakusa</p>
      </div>

      <div className="image-wth-caption col-3">
        <img
          src={require('../imgs/me/Osaka-Castle-Film.jpg')}
          alt="Film photography - Osaka Castle"
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Osaka Castle</p>
      </div>

      <div className="image-wth-caption col-3">
         <img
          src={require('../imgs/me/Kiyomizu-Film.jpg')}
          alt="Film photography - Kiyomizu-dera"
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Kiyomizu-dera</p>
      </div>

      <div className="image-wth-caption col-3">
        <img
          src={require('../imgs/me/Eiataibashi-Film.jpg')}
          alt="Film photography - Eitaibashi"
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Eitaibashi</p>
      </div>




      <div className="image-wth-caption col-3">
        <img
          src={require('../imgs/me/Nikko-Film.jpg')}
          alt="Film photography - Nikko Japan"
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Nikko</p>
      </div>

      <div className="image-wth-caption col-3">
        <img
          src={require('../imgs/me/Namba-Yasaka-Shrine-Film.jpg')}
          alt="Film photography - Namba Yasaka Shrine"
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Namba Yasaka Shrine</p>
      </div>

      <div className="image-wth-caption col-3">
        <img
          src={require('../imgs/me/Hakuba-Fim-Fix.jpg')}
          alt="Film photography - Hakuba Japan"
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Hakuba</p>
      </div>

      <div className="image-wth-caption col-3">
        <img
          src={require('../imgs/me/Kyoto-Boat-Film-Fix.jpg')}
          alt="Film photography - Kyoto River"
          className="img-rectangle-3-col fade-in-element"
        />
        <p className="caption">Kyoto River</p>
      </div>


    </div>
  );
}

export default Home;
