import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CakeIcon, Heart, Clock, Truck } from "lucide-react";

import { cakes } from "../data/images";
import heroImage from "../assets/image/hero_img.png";

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    return typeof window === "undefined" || !window.IntersectionObserver;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const target = containerRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [options]);

  return [containerRef, isVisible];
};

const Home = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const total = 3;

  const [featuresRef, featuresVisible] = useElementOnScreen({ threshold: 0.1 });
  const [masterpiecesRef, masterpiecesVisible] = useElementOnScreen({
    threshold: 0.1,
  });
  const [pricingRef, pricingVisible] = useElementOnScreen({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useElementOnScreen({ threshold: 0.1 });

  const touchStart = useRef({ x: 0, y: 0 });
  const touchDiff = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    if (window.innerWidth >= 768) {
      track.style.transform = "";
      return;
    }

    const cardW = track.children[0]?.offsetWidth || 300;
    const gap = 16;
    const pad = 20;

    let offset =
      current === 0
        ? 0
        : current === total - 1
          ? track.scrollWidth - wrapper.offsetWidth + pad
          : current * (cardW + gap) - pad;

    track.style.transition =
      "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)";
    track.style.transform = `translateX(-${offset}px)`;
  }, [current]);

  const goTo = (idx) => setCurrent(Math.max(0, Math.min(total - 1, idx)));

  const onTouchStart = (e) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    touchDiff.current = { x: 0, y: 0 };
  };
  const onTouchMove = (e) => {
    touchDiff.current = {
      x: e.touches[0].clientX - touchStart.current.x,
      y: e.touches[0].clientY - touchStart.current.y,
    };

    if (Math.abs(touchDiff.current.x) > Math.abs(touchDiff.current.y))
      e.preventDefault();
  };
  const onTouchEnd = () => {
    if (touchDiff.current.x < -40) goTo(current + 1);
    else if (touchDiff.current.x > 40) goTo(current - 1);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        trackRef.current.style.transform = "";
      } else {
        goTo(current);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [current]);

  return (
    <div className="md:max-w-7xl mx-auto p-5 space-y-16">
      {/* Hero Section */}
      <div className="gap-8 flex flex-col items-center md:flex-row py-6 sm:py-12">
        <div className="flex flex-col items-center text-center md:text-start md:items-baseline space-y-6 md:w-1/2">
          <div className="px-4 py-1.5 font-medium flex items-center gap-2 text-[#795D43] bg-[#FED9B8] rounded-full shadow-xs">
            <CakeIcon size={16} />
            <span className="text-xs uppercase tracking-wider font-semibold">
              Best Custom Cakes in Town
            </span>
          </div>
          <h1 className="font-heading text-primary font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Sweet Cakes Made with{" "}
            <span className="text-[#ffb7c5] relative inline-block">
              Love{" "}
              <span className="absolute bottom-1 left-0 w-full h-1 bg-[#ffb7c5]/50 -z-5 rounded-full"></span>
            </span>{" "}
            by Kuya Jon
          </h1>
          <p className="font-medium text-gray-600 text-base sm:text-lg max-w-lg leading-relaxed">
            Custom cakes for birthdays, weddings, and special moments. Each
            creation is a hand-crafted masterpiece designed to bring a smile to
            your face.
          </p>

          <div className="flex flex-col gap-3 text-sm sm:flex-row w-full sm:w-auto pt-2">
            <button
              onClick={() => navigate("/pricing")}
              className="font-heading font-semibold flex items-center justify-center text-[#EAE8E0] bg-[#864e5a] py-3.5 px-8 rounded-full gap-2 transition-all hover:bg-[#9e5f6e] cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Order Your Cake <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate("/gallery")}
              className="font-heading font-semibold bg-[#EAE8E0] text-[#74593f] py-3.5 px-8 rounded-full transition-all hover:bg-[#eeded8] cursor-pointer"
            >
              View Gallery
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center p-5 relative">
          <div className="absolute inset-0 bg-[#ffb7c5]/10 rounded-full blur-3xl -z-10 w-4/5 h-4/5 m-auto"></div>
          <img
            src={heroImage}
            alt="Beautiful Cake Design"
            className="w-full max-w-md animate-float"
            loading="lazy"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div
        ref={featuresRef}
        className={`grid grid-cols-1 sm:grid-cols-3 gap-8 bg-white/60 backdrop-blur-xs p-8 rounded-3xl border border-soft shadow-soft transition-all duration-1000 ${
          featuresVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center text-center p-4 space-y-3">
          <div className="p-3 bg-[#ffb7c5]/20 rounded-2xl text-[#864e5a]">
            <Heart size={24} />
          </div>
          <h3 className="font-heading font-bold text-gray-800 text-lg">
            Baked with Love
          </h3>
          <p className="text-gray-600 text-sm">
            Every single ingredient is premium and handled with utmost care for
            perfect taste.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 space-y-3">
          <div className="p-3 bg-[#fed9b8]/30 rounded-2xl text-[#74593f]">
            <Clock size={24} />
          </div>
          <h3 className="font-heading font-bold text-gray-800 text-lg">
            Fresh & On Time
          </h3>
          <p className="text-gray-600 text-sm">
            We prepare your orders fresh from the oven, arriving exactly when
            you need them.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 space-y-3">
          <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-700">
            <Truck size={24} />
          </div>
          <h3 className="font-heading font-bold text-gray-800 text-lg">
            Safe Delivery
          </h3>
          <p className="text-gray-600 text-sm">
            Special delivery boxes and cooling setups ensure your cakes arrive
            perfectly intact.
          </p>
        </div>
      </div>

      {/* Masterpieces Section */}
      <div
        ref={masterpiecesRef}
        className={`transition-all duration-1000 ${
          masterpiecesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="my-8 text-center">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#864e5a] bg-[#ffb7c5]/30 rounded-full">
            Featured Creations
          </span>
          <h2 className="font-heading text-primary text-3xl font-bold md:text-4xl lg:text-5xl mt-3">
            Our Masterpieces
          </h2>
          <p className="text-gray-600 mt-2">Peek into our oven of creativity</p>
        </div>

        <div>
          <div
            ref={wrapperRef}
            className="overflow-hidden md:overflow-visible py-2"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex gap-4 px-5 md:grid md:grid-cols-3 md:gap-6 md:px-0"
              style={{ willChange: "transform" }}
            >
              {/* Card 1 */}
              <div
                onClick={() => navigate("/gallery")}
                className="relative my-5 flex-none w-[80vw] md:w-auto cursor-pointer group"
              >
                <div className="bg-[#A3D5BD] text-emerald-950 font-semibold px-5 py-1 text-[.9em] rounded-2xl absolute -right-3 rotate-12 -top-3 z-10 shadow-md">
                  Birthday
                </div>
                <div className="p-4 bg-white rounded-[2rem] shadow-soft border border-soft group-hover:-translate-y-1.5 transition-transform duration-300">
                  <img
                    src={cakes.birthday_cake_1}
                    alt="Celebration Sparkle"
                    className="w-full rounded-2xl object-cover aspect-square"
                    loading="lazy"
                  />
                  <p className="text-black font-heading font-bold text-center mt-4 mb-2 text-[1.25em] group-hover:text-[#864e5a] transition-colors">
                    Celebration Sparkle
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => navigate("/gallery")}
                className="relative my-5 flex-none w-[80vw] md:w-auto cursor-pointer group"
              >
                <div className="bg-[#FFB7C5] text-rose-950 font-semibold px-5 py-1 text-[.9em] rounded-2xl absolute -right-3 -rotate-12 -top-3 z-10 shadow-md">
                  Graduation
                </div>
                <div className="p-4 bg-white rounded-[2rem] shadow-soft border border-soft group-hover:-translate-y-1.5 transition-transform duration-300">
                  <img
                    src={cakes.cake_1}
                    alt="Everlasting Love"
                    className="w-full rounded-2xl object-cover aspect-square"
                    loading="lazy"
                  />
                  <p className="text-black font-heading font-bold text-center mt-4 mb-2 text-[1.25em] group-hover:text-[#864e5a] transition-colors">
                    Congratulatory
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                onClick={() => navigate("/gallery")}
                className="relative my-5 flex-none w-[80vw] md:w-auto cursor-pointer group"
              >
                <div className="bg-[#FED9B8] text-amber-950 font-semibold px-5 py-1 text-[.9em] rounded-2xl absolute -right-3 rotate-10 -top-3 z-10 shadow-md">
                  Cute Cake
                </div>
                <div className="p-4 bg-white rounded-[2rem] shadow-soft border border-soft group-hover:-translate-y-1.5 transition-transform duration-300">
                  <img
                    src={cakes.cup_cake_1}
                    alt="Cuddly Confection"
                    className="w-full rounded-2xl object-cover aspect-square"
                    loading="lazy"
                  />
                  <p className="text-black font-heading font-bold text-center mt-4 mb-2 text-[1.25em] group-hover:text-[#864e5a] transition-colors">
                    Whimsical Treats
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-center mt-1 md:hidden">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full border-none transition-all duration-200 ${
                  i === current ? "bg-[#864e5a] scale-125" : "bg-[#d4bfad]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sweet Pricing Section */}
      <div ref={pricingRef} className="py-8">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#864e5a] bg-[#ffb7c5]/30 rounded-full">
            Our Pricing
          </span>
          <h2 className="font-heading text-primary text-3xl font-bold md:text-4xl lg:text-5xl mt-3 text-[#864e5a]">
            Sweet Pricing
          </h2>
          <p className="text-gray-500 font-medium mt-2">
            A slice of happiness for every budget
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-2 items-stretch">
          {/* Card 1: Mini Treats */}
          <div
            style={{ animationDelay: "100ms" }}
            className={`group bg-white rounded-[2.5rem] p-8 shadow-soft border border-soft hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between overflow-hidden ${
              pricingVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Bottom accent glow */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-emerald-100 opacity-60 rounded-b-[2.5rem] group-hover:h-4 transition-all duration-300"></div>

            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="mx-auto w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-[#2E5A44] border border-emerald-100 shadow-xs group-hover:scale-115 group-hover:rotate-12 transition-all duration-300">
                <span className="text-2xl">🧁</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-2xl font-bold text-gray-800 transition-colors group-hover:text-[#2E5A44]">
                  Mini Treats
                </h3>
                <p className="text-[#a66b74] font-semibold text-base">
                  Starting at ₱450
                </p>
              </div>
              {/* Features */}
              <ul className="space-y-3 text-gray-600 text-sm py-4 border-t border-gray-50">
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  6-inch Small Cakes
                </li>
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Classic Flavor Options
                </li>
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Simple Icing Design
                </li>
              </ul>
            </div>

            <button
              onClick={() =>
                navigate("/pricing?size=6+inch&tiers=1&flavor=Vanilla")
              }
              className="mt-6 w-full font-heading font-semibold py-3 px-6 rounded-full bg-[#2E5A44] text-white hover:bg-[#3d7056] active:scale-95 group-hover:scale-102 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg text-center"
            >
              Select Base
            </button>
          </div>

          {/* Card 2: Celebration Cakes (Customer Favorite) */}
          <div
            style={{ animationDelay: "250ms" }}
            className={`group bg-white rounded-[2.5rem] p-8 shadow-soft border-2 border-[#864e5a] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between overflow-visible ${
              pricingVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Customer Favorite Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#7F4852] text-[#FBF9F1] px-5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md group-hover:scale-105 transition-transform duration-300">
              Customer Favorite
            </div>
            {/* Bottom accent glow */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-pink-100 opacity-60 rounded-b-[2.5rem] group-hover:h-4 transition-all duration-300"></div>

            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="mx-auto w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-[#7F4852] border border-rose-100 shadow-xs group-hover:scale-115 group-hover:-rotate-12 transition-all duration-300">
                <span className="text-2xl">🎂</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-2xl font-bold text-gray-800 transition-colors group-hover:text-[#7F4852]">
                  Celebration Cakes
                </h3>
                <p className="text-[#864e5a] font-bold text-base">
                  Starting at ₱1,200
                </p>
              </div>
              {/* Features */}
              <ul className="space-y-3 text-gray-600 text-sm py-4 border-t border-gray-50">
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Standard 8-10 inch
                </li>
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Custom Theme Designs
                </li>
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Premium Fillings
                </li>
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Hand-painted Details
                </li>
              </ul>
            </div>

            <button
              onClick={() =>
                navigate("/pricing?size=8+inch&tiers=1&flavor=Chocolate")
              }
              className="mt-6 w-full font-heading font-semibold py-3 px-6 rounded-full bg-[#7F4852] text-white hover:bg-[#965762] active:scale-95 group-hover:scale-102 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#ffb7c5]/50 text-center"
            >
              Choose This
            </button>
          </div>

          {/* Card 3: Custom Masterpieces */}
          <div
            style={{ animationDelay: "400ms" }}
            className={`group bg-white rounded-[2.5rem] p-8 shadow-soft border border-soft hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between overflow-hidden ${
              pricingVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Bottom accent glow */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-amber-100 opacity-60 rounded-b-[2.5rem] group-hover:h-4 transition-all duration-300"></div>

            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="mx-auto w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-[#7E5B3D] border border-amber-100 shadow-xs group-hover:scale-115 group-hover:rotate-45 transition-all duration-300">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-2xl font-bold text-gray-800 transition-colors group-hover:text-[#7E5B3D]">
                  Custom Masterpieces
                </h3>
                <p className="text-[#7E5B3D] font-semibold text-base">
                  Contact for Quote
                </p>
              </div>
              {/* Features */}
              <ul className="space-y-3 text-gray-600 text-sm py-4 border-t border-gray-50">
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Tiered Sculptural Cakes
                </li>
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Complex Sugar Art
                </li>
                <li className="transition-transform duration-300 group-hover:translate-x-1">
                  Special Event Set-up
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigate("/pricing?tiers=2")}
              className="mt-6 w-full font-heading font-semibold py-3 px-6 rounded-full bg-[#7E5B3D] text-white hover:bg-[#966f4e] active:scale-95 group-hover:scale-102 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg text-center"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Sweet CTA Section */}
      <div
        ref={ctaRef}
        className={`bg-gradient-to-br from-[#864e5a] to-[#74593f] rounded-[2.5rem] p-8 sm:p-12 text-[#FBF9F1] text-center space-y-6 relative overflow-hidden shadow-soft transition-all duration-1000 ${
          ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="absolute -bottom-10 -left-10 text-9xl opacity-10 select-none">
          🎂
        </div>
        <div className="absolute -top-10 -right-10 text-9xl opacity-10 select-none">
          ✨
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold max-w-lg mx-auto leading-tight">
          Ready to Make Your Celebration Sweeter?
        </h2>
        <p className="text-[#ffb7c5] max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          Order a pre-designed cake from our gallery or use our builder to
          create a personalized cake in real-time.
        </p>
        <div className="pt-4 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/pricing")}
            className="font-heading font-semibold px-8 py-3.5 bg-[#fed9b8] text-[#74593f] rounded-full hover:bg-white transition-colors cursor-pointer"
          >
            Design Custom Cake
          </button>
          <button
            onClick={() => navigate("/gallery")}
            className="font-heading font-semibold px-8 py-3.5 bg-transparent border border-white/60 text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            Explore Masterpieces
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
