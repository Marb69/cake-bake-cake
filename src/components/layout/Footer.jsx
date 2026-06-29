import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-[#864e5a] text-[#FBF9F1] border-t border-[#9e5f6e]/30 pt-16 pb-8 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Branding Column */}
        <div className="space-y-4">
          <NavLink to="/" className="font-heading text-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span>🎂</span>
            <span>Kuya Jon's Cakes</span>
          </NavLink>
          <p className="text-[#ffb7c5] text-sm leading-relaxed max-w-sm">
            Handcrafted with love, baked with passion. Creating the perfect centerpiece for your special celebrations since 2018.
          </p>
          {/* Socials */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 bg-[#9e5f6e]/40 rounded-full hover:bg-[#ffb7c5] hover:text-[#864e5a] transition-all duration-300 flex items-center justify-center">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="p-2 bg-[#9e5f6e]/40 rounded-full hover:bg-[#ffb7c5] hover:text-[#864e5a] transition-all duration-300 flex items-center justify-center">
              <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="p-2 bg-[#9e5f6e]/40 rounded-full hover:bg-[#ffb7c5] hover:text-[#864e5a] transition-all duration-300 flex items-center justify-center">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-bold text-[#fed9b8]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#ffb7c5]">
            <li>
              <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="hover:text-white transition-colors">Gallery Showcase</NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className="hover:text-white transition-colors">Pricing & Customizer</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition-colors">Meet the Baker</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition-colors">Contact & FAQs</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-bold text-[#fed9b8]">Contact Studio</h3>
          <ul className="space-y-3 text-sm text-[#ffb7c5]">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#fed9b8] shrink-0" />
              <span>+63 973998166</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#fed9b8] shrink-0" />
              <span>hello@kuyajonscakes.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[#fed9b8] shrink-0" />
              <span>Prk. 1 New Casay, B.E Duajli</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-bold text-[#fed9b8]">Sweet Updates</h3>
          <p className="text-sm text-[#ffb7c5]">
            Subscribe to get notified about seasonal cake collections, recipes, and exclusive offers.
          </p>

          {subscribed ? (
            <div className="text-sm font-semibold text-white bg-[#9e5f6e]/30 px-4 py-2.5 rounded-xl border border-[#ffb7c5]/20 animate-fade-in">
              🎉 Subscribed successfully!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-[#9e5f6e]/30 border border-[#9e5f6e] text-white px-4 py-2.5 rounded-xl text-sm placeholder:text-[#ffb7c5]/50 outline-none w-full focus:border-[#ffb7c5]"
              />
              <button
                type="submit"
                className="bg-[#fed9b8] text-[#74593f] font-bold px-4 py-2 rounded-xl text-sm hover:bg-[#ffb7c5] hover:text-[#864e5a] transition-colors"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>


      <div className="max-w-7xl mx-auto border-t border-[#9e5f6e]/30 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#ffb7c5] gap-4">
        <p>&copy; {new Date().getFullYear()} Kuya Jon's Cakes. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={12} className="text-white fill-white animate-pulse" /> in Philippines
        </p>
      </div>
    </footer>
  );
};

export default Footer;
