import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/gallery"}>Gallery</NavLink>
    </nav>
  );
};

export default Navbar;
