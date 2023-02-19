import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import Spinner from "../../Spinner/Spinner";
import WhatsNew from "../WhatsNew/WhatsNew";
import Timeline from "../Timeline/Timeline";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <WhatsNew />
      <Timeline></Timeline>
    </div>
  );
};

export default Home;
