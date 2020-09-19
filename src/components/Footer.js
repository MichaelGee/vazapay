import React from "react";
import Phone from "../assets/phone.png";
import Appstore from "../assets/app-store.svg";
import Playstore from "../assets/google-play.svg";

const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <div className='container footer__container'>
          <div className='first__section'>
            <div className='footer__image'>
              <img src={Phone} alt='smart-phone' />
            </div>
            <div className='footer__text'>
              <h1>
                Make <span>Payment</span> Without Stress
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc
                etiam sed lacus.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id nunc etiam sed lacus.
              </p>
            </div>
            <div className='footer__appstore__logo'>
              <a href='#'>
                <img
                  src={Appstore}
                  alt='app-store-bardge'
                  className='appstore'
                />
              </a>
              <a href='#'>
                <img
                  src={Playstore}
                  className='appstore'
                  alt='play-store-bardge'
                />
              </a>
            </div>
          </div>
          <div className='second__section'>
            <h1>Vazapay</h1>
            <div className='footer__links'>
              <ul>
                <li>
                  <a href=''>FAQ</a>
                </li>
                <li>
                  <a href=''>Terms of Use</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=''>Info@vazapay.co</a>
                </li>
                <li>
                  <a href=''>+2348909283049</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
