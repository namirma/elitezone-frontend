import React from 'react'
import './MapEZ.css';
import LeafletMap from '../../../Map/LeafletMap';

function MapEZ() {

  return (
    <>
      <div className='map-container A_Style'>
        <div className='map-style B_Style'>

          <LeafletMap />

          <div className='img-text'>
            <p className='map-header-text'> نشانی :
              <span className='map-content-text'>
                پارک علم و فناوری استان اصفهان
              </span>
            </p>
            <span className='map-content-text' style={{ paddingRight: 0 }}>
             اصفهان/
              خیابان سلمان فارسی(مشتاق سوم)/بعد از پل شهرستان/ساختــمان شهـرک علمـی تحقـیـقــاتی/ طبـقه اول/ واحــد114
            </span>
            <p className='map-header-text'> کد پستی :<span style={{ letterSpacing: '1px' }} className='map-content-text'> 8158184500  </span></p>

            <p className='map-header-text'>
              تلفن :
              <a href="tel:03134005000" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span style={{ letterSpacing: '1px' }} className='map-content-text'> 34005000-031 </span>
              </a>
            </p>

            <p className='map-email-text'>
              <a href="mailto:info@elitezone.me" style={{ textDecoration: 'none', color: 'inherit' }}>
                info@elitezone.me
              </a>
              <span className='map-emailtitle-text'>  : پست الکترونیک </span>
            </p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default MapEZ