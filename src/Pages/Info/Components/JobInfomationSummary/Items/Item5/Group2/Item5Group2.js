import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';


function Item5Group2() {

    const {Item5Group2Title, Item5Group2Value} = useAppContext();

    return (
        <>
            <div style={{display : Item5Group2Title===null ? 'none' : ''}} className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item5Group2Title} </div>
                    <div className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item5Group2Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item5Group2