import React from 'react'
import './Addresses.css'
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import CommingSoon from '../CommingSoon/CommingSoon';

function Addresses() {
  return (
    <>
       <div className='addresses-container B_Style'>
        <BackToProfileButton text='آدرس ها' padding='0 0 16px 0'/>
        <CommingSoon />
      </div>
    </>
  )
}

export default Addresses