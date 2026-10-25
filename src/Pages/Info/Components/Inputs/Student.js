import React, { useEffect, useState } from 'react'
import './Student.css';
import Switch from '../../../../Buttons/Components/Switch';
import { useAppContext } from '../../../../Context/AppContext';


function Student(props) {

    const { Student_Context, setStudent_Context } = useAppContext();

    const handleClick = () => {
        setStudent_Context(prevState => prevState === 0 ? 1 : 0);
    }

    return (
        <>
            <div className='student-contractor-container'>

                <div className='student-contractor-text'> دانشجو هستم </div>

                <div onClick={handleClick}>
                    <Switch
                        SwitchState={Student_Context}
                    />
                </div>

            </div>
        </>
    )
}

export default Student