import React, { useState } from 'react'
import '../../../ItemsStyle/ItemsStyle.css';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item1Group2() {

    const {Item1Group2Title, Item1Group2Value} = useAppContext();

    return (
        <>
            <div className='item-group' style={{borderLeft: 'none'}}>
                <div className='item-group-sub'>
                    <div className='item-group-sub-title'> {Item1Group2Title} </div>
                    <div  className='item-group-sub-twopoint'> : </div>
                    <div className='item-group-sub-content'> {Item1Group2Value} </div>
                </div>
            </div>
        </>
    )
}

export default Item1Group2