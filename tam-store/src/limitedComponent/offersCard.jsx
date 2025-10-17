import React from 'react'

const OffersCard = ({offer,color}) => {
  return (
    <div className='offersCard p-3' style={{backgroundColor:color}}>
        <h6>{offer}</h6>
    </div>
  )
}

export default OffersCard