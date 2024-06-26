/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import {Link} from "react-scroll" 
import React from "react";
import { NavLink,useNavigate,Route, Routes } from "react-router-dom";
import "../Css/Home.css"
function Header(props) {
  return (
    <div>
  
      <header className="bg-transparent w-full text-gray-100">
        <div className="py-[10vmax] lg:px-[10vmax] px-4   ">
          <div className="text-[5vmax] font-bold py-3 ">
            Start Your <span className="text-stroke-2 text-orange-500" >  Journey </span> with Us!!
          </div>
          <h5 className="text-[1.4vmax] font-medium  lg:leading-6 pb-2 ">
          At The Tech Titans, we lookout for talented individuals who are passionate about
           making a difference and driving innovation.
          </h5>
          <div className="py-4">
          <Link to="hiring"
           smooth={true}
           duration={500}
           offset={-1280}
           activeClass="active"
          >
          <button className="text-[1.3vmax] font-bold px-8 py-3 rounded-3xl bg-orange-900 hover:bg-orange-600 " >
          See All Opening
          </button>
          </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
