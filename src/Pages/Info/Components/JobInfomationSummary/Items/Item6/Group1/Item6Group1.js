import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item6Group1() {

    //Context
    const {Item6Group1Title, Item6Group1Value} = useAppContext();

    return (
        <>
            <div className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item6Group1Title} </div>
                    <div  className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item6Group1Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item6Group1