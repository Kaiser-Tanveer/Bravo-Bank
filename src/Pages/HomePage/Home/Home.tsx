import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import Peoples from "../Peoples/Peoples";
import Testimonial from "../Testimonial/Testimonial";
import WhatsNew from "../WhatsNew/WhatsNew";
import CardSlider from "../CardsSlider/CardSlider";
import TaxCalculation from "../TaxCalculation/TaxCalculation";
const Home = () => {
  return (
    <div className="bg-gradient-to-tl from-gray-300 to-gray-100">
      <BannerSlider />
      <CardSlider />
      <TaxCalculation />
      <WhatsNew />
      <Peoples />
      <Testimonial />
    </div>
  );
};

export default Home;
