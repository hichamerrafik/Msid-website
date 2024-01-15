import React from 'react'
import Header from '../Header/header'

import About2 from '../../assets/about1.png'

import { Container } from 'reactstrap'
import "../styles/about-us.css"

const About_us = () => {
  return (
    <>
      <Container id='About-us'>
        <h1 className='tit'>About-us</h1>
        <div className="container d-flex gap-5">
        <div className="card" >
        <a href="http://www.um5.ac.ma/um5/" target="_blank" rel="noopener noreferrer">
              <img src={About2} className="card-img-top" alt="..." />
            </a>
          <div className="card-body">
            <h2>Mohammed V University </h2>
            <p className="card-text">
            <i class="ri-map-pin-fill"></i>
            Avenue Nation Unies , Rabat Rabat 10000 B            </p>
          </div>
        </div>

        <div className="card" >
        <a href="http://www.fsr.ac.ma/" target="_blank" rel="noopener noreferrer">
              <img src={About2} className="card-img-top" alt="..." />
            </a>          
            <div className="card-body">
            <h2>Faculté des Sciences Rabat</h2>
            <p className="card-text">
            <i class="ri-map-pin-fill"></i>
            4 Avenue Ibn Batouta BP 1014 RP, RABAT    </p>
          </div>
        </div>
        <div className="card" >
        <a href="http://localhost:5173/about" target="_blank" rel="noopener noreferrer">
              <img src={About2} className="card-img-top" alt="..." />
            </a> 
          <div className="card-body">
            <h2>Master Sciences et Ingénieurie de données</h2>
            <p className="card-text">
              
            </p>
          </div>
        </div>
        </div>
      </Container>
    </>
  )
}

export default About_us
