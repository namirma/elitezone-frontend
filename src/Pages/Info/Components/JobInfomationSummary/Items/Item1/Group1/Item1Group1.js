import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item1Group1() {

    //Context
    const {Item1Group1Title, Item1Group1Value} = useAppContext();

    return (
        <>
            <div className='item-group'>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item1Group1Title} </div>
                    <div  className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item1Group1Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item1Group1