import React from 'react'
import './Introduction.css';
import IntroductionImg from './../Assets/Introduction.svg';
import Introduction_Mobile from './../Assets/Mobile/Introduction_Mobile.svg';

function Introduction() {

    return (
        <>
            <div className='moarefi-container A_Style'>
                <div className='moarefi-style B_Style'>
                    <img src={IntroductionImg} className='moarefi-img' alt='img' />
                    <img src={Introduction_Mobile} alt='img' />
                    <div className='moarefi-text'>
                        <h1 className='moarefi-text-header'> همه صنعت ساختمان ایران اینجاست! </h1>
                        <div className='moarefi-box'>

                            <div className='moarefi-box1'>
                                <p className='moarefi-box1-header'> 110 پروژه ساختمانی </p>
                                <p className='moarefi-box1-content'> طراحی با SAZE90 در روز  </p>
                            </div>

                            <div className='moarefi-box2'>
                                <p className='moarefi-box2-header'>60.000 مهندس</p>
                                <p className='moarefi-box2-content'> در ارتباط با محصولات گروه نرم افزاری سازه </p>
                            </div>

                            <div className='moarefi-box3'>
                                <p className='moarefi-box3-header'> 75.000 مترمربع </p>
                                <p className='moarefi-box3-content'> طراحی با SAZE90 در روز </p>
                            </div>
                            
                        </div>
                        <div id='TamasBaMa' className='abc'></div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Introduction