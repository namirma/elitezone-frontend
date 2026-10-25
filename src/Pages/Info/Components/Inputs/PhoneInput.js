import React from 'react'
import './PhoneInput.css';

//Context
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function PhoneInput(props) {
    //Context
    const { PhoneNumber } = useAppContext();
    return (
        <>
            <div className='phoneinput' style={{ margin: props.margin }}>
                <label htmlFor='mobile'> شماره موبایل </label>
                <CustomizedInput
                    id='mobile'
                    type="text"
                    value={PhoneNumber}
                    disabled={true}
                    onlyNum={true}
                />
            </div>
        </>
    )
}

export default PhoneInput