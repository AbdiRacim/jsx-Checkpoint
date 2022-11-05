import React,{useState} from 'react'
import Adresse from './Profile/Adresse';
import FullName from './Profile/FullName';
import ProfilePhoto from './Profile/ProfilePhoto'
import star1 from '../assets/start1.png'
import star2 from '../assets/start2.png'
export default function Layout() {
    const [show , setShow] =useState(false);

    return (
        <>
        <section>
            <h1 className='try'>Try to find me </h1>
            {show ?
            <section className='container'>
                <img class="stars"src={star2} width={150} height={150}/>
                <img class="stars1" src={star1} width={150} height={150}/>
                <div className='c1'>
                    <div className="c2">

                        <FullName/>
                        <ProfilePhoto/>

                    </div>

                    <div className="c3">
                        <img/>
                        <div className="c4">
                            <Adresse/>
                        </div>
                        <code className='red'>the unbeatable bald !</code>
                    </div>

                </div>
                
            <img class="stars1" src={star1} width={150} height={150}/>
            <img class="stars"src={star2} width={150} height={150}/>
            </section>
            :
            <></>
            }
            <button id='show' onClick={() => setShow(!show) }>Pssst click here to check out secret !!</button>
        </section> 
        </>
    )
}