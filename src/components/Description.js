import React from "react";
// import Rec from "../assets/purple-rect.svg";
const Description = () => {
  return (
    <div>
      <section className='description'>
        {/* <img src={Rec} /> */}
        <div className=' description__container container'>
          <h1>How it Works</h1>
          <div className='desc__body'>
            <ul className='numbers'>
              <li className='one'>01</li>
              <li className='two'>02</li>
              <li className='three'>03</li>
            </ul>
            <div className='howto'>
              <h3>Register or Login</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc
                etiam sed lacus. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc
                etiam sed lacus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Description;
