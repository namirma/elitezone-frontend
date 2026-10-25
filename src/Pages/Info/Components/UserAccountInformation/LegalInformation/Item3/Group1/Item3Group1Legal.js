import React, { useEffect, useState }  from 'react'
import { useAppContext } from '../../../../../../../Context/AppContext'

function Item3Group1Legal() {

    //Context
    const { LandlineNumber } = useAppContext();


    const [Constant_LandlineNumber, setConstant_LandlineNumber] = useState('');
    useEffect(() => {
        setConstant_LandlineNumber(LandlineNumber)
    }, [])

    return (
        <>
            <div className='item-container'>
                <div style={{width: '100%'}} className='item-rightside'>
                    <div> شماره تلفن ثابت </div>
                    <div style={{letterSpacing : 'var(--letterSpacing)'}}> {Constant_LandlineNumber} </div>
                </div>
            </div>
        </>
    )
}

export default Item3Group1Legal