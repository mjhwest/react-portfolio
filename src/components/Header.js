import React from "react";
import Typed from "react-typed"
//undo to here
import Particles from "react-tsparticles";
import {Link} from "react-scroll"

const Header = () => {

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (

    <div id="home" className="header-wrapper" >
         <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fpsLimit: 60,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 25,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        <div className="main-info">
            <h1> Full Stack Web Development </h1>
            <Typed 
            className="typed-text" 
            strings = {["Client Focused Approach", "Web Development", "Coffee Enthusiast", "Lifelong Learner", "Attention to Detail", "Technology Junkie", "Problem Solver"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />

            <Link smooth={true} to="contact" href="#" className="btn-main-offer"> CONTACT ME  </Link>

        </div>
         </div>
  )
};

export default Header;