import React, { useContext } from 'react'
import './MainButton.css';

import Video_White from '../Assets/Video/Gen1/Video_White.svg';
import Email_White from '../Assets/Email/Gen1/Email_White.svg';
import Share_White from '../Assets/Share/Gen1/Share_White.svg';
import Continue_White from '../Assets/Continue/Gen1/Continue_White.svg';
import JobInfoMenuIcon_White from '../../Pages/Info/Assets/JobInfoMenuIcon_White.svg';

import { ResponsiveContext } from '../../Context/ResponsiveContext';

function MainButton(props) {

    const { Under700 } = useContext(ResponsiveContext);

    const HandleClassName = () => {
        if (props.ButtonMode === 1) {
            return (
                'MainBtn_Container_1'
            )
        }
        else if (props.ButtonMode === 2) {
            return (
                'MainBtn_Container_2'
            )
        }
        else {
            return ''
        }
    }

    const handleButtonSize = () => {
        if (props.ButtonSize === 'sm') {
            return (
                'MainBtn_Sm'
            )
        }
        else {
            return ''
        }
    }

    const HandleImg = () => {
        if (props.ImgMode === 'Video') {
            return (Video_White)
        }
        else if (props.ImgMode === 'Email') {
            return (Email_White)
        }
        else if (props.ImgMode === 'ShareIcon') {
            return (Share_White)
        }
        else if (props.ImgMode === 'Continue') {
            return (Continue_White)
        }
        else if (props.ImgMode === 'PanelImg3') {
            return (JobInfoMenuIcon_White)
        }
    }

    return (
        <>
            <div className={`${HandleClassName()}`}>
                <div className={`MainBtn ${handleButtonSize()} E_Style`}
                    style={{ width: !Under700 && props.ImgMode === 'PanelImg3' && '300px' }}
                >
                    <div className='MainBtn-text'>

                        <div className='MainBtn-text-content'>
                            {props.Text}
                        </div>

                        <div className='MainBtn-text-img'>
                            <img src={HandleImg()} alt="img"
                                style={{ width: (['Email', 'SignUp', 'PanelImg3'].includes(props.ImgMode)) && '36px' }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainButton