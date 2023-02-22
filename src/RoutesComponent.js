import React from "react";
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";
import Header from "./components/Header";

const RoutesComponent = () =>{
    return(
        <Provider store={store}>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/reservas" element={<Reservas/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
export default RoutesComponent;