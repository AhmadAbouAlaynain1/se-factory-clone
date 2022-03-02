import React from "react";
import test1 from "../assets/test_se.PNG";
import test2 from "../assets/test_se2.PNG";
import test3 from "../assets/test_se3.PNG";

const Testimonials = () => {
  return (
    <section className="py-7 container w-full flex bg-green justify-content-between mobile-column">
      <div>
        <h1 className="text-4xl">Student</h1>
        <p className="text-4xl">Testimonials</p>
      </div>
      <div>
        <img src={test1} alt="" />
      </div>
      <div>
        <img src={test2} alt="" />
      </div>
      <div>
        <img src={test3} alt="" />
      </div>
    </section>
  );
};

export default Testimonials;
