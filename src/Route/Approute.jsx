import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Home from "../Pages/Home";
import Education from "../Pages/Education";
import Project from "../Pages/Projects";
import Experience from "../Pages/Experience";
import Skill from "../Pages/Skills";
import Contact from "../Pages/Contact";

const Approute = () => {
    return (

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Education" element={<Education/>} />
           
            </Routes>
    )
}

export default Approute
