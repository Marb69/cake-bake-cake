import { Heart, Sparkles, Award, Coffee, Cake } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#FBF9F1] min-h-screen py-12 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#864e5a] bg-[#ffb7c5]/30 rounded-full">
            Our Story
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#864e5a] mt-3">
            Baking Dreams Into Reality
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
            Discover the passion, craft, and love baked into every single layer of Kuya Jon's Cakes.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#74593f]">
              Meet the Baker, Kuya Jon
            </h2>
            <p className="text-gray-700 leading-relaxed">
              What started as a simple hobby in a warm home kitchen quickly turned into a lifelong calling. Kuya Jon believes that a cake is not just a dessert; it is the center of celebration, a symbol of joy, and a sweet memory in the making.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every recipe has been perfected over years of trials, adjustments, and feedback from family and friends. Today, we specialize in creating custom cakes that taste as amazing as they look, combining classical baking techniques with modern creative designs.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#864e5a] font-medium bg-[#ffb7c5]/20 px-3 py-1.5 rounded-full">
                <Heart size={16} /> Made with Love
              </div>
              <div className="flex items-center gap-2 text-sm text-[#74593f] font-medium bg-[#fed9b8]/40 px-3 py-1.5 rounded-full">
                <Sparkles size={16} /> 100% Custom
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Artistic Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffb7c5] to-[#fed9b8] rounded-3xl transform rotate-3 -z-10 opacity-70 blur-xs"></div>
            <div className="bg-white p-4 rounded-3xl shadow-soft border border-soft transition-transform duration-300 hover:rotate-0">
              <div className="bg-gradient-to-br from-[#864e5a]/10 to-[#fed9b8]/20 aspect-video rounded-2xl flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
                {/* Background cake icon decoration */}
                <Cake size={120} className="text-[#864e5a]/10 absolute -bottom-6 -right-6 rotate-12" />
                <div className="p-4 bg-white/80 backdrop-blur-xs rounded-full text-[#864e5a] mb-3 shadow-md">
                  <Sparkles size={28} className="animate-float" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#864e5a]">The Baking Studio</h3>
                <p className="text-gray-600 text-sm mt-1 max-w-xs">
                  Where flour, sugar, and pure imagination come together to celebrate life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy & Values */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-center text-[#864e5a] mb-12">
            Our Baking Philosophy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-[#ffb7c5]/20 hover:border-[#ffb7c5] transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#ffb7c5]/20 rounded-2xl text-[#864e5a] w-fit mb-5">
                <Award size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-800 mb-3">Premium Ingredients</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We never compromise on quality. Real butter, pure vanilla, rich Belgian cocoa, and fresh fruits make our cakes taste exceptionally delicious.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft border border-[#fed9b8]/40 hover:border-[#fed9b8] transition-all duration-300 hover:-translate-y-1 font-medium">
              <div className="p-3 bg-[#fed9b8]/30 rounded-2xl text-[#74593f] w-fit mb-5">
                <Sparkles size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-800 mb-3">Artistic Craftsmanship</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each cake is custom-designed, hand-piped, and crafted with meticulous attention to detail to reflect your unique vision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="p-3 bg-gray-100 rounded-2xl text-gray-600 w-fit mb-5">
                <Coffee size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-800 mb-3">Warm Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From planning to delivery, we offer a seamless, personalized experience. We listen, guide, and ensure your absolute satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="bg-white/60 backdrop-blur-xs rounded-3xl p-8 border border-soft shadow-soft grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-heading text-4xl font-extrabold text-[#864e5a]">500+</p>
            <p className="text-gray-600 text-xs mt-1 uppercase font-semibold tracking-wider">Cakes Baked</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-extrabold text-[#74593f]">400+</p>
            <p className="text-gray-600 text-xs mt-1 uppercase font-semibold tracking-wider">Happy Clients</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-extrabold text-[#864e5a]">5★</p>
            <p className="text-gray-600 text-xs mt-1 uppercase font-semibold tracking-wider">Average Rating</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-extrabold text-[#74593f]">50+</p>
            <p className="text-gray-600 text-xs mt-1 uppercase font-semibold tracking-wider">Flavor Combos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
