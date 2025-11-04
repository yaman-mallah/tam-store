import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProdcutCard from './ProdcutCard'

import { productServices } from '../servicesAPI/productServices'
import ProductFilter from './productFilter'
const AllProducts = () => {
    let [products, setProduct] = useState([])
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')

    //         .then((res)=>{
    //             if(res.ok){
    //                 return res.json()
    //             }

    //                 throw new Error ('something went wrong')

    //         })
    //         .then((data) => {
    //             // console.log('data' + data)
    //             setProduct(data.products)
    //         })
    //         .finally(() => {
    //             // console.log('fetched')
    //         })
    //         .catch((error)=>{
    //             console.error(error)
    //         })
    // }, [])
    let getApi = () => {
        productServices.getProducts({
            // searchQuery:'phone',
            limit: 10,
            skip: 0
        })
            .then((data) => {
                setProduct(data.products)
                console.log(data)
            })
            .catch((error) => console.error(error))
            .finally(() => console.log('fetch is done'))
    }
    useEffect(() => {
        getApi()
    }, [])

    return (
        <>
            <Container>
            <div className="pt-3">

                <Row>
                    <Col lg={3}>
                        <ProductFilter/>
                    </Col>
                    <Col>
                        <Row>

                            {

                                products.map((e) => {
                  
                                    return (


                                        <ProdcutCard name={e.title} img={e.thumbnail} stars={e.rating} price={e.price} id={e.id} />

                                    )

                                })

                            }
                        </Row>
                    </Col>
                </Row>
            </div>

            </Container>
        </>
    )
}

export default AllProducts