import React, { useState, useEffect, useRef } from 'react'
import './ProfileButton.css';

//Arrow
import Dropdown2_Icon from './../../../../PublicAssets/DropDown_Icons/Dropdown2_Icon.svg';

import ProfileButtonMenu from './ProfileButtonMenu/ProfileButtonMenu';

//Context
import { useAppContext } from '../../../../Context/AppContext';
import LoadingDots from '../../../Auth/Components/LoadingDots';


function ProfileButton(props) {

  //Context
  const { ProfileButtonImg, ProfileButtonImgFocus } = useAppContext();

  const [ProfileButonNavEnable, setProfileButonNavEnable] = useState(false)
  const handleProfileButtonNavbar = () => {
    setProfileButonNavEnable(!ProfileButonNavEnable);
  }

  const buttonRef1 = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef1.current && !buttonRef1.current.contains(event.target)) {
        setProfileButonNavEnable(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

  }, [])

  return (
    <>
      <div className='profilebutton-profile-container' ref={buttonRef1} onClick={handleProfileButtonNavbar}>

        {
          (ProfileButtonImgFocus && ProfileButtonImg) ?
            <div className='profilebutton-img'>
              <img src={Dropdown2_Icon} style={ProfileButonNavEnable ? { rotate: '180deg', transition: '.1s' } : { rotate: '0deg', transition: '.1s' }} alt='img' />
              <img src={ProfileButonNavEnable ? ProfileButtonImgFocus : ProfileButtonImg} alt="img" />
            </div>
            :
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <LoadingDots Color='white' />
            </div>
        }

        <ProfileButtonMenu
          ProfileButonNavEnable={ProfileButonNavEnable}
        />

      </div>
    </>
  )
}

export default ProfileButton