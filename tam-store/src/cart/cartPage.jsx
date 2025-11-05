import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CartContext } from '../context/cartContext'
import { productServices } from '../servicesAPI/productServices'
const CartPage = () => {
  let { productIncart, setProductIncart } = useContext(CartContext)
  let [allprd, setAllPrd] = useState()
  let [displayedProducts, setDisplayedProducts] = useState([])
  let getApi = (id) => {
    productServices.getSinglePrd(id)
      .then((data) => {
        console.log(data)
        setDisplayedProducts(prev=>[...prev,data])
        
      })
      .finally()
  }
  useEffect(() => {
    console.log(productIncart)
    productIncart.map((id)=>{
      getApi(id)
    })
  }, [productIncart])

  useEffect(()=>{
    console.log(displayedProducts)
  },[displayedProducts])

  return (
    <Container>
      <Row>
        <Col lg={9}>
          <div className="d-flex flex-column">
            {

            }
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage