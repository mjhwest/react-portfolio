import React, {useState} from "react";
// import images from 4 repos i have created//
import career from "../assets/career.png";
import ecommerce from "../assets/ecommerce.png";
import instantc from "../assets/instantc.png";
import employee from "../assets/employee.png";
import $ from 'jquery';

//font awesome import//
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";

//import react popupbox 
import { PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


function Portfolio() {

  const [careerOpen, setCareerOpen] = useState(false);
  const [ecommerceOpen, setEcommerceOpen] = useState(false);
  const [cryptoOpen, setCryptoOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);

  //career
  const openPopupboxCareer = () => {
    const content =(
    <> 
    <img className="portfolio-image-popupbox" src= {career} alt="career headstart logo" />
    <p> 
    A full-stack web application for users that are seeking work or users who are posting job in hope to gain employees.   </p>
    GitHub: <a className="hyper-link" href="https://github.com/mjhwest/career-headstart"  target="_blank" rel="noopener noreferrer" className="menu-item"> https://github.com/mjhwest/career-headstart </a><br>
    </br>
    Deployed Application: <a href="https://career-head-start.herokuapp.com/"  target="_blank" rel="noopener noreferrer" className="menu-item"> https://career-head-start.herokuapp.com/ </a>
  
    </> 
    )
    PopupboxManager.open({content})
    setCareerOpen(true); 
  }

  const popupboxConfigCareer = {
    titleBar: {
      enable: true,
      text: "Career Headstart Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

    //ecommerce
    const openPopupboxEcommerce = () => {
      const content =(
      <> 
      <img className="portfolio-image-popupbox" src= {ecommerce} alt="ecommerce logo" />
      <p> 
      Creating a functional back end for an e-commerce store that allows the user to view all products as well as add, update and delete products.    </p>
      GitHub: <a className="hyper-link" href="https://github.com/mjhwest/E-Commerce-Back-End"  target="_blank" rel="noopener noreferrer" className="menu-item"> https://github.com/mjhwest/E-Commerce-Back-End </a><br>
      </br>
      View Video of Application: <a href="https://watch.screencastify.com/v/ehELJiLw2KjN3cLKwbLK"  target="_blank" rel="noopener noreferrer" class="menu-item"> https://watch.screencastify.com/v/ehELJiLw2KjN3cLKwbLK</a>
    
      </> 
      )
      PopupboxManager.open({content})
      setEcommerceOpen(true); 
    }
  
    const popupboxConfigEcommerce = {
      titleBar: {
        enable: true,
        text: "E-Commerce Store - Back End "
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  

      //instantc
      const openPopupboxInstantc = () => {
        const content =(
        <> 
        <img className="portfolio-image-popupbox" src= {instantc} alt="instant crypto logo" />
        <p> 
        A new web application that uses 2 different server side APIs to collect and display searched cryptocurreny data and related new articles   </p>
        GitHub: <a className="hyper-link" href="https://github.com/mjhwest/InstantCrypto"  target="_blank" rel="noopener noreferrer" className="menu-item"> https://github.com/mjhwest/InstantCrypto </a><br>
        </br>
        Deployed Application: <a href="https://mjhwest.github.io/InstantCrypto/"  target="_blank" rel="noopener noreferrer" class="menu-item"> https://mjhwest.github.io/InstantCrypto/</a>
      
        </> 
        )
        PopupboxManager.open({content})
        setCryptoOpen(true);
      }
    
      const popupboxConfigInstantc = {
        titleBar: {
          enable: true,
          text: "Web application using 2 different server-side API's "
        },
        fadeIn: true,
        fadeInSpeed: 500
      }

      //employee
      const openPopupboxEmployee = () => {
        const content =(
        <> 
        <img className="portfolio-image-popupbox" src= {employee} alt="employee-tracker logo" />
        <p> 
        Built a command line application from scratch to manage a companies employee database, using Node.js, Inquirer and MySQL.    </p>
        GitHub: <a className="hyper-link" href="https://github.com/mjhwest/employee-tracker"  target="_blank" rel="noopener noreferrer" className="menu-item">https://github.com/mjhwest/employee-tracker</a><br>
        </br>
        View Video of Application: <a href="https://watch.screencastify.com/v/gG78vk5GNhShBFimTZ4X"  target="_blank" rel="noopener noreferrer" class="menu-item"> https://watch.screencastify.com/v/gG78vk5GNhShBFimTZ4X</a>
      
        </> 
        )
        PopupboxManager.open({content})
        setEmployeeOpen(true); 
      }
    
      const popupboxConfigEmployee = {
        titleBar: {
          enable: true,
          text: "Employee Tracker Database For Managment "
        },
        fadeIn: true,
        fadeInSpeed: 500
      }

      // UPDATE PORTFOLIO IMAGE BOXES 
      // function setImage () { 
      //     $(".portfolio-image-box").css({
      //       "background": `url(${career} center center/cover no-repeat)` 
      //     })
      // }

      // setImage();

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5"> Portfolio </h1>
        <h3 className="text-uppercase text-center py-1"> Take at a look at my work </h3>
        <div className="image-box-wrapper justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxCareer}>
            <img
              className="portfolio-image"
              src={career}
              alt="career-headstart cover.."/>
            <div className="overflow"> </div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*----*/}
          <div className="portfolio-image-box" onClick={openPopupboxEcommerce}> 
            <img
              className="portfolio-image"
              src={ecommerce}
              alt="ecommerce store cover.."/>
            <div className="overflow"> </div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*----*/}
          <div className="portfolio-image-box" onClick={openPopupboxInstantc}>
            <img
              className="portfolio-image"
              src={instantc}
              alt="instant cover.." />
            <div className="overflow"> </div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*----*/}
          <div className="portfolio-image-box"onClick={openPopupboxEmployee} > 
            <img
              className="portfolio-image"
              src={employee}
              alt="employee db cover.."/>
            <div className="overflow"> </div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>

        
        {/*----*/}
      </div>


      <div style ={{display: careerOpen ? "block" : "none"}}>
        <PopupboxContainer onClosed={() => {
          console.log("closed career");
          setCareerOpen(false);
        }} {...popupboxConfigCareer} /> 
      </div>

      <div style ={{display: ecommerceOpen ? "block" : "none"}}>
        <PopupboxContainer onClosed={() => {
          console.log("closed ecommerce");
          setEcommerceOpen(false);
        }} {...popupboxConfigEcommerce} /> 
      </div>

      <div style ={{display: cryptoOpen ? "block" : "none"}}>
        <PopupboxContainer onClosed={() => {
          console.log("closed crypto");
          setCryptoOpen(false);
        }} {...popupboxConfigInstantc} /> 
      </div>

      <div style ={{display: employeeOpen ? "block" : "none"}}>
        <PopupboxContainer onClosed={() => {
          console.log("closed employee");
          setEmployeeOpen(false);
        }} {...popupboxConfigEmployee} /> 
      </div>



    </div>
  );
}

export default Portfolio;
