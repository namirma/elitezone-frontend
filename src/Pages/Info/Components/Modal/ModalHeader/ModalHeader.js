import React from 'react'
import './ModalHeader.css';
import Close_DarkBlue_Gen1_Icon from '../../../../../PublicAssets/Close_Icons/Close_DarkBlue_Gen1_Icon.svg';

function ModalHeader({text, ModalHeaderClick, style, DisableDivider}) {
    return (
        <div className='Modal_Header' style={style}>
            <span>
                <div> {text} </div>
                <img src={Close_DarkBlue_Gen1_Icon} alt="img"
                    onClick={ModalHeaderClick}
                />
            </span>
            <div className='divider' style={{display: DisableDivider && 'none'}}></div>
        </div>
    )
}

export default ModalHeader