import React, { useState } from 'react'
import '../Style/PbMenuItemStyle.css';
import Exit from './../../../../Assets/ExitMenuIcon.svg';
import { useNavigate } from 'react-router-dom';
import ConfirmRequestModal from '../../../Modal/ConfirmRequestModal';


function PbMenuItem5() {


    const handleExitClick = () => {
        setConfirmRequest(!ConfirmRequest)
    }

    const [ConfirmRequest, setConfirmRequest] = useState(false)

    return (
        <>
            <div onClick={handleExitClick} className='profilebutton-menu-item' style={{ border: 'none', borderRadius: '0 0 8px 8px' }}>
                <div className='profilebutton-menu-item-img'>
                    <img src={Exit} altm='img' />
                </div>
                <div className='profilebutton-menu-item-text'> خروج از حساب کاربری </div>
            </div>

            <ConfirmRequestModal
                text={'از حساب کاربری خود خارج می شود؟'}
                ConfirmRequest={ConfirmRequest}
                setConfirmRequest={setConfirmRequest}
                Requested='Logout'
            
                acceptText='خروج'
                RejectText='انصراف'
            />
        </>
    )
}

export default PbMenuItem5