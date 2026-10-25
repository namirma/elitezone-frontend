import React, { useState } from 'react'
import './University_Name.css';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function University_Name_Context(props) {
    const { University_Name_Context, setUniversity_Name_Context } = useAppContext();

    const handleUniName = (event) => {
        setUniversity_Name_Context(event.target.value)
    }
    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }}
                className='University_Name'>
                <div className='University_Name-label'>
                    <label htmlFor='University_Name'> نام دانشگاه </label>
                    <span> * </span>
                </div>
                <CustomizedInput
                    value={University_Name_Context}
                    onChange={handleUniName}
                    type="text"
                    id="University_Name"
                    placeholder='نام دانشگاه را وارد کنید'
                    valueTrue={University_Name_Context}
                />
            </div>
        </>
    )
}

export default University_Name_Context