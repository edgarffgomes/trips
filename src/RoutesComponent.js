import React from "react";
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";

const RoutesComponent = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/reservas" element={<Reservas/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesComponent;