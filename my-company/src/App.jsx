import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About, Services, Home, Contact, NavBar  } from "./components";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar/>} />
                <Route index element={<Home/>} />
                <Route path="services" element={<Services/>} />
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact/>} />
            </Routes>
        
        </BrowserRouter>
    );
}
