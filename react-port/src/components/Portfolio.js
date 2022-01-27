import React from "react";
// import images from 4 repos i have created//
import career from "../assets/career.png";
import ecommerce from "../assets/ecommerce.png";
import instantc from "../assets/instantc.png";
import employee from "../assets/employee.png";

//font awesome import//
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";


function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5"> Portfolio </h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={career}
              alt="career-headstart cover.."/>
            <div className="overflow"> </div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*----*/}

          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={ecommerce}
              alt="ecommerce store cover.."/>
            <div className="overflow"> </div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*----*/}

          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={instantc}
              alt="instant cover.." />
            <div className="overflow"> </div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*----*/}

          <div className="portfolio-image-box">
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
    </div>
  );
}

export default Portfolio;
