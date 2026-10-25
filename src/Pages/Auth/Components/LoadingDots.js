import React from 'react'
import './LoadingDots.css';

function LoadingDots(props) {
    return (
        <>
            <div className='loader__dot__container'>
                <div className="loader__dot" style={{backgroundColor: props.Color}}> </div>
                <div className="loader__dot" style={{backgroundColor: props.Color}}> </div>
                <div className="loader__dot" style={{backgroundColor: props.Color}}> </div>
            </div>
        </>
    )
}

export default LoadingDots