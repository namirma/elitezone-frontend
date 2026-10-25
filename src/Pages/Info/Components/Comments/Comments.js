import React from 'react'
import './Comments.css';
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import CommingSoon from '../CommingSoon/CommingSoon';

function Comments() {
  return (
    <>
         <div className='comments-container B_Style'>
        <BackToProfileButton text='دیدگاه ها' padding='0 0 16px 0'/>
        <CommingSoon />
      </div>
    </>
  )
}

export default Comments