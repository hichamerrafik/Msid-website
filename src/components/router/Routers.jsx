import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from '../pages/Home';
import About from "../pages/About";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/Home' />} />
            <Route path='/About' element={<About/>} />
            <Route path='/home' element={<Home/>} />
        
        </Routes>
    );
};
export default Routers ;