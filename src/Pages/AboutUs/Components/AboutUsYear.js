import React from 'react'
import './AboutUsYear.css';
import Flash2_SAZEOrange_Icon from '../../../PublicAssets/Arrow_Icons/Flash2_SAZEOrange_Icon.svg'

function AboutUsYear(props) {
    return (
        <div className='abtusyear-container'>
            <div style={{display : props.ShowTopYearLine ? '' : 'none'}} className='abtusyear-line'></div>

            <div className='abtusyear-year-solar'>
                <span style={{ marginTop: '4px' }}>
                    {props.solar}
                </span>
            </div>

            <div className='abtusyear-year-ad'> {props.ad} </div>

            <div className='abtusyear-year-img'>
                <img src={Flash2_SAZEOrange_Icon} alt="Go-Down" />
            </div>

        </div>
    )
}

export default AboutUsYear