import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item3Group1() {

    const {Item3Group1Title, Item3Group1Value} = useAppContext();

    return (
        <>
            <div style={{display : Item3Group1Title===null ? 'none' : ''}} className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item3Group1Title} </div>
                    <div  className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item3Group1Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item3Group1