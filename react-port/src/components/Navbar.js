import React from "react";
import logo from "../assets/logo5.png"
//FONT AWESOME IMPORTS//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">

<div className="container">   
  <a className="navbar-brand" href="#"> <img src={logo} alt="logo.." /> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home   {/*  <span className="sr-only">(current)</span> */} </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">github</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contact me</a>
      </li>
      </ul>
 </div>
 </div>
</nav>


  )
};

export default Navbar;
