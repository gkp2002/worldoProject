/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Development(props) {
  return (
    <div className="w-full ">
      <section className="md:flex mx-auto   justify-center">
        <div className="md:w-2/5 h-auto w-full mb-4 ">
          <img className="w-10/12" src={props.img} alt="" />
        </div>
        <div className="md:w-2/5 h-auto justify-center items-center text-white mt-3 lg:px-1">
        <p className="text-orange-500 font-normal lg:px-5">Building Tomorrow's World Today
        </p>
        <p className="text-2xl font-bold lg:px-5 w-full py-2 pb-4">
            Transforming ideas into reality with precision, expertise, and a
            touch of magic.
          </p>
          <div className="grid lg:grid-cols-2 grid-rows-1 w-">
            <div className="lg:py-4 lg:px-5">
              <h1 className="text-xl font-medium pb-3 "> Web Development </h1>
              <p className="text-md font-normal pb-3">
                Building responsive, intuitive web experiences that drive
                results.
              </p>
            </div>
            <div className="lg:py-4 lg:px-5 w-full">
              <h1 className="text-xl font-medium pb-3">
                 App Development
              </h1>
              <p className="text-md font-normal pb-3">
                Bringing your ideas to life on the devices that matter most.
              </p>
            </div>

            <div className="lg:py-4 lg:px-5 w-full">
              <h1 className="text-xl font-medium pb-3">
                {" "}
                Software Development{" "}
              </h1>
              <p className="text-md font-normal pb-3">
                Tailored solutions that optimize processes, empower teams, and
                drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Development;
