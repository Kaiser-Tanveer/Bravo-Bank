import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imga from '../../Assets/Banners/bg.png'
import Slider from 'react-slick';
import './BannarSlider.css'

const BannarSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="lg:w-[95%] ml-4 left-0 w-[95%] ">

      <Slider {...settings}>
        <div>
          <img src={imga} alt="" />
        </div>
        <div>
          <img src={imga} alt="" />
        </div>


      </Slider>
    </div>
  );

}

export default BannarSlider;