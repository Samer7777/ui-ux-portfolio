import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import About from "./main/About";
import Blog from "./main/Blog";
import Hero from "./main/Hero";
import Portfolio from "./main/Portfolio";
import Services from "./main/Services";
import Speak from "./main/Speak";
import Testamonial from "./main/Testamonial";

export default function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testamonial />
          <Blog />
          <Speak />
        </div>
      </main>
      <Footer />
    </div>
  );
}
