import React, { useEffect, useState } from 'react'
import { Container, Row, Col,  } from 'react-bootstrap'
import { data, NavLink } from 'react-router'

const LimitedOffer = () => {
  let [product, setProduct] = useState([])
  useEffect(() => {

    fetch('https://dummyjson.com/products?limit=3&skip=100')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.message)
        }
        return res.json()
      })
      .then((data) => {
        // console.log(data.products)
        setProduct(data.products)
      })
      .finally(() => {
        // console.log('fetch is done')
      })
  }, [])
  // console.log(product)



  return (
    <>

      <div className="LimitedOfferSection">

        <Container>
          <div className="LimitedOfferBox">
            <Row>
              <Col lg={3}>
                <div className="d-flex flex-column align-items-cetner timerBox justify-content-center gap-2 h-100">
                  <h4>Deals and offers</h4>
                  <p className="sub-text">Hygiene equipments</p>
                  <div className="d-flex gap-2">
                    <div className="d-flex flex-column align-items-center timeBox">
                      <p>05</p>
                      <p>days</p>
                    </div>
                    <div className="d-flex flex-column align-items-center timeBox">
                      <p>03</p>
                      <p>hour</p>
                    </div>
                    <div className="d-flex flex-column align-items-center timeBox">
                      <p>14</p>
                      <p>min</p>
                    </div>
                    <div className="d-flex flex-column align-items-center timeBox">
                      <p>40</p>
                      <p>sec</p>
                    </div>

                  </div>
                </div>
              </Col>

              {
                product.map((e, index) =>

                (<Col lg={3} key={index}>
                  <NavLink to='products' className="d-flex flex-column align-items-center offerProductCard">
                    <img src={e.thumbnail} alt="product" />
                    <p>{e.title}</p>
                    <div className="discountBox">
                      {e.discountPercentage}
                    </div>
                  </NavLink>
                </Col>)

                )
              }
            </Row>
          </div>
        </Container>
      </div>
    </>

  )
}

export default LimitedOffer