import React from "react";
// import images from 4 repos i have created//

import career from "../assets/career.png";
import ecommerce from "../assets/ecommerce.png";
import instant from "../assets/instant.png";
import employee from "../assets/employee.png"; 




function Portfolio() {
  return (
    <div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5"> Portfolio </h1>
            <div className="image-box-wrapper row justify-content-center"> 
            <div className="portfolio-image-box">
            <img className="portfolio-image" src={career} alt="career-headstart cover.." />
            </div>
            {/*----*/}

            <div className="portfolio-image-box">
            <img className="portfolio-image" src={ecommerce} alt="ecommerce store cover.." />
            
            </div>
            {/*----*/}
       
            <div className="portfolio-image-box">
            <img className="portfolio-image" src={instant} alt="instant cover.." />
            
            </div>
            {/*----*/}
    
            <div className="portfolio-image-box">
            <img className="portfolio-image" src={employee} alt="employee db cover.." />
            </div>
            </div>
            {/*----*/}
        </div>
    </div>

  )
}

export default Portfolio;
