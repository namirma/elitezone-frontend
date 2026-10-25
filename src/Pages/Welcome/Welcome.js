import React, { useEffect } from 'react'
import './Welcome.css';
import WelcomImg from './Assets/Welcome.svg';
import BasicButton from '../../Buttons/Components/BasicButton';
import Navbar from '../Home/Components/Navbar';
import Confetti from 'canvas-confetti';

function Welcome() {

  useEffect(() => {
    Confetti({
      particleCount: 300,
      spread: 150,
      origin: { y: .4, x: .5 }
    })
  }, [])

  return (
    <>
      <div style={{ margin: '0px' }}>
        <Navbar />

        <div className='welcome-container'>
          <div className='welcome-img'>
            <img src={WelcomImg} alt='img' />
          </div>

          <div className='welcome-texts'>
            <div className='welcome-text1'> به الیت زون خوش آمدید. </div>
            <div className='welcome-text2'>  مسیــری مـدرن در بـازار مصالـح سـاختـمــانی ایــران  </div>
          </div>

          <div className='welcome-button'>

            <BasicButton Text='تکمیل مشخصات' ButtonMode={1} LinkTo={'/profile'} />

            <BasicButton Text='فرآیند اجرایی' ButtonMode={2} margin={'16px 0 0 0'} LinkTo={'/profile/impl-process'} />

            <span onClick={() => window.location.href = '/'}>
              بازگشت به صفحه اصلی
            </span>

          </div>
        </div>
      </div>



    </>
  )
}export default Welcome