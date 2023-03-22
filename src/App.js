import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testmonial from "./components/testimonial/Testmonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  function print() {
    console.log("Jellp");
  }
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testmonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
