import React from 'react'
import MyPhoto from '../../assets/SidAhmed.png'
export default function ProfilePhoto() {

    return(
        <>
        <div className='PhotoProfileDiv'>
        <img className='PhotoProfile' src={MyPhoto} width={240} height={320}/>
        </div>
        </>
        )
}