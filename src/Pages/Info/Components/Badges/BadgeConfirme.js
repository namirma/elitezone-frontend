import React from 'react'
import './BadgeConfirme.css';

function BadgeConfirme(props) {
    return (
        <>
            <div
             className='badgeconfirme'
             style={{backgroundColor: props.BackgroundColor}}
             > {props.text} </div>
        </>
    )
}

export default BadgeConfirme