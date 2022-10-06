import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home.js';
import About from './Component/About.js';
import Services from './Component/Services.js';
import Contact from './Component/Contact.js';
import Policy from './Component/Policy.js';
import Error from './Component/Error.js';
import List from './Component/List';
import Footer from "./Component/Footer.js";

const App=()=>{
  return(
    <>
      <List />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/policy" element={<Policy />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App;