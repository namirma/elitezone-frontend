import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../../../../../Context/AppContext'

function  Item1Group2Legal(props) {

    //Context
    const {EconomicCode} = useAppContext();

    const [Constant_EconomicCode, setConstant_EconomicCode] = useState('');
    useEffect(() => {
        setConstant_EconomicCode(EconomicCode)
    }, [])
    
    return (
        <>
            <div style={{height: '100%'}} className='item-container'>
                <div style={{width: '100%'}} className='item-rightside'>
                    <div> کد اقتصادی </div>
                    <div style={{letterSpacing : 'var(--letterSpacing)'}}> {Constant_EconomicCode} </div>
                </div>
            </div>
        </>
    )
}

export default Item1Group2Legal