import React from "react" ;
import author from "../assets/me.jpg";

function AboutMe() {
  return <div className="container py-5">

      <div className="row"> 
        <div className="col-lg-6 col-xm-12" > 
        <div className="photo-wrap mb-5">
        <img className ="profile-img" src={author} alt="author..." /> 
        </div>
        </div>

        <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading"> About Me </h1>
            <p> 
            Aspiring full-stack web developer utilizing psychology, marketing and business background to build a more intuitive user experience on the web. <br></br>
            <br></br>
            Proficient and knowledgeable in JavaScript, CSS, Web-APIs, Express, SQL, NoSQL, PWA React, Bootstrap and Database Construction  with a focus on mobile-first design and development for a rounded user experience. <br></br>
            <br></br>
            With 6 years of business experience I have developed into a lateral thinker, a highly proficient team leader and an excellent communicator, capable working with others or individually. 
            I am eager to use all my previous experiences to help deliver desirable outcomes for any project I undertake.  <br></br>
            <br></br>
            Excited to apply my knowledge and understanding of current and forthcoming technologies, my mantra as a lifelong learner and positive attitude towards challenging tasks to enter a new fast paced, action-oriented industry where I will be able to work and help deliver customer oriented outcomes that exceed expectations. 

            </p>
             </div>
      </div>
  </div>;
}

export default AboutMe;
