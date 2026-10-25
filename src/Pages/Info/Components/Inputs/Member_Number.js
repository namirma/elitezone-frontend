import React, { useState } from 'react'
import { useAppContext } from '../../../../Context/AppContext'
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';


// Member Number Use LicenseNumber Styles And The itself ccs file is empty

function Member_Number() {

    const { Member_Number_Context, setMember_Number_Context } = useAppContext();
    const handleMember_Number = (event) => {
        setMember_Number_Context(event.target.value);
    }

    return (
        <>
            <div className='License_Number-container'>
                <div className='License_Number-label'>
                    <label htmlFor='elnumber'> شماره عضویت </label>
                    <span>*</span>
                </div>

                <span style={{width: '100%'}}>
                    <CustomizedInput
                        type='text'
                        id='elnumber'
                        value={Member_Number_Context}
                        onChange={handleMember_Number}
                        placeholder='000-000-000-000000'
                        valueTrue={Member_Number_Context}
                    />
                </span>

            </div>
        </>
    )
}

export default Member_Number