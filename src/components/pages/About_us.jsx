import React from 'react'
import Header from '../Header/header'
import About1 from '../../assets/about1.png'
import About2 from '../../assets/about2.png'
import About3 from '../../assets/about3.png'
import {Container, Row, Col} from 'reactstrap'

const About_us = () => {
  return (
    
    <>
    <Container>
    <h1>About-us</h1>
    <div className="cards d-flex gap-5">
      <div class="">
  <div class="card-image">
    <figure class="image is-4by3">
    <img src={About1} alt="" />
    </figure>
  </div>

  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
        </figure>
      </div>
      <div class="media-content">
        <p class="title ">Mohammed V University </p>
        <p class="subtitle ">
          
          Avenue Nation Unies , Rabat Rabat 10000 B</p>
      </div>
    </div>
  </div>
</div>






<div class="">
  <div class="card-image">
    <figure class="image is-4by3">
    <img src={About3} alt="" />
    </figure>
  </div>

  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
        </figure>
      </div>
      <div class="media-content">
        <p class="title ">Mohammed V University </p>
        <p class="subtitle ">
          
          Avenue Nation Unies , Rabat Rabat 10000 B</p>
      </div>
    </div>
  </div>
</div>
<div class="">
  <div class="card-image">
    <figure class="image is-4by3">
    <img src={About3} alt="" />
    </figure>
  </div>

  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
        </figure>
      </div>
      <div class="media-content">
        <p class="title ">Mohammed V University </p>
        <p class="subtitle ">

          Avenue Nation Unies , Rabat Rabat 10000 B</p>
      </div>
    </div>
  </div>
</div>





</div>




</Container>
    </>
  )
}

export default About_us