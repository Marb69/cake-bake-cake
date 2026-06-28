import { ArrowBigRight, ArrowRight, CakeIcon } from "lucide-react";
import heroImage from "../assets/image/hero_img.png";
import React from "react";

const Home = () => {
  return (
    <div className="gap-5 p-5 flex flex-col items-center md:flex-row md:max-w-7xl mx-auto ">
      <div className="flex flex-col items-center text-center md:text-start md:items-baseline">
        <div className="px-3 py-1 font-medium flex items-center text-[#795D43] bg-[#FED9B8] rounded-3xl">
          <span>
            <CakeIcon size={17} />
          </span>
          <p className="text-[0.7em] mx-2">Bes Custom Cakes in Town</p>
        </div>
        <p className="font-heading text-primary font-bold text-3xl my-3 lg:text-5xl">
          Sweet Cakes Made with <span className="text-[#FFB7C5]">Love</span> by
          kuya Jon
        </p>
        <p className="my-3 font-medium text-primary">
          Custom cakes for birthdays, weddings, and special moments. Each
          creation is a hand-crafted masterpiece designed to bring a smile to
          your face.
        </p>

        <div className="flex flex-col gap-3 text-[.8em] sm:flex-row">
          <a
            href=""
            className="font-medium flex items-center text-[#EAE8E0] bg-primary py-2 px-6 rounded-3xl gap-2"
          >
            Order Your Cake <ArrowRight size={20} />
          </a>
          <a
            href=""
            className="font-medium bg-[#EAE8E0] py-2 px-6 rounded-3xl "
          >
            View Gallery
          </a>
        </div>
      </div>

      <div className="p-5">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
