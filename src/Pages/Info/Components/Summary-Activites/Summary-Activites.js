import React from 'react'
import './Summary-Activites.css';
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import CommingSoon from '../CommingSoon/CommingSoon';

function SummaryActivites() {
  return (
    <>
      <div className='sumact-container B_Style'>
        <BackToProfileButton text='خلاصه فعالیت' padding='0 0 16px 0'/>
        <CommingSoon />
      </div>
    </>
  )
}

export default SummaryActivites