import React from 'react'
import './My-Accounts.css';
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import CommingSoon from '../CommingSoon/CommingSoon';

function MyAccounts() {
  return (
    <>
      <div className='myacc-container B_Style'>
        <BackToProfileButton text='حساب های من' padding='0 0 16px 0' />
        <CommingSoon />
      </div>
    </>
  )
}

export default MyAccounts