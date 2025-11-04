import React from 'react'
import WishListBtn from '../genrall components/wishlistBtn'
import { Col } from 'react-bootstrap'
import { NavLink } from "react-router"

const ProdcutCard = ({ name,id, img, price, stars, col }) => {
    let starsRender = []
    for (let i = 0; i < stars; i++) {
        starsRender.push(' ')
    }
    return (
        <>
            <Col lg={3} md={6}>
               
                <NavLink 
                to={`/products/${id}`} 
                className="d-flex flex-column align-items-cetner h-100 "
                >
                <div className="productCard">

                    <img className='w-100' src={img} alt={name} />
                    <div className="d-flex ">
                        <div className="d-flex flex-column w-100" >
                            <p className="sub-text">${price ? price : 0.00}</p>
                            <div className="d-felx">
                                {starsRender.map(() => {
                                    return (
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                                        </svg>

                                    )
                                })}
                            </div>
                            <p className="sub-text">{name}</p>

                        </div>
                        <WishListBtn />
                    </div>
                </div>
                </NavLink>
            </Col>
        </>
    )
}

export default ProdcutCard