import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import VerticalTabDisplay from '../limitedComponent/verticalTab'
import JoinNowCard from '../limitedComponent/joinNowCard'
import OffersCard from '../limitedComponent/offersCard'

const HeroSection = () => {
    return (
        <>
            <div className="HeroSection">
                <Container>
                    <div className="heroBox">

                        <Row>
                            <Col lg={9}>
                                <VerticalTabDisplay />
                            </Col>
                            <Col lg={3} >
                                <div className="d-flex flex-column gap-3 h-100">
                                    <JoinNowCard />
                                    <OffersCard offer={'Get US $10 off with a new supplier'} color={'#F38332'} />
                                    <OffersCard offer={'Send quotes with supplier preferences'} color={'#55BDC3'} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default HeroSection