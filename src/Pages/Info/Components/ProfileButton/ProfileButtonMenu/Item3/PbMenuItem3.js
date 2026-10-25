import React, { useState } from 'react'
import '../Style/PbMenuItemStyle.css';
import Edit_Blue_Icon from '../../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../../../../Context/AppContext';


function PbMenuItem3() {

    const navigate = useNavigate();
    const { UserRole } = useAppContext();

    const handleOnClick = () => {
        if (UserRole) {
            navigate('/editrole')
        }else {
            navigate('/setrole')
        }
    }

    return (
        <>
            <div onClick={handleOnClick} className='profilebutton-menu-item'>
                <div className='profilebutton-menu-item-img'> <img src={Edit_Blue_Icon} alt='img' /> </div>
                <div className='profilebutton-menu-item-text'> {UserRole ? ' تغییر نقش کاربری ' : 'تعیین نقش کاربری'}</div>
            </div>
        </>
    )
}

export default PbMenuItem3