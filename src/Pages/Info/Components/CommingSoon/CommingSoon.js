import React, { useEffect, useState } from 'react'
import './CommingSoon.css';
import Lottie from 'lottie-react';
import '@lottiefiles/lottie-player';
import LoadingDots from '../../../Auth/Components/LoadingDots';

function CommingSoon() {

  const [ComingSoonImg, setComingSoonImg] = useState(null);
  useEffect(() => {
    fetch("https://gist.githubusercontent.com/alirewzak/489a9a3f797ebfc9988c3a33f7fc3061/raw/6b1bc4fb8680bd50397dcda2e01a4151dc897d30/ComingSoon.json")
      .then((response) => response.json())
      .then((data) => setComingSoonImg(data));
  }, [])

  return (
    <>

      <div className='commingsoon-container'>

        <div className='commingsoon-img'>

          {ComingSoonImg ?
            <Lottie animationData={ComingSoonImg} speed={1} loop autoplay style={{ maxWidth: '350px' }} />
            :
            <LoadingDots Color={'var(--Primary-EZ)'} />
          }

        </div>

        <span> </span>
        <div className='commingsoon-title'> تیم الیت زون بزودی با این بخش در خدمت شماست </div>
      </div>
    </>
  )
}

export default CommingSoon