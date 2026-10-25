import React from 'react'
import './DeleteButton.css';
import Trashbin_Red_Icon from '../../PublicAssets/Trashbin_Icons/Trashbin_Red_Icon.svg';

function DeleteButton({Text, OnClick}) {

    return (
        <>
            <div onClick={OnClick} className='DeleteButton_Container'>
                <img src={Trashbin_Red_Icon} alt="img" />
                <div> {Text} </div>
            </div>
        </>
    )
}

export default DeleteButton