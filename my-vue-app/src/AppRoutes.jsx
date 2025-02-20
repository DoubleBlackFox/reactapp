



import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import About from './pages/About'


export default function AppRoutes() {
  return (
    <>

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/info" element={<Info />} />
     
    </Routes>
    </BrowserRouter>

    </>
  );
}
