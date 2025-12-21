import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import About from "./sections/About.jsx";
import Insight from "./sections/Insight.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import FAQ from "./sections/FAQ.jsx";
import PreFooter from "./sections/PreFooter.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Insight />
      <Testimonial />
      <FAQ />
      <PreFooter />
      <Footer />
    </>
  );
};

export default App;
