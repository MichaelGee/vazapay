import React from "react";
import mail from "../assets/mail.svg";
import lock from "../assets/lock.svg";
import eye from "../assets/eye.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Form = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true,
    threshold: 0.9});
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <motion.div  ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }} className='form__container'>
        <form>
          <div className='head__text'>
            <h3>Hey you!</h3>
            <p>Sign in to get your money and special deals</p>
          </div>
          <div className='form__input'>
            <input type='email' required placeholder='Email' disabled />
            <img src={mail} alt='mail-icon' className='mail__icon' />
            <input type='password' required placeholder='Password' disabled />
            <img src={lock} alt='lock-icon' className='lock__icon' />
            <img src={eye} alt='eye' className='eye__icon' />
          </div>
          <p className='forget'>Forgotten password?</p>
          <button className='signin__button'>Sign In</button>
          <p className='signup'>
            Don't have an account? <span>Signup</span>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Form;
