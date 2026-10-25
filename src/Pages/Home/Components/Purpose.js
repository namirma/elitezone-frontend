import React from 'react'
import './Purpose.css';
import siSal from './../Assets/30-sal-etebar2.svg';
import TaahodBeSanaat from './../Assets/Taahod-be-sanaat2.svg';
import PishgamDarNoavari from './../Assets/Pishgam-dar-noavari2.svg';

function Purpose() { 

  return (
    <>
      <div  className='purpose-container'>
        <div className='purpose-style'>

          <div className='chamfer-shadow-without-hover'>
            <div className='purpose-item1'>
              <div className='purpose-item1-img'>
                <img src={PishgamDarNoavari} alt='text' />
              </div>
              <div className='purpose-item1-text'>  پیشگام در نوآوری </div>
            </div>
          </div>

          <div className='chamfer-shadow-without-hover'>
            <div className='purpose-item2'>
              <div className='purpose-item2-img'>
                <img src={TaahodBeSanaat} alt='text' />
              </div>
              <div className='purpose-item2-text'> تعهد پایدار به صنعت ساختمان </div>
            </div>
          </div>

          <div className='chamfer-shadow-without-hover'>
            <div className='purpose-item3'>
              <div className='purpose-item3-img'>
                <img src={siSal} alt='text' />
              </div>
              <div className='purpose-item2-text'> سال اعتبار <span style={{padding: '0 0 0 8px'}}> ۳۰ </span> </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Purpose