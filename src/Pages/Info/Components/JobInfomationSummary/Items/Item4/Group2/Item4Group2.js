import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';


function Item4Group2() {

    const {Item4Group2Title, Item4Group2Value} = useAppContext();

    return (
        <>
            <div style={{display : Item4Group2Title ===null ? 'none' : '', borderLeft: 'none'}}  className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item4Group2Title} </div>
                    <div className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item4Group2Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item4Group2