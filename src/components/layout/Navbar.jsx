import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#order", label: "Order" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-[#f8f2ec] border-b border-[#e4d7d2] shadow-sm">
      <div className="flex items-center justify-between gap-4 px-5 py-4 max-w-7xl mx-auto">
        <NavLink to="/" className="font-heading text-xl font-bold text-[#7f3d4a]">
          Kuya Jon's Cakes
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium text-[#5c484b]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#a66b74]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#order"
            className="rounded-full bg-[#7f3d4a] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#9e5f6e]"
          >
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-[#5c484b] hover:bg-[#eeded8]"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-[#f8f2ec] transition-[max-height] duration-300 ease-in-out ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-5 pb-5 pt-3 text-sm font-medium text-[#5c484b]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-full px-4 py-2 transition-colors hover:bg-[#eeded8]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex w-full justify-center rounded-full bg-[#7f3d4a] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#9e5f6e]"
          >
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
