import React from 'react'
import '../Style/PbMenuItemStyle.css';
import MessageMenuIcon from './../../../../Assets/MessageMenuIcon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../../../../Context/AppContext';


function PbMenuItem4() {

    const navigate = useNavigate();

    const { UnReadNotif } = useAppContext();

    return (
        <>
            <div onClick={() => navigate('/profile/notification')} className='profilebutton-menu-item'>
                <div className='profilebutton-menu-item-img'> <img src={MessageMenuIcon} altm='img' /> </div>
                <div className='profilebutton-menu-item-text'> پیغام ها </div>

                {(UnReadNotif.length >= 1) &&
                    <div className='profilebutton-menu-item-number'> {UnReadNotif.length} </div>
                }

            </div>
        </>
    )
}

export default PbMenuItem4