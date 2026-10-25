import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';


function Item4Group1() {

    const {Item4Group1Title, Item4Group1Value} = useAppContext();

    return (
        <>
            <div style={{display : Item4Group1Title ===null ? 'none' : ''}}  className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item4Group1Title} </div>
                    <div className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item4Group1Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item4Group1