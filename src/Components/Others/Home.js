import React from "react";
import Types from "./Types";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

// import required modules
import { EffectCube, EffectFade, Navigation } from "swiper";


const Home = () => {
  return (
    <div>
      <Swiper spaceBetween={30} effect={"cube"} loop={true} grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }} modules={[EffectCube]} className="mySwiper w-2/3">
        <SwiperSlide>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full"
          />
        
        </SwiperSlide>
        <SwiperSlide>
        
          <img
            alt=""
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
        
        </SwiperSlide>
        <SwiperSlide>
        
          <img
            alt=""
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full"
          />
        
        </SwiperSlide>
      </Swiper>


      <Types></Types>
    </div>
  );
};

export default Home;
