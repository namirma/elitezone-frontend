import React, { useEffect, useState }  from 'react'
import { useAppContext } from '../../../../../../../Context/AppContext'

function Item2Group1Legal(props) {

    //Context
    const {NationalId} = useAppContext();

    
    const [Constant_NationalId, setConstant_NationalId] = useState('');
    useEffect(() => {
        setConstant_NationalId(NationalId)
    }, [])
    
    return (
        <>
            <div className='item-container'>
                <div style={{ width: '100%' }} className='item-rightside'>
                    <div> شناسه ملی </div>
                    <div style={{letterSpacing : 'var(--letterSpacing)'}}> {Constant_NationalId} </div>
                </div>
            </div>
        </>
    )
}

export default Item2Group1Legal