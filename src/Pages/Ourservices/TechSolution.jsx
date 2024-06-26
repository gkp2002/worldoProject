/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function TechSolution(props) {
  return (
    <div className="w-full   ">
      <section className="md:flex mx-auto  justify-center">
        <div className="md:w-2/5 h-auto w-full mb-4 ">
          <img className="w-11/12" src={props.img} alt="" />
        </div>
        <div className="md:w-2/5 h-auto justify-center items-center text-white mt-3 lg:px-1 w-full">
        <p className="text-orange-500 font-normal lg:px-5">Innovating Solutions, Driving Progress </p>
        <p className="text-2xl font-bold lg:px-5 w-full py-2 pb-4">
            Cutting-edge solutions, shaping the future of your digital presence.
          </p>
          <div className="grid lg:grid-cols-2 grid-rows-1 ">
            <div className="lg:py-4 lg:px-5 py-4 w-full ">
              <h1 className="text-xl font-medium pb-3 "> CRM Solutions </h1>
              <p className="text-md font-normal pb-3">
                Streamlining customer relationships, enhancing engagement, and
                boosting efficiency.
              </p>
            </div>
            <div className="lg:py-4 lg:px-5 py-4 w-full ">
              <h1 className="text-xl font-medium pb-3">Chatbot</h1>
              <p className="text-md font-normal pb-3">
                Revolutionizing customer interactions with AI-powered
                conversational
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechSolution;
