import React from "react";
import laptopLogo from "../assets/laptop_se.PNG";
import internetLogo from "../assets/internet_se.PNG";
import process1 from "../assets/process_se1.PNG";
import process2 from "../assets/process_se2.PNG";
import process3 from "../assets/process_se3.PNG";
import process4 from "../assets/process_se4.PNG";
import process5 from "../assets/process_se5.PNG";

const Info = () => {
  return (
    <section className="py-6 container w-full">
      <div className=" flex justify-content-between mb-8 mobile-column">
        <div>
          <div className="mb-2 h-5rem w-2">
            <img src={laptopLogo} alt="" />
          </div>
          <h1 className="text-4xl mb-3">Gain the soft skills that matter.</h1>
          <ul className=" px-4 text-xl">
            <li>CV Writing and Job Interviewing</li>
            <li>Public Pitching and Presentation</li>
            <li>Teamwork and Professional Communication</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 h-5rem w-2">
            <img src={internetLogo} alt="" />
          </div>
          <h1 className="text-4xl mb-3">Gain the soft skills that matter.</h1>
          <ul className=" px-4 text-xl">
            <li>110+ Recruiting Companies from 7+ Countries</li>
            <li>Connect with Local and International Recruiters</li>
            <li>SEF-Managed Job Interviewing Process</li>
            <li>180+ alumni network access</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-content-between align-items-center mobile-column">
        <h1 className="w-2">Application Process</h1>
        <div>
          <img src={process1} alt="" />
        </div>
        <div>
          <img src={process2} alt="" />
        </div>
        <div>
          <img src={process3} alt="" />
        </div>
        <div>
          <img src={process4} alt="" />
        </div>
        <div>
          <img src={process5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Info;
