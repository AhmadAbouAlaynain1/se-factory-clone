import React from "react";

const ProgramFees = () => {
  return (
    <section className="py-8 container w-full flex justify-content-between align-items-start mobile-column">
      <div className="w-3">
        <h1 className="text-5xl mb-2">Program Fees</h1>
        <p className="text-xl">
          SE Factory offers low-cost programs with flexible payment terms, where
          you only pay the main fee if you graduate and get hired
        </p>
      </div>
      <div className="w-3 text-xl font-medium ml-4">
        <div className="mb-4">
          <h1 className="text-xl">Application Fee:</h1>
          <p>$0</p>
        </div>
        <div>
          <h1 className="text-xl">Admission Fee:</h1>
          <p>250 000 LBP for Bootcamp</p>
        </div>
      </div>
      <div className="w-5 text-xl ">
        <h1 className="text-xl font-medium">Success Fee:</h1>
        <ul className="px-4">
          <li>Highest of 1 month salary or $2,000</li>
          <li>Fee is only due after you get a job</li>
          <li>Payments can be spread over up to 16 months</li>
        </ul>
      </div>
    </section>
  );
};

export default ProgramFees;
