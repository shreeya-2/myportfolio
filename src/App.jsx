import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import TechStack from "./components/TechStack/TechStack";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <p> Hello World </p>
      <Project />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
