import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

// not working
// import Particles from "react-tsparticles";

function App() {
  return (
    <>
   <Navbar /> 
    <Header />
</>
  );
}

export default App;



/* <Particles 

options = {{
  particles: {
    number: {
      value:30, 
      density: {
        enable: true,
        value_area:900
      }
    }
  }
}} */

// options={{
//   particles: {
//     color: {
//       value: "#ffffff",
//     },
//   },
//   links: {
//     color: "#ffffff",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//   },
//   number: {
//     density: {
//       enable: true,
//       area: 800,
//     },
//     value: 40, 
//   }

// }}

//neeed to close this off here 


