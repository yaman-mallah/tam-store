import React from 'react'

const ProductCardDoor = ({ title, startingPrice, img }) => {
    return (
        <>
            <div className="d-flex productCardDoor justify-content-between align-items-center p-3">
                <div className="d-flex flex-column">
                    <h4>{title}</h4>
                    <h5>from <br />USD {startingPrice}</h5>
                </div>
                <img src={img} alt="" />

            </div>
        </>
    )
}

export default ProductCardDoor