import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from '../../../Assets/Banners/BravoBanner2.png';
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BannerSlider = () => {
  return (
    <div className="mt-2 items-center relative shadow-lg shadow-gray-700 rounded-lg p-0 border border-gray-700">
      <div className="container">
        <img src={bannerImg} alt="main-banner" className="absolute right-0 h-96 w-full blur-sm" />
      </div>
      <div className='rounded-lg bg-gradient-to-r from-primary to-sky-500 bg-opacity-90 grid grid-cols-1 md:grid-cols-2 h-96 w-full shadow-lg shadow-gray-700 border-2' style={{
        clipPath: 'polygon(0 0, 100% calc(100% - 100vw), calc(100% - 50vw) 100%, 0 100%)',
        boxShadow: "2px 20px 8px 12px darkgray"
      }}>
        <div className="pt-12 w-[80%] lg:w-[80%] md:w-full  px-6">
          <p className="text-5xl md:text-6xl font-bold text-gray-100">
            Welcome!
          </p>
          <br />
          <p className="text-xl text-gray-200 content-center">
            <Typewriter
              words={['We are providing a safe, secure, and life time guaranty for our clients. continue with Bravo Bank.']}
              loop={100}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <Link
            to={''}
            className="absolute bottom-16 left-6 md:bottom-1/5 md:left-[3%] bg-gradient-to-r from-sky-500 to-gray-100 hover:p-1 rounded-md hover:scale-110 duration-700 group">
            <button
              className="flex hover:justify-between items-center uppercase font-bold text-gray-200 bg-gradient-to-l from-sky-500 to-pink-600 px-6 rounded-md py-3 hover:text-gray-50 border-2 group-hover:border-none border-gray-100 duration-500">
              Continue
              <FaArrowRight className="group-hover:ml-6 hidden group-hover:inline-flex duration-500 ease-in-out" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

}

export default BannerSlider;