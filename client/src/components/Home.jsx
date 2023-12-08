import React from "react";

import HeroSection from "./HeroSection.jsx";
import About from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact.jsx";
import { Footer } from "./Footer.jsx";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
