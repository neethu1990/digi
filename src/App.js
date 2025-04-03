import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
    <div>
      
      <Router>
      < Header />
      <Routes>
      < Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
