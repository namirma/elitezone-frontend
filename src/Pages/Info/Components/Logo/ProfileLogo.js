import React from 'react'
import './ProfileLogo.css';
import EliteZoneBlue from '../../../Home/Assets/EliteZoneBlue.svg';


function ProfileLogo() {
    return (
        <>
            <div className='prof-logo_Container'>
                <div className='prof-logo'>
                    <img src={EliteZoneBlue} alt='img' />
                </div>
            </div>
        </>
    )
}

export default ProfileLogo