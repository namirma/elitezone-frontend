import React, { useContext, useState } from 'react'
import './ProfileButtonMenu.css';
import PbMenuItem1 from './Item1/PbMenuItem1';
import PbMenuItem2 from './Item2/PbMenuItem2';
import PbMenuItem3 from './Item3/PbMenuItem3';
import PbMenuItem4 from './Item4/PbMenuItem4';
import PbMenuItem5 from './Item5/PbMenuItem5';
import { ResponsiveContext } from '../../../../../Context/ResponsiveContext';

function ProfileButtonMenu(props) {

    const {Under1024} = useContext(ResponsiveContext);

    return (
        <>
            <div className='profilebutton-menu' style={props.ProfileButonNavEnable ? {top : Under1024 ? '65px' : '85px'} : { display: 'none' }}>

                <PbMenuItem1 />

                <PbMenuItem2 />

                <PbMenuItem3 />

                <PbMenuItem4 />

                <PbMenuItem5 />

            </div>

        </>
    )
}

export default ProfileButtonMenu