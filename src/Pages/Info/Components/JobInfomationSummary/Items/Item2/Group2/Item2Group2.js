import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';


function Item2Group1() {

    const {Item2Group2Value, Item2Group2Title} = useAppContext();

    return (
        <>
            <div  style={{display : Item2Group2Title===null ? 'none' : '', borderLeft: 'none'}} className='item-group' >
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item2Group2Title} </div>
                    <div className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item2Group2Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item2Group1