import React from "react";
import banner1 from './images/banner1 (2).jpg';
import banner2 from './images/banner3.jpg';
import Text from './animation';

// import React, { Component } from 'react' 
// import "slick-carousel/slick/slick.css";  
// import "slick-carousel/slick/slick-theme.css";  
// import Slider from "react-slick"; 

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import SwiperCore, {
  Parallax,Pagination,Navigation
} from 'swiper';



SwiperCore.use([Parallax,Pagination,Navigation]);

 // spring animated start 


const Banner = () => {
  return(
   
    <div className="banner swiper-container">
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop = {true}
      speed = {1500}
      parallax = {true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >

        <SwiperSlide>
          <div className="wdt">  
              <Text data-swiper-parallax="-200%">Hello there welcome to react world</Text>
              {/* <p className="contant" data-swiper-parallax="-180%">We’ve developed a suite of products and services designed to meet our client’s specific requirements and help achieve their financial goals.</p> */}
              <img  className="img" data-swiper-parallax="-50%" src= {banner1} style={{width: "100%"}}  />  
              <img  className="img parallax-img"  src= {banner2} style={{width: "100%"}}  />  
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wdt" >  
          <Text  data-swiper-parallax="-200%">Hello there welcome to react world</Text>
              {/* <p className="contant" data-swiper-parallax="-180%">We’ve developed a suite of products and services designed to meet our client’s specific requirements and help achieve their financial goals.</p> */}
              <img  className="img" data-swiper-parallax="-50%" src= {banner1} style={{width: "100%"}}  />  
              <img  className="img parallax-img"  src= {banner2} style={{width: "100%"}}  />   
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wdt">  
          <Text  data-swiper-parallax="-200%">Hello there welcome to react world</Text>
              {/* <p className="contant" data-swiper-parallax="-180%">We’ve developed a suite of products and services designed to meet our client’s specific requirements and help achieve their financial goals.</p> */}
              <img  className="img" data-swiper-parallax="-50%" src= {banner1} style={{width: "100%"}}  />  
              <img  className="img parallax-img"  src= {banner2} style={{width: "100%"}}  />  
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wdt">  
          <Text  data-swiper-parallax="-200%">Hello there welcome to react world</Text>
              {/* <p className="contant" data-swiper-parallax="-180%">We’ve developed a suite of products and services designed to meet our client’s specific requirements and help achieve their financial goals.</p> */}
              <img  className="img" data-swiper-parallax="-50%" src= {banner1} style={{width: "100%"}}  />  
              <img  className="img parallax-img"  src= {banner2} style={{width: "100%"}}  />  
          </div>
        </SwiperSlide>
     
      </Swiper>  
      
    </div>
  )
}

  




export default Banner;