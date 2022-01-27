import React from "react";

function Experience() {
  return <div className="experience">
      <div className="d-flex justify-content-center my-5"> 
      <h1> experience </h1>
      </div>
      <div className="container experience-wrapper"> 
      <div className="timeline-block timeline-block-right">
          <div className="marker"> </div>
              <div className="timeline-content">
                  <h3> 1989-Current </h3>
                  <p> Played video games and explored web-development for fun. Loved all things technology.  </p>
              </div>
          </div>
          {/* */}
          <div className="timeline-block timeline-block-left">
          <div className="marker"> </div>
              <div className="timeline-content">
                  <h3> 2002-Current </h3>
                  <p> Had my first ever coffee and never turned back.  </p>
              </div>
          </div>
          {/* */}
          <div className="timeline-block timeline-block-right">
          <div className="marker"> </div>
              <div className="timeline-content">
              <h3> 2006-2014  </h3>
                  <p> Started studying at University. Completing a Bachelors in Psycology and Masters in Marketing</p>
              </div>
          </div>
           {/* */}
          <div className="timeline-block timeline-block-left">
          <div className="marker"> </div>
              <div className="timeline-content">
                  <h3> 2015-2022  </h3>
                  <p> Successfully operated my own business in the Adelaide CBD.  </p>
              </div>
          </div>
           {/* */}
           <div className="timeline-block timeline-block-right">
          <div className="marker"> </div>
              <div className="timeline-content">
                  <h3> 2021-2022 </h3>
                  <p> Started studying Full Stack Web Development through Adelaide Univertisty. Coffee intake increased.</p>
              </div>
          </div>
           {/* */}
           <div className="timeline-block timeline-block-left">
          <div className="marker"> </div>
              <div className="timeline-content">
                  <h3> 2022 </h3>
                  <p> Completed and gained certificate in Full Stack Web Development, average A+ grade for all projects and homeworks.  </p>
              </div>
          </div>
      </div>
  </div>;
}

export default Experience;
