import React, { useState } from 'react';
import './LogoSection.css';
import { motion } from 'framer-motion';

function LogoSection({Img, MaxWidth, Height, BackgroundColor}) {
    const ImgVarients = {
        begin: {
            opacity: 0,
            x: 200
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                type: 'tween',
                ease: 'easeInOut'
            }
        }
    }

    const [IsImgLoaded, setIsImgLoaded] = useState(false);
    return (
        <>
            <div className='LogoSectionIdentity' style={{backgroundColor: BackgroundColor}}>
                <motion.img
                    src={Img}
                    alt='img'
                    variants={ImgVarients}
                    initial="begin"
                    animate={IsImgLoaded ? "visible" : "begin"}
                    onLoad={() => setIsImgLoaded(true)}
                    style={{maxWidth: MaxWidth, height: Height}}
                />
            </div>
        </>
    )
}

export default LogoSection