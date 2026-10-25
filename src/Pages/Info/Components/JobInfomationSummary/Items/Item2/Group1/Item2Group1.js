import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item2Group1() {

    const {Item2Group1Title, Item2Group1Value} = useAppContext();

    return (
        <>
            <div  style={{display : Item2Group1Title===null ? 'none' : ''}} className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item2Group1Title} </div>
                    <div className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item2Group1Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item2Group1