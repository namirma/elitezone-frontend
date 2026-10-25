import React, { useState } from 'react'
import './License_Number.css';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function License_Number(props) {
    const { License_Number_Context, setLicense_Number_Context } = useAppContext();

    const handleLicense_Number = (event) => {
        setLicense_Number_Context(event.target.value)
    }

    return (
        <>
            <div className='License_Number-container'>
                <div className='License_Number-label'>
                    <label htmlFor='License_Number'> شماره پروانه اشتغال </label>
                    <span>*</span>
                </div>

                <span style={{width:'100%'}}>
                <CustomizedInput
                    type='text'
                    id='License_Number'
                    value={License_Number_Context}
                    onChange={handleLicense_Number}
                    placeholder='000-0000-00000'
                    valueTrue={License_Number_Context}
                />
                </span>

            </div>
        </>
    )
}

export default License_Number