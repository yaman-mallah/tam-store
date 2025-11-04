import Accordion from 'react-bootstrap/Accordion';
import { productServices } from '../servicesAPI/productServices';
import { useContext, useEffect, useState } from 'react';

import { FilterContext } from '../context/filterContext';

function ProductCategoryDropDown() {
    const { currentFilter, setCurrentFilter } = useContext(FilterContext); 
    //    useEffect(() => console.log(currentFilter), [currentFilter])

    const [productCatList, setProductCatList] = useState([])
    const [showAllCat, setShowAllCat] = useState(true)
    const [showAllBrand, setShowAllBrand] = useState(true)
    const getCategories = () => {
        productServices.getCatsList()
            .then((data) => setProductCatList(data))
    }
    useEffect(() => {
        getCategories()
        getBrand()
        setProductBrandList(prev => prev.filter(brand => brand.brand != brand.brand))
        // console.log(productBrandList)

    }, [])

    const [productBrandList, setProductBrandList] = useState([])
    const getBrand = () => {
        productServices.getProducts({ 'limit': 194 })
            .then((data) => {
                setProductBrandList(data.products)
            })
    }




    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Category</Accordion.Header>
                <Accordion.Body>
                    <ul className='d-flex flex-column'>


                        {
                            showAllCat ?
                                productCatList.map((cat, index) => {
                                    if (index < 4)
                                        return (
                                            <li key={index}>
                                                <label className='d-flex gap-2' >
                                                    <input
                                                        type="radio"
                                                        name='input'
                                                        onChange={() => {
                                                            setCurrentFilter(cat)
                                                            // console.log(currentFilter)
                                                        }}
                                                    />
                                                    {cat}
                                                </label>
                                            </li>
                                        )
                                }) : productCatList.map((cat, index) => {

                                    return (
                                        <li>
                                            <label className='d-flex gap-2' >
                                                <input 
                                                type="radio" 
                                                name='input' 
                                                onChange={() => {
                                                            setCurrentFilter(cat)
                                                            // console.log(currentFilter)
                                                        }}
                                                />
                                                {cat}
                                            </label>
                                        </li>
                                    )
                                })
                        }
                        <li>
                            <button
                                onClick={() => {
                                    setShowAllCat(e => !e)
                                }}
                            >
                                {
                                    showAllCat ? 'see all' : 'show less'
                                }
                            </button>
                        </li>
                    </ul>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" alwaysOpen>
                <Accordion.Header>Brands</Accordion.Header>
                <Accordion.Body>
                    <ul>


                        {
                            showAllBrand ?
                                productBrandList.map((brand, index) => {
                                    if (index < 4)
                                        return (
                                            <li key={index}>
                                                <label className='d-flex gap-2' >
                                                    <input
                                                        type="checkbox"
                                                        name='input'

                                                    />
                                                    {brand.brand}
                                                </label>
                                            </li>
                                        )
                                })
                                :
                                productBrandList.map((brand, index) => {
                                    if (brand.brand)
                                        return (
                                            <li key={index}>
                                                <label className='d-flex gap-2' >
                                                    <input type="checkbox" name='input' />
                                                    {brand.brand}
                                                </label>
                                            </li>
                                        )
                                })

                        }
                        <li>
                            <button
                                onClick={() => {
                                    setShowAllBrand(e => !e)
                                }}
                            >
                                {
                                    showAllCat ? 'see all' : 'show less'
                                }
                            </button>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default ProductCategoryDropDown;