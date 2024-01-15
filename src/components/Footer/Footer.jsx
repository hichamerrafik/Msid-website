import React from "react";
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo2.png'
const quick__links=[
    {
        path:'/#About-us',
        display:'About'
    },
    {
        path:'/#',
        display:'Careers'
    },
    {
        path:'/#',
        display:'Mobile'
    }
];
const quick__links2=[
    {
        path:'/Airlinefees',
        display:'Airlinefees'
    },
    {
        path:'/Airline',
        display:'Airline'
    },
    {
        path:'/Low fare tips',
        display:'Low fare tips'
    }
]
const Footer = () => {
    const years = new Date().getFullYear();
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                    <div className="logo1">
                        <img src={Logo} className="logo-img1" alt="" />
                    </div>
                
                    
                    
                    </Col>
                    <Col lg='3'>
                        <h5 className="footer__link-title"> Company</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item,index) =>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                        <h5 className="footer__link-title"> More </h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links2.map((item,index) =>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                    <h5 className="footer__link-title">Contact</h5>
                        <ListGroup className="footer__quick-links">
                            
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                    <i class="ri-map-pin-fill"></i> Address:
                                    </span>
                                </h6>
                                <p className="mb-0">Rabat Maroc</p>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                    <i class="ri-mail-fill"></i> Email:
                                    </span>
                                </h6>
                                <p className="mb-0">Contact.msid@gmail.com</p>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                    <i class="ri-phone-fill"></i> Phone:
                                    </span>
                                </h6>
                                <p className="mb-0">+212-663-455-278</p>
                            </ListGroupItem>
                            
                            
                        </ListGroup>
                    </Col>
                    <Col lg="12" className="text-center pt-5">
                        <div className="copyright">Copyright {years}, design and develop by <span>Lina EL HANAFI</span>. All rights reserved </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default Footer ;