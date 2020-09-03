import React from "react";
import Prince from "../assets/prince.svg";
import Grand from "../assets/grand-square.svg";
import Game from "../assets/game.svg";

const Partners = () => {
  return (
    <div>
      <section className='partners'>
        <div className='container partners__container'>
          <h1>Our Trusted Partners</h1>
          <div className='partners__images'>
            <img src={Prince} alt='price-logo' />
            <img src={Grand} alt='grand-logo' />
            <img src={Game} alt='game-logo' />
          </div>
          <button className='btn partners__button'>Join us today</button>
        </div>
      </section>
    </div>
  );
};

export default Partners;
