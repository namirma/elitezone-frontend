import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item6Group2() {

    //Context
    const {Item6Group2Title, Item6Group2Value} = useAppContext();

    return (
        <>
            <div className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item6Group2Title} </div>
                    <div  className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item6Group2Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item6Group2