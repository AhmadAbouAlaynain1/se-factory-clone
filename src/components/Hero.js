import React from "react";
import heroLogo from "../assets/hero_image_se.PNG";

const Hero = () => {
  return (
    <section className="py-8 container w-full mt-6">
      <div className="hero-main flex justify-content-between mobile-column">
        <div className="hero-main-text w-5">
          <h1 className="text-6xl font-bold mb-4">
            Full Stack Web Development
          </h1>
          <p className="text-3xl">
            Our signature 14-week full-time bootcamp prepares students to become
            professional software engineers by developing their technical and
            interpersonal skills.
          </p>
          <div className="w-1rem divider my-6"></div>
          <p className="text-xl">
            <span className="font-bold">15</span> Lectures
          </p>
          <p className="text-xl">
            <span className="font-bold">11</span> Projects
          </p>
        </div>
        <div className="hero-main-image w-6">
          <img src={heroLogo} alt="hero image" />
        </div>
      </div>
      <div className="w-full divider my-6"></div>
      <div className="hero-details flex justify-content-between mobile-column text-xl">
        <div>
          <p>Program Duration</p>
          <p className="font-bold">14 Weeks (Full-Time)</p>
        </div>
        <div>
          <p>Fully Online</p>
          <p className="font-bold">Sessions Over Zoom</p>
        </div>
        <div>
          <p>Daily Schedule</p>
          <p className="font-bold">10am → 7pm</p>
        </div>
        <div>
          <p>Enrollment Fee</p>
          <p className="font-bold">LBP250,000</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
