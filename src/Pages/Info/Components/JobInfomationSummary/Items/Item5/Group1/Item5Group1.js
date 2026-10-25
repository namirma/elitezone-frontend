import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';


function Item5Group1() {

    const {Item5Group1Title, Item5Group1Value} = useAppContext();

    return (
        <>
            <div style={{display : Item5Group1Title ===null ? 'none' : ''}} className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item5Group1Title} </div>
                    <div className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item5Group1Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item5Group1