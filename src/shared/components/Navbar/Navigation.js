import React from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/">
        <div className="nav-img">
          <img src="logodown.png" alt="logo" />
        </div>
      </NavLink>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
