import React from "react";
import HandPhone from "../assets/handphone.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <section className='banner'>
        <div className='container banner__container'>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            transition={{ duration: 1.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 300 },
            }}
            className='banner__text'
          >
            <h1>Lorem ipsum dolor sit amet, contetur</h1>
            <p>
              Lorem ipsum dolor sit amet, contetur adipiscing elit. Lorem ipsum
              dolor sit amet, contetur adipiscing elit. Lorem ipsum dolor sit.
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
          </motion.div>
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
