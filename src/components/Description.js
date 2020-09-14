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
              <li className='one'>1</li>
              <li className='two'>2</li>
              <li className='three'>3</li>
            </ul>
            <div className='howto'>
              <h3>Register or Login</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc
                etiam sed lacus.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id nunc etiam sed lacus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Description;
