import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from './logo';
import TamForm from './form';
import DropDown from './dropDown';
import IconeList from './icnonList';

function OffcanvasTam({ show, handleClose }) {


    return (
        <>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Logo /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex flex-column gap-4">
                        <TamForm button={'search'} input={'search'} />
                        <IconeList/>
                        <div className="d-flex flex-column jusitfy-content-start mt-3  d-lg-flex w-100 align-items-start gap-4">
                            <ul className='d-flex flex-column align-items-start gap-4 navBarList m-0 p-0'>
                                <li>
                                    <button className='d-flex align-items-center gap-2 allCategoryBtn'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#1C1C1C" />
                                        </svg>

                                    </button>


                                </li>
                                <li>
                                    <button>
                                        <h5>All category</h5>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h5>Hot offers</h5>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h5>Gift boxes</h5>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h5>projects</h5>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h5>Menu item</h5>
                                    </button>
                                </li>
                                <li>

                                    <DropDown options={['about us', 'q&A']} goal={'Help'} />
                                </li>

                            </ul>
                            <ul className='d-flex flex-column  gap-4 navBarList m-0 p-0 '>
                                <li>
                                    <DropDown options={['english', 'Arabic']} goal={'langouge'} />
                                </li>
                                <li>
                                    <DropDown options={['europe', 'uk']} goal={'ship to'} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffcanvasTam;