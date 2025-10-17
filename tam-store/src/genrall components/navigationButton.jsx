import React from 'react'

const NavigationButton = ({text,id,clicked}) => {
  return (
    <>
        <button className='d-flex  w-100 tabsBtn' id={id} onClick={clicked}> 
           <p>{text}</p>
        </button>
    </>
  )
}

export default NavigationButton