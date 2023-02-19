import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from '../../../Assets/Banners/bank.png';
import Slider from 'react-slick';

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
      <div className="container grid grid-cols-2 mx-auto bg-gray-200 items-center">
        <img src={bannerImg} alt="main-banner" className="bg-gray-200 w-full h-full" />
        <div>
          <p className="mb-4 text-8xl font-bold text-primary">Welcome to</p>
          <br />
          <span className="shadow-inner shadow-gray-700 px-4 my-4 text-transparent bg-gradient-to-b bg-clip-text from-primary text-8xl font-bold to-gray-700 rounded-md">Bravo Bank</span>
        </div>
      </div>
    </div>
  );

}

export default BannerSlider;