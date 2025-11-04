import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProdcutCard from './ProdcutCard'

const Productshow = () => {
    let [products, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=8&skip=10&select=title,price,thumbnail')
        .then((res)=>{
            if(!res.ok)
                throw new Error ('something went wrong')
            else
            return res.json()
        })
        .then((data)=>{
            setProduct(data.products)
            console.log(products)
        })
        .catch((err)=>{
            console.error(err.message);
        })
        .finally(()=>{
            console.log('done')
        })
    },[])
    return (
        <div className="productshowSection">
            <Container>
                <div className="proudctShowBox d-flex flex-column gap-3">
                    <h2>Recommended items</h2>
                    <Row>
                        {
                            products.map((e)=>(
                                <Col lg={3} className='mb-4'>
                                    <div className="productCardShow d-flex flex-column h-100">
                                        <img src={e.thumbnail} alt={e.titel} />
                                        <div className="d-flex flex-column">
                                            <h4>{e.price}</h4>
                                            <h6>{e.title}</h6>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Productshow