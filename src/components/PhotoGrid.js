import React from "react";
import ShopPic1 from "../assets/shop1.png";
import ShopPic2 from "../assets/shop2.png";
import ShopPic3 from "../assets/shop3.png";
import ShopPic4 from "../assets/shop4.png";
import ShopPic5 from "../assets/shop5.png";

const PhotoGrid = () => {
  return (
    <div>
      <section className='photo__grid'>
        <div className='container photo__grid__container'>
          <div className='photo__grid__system'>
            <img src={ShopPic1} className='pic1' alt='shop_pic' />
            <img src={ShopPic2} className='pic2' alt='shop_pic' />
            <img src={ShopPic3} className='pic3' alt='shop_pic' />
            <img src={ShopPic4} className='pic4' alt='shop_pic' />
            <img src={ShopPic5} className='pic5' alt='shop_pic' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGrid;
