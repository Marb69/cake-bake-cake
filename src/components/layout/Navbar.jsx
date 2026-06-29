import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing & Customizer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-[#FBF9F1]/90 backdrop-blur-md border-b border-[#eeded8] shadow-sm">
      <div className="flex items-center justify-between gap-4 px-5 py-4 max-w-7xl mx-auto">
        <NavLink to="/" className="font-heading text-xl font-bold text-[#864e5a] flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <span className="text-2xl">🎂</span>
          <span>Kuya Jon's Cakes</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `transition-all duration-300 relative py-1 hover:text-[#864e5a] ${
                    isActive
                      ? "text-[#864e5a] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#864e5a] after:rounded-full"
                      : "text-[#5c484b]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/pricing"
            className="rounded-full bg-[#864e5a] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#9e5f6e] hover:shadow-md cursor-pointer hover:-translate-y-0.5"
          >
            Order Now
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-[#5c484b] hover:bg-[#eeded8] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-[#FBF9F1] border-b border-[#eeded8] transition-[max-height] duration-300 ease-in-out ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-5 pb-5 pt-3 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block rounded-full px-4 py-2 transition-colors ${
                  isActive
                    ? "bg-[#ffb7c5]/30 text-[#864e5a] font-bold"
                    : "text-[#5c484b] hover:bg-[#eeded8]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/pricing"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex w-full justify-center rounded-full bg-[#864e5a] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#9e5f6e]"
          >
            Order Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
