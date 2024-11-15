
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Services   from "./components/Services";
import  Home  from "./components/Home";
import Contact from "./components/Contact";
import NavBar  from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        
        <Route index element={<Home/>} />
        <Route path="services" element={<Services/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
    </Routes>

</BrowserRouter>
);

}

export default App;
