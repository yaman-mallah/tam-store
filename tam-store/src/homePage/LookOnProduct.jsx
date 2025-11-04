import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Btn2ed from '../genrall components/2edBtn'
import { data } from 'react-router'

const LookOnProduct = ({categoury}) => {
    let [productCat, setProductCat] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categoury}?limit=8`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('something wrong happend')
                }
                return res.json()
            })
            .then((data) => {
                setProductCat(data.products)
            })
            .catch(err => console.error(err.message))
            .finally(() => {

            })
    }, [])
    // useEffect(() => {
    //     console.log(productCat.length)
    // }, [productCat])
    return (
        <>
            <div className="LookOnProductSection">
                <Container>
                    <div className="lookonproductBox">

                    <Row>
                        <Col lg={3} xs={12} >
                            <div className="d-none d-lg-block h-100 w-100">
                                <div className="lookOnInfo h-100 d-flex flex-column justify-content-center p-3 gap-3">
                                    <h4>Home and outdoor</h4>
                                    <Btn2ed text={'Source now'} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={9} xs={12}>
                            <Row>
                                {
                                    productCat.map((e, index) => (
                                        <Col lg={3} key={index}>
                                            <div className="d-flex h-100 productCardCat p-3">
                                                <div className="d-flex flex-column">
                                                    <h5>{e.title}</h5>
                                                    <p className="subText2">${e.price}</p>
                                                </div>
                                                <img src={e.thumbnail} alt="" />
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default LookOnProduct