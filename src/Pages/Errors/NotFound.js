import React, { useEffect, useState } from 'react';
import './ErrorStyle.css';
import Navbar from '../Home/Components/Navbar';
import Flash2_PrimaryBlue_Icon from '../../PublicAssets/Arrow_Icons/Flash2_PrimaryBlue_Icon.svg';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import LoadingDots from '../Auth/Components/LoadingDots';

function NotFound() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }

  const [NotFoundImg, setNotFoundImg] = useState('');
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/alirewzak/cb3502a184b215a61f6fa9d489a2a6d8/raw/ebca4deabcfd365e1cee8a4c8ab961fe9a04be16/NotFound404.json')
      .then((response) => response.json())
      .then((data) => setNotFoundImg(data));
  }, [])

  return (
    <>
      <Navbar />
      <div className='error-style'>

        <div className='error-container'>

          <div className='erros-content'>

            <div>
            {NotFoundImg ?
              <Lottie animationData={NotFoundImg} speed={1} loop autoplay style={{maxWidth: '800px', width: '100%'}} />
              :
              <LoadingDots Color={'var(--Primary-EZ)'} />
            }
            </div>

            <span> </span>

            <div className='erros-content-title'>صفحه‌ای که دنبال آن بودید پیدا نشد!</div>

            <div className='errors-content-button' onClick={handleClick}>
              <button type="button"> صفحه اصلی </button>
              <img src={Flash2_PrimaryBlue_Icon} alt="img" />
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default NotFound