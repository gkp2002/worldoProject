/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom"
function HiringProcess() {
  return (
    <div name="hiring">
      <section className="bg-gray-900 text-white bg-opacity-70 py-16 lg:px-28 px-2">
        <div className="" >
          <h1 className="text-4xl py-4">Don't See a Position That Matches Your Skills?</h1>
          <p className="text-md px-10 ">
          <ul className="list-disc">
          <li>
          We're always interested in hearing from talented individuals, even
          if there are no current openings that match your skills and
          experience. Feel free to send us your resume and a brief overview of
          what you can bring to the team to <Link to="mailto:info@thetechtitans.com" > hr@thetechtitan.com.</Link>
          </li>
          </ul>
          </p>
        </div>
        <div className=" py-5">
          <h1 className="text-4xl py-4">Here's a Peek into Our Hiring Process</h1>
          <ul className=" list-disc px-10 ">
            <li>
              Screening: We carefully review every resume, looking for the
              unique qualities that make you shine.
            </li>
            <li>
              Interview : We love getting to know you better through friendly
              and relaxed interviews where we explore how your skills align with
              our team.
            </li>
            <li>
              Final step: We believe in mutual respect and understanding. After
              careful consideration and reference checks, we extend offers to
              those who we feel will thrive with us.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HiringProcess;
