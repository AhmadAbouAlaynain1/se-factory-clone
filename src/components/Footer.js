import React from "react";
import social1 from "../assets/social1.PNG";
import social2 from "../assets/social2.PNG";
import social3 from "../assets/social3.PNG";
import social4 from "../assets/social4.PNG";

const Footer = () => {
  return (
    <footer className="container w-full flex justify-content-between align-items-center bg-black py-5">
      <a href="#">Privacy Policy</a>
      <p>Copyright © 2022 SE Factory SAL. All Rights Reserved.</p>
      <div className="flex justify-content-between w-10rem social">
        <div>
          <img src={social1} alt="" />
        </div>
        <div>
          <img src={social2} alt="" />
        </div>
        <div>
          <img src={social3} alt="" />
        </div>
        <div>
          <img src={social4} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
