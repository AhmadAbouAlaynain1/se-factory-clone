import React from "react";

const Calendar = () => {
  return (
    <section className="py-8 container w-full ">
      <div className="mb-4">
        <h1 className="text-5xl">Full Stack Web Development</h1>
        <p className="text-5xl">Program Calendar 2022</p>
      </div>

      <div className="divider my-4"></div>
      <div className="flex justify-content-between align-items-center text-xl my-5 mobile-column">
        <div>
          <h1 className="text-2xl">Online</h1> <p>Cycle 4</p>
        </div>
        <div>
          <p>
            <span className="font-bold">From:</span> May 2022
          </p>
          <p>
            <span className="font-bold">Till:</span> August 2022
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Deadline to Apply:</span> March 31st
          </p>
          <p>
            <span className="font-bold">FSW Entrance Exam:</span> April 2022
          </p>
        </div>
        <button className="btn btn-primary text-base">Apply Now</button>
      </div>
      <div className="divider my-5"></div>
      <div className="flex justify-content-between align-items-center text-xl my-5 mobile-column">
        <div>
          <h1 className="text-2xl">Online</h1>
        </div>
        <div>
          <p>
            <span className="font-bold">From:</span> Coming Soon
          </p>
          <p>
            <span className="font-bold">Till:</span> Coming Soon
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">When to Apply:</span> TBA
          </p>
          <p>
            <span className="font-bold">Interview Period:</span> TBA
          </p>
        </div>
        <p className="text-xl font-bold">{">"} Coming soon</p>
      </div>
    </section>
  );
};

export default Calendar;
