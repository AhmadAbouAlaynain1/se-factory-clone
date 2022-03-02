import React from "react";

const WeeklyBreakdown = () => {
  return (
    <section className="py-8 container w-full bg-grey">
      <div className="flex justify-content-between ">
        <h1 className="text-5xl">Weekly Breakdown</h1>
        <button className="btn btn-secondary text-xl">Download Syllabus</button>
      </div>
      <div className="w-full divider my-6"></div>
      <div className="flex justify-content-between mobile-column">
        <div className="w-4">
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 1</p>
          <h1 className="text-xl mb-2">Introduction</h1>
          <ol type="a" className="px-4 text-xl">
            <li>Intro to Web Development & Cloud Computing</li>
            <li>Ubuntu Environment Setup</li>
            <li>Git and Source Control</li>
          </ol>
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 2</p>
          <h1 className="text-xl">Relational Databases & Schema Design</h1>
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 3</p>
          <h1 className="text-xl">
            Integrating PHP with MySQL, Server Side Web Applications in PHP
          </h1>
        </div>
        <div className="w-3">
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 4</p>
          <h1 className="text-xl">Front End Development with Javascript</h1>
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 5</p>
          <h1 className="text-xl">REST APIs</h1>
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 6</p>
          <h1 className="text-xl">Laravel</h1>
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 7</p>
          <h1 className="text-xl">React</h1>
        </div>
        <div className="w-3">
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 8</p>
          <h1 className="text-xl">Teamwork Project in Github</h1>
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 9</p>
          <h1 className="text-xl">Security</h1>
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 10</p>
          <h1 className="text-xl">AWS & Cloud Architecture</h1>
          <div className="w-1rem divider my-4"></div>
          <p className="text-xl">Week 11-14</p>
          <h1 className="text-xl">Final Project & Showcase</h1>
        </div>
      </div>
    </section>
  );
};

export default WeeklyBreakdown;
