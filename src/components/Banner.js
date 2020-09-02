import React from "react";
import HandPhone from "../assets/handphone.png";

const Banner = () => {
  return (
    <div>
      <section className='banner'>
        <div className='container banner__container'>
          <div className='banner__text'>
            <h1>Lorem ipsum dolor sit amet, contetur</h1>
            <p>
              Lorem ipsum dolor sit amet, contetur adipiscing elit.Lorem ipsum
              dolor sit amet, contetur adipiscing elit.Lorem ipsum dolor sit{" "}
            </p>
            <form className='banner__form'>
              <input
                className='banner__form__input'
                type='text'
                placeholder='Type here'
              />
              <button className='btn banner__form__button'>Get Started</button>
            </form>
            <p>Receive payement in minutes</p>
          </div>
        </div>
        <img
          src={HandPhone}
          alt='hand-holding-device'
          className='banner__img'
        />
      </section>
    </div>
  );
};

export default Banner;
