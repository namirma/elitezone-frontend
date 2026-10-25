import React from 'react'
import './Orders.css'
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import CommingSoon from '../CommingSoon/CommingSoon';

function Orders() {
  return (
    <>
      <div className='orders-container B_Style'>
        <BackToProfileButton text='سفارش ها' padding='0 0 16px 0'/>
        <CommingSoon />
      </div>
    </>
  )
}

export default Orders