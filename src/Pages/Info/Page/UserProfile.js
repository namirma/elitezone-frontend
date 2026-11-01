import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import './UserProfile.css';
import Navbar from '../../Home/Components/Navbar';
import UserMenu from '../Components/UserMenu/UserMenu';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import PWASlider from '../../../PWASlider/PWASlider';
import { useAppContext } from '../../../Context/AppContext';
import { useToast } from '../../../PersonalFunction/Toast';

function UserProfile(props) {

    //Context
    const { Under1280 } = useContext(ResponsiveContext);
    const { Email, EmailChangeSuccessfully } = useAppContext();

    const { showToastButton } = useToast();

    const location = useLocation();

    const [RunShowPWAFunction, setRunShowPWAFunction] = useState(false);
    useEffect(() => {
        setRunShowPWAFunction(true)
    })

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const success = params.get('success');
        const email = params.get('email');

        if (success === 'true') {
            showToastButton(`ایمیل تایید با موفقیت برای ${email} ارسال شد. برای تایید Spam و Index  ایمیل خود را چک کنید`);
            showToastButton(`یک ایمیل به ${email} ارسال گردید. فولدرهای Spam و Inbox خود را چک کنید.`);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    return (
        <>

            <div className='userprofile-container'>
                <Navbar />

                <div className='userprofile-style'>

                    <div className='userprofile-mould'>

                        <div className='userprofile-rightside'>
                            <div style={{ display: Under1280 && location.pathname !== '/profile' ? 'none' : '' }}>
                                <UserMenu />
                            </div>
                        </div>

                        <div className={Under1280 ? '' : 'userprofile-leftside'}>
                            <Outlet />
                        </div>

                    </div>

                </div>
            </div>

            <PWASlider RunShowPWAFunction={RunShowPWAFunction} setRunShowPWAFunction={setRunShowPWAFunction} />
        </>
    )
}

export default UserProfile