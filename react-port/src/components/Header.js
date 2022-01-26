import React from "react";
import Typed from "react-typed"

const Header = () => {
  return (

    <div className="header-wrapper">
        <div className="main-info">
            <h1> Full Stack Web Development </h1>
            <Typed 
            className="typed-text" 
            strings = {["Client Focused Approach", "Web Development", "Coffee Enthusiast", "Lifelong Learner"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />

            <a href="#" className="btn-main-offer"> CONTACT ME  </a>

        </div>
         </div>
  )
};

export default Header;