import React, { useState } from 'react'
import './NationalIDInput.css'
import { transformDigits } from '../../../../PersonalFunction/transformDigits';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function NationalIDInput(props) {

    const { NationalId, setNationalId } = useAppContext();
    const [NationalIdEmpty, setNationalIdEmpty] = useState(false);

    const handleNationalIDValue = (event) => {
        const regex = /^[0-9\b]+$/; // Only allow numbers
        const Value = event.target.value;
        const transformedValue = transformDigits(Value);

        if (transformedValue === "" || regex.test(transformedValue)) {
            setNationalId(transformedValue)

            if (transformedValue.length === 0) {
                setNationalIdEmpty(true)
            } else {
                setNationalIdEmpty(false)
            }

        }
    }

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='nationalid-name'>

                <div className='nationalid-name-label'>
                    <label htmlFor='nameoforgname'> شناسه ملی </label>
                    <span> * </span>
                </div>

                <CustomizedInput
                    value={NationalId}
                    onChange={handleNationalIDValue}
                    type="text"
                    id="nameoforgname"
                    placeholder='شناسه ملی را وارد کنید'
                    onlyNum={true}
                    inputMode={'numeric'}
                    redBorder={NationalIdEmpty}
                    valueTrue={!NationalIdEmpty}
                />

                <div style={NationalIdEmpty ? {} : { display: 'none' }} className='EmptyName'>شناسه ملی نمی تواند خالی باشد </div>

            </div>
        </>
    )
}

export default NationalIDInput