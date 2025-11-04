import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SignInPage = () => {
    let [loginData, setLoginData] = useState({
        name: '',
        pass: ''
    })
    const getApi=()=>{

        fetch('https://tamkeen-dev.com/api/user/login?_format=json', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': 'test40',
                'pass': '123456'
            })
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error('something went wrong')
            }
            return res.json()
        })
        .then((data)=>{
            // console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            // console.log('fetch is done')
        })
        
    }
    return (
        <>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="d-flex w-100 justify-content-center pt-5">
                            <div className="d-flex flex-column gap-2 w-100">
                                <h1>Sign in</h1>
                                <form 
                                action="" className='d-flex flex-column gap-2'
                                onSubmit={(e)=>{
                                    e.preventDefault()
                                    getApi()
                                }}

                                >
                                    <input type="text"
                                        placeholder='user name'
                                        onInput={(e) => {
                                            setLoginData({
                                                ...loginData,
                                                name: e.target.value
                                            })
                                        }}
                                        className='form-control'
                                    />
                                    <input type="password"
                                        placeholder='*** ***'
                                        className='form-control'
                                        onInput={(e) => {
                                            setLoginData({
                                                ...loginData,
                                                pass: e.target.value
                                            }
                                            )
                                        }}
                                    />
                                    <button className='btn btn-secondary'>
                                        log in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignInPage