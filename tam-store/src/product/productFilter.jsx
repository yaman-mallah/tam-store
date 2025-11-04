import React, { useContext } from 'react'
import ProductCategoryDropDown from '../genrall components/productcategory'
import MainButton from '../genrall components/mainButton'

import { FilterContext } from '../context/filterContext'

const ProductFilter = () => {
    const {setCurrentFilter}=useContext(FilterContext)

    return (
        <>
            <div className="d-flex flex-column">
                <ProductCategoryDropDown/>
                <button
                onClick={()=>setCurrentFilter(null)}
                className='btn btn-secondary mt-3'
                >
                    Remove Filter
                </button>
            </div>
        </>
    )
}

export default ProductFilter
