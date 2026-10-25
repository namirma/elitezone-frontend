import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';


function Item3Group2() {

    const {Item3Group2Title, Item3Group2Value} = useAppContext();

    return (
        <>
            <div style={{display : Item3Group2Title===null ? 'none' : '', borderLeft: 'none'}} className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item3Group2Title} </div>
                    <div className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item3Group2Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item3Group2