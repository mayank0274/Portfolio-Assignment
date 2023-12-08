import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import About from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
