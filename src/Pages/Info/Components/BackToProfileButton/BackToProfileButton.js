import React from 'react'
import './BackToProfileButton.css';
import Arrow_DarkBlue_Icon from '../../../../PublicAssets/Arrow_Icons/Arrow_DarkBlue_Icon.svg';
import { Link } from 'react-router-dom';

function BackToProfileButton(props) {
    return (
        <>
            <div className='BackToProfile' style={{padding: props.padding, display: props.panel && 'flex'}}>
                <Link to='/profile' style={{ textDecoration: 'none', display: 'flex', alignItems:'center', cursor:'pointer' }}>
                    <div>
                        {props.text}
                    </div>
                    <div>
                        <img src={Arrow_DarkBlue_Icon} alt='img' />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BackToProfileButton