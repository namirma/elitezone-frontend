import React, { useEffect, useState }  from 'react'
import { useAppContext } from '../../../../../../../Context/AppContext'

function Item2Group2Legal() {

    //Context 
    const {RegisterId} = useAppContext();

    
    const [Constant_RegisterId, setConstant_RegisterId] = useState('');
    useEffect(() => {
        setConstant_RegisterId(RegisterId)
    }, [])

    return (
        <>
            <div className='item-container'>
                <div style={{ width: '100%' }} className='item-rightside'>
                    <div> شناسه ثبت </div>
                    <div style={{letterSpacing : 'var(--letterSpacing)'}}> {Constant_RegisterId} </div>
                </div>
            </div>
        </>
    )
}

export default Item2Group2Legal