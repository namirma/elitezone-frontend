import React, { useContext } from 'react'
import './StartSection.css';
import EliteZoneBlue from '../../../PublicAssets/Logo_Icons/EliteZoneBlue.svg';
import Arrow_DarkBlue_Icon from './../../../PublicAssets/Arrow_Icons/Arrow_DarkBlue_Icon.svg';
import Close_DarkBlue_Gen1_Icon from './../../../PublicAssets/Close_Icons/Close_DarkBlue_Gen1_Icon.svg';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';

function StartSection(props) {

    const navigate = useNavigate();

    const { Under500 } = useContext(ResponsiveContext)

    return (

        <div className='stating-section' style={{justifyContent: (props.EnableLogoRightSide && Under500) && 'flex-end'}}>

            <div style={{ display: props.Backward ? '' : 'none' }} className='arrowback'>
                <a href='/auth'>
                    <button> <img src={Arrow_DarkBlue_Icon} alt='img' /> </button>
                </a>
            </div>

            <div className='stating-section-logo' style={{paddingRight: (props.EnableLogoRightSide && Under500) && '24px'}}>
                <img
                    src={EliteZoneBlue}
                    onClick={() => props.EnableClick ? navigate('/') : ''}
                    style={{ cursor: props.EnableClick ? 'pointer' : '' }}
                    alt='img'
                />
            </div>

            <div
                onClick={props.onCloseIconClick}
                style={{ display: props.closeicon ? '' : 'none' }}
                className='start-section-closeicon'
            >
                <button> <img src={Close_DarkBlue_Gen1_Icon} alt='img' /> </button>
            </div>

        </div>

    )
}

export default StartSection