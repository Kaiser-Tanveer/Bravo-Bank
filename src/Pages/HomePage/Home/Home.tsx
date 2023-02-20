import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import Peoples from "../Peoples/Peoples";
import Testimonial from "../Testimonial/Testimonial";
import WhatsNew from "../WhatsNew/WhatsNew";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <WhatsNew />
      <Peoples />
      <Testimonial />
    </div>
  );
};

export default Home;
