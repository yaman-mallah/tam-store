import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { data, useParams } from 'react-router'
import Productshow from './Productshow'
import MainButton from '../genrall components/mainButton'
import Btn2ed from '../genrall components/2edBtn'
import { CartContext } from '../context/cartContext'
const ProductDetails = () => {
    const { productIncart, setProductIncart } = useContext(CartContext)
    useEffect(()=>{
        console.log(productIncart)
        if(productIncart.length>0)
        localStorage.setItem('product-in-cart',JSON.stringify(productIncart))

    },[productIncart])
    let [productArray, setProductArray] = useState([])
    let [productDet, setProductDet] = useState({})
    let { id } = useParams()
    let [loading, setLoading] = useState(true)
    // console.log(id)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                setProductDet(data)
                // console.log(data)
            })
            .finally(() => {
                console.log('done')
                setLoading(false)
            })
    }, [id])

    if (!loading)
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={4}>


                            <img src={productDet.images?.[0]} alt={productDet.title} />                    </Col>
                        <Col lg={5}>
                            <div className="d-flex flex-column gap-3 pt-4">
                                <p className="subText">
                                    {
                                        productDet.availabilityStatus
                                    }
                                </p>
                                <h2>
                                    {productDet.title}
                                </h2>
                                <div className="d-flex justify-content-between align-items-cneter">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33332 3.33329H16.6667V13.3333H4.30832L3.33332 14.3083V3.33329ZM3.33332 1.66663C2.41666 1.66663 1.67499 2.41663 1.67499 3.33329L1.66666 18.3333L4.99999 15H16.6667C17.5833 15 18.3333 14.25 18.3333 13.3333V3.33329C18.3333 2.41663 17.5833 1.66663 16.6667 1.66663H3.33332ZM4.99999 9.99996H15V11.6666H4.99999V9.99996ZM4.99999 7.49996H15V9.16663H4.99999V7.49996ZM4.99999 4.99996H15V6.66663H4.99999V4.99996Z" fill="#8B96A5" />
                                        </svg>

                                        {
                                            productDet.reviews.length
                                        }
                                        reviews
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3333 7.90834H14.3417L10.6917 2.44167C10.5333 2.20834 10.2667 2.09167 10 2.09167C9.73334 2.09167 9.46668 2.20834 9.30834 2.45001L5.65834 7.90834H1.66668C1.20834 7.90834 0.833344 8.28334 0.833344 8.74167C0.833344 8.81667 0.841677 8.89167 0.866677 8.96667L2.98334 16.6917C3.17501 17.3917 3.81668 17.9083 4.58334 17.9083H15.4167C16.1833 17.9083 16.825 17.3917 17.025 16.6917L19.1417 8.96667L19.1667 8.74167C19.1667 8.28334 18.7917 7.90834 18.3333 7.90834ZM10 4.40834L12.3333 7.90834H7.66668L10 4.40834ZM15.4167 16.2417L4.59168 16.25L2.75834 9.57501H17.25L15.4167 16.2417ZM10 11.2417C9.08334 11.2417 8.33334 11.9917 8.33334 12.9083C8.33334 13.825 9.08334 14.575 10 14.575C10.9167 14.575 11.6667 13.825 11.6667 12.9083C11.6667 11.9917 10.9167 11.2417 10 11.2417Z" fill="#8B96A5" />
                                        </svg>

                                        {productDet.stock}
                                        stock
                                    </div>
                                </div>
                                <h5>
                                    {productDet.description}
                                </h5>

                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="d-flex flex-column gap-3">

                                <div className="d-felx">
                                    <img src="" alt="" />
                                    <div className="d-flex flex-column">
                                        <p>Supplier</p>
                                        <p>Guanjoi Trading LLC</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className='d-flex flex-column'>
                                        <li className="d-flex gap-2">

                                            Germany, Berlin
                                        </li>
                                        <li className="d-flex gap-2">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z" fill="#8B96A5" />
                                            </svg>
                                            Verified seller
                                        </li>
                                        <li className="d-flex gap-2">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99169 1.66663C5.39169 1.66663 1.66669 5.39996 1.66669 9.99996C1.66669 14.6 5.39169 18.3333 9.99169 18.3333C14.6 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6 1.66663 9.99169 1.66663ZM15.7667 6.66663H13.3084C13.0417 5.62496 12.6584 4.62496 12.1584 3.69996C13.6917 4.22496 14.9667 5.29163 15.7667 6.66663ZM10 3.36663C10.6917 4.36663 11.2334 5.47496 11.5917 6.66663H8.40835C8.76669 5.47496 9.30835 4.36663 10 3.36663ZM3.55002 11.6666C3.41669 11.1333 3.33335 10.575 3.33335 9.99996C3.33335 9.42496 3.41669 8.86663 3.55002 8.33329H6.36669C6.30002 8.88329 6.25002 9.43329 6.25002 9.99996C6.25002 10.5666 6.30002 11.1166 6.36669 11.6666H3.55002ZM4.23335 13.3333H6.69169C6.95835 14.375 7.34169 15.375 7.84169 16.3C6.30835 15.775 5.03335 14.7166 4.23335 13.3333ZM6.69169 6.66663H4.23335C5.03335 5.28329 6.30835 4.22496 7.84169 3.69996C7.34169 4.62496 6.95835 5.62496 6.69169 6.66663ZM10 16.6333C9.30835 15.6333 8.76669 14.525 8.40835 13.3333H11.5917C11.2334 14.525 10.6917 15.6333 10 16.6333ZM11.95 11.6666H8.05002C7.97502 11.1166 7.91669 10.5666 7.91669 9.99996C7.91669 9.43329 7.97502 8.87496 8.05002 8.33329H11.95C12.025 8.87496 12.0834 9.43329 12.0834 9.99996C12.0834 10.5666 12.025 11.1166 11.95 11.6666ZM12.1584 16.3C12.6584 15.375 13.0417 14.375 13.3084 13.3333H15.7667C14.9667 14.7083 13.6917 15.775 12.1584 16.3ZM13.6334 11.6666C13.7 11.1166 13.75 10.5666 13.75 9.99996C13.75 9.43329 13.7 8.88329 13.6334 8.33329H16.45C16.5834 8.86663 16.6667 9.42496 16.6667 9.99996C16.6667 10.575 16.5834 11.1333 16.45 11.6666H13.6334Z" fill="#8B96A5" />
                                            </svg>
                                            Worldwide shipping
                                        </li>
                                    </ul>
                                </div>
                                <button
                                    className={!productIncart.includes(id)?"btn btn-primary":'btn btn-secondary'}
                                    onClick={() => {
                                        setProductIncart(prev =>
                                            prev.includes(id)
                                                ? prev.filter(item => item !== id)
                                                : [...prev, id]
                                        )
                                    }}
                                >
                                    {productIncart.includes(id) ? 'remove' : 'order now'}
                                </button>

                            </div>
                        </Col>
                    </Row>
                    <Productshow />
                </Container>
            </>
        )
    else
        return (
            <Container>
                <div className="loadingScreen m-auto d-flex w-100 h-100vh justify-content-center align-items-center">
                    <h1>

                        <i>
                            loading
                        </i>
                    </h1>
                </div>
            </Container>
        )
}

export default ProductDetails