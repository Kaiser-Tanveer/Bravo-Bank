import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from '../../../Assets/Banners/bank.png';
import Slider from 'react-slick';
import { Typewriter } from "react-simple-typewriter";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="">

      {/* <Slider {...settings}>
        <div>
          <img src={bannerImg} alt="" />
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </Slider> */}
      <div className="container grid lg:grid-cols-2 mx-auto bg-gradient-to-r from-gray-300 to-gray-100 items-center shadow-md">
        <img src={bannerImg} alt="main-banner" className="w-full h-full hover:animate-pulse" />
        <div>
          <p className="text-5xl md:text-7xl text-center font-bold text-primary">
            Welcome to
          </p>
          <br />
          <span className="shadow-inner hover:shadow-lg hover:scale-105 cursor-wait hover:bg-gradient-to-br hover:from-primary hover:shadow-gray-700 hover:to-sky-500 shadow-gray-700 px-4 my-4 text-transparent bg-gradient-to-b bg-clip-text from-primary block text-center text-5xl md:text-7xl font-bold to-gray-700 rounded-md mx-6">
            <Typewriter
              words={['Bravo Bank']}
              loop={100}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
      </div>
    </div>
  );

}

export default BannerSlider;