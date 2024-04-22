import React from 'react';
import './Home.css';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Routes from "./Route/Approute";


const Home = () => {
  return (
    <div className='home-Container'>
      <p className='heading'>Porfolio</p>

      <div>
        <div className='firstpageContainer'>

          <p className='pageOne' style={{
            textOrientation: "upright", writingMode: "vertical-lr", padding: "10px 0px", borderBottom: "1px solid white", fontSize: "40px", fontFamily: "junge", color: "white"
          }}>01</p>
          <div className='Intro'>
            <h1 className='hello'>Hello</h1>
            <p className='name'>My Name is Subin Ratna Tuladhar.</p>gn
            <p className='post'>I am a, <div className='inner-heading'>
              <span>UI/UX Designer</span><br />
              <span>Front-End Developer</span><br />
              <span>Graphic Designer</span><br />
              <span>Product Designer</span>
            </div>
            </p>
          </div>

          <Router>
            <div>
              <Navbar />
              <Routes />
            </div>
          </Router>
        </div>


      </div>
    </div>
  )
}

export default Home
