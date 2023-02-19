import React from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import Spinner from '../../Spinner/Spinner';
import WhatsNew from '../WhatsNew/WhatsNew';
const Home = () => {

  return (
    <div>
      <BannerSlider />
      <WhatsNew />
    </div>
  );
};

export default Home;