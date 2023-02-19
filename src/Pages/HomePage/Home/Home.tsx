import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import Peoples from "../Peoples/Peoples";
import WhatsNew from "../WhatsNew/WhatsNew";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <WhatsNew />
      <Peoples />
    </div>
  );
};

export default Home;
