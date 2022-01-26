import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TParticles from "react-tsparticles";

function App() {
  return (
    <>
  <TParticles />
   <Navbar /> 
    <Header />
</>
  );
}

export default App;
