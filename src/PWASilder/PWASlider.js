import React, { useState, useEffect } from 'react';
import './PWASlider.css';
import { useAppContext } from '../Context/AppContext';

import IphoneShareButton from '../PWASilder/Assets/IphoneShareButton.svg';
import AndriodMoreIcon from '../PWASilder/Assets/AndriodMoreIcon.svg';

import IphoneHomeScreen from '../PWASilder/Assets/IphoneHomeScreen.svg';
import AndroidHomeScreen from '../PWASilder/Assets/AndroidHomeScreen.svg';

import EliteZoneIcon from '../PWASilder/Assets/EliteZoneIcon.svg';

import SaveButton from '../Buttons/Components/SaveButton';
import StartSection from '../Pages/Auth/Components/StartSection';

const PWASlider = ({ RunShowPWAFunction, setRunShowPWAFunction }) => {

    const { UserAgent } = useAppContext();
    const [isVisible, setIsVisible] = useState(false);

    const isPWAInstalled = () => {
        const isIosStandalone = window.navigator.standalone;
        const isAndroidStandalone = window.matchMedia('(display-mode: standalone)').matches;
        return isIosStandalone || isAndroidStandalone;
    };

    useEffect(() => {
        if (RunShowPWAFunction) {
            ShowPWA();
        }
    }, [RunShowPWAFunction])

    const ShowPWA = () => {
        setRunShowPWAFunction(false)
        const lastSeen = localStorage.getItem('pwals');
        const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;

        if (isPWAInstalled()) {
            setIsVisible(false);
        } else if (!lastSeen || (Date.now() - parseInt(lastSeen, 10)) > oneWeekInMs) {
            if (UserAgent === 'ios' || UserAgent === 'android') {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };


    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isVisible])

    const handleOkClick = () => {
        localStorage.setItem('pwals', Date.now().toString());
        setIsVisible(false);
    };

    return (
        <div className={`pwa-overlay ${isVisible ? 'pwa-slide-up' : 'pwa-slide-down'}`}>

            <div style={{ maxHeight: '100vh', height: '100%', maxWidth: '100%' }}>
                <div className='signup-container'>
                    <div className='signup-style C_Style' style={{ overflow: 'auto' }}>
                        <StartSection Backward={false} EnableClick={false} />

                        <div style={{ padding: '48px 40px 48px 40px', boxSizing: 'border-box', maxWidth: '100%', width: '100%' }} >

                            <div className='signup-content'>
                                <p> !سلام </p>
                                <p > وب اپلیکیشن الیت زون را به صفحه اصلی تلفن همراه خود اضافه کنید</p>
                            </div>

                            <div className='pwa-content'>
                                {UserAgent === 'ios' &&
                                    <span>
                                        <div className='pwa-content-item'>
                                            <div className='img'>
                                                <img src={IphoneShareButton} alt='img' />
                                            </div>
                                            <div className='desc'>
                                                <span>Share</span>
                                                <span>انتخاب این گزینه از نوار پایین</span>
                                            </div>
                                        </div>

                                        <div className='pwa-content-item'>
                                            <div className='img'>
                                                <img src={IphoneHomeScreen} alt='img' />
                                            </div>
                                            <div className='desc'>
                                                <span>Add to homescreen</span>
                                                <span> انتخاب این گزینه از منو ظاهر شده </span>
                                            </div>
                                        </div>

                                        <div className='pwa-content-item'>
                                            <div className='img'>
                                                <img src={EliteZoneIcon} alt='img' />
                                            </div>
                                            <div className='desc'>
                                                <span>Add</span>
                                                <span> زدن روی گزینه EliteZone </span>
                                            </div>
                                        </div>
                                    </span>
                                }
                                {UserAgent === 'android' &&
                                    <span>
                                        <div className='pwa-content-item'>
                                            <div className='img'>
                                                <img src={AndriodMoreIcon} alt='img' />
                                            </div>
                                            <div className='desc'>
                                                <span>More</span>
                                                <span> انتخاب این گزینه از نوار بالا </span>
                                            </div>
                                        </div>

                                        <div className='pwa-content-item'>
                                            <div className='img'>
                                                <img src={AndroidHomeScreen} alt='img' />
                                            </div>
                                            <div className='desc'>
                                                <span>Add to homescreen</span>
                                                <span> انتخاب این گزینه از منو ظاهر شده </span>
                                            </div>
                                        </div>

                                        <div className='pwa-content-item'>
                                            <div className='img'>
                                                <img src={EliteZoneIcon} alt='img' />
                                            </div>
                                            <div className='desc'>
                                                <span>Add</span>
                                                <span> زدن روی گزینه EliteZone </span>
                                            </div>
                                        </div>
                                    </span>
                                }
                            </div>

                            <div className='signup-button' onClick={handleOkClick}>
                                <SaveButton
                                    text={'متوجه شدم'}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PWASlider;
