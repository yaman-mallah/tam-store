import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NavigationButton from '../genrall components/navigationButton'
import { useState } from 'react'

import '../assets/home.css'
import Btn2ed from '../genrall components/2edBtn'

const VerticalTabDisplay = () => {
    let [visible, setVisible] = useState('Automobiles')
    let [visibleImage, setVisibleImage] = useState()
    let changeCurrentImage = (e) => {
        setVisible(e.target.id)
        console.log(visible)
    }
    fetch('/apis/home.json')
        .then((respones) => {
            if (!respones.ok) {
                console.log(respones)
                throw new Error('image not found')
            }
            else {
                return respones.json()
            }
        })
        .then((data) => {

            data.map((element) => {
                if (element.title == visible) {
                    console.log(element.img)
                    setVisibleImage(element.img)
                }
            })
        })
        .catch((error) => {
            console.error(error.message)
        })
        .finally(() => {
            console.log('fetch is done')
        })

    return (
        <>

            <Row>
                <Col lg={3} sm={12} xs={12}>
                    <ul className='d-flex flex-column gap-2 pt-2 pm-2'>
                        <li>
                            <NavigationButton text={'Automobiles'} id={'Automobiles'} clicked={changeCurrentImage} />
                        </li>
                        <li>
                            <NavigationButton text={'Clothes and wear'} id={'ClothesAndWear'} clicked={changeCurrentImage} />
                        </li>
                        <li>
                            <NavigationButton text={'Home interiors'} id={'HomeInteriors'} clicked={changeCurrentImage} />
                        </li>
                        <li>
                            <NavigationButton text={'Computer and tech'} id={'ComputerAndTech'} clicked={changeCurrentImage} />
                        </li>
                        <li>
                            <NavigationButton text={'tools, equipments'} id={'toolsEquipments'} clicked={changeCurrentImage} />
                        </li>
                        <li>
                            <NavigationButton text={'Sports and outdoor'} id={'SportsAndOutdoor'} clicked={changeCurrentImage} />
                        </li>
                        <li>
                            <NavigationButton text={'Animal and pets'} id={'AnimalAndPets'} clicked={changeCurrentImage} />
                        </li>
                        <li>
                            <NavigationButton text={'Machinery tools'} id={'MachineryTools'} clicked={changeCurrentImage} />
                        </li>
                        <li>
                            <NavigationButton text={'More category'} id={'MoreCategory'} clicked={changeCurrentImage} />
                        </li>
                    </ul>
                </Col>
                <Col lg={9} sm={12}>
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center imgBox position-relative'>
                        <img src={visibleImage} className='w-100 h-100' alt={visible} />
                        <div className="d-flex flex-column heroInfoBox gap-3 ">
                            <div className="d-flex flex-column gap-1">
                                <h3>Latest trending</h3>
                                <h1>Electronic items</h1>
                            </div>
                            <Btn2ed text={'Learn more'} href={''} />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default VerticalTabDisplay