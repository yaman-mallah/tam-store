import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServicesCard from '../genrall components/ServicesCard'

// imgs for the card
import shippingImg from '../../src/assets/imgs/home/services/image 108.png'
import customizeImg from '../../src/assets/imgs/home/services/image 104.png'
import planeImg from '../../src/assets/imgs/home/services/image 106.png'
import wareHouseImg from '../../src/assets/imgs/home/services/image 107.png'


const ExtraServices = () => {
    return (
        <>
            <div className="extraServicesBox">
                <Container>
                    <div className="d-flex flex-column gap-3">
                        <h2>
                            Extra services
                        </h2>
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                                <ServicesCard img={shippingImg} title={'Source from Industry Hubs'} type={'source'}/>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <ServicesCard img={customizeImg} title={'Customize Your Products'} type={'customize'}/>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <ServicesCard img={planeImg} title={'Fast, reliable shipping by ocean or air'} type={'fast'}/>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <ServicesCard img={wareHouseImg} title={'Product monitoring  and inspection'} type={'product'}/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ExtraServices;