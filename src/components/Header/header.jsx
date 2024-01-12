import React from 'react'
import {Container, Row} from 'reactstrap'
import './header.css'

import Logo1 from "../../assets/logo2.png"
 
const navlinks = [
   
    {
        display: 'About us',
        url: '#'
    },
    {
        display: 'Admission',
        url: '#'
    },
    {
        display: 'Cursus',
        url: '#'
    },
    {
        display: 'Évènement',
        url: '#'
    },
    {
        display: 'Login',
        url: '#'
    },
    {
        display: 'Sign up',
        url: '#'
    },


]

const header = () => {
  return (
    <header className='header"'>
        <Container>
            
            <div className="navigation d-flex align-items-center justify-content-between ">
                <div className="logo">
                <img src={Logo1} className='logo-img no-margin-padding' />
                </div>
                <div className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list  d-flex gap-2">
                        {
                                navlinks.map((item,index)=>(
                                    <li className="nav__item" key={index}>
                                        <a href={item.url}>{item.display}</a>
                                    </li>
                                ))
                            }
                           
                        </ul>
                    </div>
                </div>
            </div>
            
        </Container>
    </header>
  )
}

export default header