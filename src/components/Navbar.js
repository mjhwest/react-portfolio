import React from "react";
import logo from "../assets/logo5.png"
//FONT AWESOME IMPORTS//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import {Link} from "react-scroll"

const Navbar = () => {
  // Control size and opacity of navbar relative to viewport
  var position = $(window).scrollTop()
  $(window).on('scroll', () => {
    let navPosition = $('.navbar').offset().top;
    let navHeight = $('.navbar').height();
    let scroll = $(window).scrollTop();
    if (scroll > position && navPosition >= (navHeight + 150)) {
        $('.navbar-brand-logo').css({
          'height': '5rem',
        });
        $('.navbar').css({
          'background-color': 'rgba(33,37,41,0.5)',
        });
    } else if (scroll < position && navPosition <= (navHeight + 150)) {
        $('.navbar-brand-logo').css({
          'height': '10.9375rem',
        });
        $('.navbar').css({
          'background-color': 'rgba(33,37,41,1)',
        });
    } else {
        $('.navbar-brand-logo').css({
          'height': '5rem',
        });
        $('.navbar').css({
          'background-color': 'rgba(33,37,41,1)',
        });
    }
    position = scroll;

  });

  return (
<nav className="navbar navbar-expand-lg navbar-light">

<div className="container">   
  <a className="navbar-brand" href="#"> <img className="navbar-brand-logo" src={logo} alt="logo.." /> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" href="#">Home    </Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" offset={-100} className="nav-link" href="">About me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="experience" offset={-100} className="nav-link" href="#">Experience</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="portfolio" offset={-100} className="nav-link" href="#">portfolio</Link>
      </li>
      <li className="nav-item">
        <a href="https://github.com/mjhwest" target="_blank" rel="noopener noreferrer" className="nav-link"  >github</a>
      </li>
      <li className="nav-item">
        <a href="https://drive.google.com/file/d/1LyfOoN5r5EcFuZFziYDx9VpOkqhl3tnB/view" target="_blank" rel="noopener noreferrer" className="nav-link" >resume</a>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="contact" offset={-100} className="nav-link" href="#">contact me</Link>
      </li>
      </ul>
      {/* <a href="https://drive.google.com/file/d/1LyfOoN5r5EcFuZFziYDx9VpOkqhl3tnB/view" className="footer-nav" target="_blank" rel="noopener noreferrer" class="menu-item"> Resume </a> */}
 </div>
 </div>
</nav>


  )
};

export default Navbar;