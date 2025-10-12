import React from 'react'

const MainButton = ({text, borderRadius}) => {
  return (
    <>
        <button style={{borderRadius:`${borderRadius?borderRadius:12+'px'}`}} className='mainButton'>
            {text}
        </button>
    </>
  )
}

export default MainButton