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
    <div className="banner lg:w-[95%] lg:ml-4 left-0 w-[95%] ">

      {/* <Slider {...settings}>
        <div>
          <img src={bannerImg} alt="" />
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </Slider> */}
      <div className="container grid lg:grid-cols-2 mx-auto bg-gray-200 items-center rounded-lg mb-20">
        <img src={bannerImg} alt="main-banner" className="bg-gray-300 w-full h-full" />
        <div>
          <p className="text-5xl md:text-7xl text-center font-bold text-primary">
            <Typewriter
              words={['Welcome to']}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <br />
          <span className="shadow-inner hover:shadow-xl hover:animate-pulse shadow-gray-700 px-4 my-4 text-transparent bg-gradient-to-b bg-clip-text from-primary block text-center text-5xl md:text-7xl font-bold to-gray-700 rounded-md mx-6">
            Bravo Bank
          </span>
        </div>
      </div>
    </div>
  );

}

export default BannerSlider;