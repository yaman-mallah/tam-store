import React from 'react'
import MainButton from '../genrall components/mainButton'
import Btn3ed from '../genrall components/3edBtn'

import avatarImage from '../assets/imgs/Avatar.png'

const JoinNowCard = () => {
  return (
    <>
        <div className="d-flex flex-column gap-3 joinNowCard p-3">
            <div className="d-flex align-items-center gap-3">
                <img src={avatarImage} alt="" />
                <p className='subText'>Hi user <br /> let's get started</p>
            </div>
                <div className="w-100 d-flex flex-column gap-2">
                    <MainButton text={'Join Now'}/>
                    <Btn3ed text={'Log in'}/>
                </div>
        </div>
    </>
  )
}

export default JoinNowCard