import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from './logo'

import appStore from '../assets/imgs/Layout/Misc/market-button.png'

const Footer = () => {
    return (
        <>
        <div className="pt-5">

            <Container>
                <Row>
                    <Col lg={4} md={12}>
                        <div className="d-flex flex-column gap-3">
                            <Logo />
                            <p className="subText">
                                Best information about the company gies <br />  here but now lorem ipsum is
                            </p>

                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <Row>
                            <Col lg={3} xs={6} >
                                <div className="d-flex flex-column gap-2 mb-2">
                                    <h4>About</h4>
                                    <ul className='d-flex flex-column footerList' >
                                        <li><a href="">About us</a></li>
                                        <li><a href="">Find store</a></li>
                                        <li><a href="">Categories</a></li>
                                        <li><a href="">Blogs</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} xs={6}>
                                <div className="d-flex flex-column gap-2 mb-2">
                                    <h4>Partnership</h4>
                                    <ul className='d-flex flex-column footerList' >
                                        <li><a href="">About us</a></li>
                                        <li><a href="">Find store</a></li>
                                        <li><a href="">Categories</a></li>
                                        <li><a href="">Blogs</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} xs={6} >
                                <div className="d-flex flex-column gap-2">
                                    <h4>Information</h4>
                                    <ul className='d-flex flex-column footerList' >
                                        <li><a href="">About us</a></li>
                                        <li><a href="">Find store</a></li>
                                        <li><a href="">Categories</a></li>
                                        <li><a href="">Blogs</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} xs={6} >
                                <div className="d-flex flex-column gap-2 mb-2">
                                    <h4>For users</h4>
                                    <ul className='d-flex flex-column footerList' >
                                        <li><a href="">About us</a></li>
                                        <li><a href="">Find store</a></li>
                                        <li><a href="">Categories</a></li>
                                        <li><a href="">Blogs</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2} md={12}>
                        <div className="d-flex flex-column gap-2 mb-2">
                            <h4>Get App</h4>
                            <a>

                            <img src={appStore} alt="" />
                            </a>
                            <a>

                            <img src={appStore} alt="" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Footer