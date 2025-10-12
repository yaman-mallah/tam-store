import React from 'react'
import { Container } from 'react-bootstrap'
import DropDown from './dropDown'
import TamForm from './form'
import IconeList from './icnonList'

const NavBar = () => {
  return (
    <>
    <header>

    <Container>
        <div className="d-flex w-100 align-items-center justify-content-between navBarBox">
            
            <TamForm dropDown={1} button={'search'} input={'Search'}/>
            <IconeList/>
        </div>
    </Container>
    </header>
    </>
  )
}

export default NavBar