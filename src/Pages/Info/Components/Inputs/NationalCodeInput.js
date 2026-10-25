import React, { useState, useEffect } from 'react'
import './NationalCodeInput.css';
import { transformDigits } from '../../../../PersonalFunction/transformDigits';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function NationalCodeInput(props) {
    //Context
    const { NationalCode, setNationalCode, NationalCodeTrue, setNationalCodeTrue } = useAppContext();

    const [NationalCodeEmpty, setNationalCodeEmpty] = useState(false)
    const [NationalCodeLessDigits, setNationalCodeLessDigits] = useState(false)
    const [NationalCodeRedBorder, setNationalCodeRedBorder] = useState(false)

    useEffect(() => {
        if (props.setNationalCodeEditedinOverlayWindow) {
            props.setNationalCodeEditedinOverlayWindow(NationalCode)
        }
    })

    const handleNationalCode = (event) => {

        const regex = /^[0-9\b]+$/; // Only allow numbers

        const Value = transformDigits(event.target.value);
        if (Value.length <= 10) {
            const transformedValue = transformDigits(Value);
            if (transformedValue === "" || regex.test(transformedValue)) {
                setNationalCode(transformedValue)
            } 

            if (transformedValue.length === 0) {
                setNationalCodeEmpty(true)
                setNationalCodeLessDigits(false)
                setNationalCodeRedBorder(true)
                setNationalCodeTrue(false)
            } else if (transformedValue.length < 10) {
                setNationalCodeEmpty(false)
                setNationalCodeLessDigits(true)
                setNationalCodeRedBorder(true)
                setNationalCodeTrue(false)
            } else {
                setNationalCodeEmpty(false)
                setNationalCodeLessDigits(false)
                setNationalCodeRedBorder(false)
                setNationalCodeTrue(true)
            }

        }
    }

    useEffect(() => {
        if (NationalCode !== null && NationalCode.length === 10) {
            setNationalCodeTrue(true)
        } else {
            setNationalCodeTrue(false)
        }
    }, [])

    return (
        <>
            <div className='codemeliinput' style={{ margin: props.margin }}>
                <label htmlFor='useridcode'> <div style={{ display: 'flex', justifyContent: 'flex-end' }}> <div style={{ color: 'var(--SemanticColor-Error)' }}> * </div> <div> کد ملی </div> </div> </label>

                <CustomizedInput
                    id='useridcode'
                    type="text"
                    value={NationalCode ? NationalCode : ''}
                    onChange={handleNationalCode}
                    onlyNum={true}
                    redBorder={NationalCodeRedBorder}
                    valueTrue={NationalCodeTrue}
                    inputMode='numeric'
                />

                <div style={NationalCodeEmpty ? {} : { display: 'none' }} className='EmptyCodeMeli'> کد ملی نمی تواند خالی باشد </div>
                <div style={NationalCodeLessDigits ? {} : { display: 'none' }} className='EmptyCodeMeli'> تعداد ارقام وارد شده کم است </div>
            </div>

        </>
    )
}

export default NationalCodeInput