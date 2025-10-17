import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Btn2ed from '../genrall components/2edBtn'

const LookOnProduct = () => {
  return (
    <>
        <div className="LookOnProductSection">
            <Container>
                <Row>
                    <Col lg={3}  xs={12} >
                        <div className="d-none d-lg-block h-100 w-100">
                            <div className="lookOnInfo">
                                <h4>Home and outdoor</h4>
                                <Btn2ed text={'Source now'}/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9} xs={12}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default LookOnProduct