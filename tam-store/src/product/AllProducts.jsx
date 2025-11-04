import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProdcutCard from './ProdcutCard'

import { FilterContext, FilterProvider } from '../context/filterContext'
import { productServices } from '../servicesAPI/productServices'
import ProductFilter from './productFilter'
const AllProducts = () => {
    let [products, setProduct] = useState([])

    // getting the filter type 
    const { currentFilter, setCurrentFilter } = useContext(FilterContext);

    let getApi = () => {
        if (!currentFilter) {
            console.log(currentFilter)
            productServices.getProducts({
                // searchQuery:'phone',
                limit: 24,
                skip: 0
            })
                .then((data) => {
                    setProduct(data.products)
                    // console.log(data)
                })
                .catch((error) => console.error(error))
                .finally(() => console.log('all fetch is done'))
        }
        else {
            productServices.getApiByCat(currentFilter)
                .then((data) => {
                    // console.log(data)
                    setProduct(data.products)
                })
                .catch((error) => console.error(error))
                .finally(() => console.log('fetch is done'))
        }
    }
    useEffect(() => {
        getApi()
    }, [currentFilter])



    return (
        <>

            <Container>
                <div className="pt-3">
                    <Row>
                        <Col lg={3}>
                            <ProductFilter />
                        </Col>
                        <Col>
                            <Row>
                                {
                                    products.map((e) => {
                                        return (
                                            <ProdcutCard
                                                key={e.id}
                                                name={e.title}
                                                img={e.thumbnail}
                                                stars={e.rating}
                                                price={e.price}
                                                id={e.id}
                                            />
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