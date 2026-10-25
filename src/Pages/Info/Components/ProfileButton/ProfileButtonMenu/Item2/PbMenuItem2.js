import React from 'react'
import '../Style/PbMenuItemStyle.css';
import JobInfo from './../../../../Assets/JobInfoMenuIcon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../../../../Context/AppContext';


function PbMenuItem2() {

    const navigate = useNavigate();

    const {UserRole} = useAppContext();

    const handleOnClick = () => {
        if (UserRole) {
           navigate('/profile/job-info')
        }
        else {
            navigate('/setrole')
        }
    }

    return (
        <>
            <div onClick={handleOnClick} className='profilebutton-menu-item'>
                <div className='profilebutton-menu-item-img'> <img src={JobInfo} alt='img' /> </div>
                <div className='profilebutton-menu-item-text'> اطلاعات شغلی </div>
            </div>
        </>
    )
}

export default PbMenuItem2