import React, { useEffect, useState } from 'react';
import './MainButton2.css';

import Login_Wine from '../Assets/Login/Gen2/Login_Wine.svg';
import Login_White from '../Assets/Login/Gen2/Login_White.svg';

import Share_Wine from '../Assets/Share/Gen2/Share_Wine.svg';
import Share_White from '../Assets/Share/Gen2/Share_White.svg';

import Video_Wine from '../Assets/Video/Gen2/Video_Wine.svg';
import Video_White from '../Assets/Video/Gen2/Video_White.svg';

import Email_Blue from '../Assets/Email/Gen2/Email_Blue.svg';
import Email_White from '../Assets/Email/Gen2/Email_White.svg';

import Continue_Blue from '../Assets/Continue/Gen2/Continue_Blue.svg';
import Continue_White from '../Assets/Continue/Gen2/Continue_White.svg';

import JobInformation_Blue from '../Assets/JobInformation/Gen2/JobInformation_Blue.svg';
import JobInformation_White from '../Assets/JobInformation/Gen2/JobInformation_White.svg';
import { useContext } from 'react';
import { ResponsiveContext } from '../../Context/ResponsiveContext';


function MainButton2({ Text, ButtonMode, ImgMode }) {
    const [isHovered, setIsHovered] = useState(false);
    const [disableHover, setDisableHover] = useState(false);

    const { Under700 } = useContext(ResponsiveContext);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');
        const updateHoverState = () => {
            setDisableHover(mediaQuery.matches);
        };

        updateHoverState(); // Initialize on mount
        mediaQuery.addEventListener('change', updateHoverState); // Listen for changes

        return () => {
            mediaQuery.removeEventListener('change', updateHoverState);
        };
    }, []);

    const handleImgHover = () => {
        switch (ImgMode) {
            case 'Login':
                return (Login_White);
            case 'Share':
                return (Share_White);
            case 'Video':
                return (Video_White);
            case 'Email':
                return (Email_White);
            case 'Continue':
                return (Continue_White);
            case 'JobInformation':
                return (JobInformation_White);
            default:
                return ''; // or a fallback value
        }
    }

    const handleImgUnHover = () => {
        switch (ImgMode) {
            case 'Login':
                return (Login_Wine);
            case 'Share':
                return (Share_Wine);
            case 'Video':
                return (Video_Wine);
            case 'Email':
                return (Email_Blue);
            case 'Continue':
                return (Continue_Blue);
            case 'JobInformation':
                return (JobInformation_Blue);
            default:
                return ''; // or a fallback value
        }
    }

    return (
        <div
            className={`Button_Container Button_${ButtonMode} E_Style`}
            onMouseEnter={() => !disableHover && setIsHovered(true)}
            onMouseLeave={() => !disableHover && setIsHovered(false)}
        >
            <div className='text'>{Text}</div>
            {!Under700 &&
                <>
                    <img src={handleImgHover()} alt='img' style={{ display: isHovered ? 'block' : 'none' }} />
                    <img src={handleImgUnHover()} alt='img' style={{ display: isHovered ? 'none' : 'block' }} />
                </>
            }

            {Under700 &&
                <>
                    <img src={handleImgHover()} alt='img' />
                </>
            }

        </div>
    );
}

export default MainButton2;
 