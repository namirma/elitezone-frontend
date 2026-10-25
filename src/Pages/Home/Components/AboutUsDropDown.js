import React, { useContext, useEffect, useRef, useState } from 'react'
import Flash2_White_Icon from '../../../PublicAssets/Arrow_Icons/Flash2_White_Icon.svg';
import Flash2_SecondaryEZ_Icon from '../../../PublicAssets/Arrow_Icons/Flash2_SecondaryEZ_Icon.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { NavbarContext } from '../../../Context/NavbarContext';

function AboutUsDropDown() {

    const { handleNavbarClick } = useContext(NavbarContext);
    const [AboutUsDropDownValue, setAboutUsDropDownValue] = useState(false);

    const MenuArray = [
        { title: 'تماس با ما', id: 'ContactUs' },
        { title: 'هویت برند', id: 'BrandIdentity' },
        { title: 'تاریخچه', id: 'Aboutus' },
    ]

    const ButtonRef = useRef();
    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (ButtonRef.current && !ButtonRef.current.contains(event.target)) {
                setAboutUsDropDownValue(false)
            }
        }

        document.addEventListener('click', handleOutSideClick);

        return () => {
            document.removeEventListener('click', handleOutSideClick);
        }
    }, [])

    return (
        <>
            <nav style={{ position: 'relative', height: '85px', display: 'flex', alignItems: 'center' }} ref={ButtonRef}>
                <ul className='ul'>
                    <li onClick={() => setAboutUsDropDownValue(!AboutUsDropDownValue)}>
                        <div className='underline-nav'>
                            <div className='padding-around-menu-text'>
                                <span></span>
                                <div style={{ display: 'flex' }}>
                                    <div> دربـاره مـــا </div>
                                    <img
                                        src={AboutUsDropDownValue ? Flash2_SecondaryEZ_Icon : Flash2_White_Icon}
                                        alt='img'
                                        style={{
                                            width: '8px',
                                            marginRight: '12px',
                                            transform: AboutUsDropDownValue ? 'rotate(-270deg)' : 'rotate(-90deg)',
                                            transition: 'transform 0.2s ease-in-out'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <AnimatePresence>
                    {AboutUsDropDownValue &&
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                backgroundColor: 'var(--Primary-EZ)',
                                position: 'absolute',
                                top: '85px',
                                width: '100%',
                                borderRadius: '0 0 var(--Medium-Radius) var(--Medium-Radius)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontFamily: 'YekanBakhFaNum-Light',
                                padding: '0 0 16px 0',
                                border: '2px solid var(--Secondary-EZ)',
                                borderTop: '0'
                            }}>
                            {MenuArray.map((item, index) => (
                                <div key={index}>
                                    <li onClick={() => [handleNavbarClick(item.id, 64), setAboutUsDropDownValue(false)]}>
                                        <div className='underline-nav'>
                                            <div className='padding-around-menu-text'>
                                                <span></span>  {item.title}
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </motion.div>
                    }
                </AnimatePresence>

            </nav>
        </>
    )
}

export default AboutUsDropDown