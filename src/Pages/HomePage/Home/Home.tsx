import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import Peoples from "../Peoples/Peoples";
import WhatsNew from "../WhatsNew/WhatsNew";
import CardSlider from "../CardsSlider/CardSlider";
import { useNavigation } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import TaxCalculation from "../TaxCalculation/TaxCalculation";
import Planning from "../Planning/Planning";
import Security from "../Security/Security";
import Education from "../Education/Education";

const Home = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner />;
  }
  return (
    <div className="bg-gradient-to-tl from-gray-300 to-gray-100 pt-12 lg:pt-0">
      <BannerSlider />
      <CardSlider />
      <TaxCalculation />
      <WhatsNew />
      <Planning />
      <Security />
      <Education />
      <Peoples />
    </div>
  );
};

export default Home;
