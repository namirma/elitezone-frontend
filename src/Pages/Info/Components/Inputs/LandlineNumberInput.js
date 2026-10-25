import React, { useState, useEffect } from 'react'
import './LandlineNumberInput.css';
import { transformDigits } from '../../../../PersonalFunction/transformDigits';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function LandlineNumberInput(props) {

    const { LandlineNumber, setLandlineNumber } = useAppContext();
    const [LandlineNumberEmpty, setLandlineNumberEmpty] = useState();

    const handleLandlineNumberValue = (event) => {
        const regex = /^[0-9\b]+$/; // Only allow numbers
        const Value = event.target.value;
        const transformedValue = transformDigits(Value);
        if (transformedValue === "" || regex.test(transformedValue)) {
            setLandlineNumber(transformedValue)
        }

        if (transformedValue.length === 0) {
            setLandlineNumberEmpty(true)
        } else {
            setLandlineNumberEmpty(false)
        }
    }


    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='landline-number'>

                <div className='landline-number-label'>
                    <label htmlFor='landline-number'> شماره تلفن ثابت </label>
                    <span> * </span>
                </div>

                <CustomizedInput
                    value={LandlineNumber}
                    onChange={handleLandlineNumberValue}
                    type="text"
                    id="landline-number"
                    placeholder='شماره تلفن ثابت را وارد نمایید'
                    onlyNum={true}
                    inputMode={'numeric'}
                    redBorder={LandlineNumberEmpty}
                    valueTrue={!LandlineNumberEmpty}
                />

                <div style={LandlineNumberEmpty ? {} : { display: 'none' }} className='EmptyName'> شماره تلفن ثابت نمی تواند خالی باشد </div>

            </div>

        </>
    )
}

export default LandlineNumberInput