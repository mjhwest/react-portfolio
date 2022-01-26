import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TParticles from "react-tsparticles";

function App() {
  return (
    <>
  <TParticles
  params={{
    number: {
      value:30,
      density: {
        enable: true, 
        value_area: 900
      }
    }
  }} />
   <Navbar /> 
    <Header />
</>
  );
}

export default App;
