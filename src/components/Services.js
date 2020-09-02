import React from "react";
import Loyalty from "../assets/loyalty.png";
import Change from "../assets/change.png";
import Transfer from "../assets/transfer.png";

const Services = () => {
  return (
    <div>
      <section className='services'>
        <div className='container services__container'>
          <h1>Lorem ipsum dolor sitLorem ipsum dolor sit</h1>

          <div className='services__main__container'>
            <div className='service'>
              <div className='service__image'>
                <img src={Loyalty} />
              </div>
              <h4>Loyalty</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fusce ullamcorper tortor venenatis nisi tortor, ante mauris sed.
              </p>
            </div>
            <div className='service'>
              <div className='service__image'>
                <img src={Change} />
              </div>
              <h4>Change Collection</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fusce ullamcorper tortor venenatis nisi tortor, ante mauris sed.
              </p>
            </div>
            <div className='service'>
              <div className='service__image'>
                <img src={Transfer} />
              </div>
              <h4>Transfer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fusce ullamcorper tortor venenatis nisi tortor, ante mauris sed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
