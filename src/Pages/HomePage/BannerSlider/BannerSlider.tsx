import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from '../../../Assets/Banners/bg.png';
import Slider from 'react-slick';
import './BannerSlider.css'

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
    <div className="lg:w-[95%] lg:ml-4 left-0 w-[95%] ">

      <Slider {...settings}>
        <div>
          <img src={bannerImg} alt="" />
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>


      </Slider>
    </div>
  );

}

export default BannerSlider;