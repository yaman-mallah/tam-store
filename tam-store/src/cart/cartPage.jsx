import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CartContext } from '../context/cartContext'
import { productServices } from '../servicesAPI/productServices'
const CartPage = () => {
  let { productIncart, setProductIncart } = useContext(CartContext)

  let [displayedProducts, setDisplayedProducts] = useState([])
  let getApi = (id) => {
    productServices.getSinglePrd(id)
      .then((data) => {
        console.log(data)
        setDisplayedProducts(prev => [...prev, data])
        // setDisplayedProducts(prev => prev.filter(e => e.id == data.id))

      })
      .finally()
  }
  useEffect(() => {
    console.log(productIncart)
    productIncart.forEach((id) => {
      getApi(id)
    })
  }, [])

  // useEffect(()=>{
  //   console.log(displayedProducts)
  // },[displayedProducts])

  return (
    <Container>
      <Row>
        <Col lg={9}>
          <div className="d-flex flex-column">
            {
              displayedProducts.map((prd, index) => (
                <div className="d-flex align-items-center gap-2 py-3">
                  <div className="d-flex">
                    <img src={prd.thumbnail} alt={prd.name + 'img'} />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <h5>{prd.title}</h5>
                    <p>{prd.description}</p>
                    <div className="d-flex">
                      <button className='btn btn-secondary'>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="h-100">
                    <p>${prd.price}</p>
                  </div>
                </div>
              )
              )

            }
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage