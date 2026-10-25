import React from 'react'
import './SimilarDataWarning.css'
import Info_Yellow_Icon from '../../../../PublicAssets/Info_Icons/Info_Yellow_Icon.svg';

function SimilarDataWarning({ SimilarData }) {
    return (
        <div style={{ display: !SimilarData && 'none' }} className='auth-warning'>
            <img src={Info_Yellow_Icon} alt='img' />
            <div style={{display:'flex', flexDirection:'column'}}>
                <span> عدم ثبت مجدد اطلاعات </span>
                <span> اطلاعات وارد شده با اطلاعات موجود یکسان است </span>
            </div>
        </div>
    )
}

export default SimilarDataWarning