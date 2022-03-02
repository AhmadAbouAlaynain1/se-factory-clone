import React from "react";
import logo from "../assets/logo_se.PNG";

const Navbar = ({ visible }) => {
  return (
    <nav
      className={`fixed ${
        visible ? "top-0" : "nav-hide"
      } container w-full flex justify-content-between align-items-center h-5rem font-semibold  `}
    >
      <div className="h-5rem">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex align-items-center">
        <li>Get Trained</li>
        <li>Hire Talent</li>
        <li>FAQs</li>
        <li>Blog</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>
          <button className="btn btn-primary">Apply Now</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
