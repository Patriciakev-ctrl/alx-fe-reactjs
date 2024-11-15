
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Services   from "./components/Services";
import  Home  from "./components/Home";
import Contact from "./components/Contact";
import NavBar  from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (

    <> 
      <BrowserRouter>
        <NavBar></NavBar>
        <main> 
        <Routes>
        
          <Route index element={<Home/>} />
          <Route path="services" element={<Services/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        </main>
        <Footer></Footer>
        

      </BrowserRouter>
    


</>
);

}

export default App;
