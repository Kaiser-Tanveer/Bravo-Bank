import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lgBanner from '../../../Assets/Banners/lgBanner.png';
import smBanner from '../../../Assets/Banners/smBanner.png';
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BannerSlider = () => {
  return (
    <div className="container min-h-full mx-auto mt-2 items-center relative shadow-lg shadow-gray-700 rounded-b-lg p-0 border bg-gradient-to-r from-pink-500 via-sky-500 to-emerald-500 border-gray-700">
      <img src={lgBanner} alt="main-banner" className="hidden md:block" />
      <img src={smBanner} alt="main-banner" className="md:hidden min-h-full" />
      {/* Contents  */}
      <p className="absolute top-[40.5%] md:top-[10%] right-[4%] md:right-auto md:left-[62%] text-5xl md:text-6xl font-bold text-gray-100 uppercase">
        Welcome!
      </p>
      <br />
      <p className="absolute w-[98%] md:w-1/3 top-[58%] md:top-1/3 left-[2%] md:left-[62%] text-xl font-semibold text-gray-700 content-center">
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
      {/* Button  */}
      <Link
        to='/openAcc'
        className="absolute left-[4%] md:left-auto md:md:left-[62%] bottom-[6%] shadow-inner bg-gray-100 shadow-gray-700 hover:shadow-none md:bottom-1/4 rounded-md duration-700 group hover:scale-105">
        <button
          className="flex justify-between items-center uppercase font-bold text-primary md:text-gray-200 md:bg-gradient-to-l from-sky-500 to-pink-600 px-6 rounded-md py-3 hover:text-gray-50 border-2 border-gray-100 duration-500">
          Continue
          <FaArrowRight className="ml-6 inline-flex duration-500 ease-in-out" />
        </button>
      </Link>
    </div>
  );

}

export default BannerSlider;