import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
    <div style ={{backgroundColor:'blue', backgroundRepeat:'inherit', backgroundSize:'cover' }}>
      
      
      < Header />
      <Routes>
      < Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
