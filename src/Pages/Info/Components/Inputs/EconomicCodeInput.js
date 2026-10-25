import React, { useState } from 'react'
import './EconomicCodeInput.css';
import { useAppContext } from '../../../../Context/AppContext';
import { transformDigits } from '../../../../PersonalFunction/transformDigits';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function
    EconomicCodeInput(props) {

    const { EconomicCode, setEconomicCode } = useAppContext();
    const [ EconomicEmpty, setEconomicEmpty ] = useState(false);

    const handleEconomicCode = (event) => {

        const regex = /^[0-9\b]+$/; // Only allow numbers
        const Value = event.target.value;
        const transformedValue = transformDigits(Value);

        if (transformedValue === "" || regex.test(transformedValue)) {
            setEconomicCode(transformedValue)

            if (transformedValue.length === 0) {
                setEconomicEmpty(true)
            } else {
                setEconomicEmpty(false)
            }
        }

    }

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='CompanyInput'>
                <div className='CompanyInput-label'>
                    <label htmlFor='economicCode'> کد اقتصادی </label>
                    <span> * </span>
                </div>

                <CustomizedInput
                    value={EconomicCode}
                    onChange={handleEconomicCode}
                    type="text"
                    id="economicCode"
                    placeholder='کد اقتصادی را وارد کنید'
                    onlyNum={true}
                    inputMode={'numeric'}
                    redBorder={EconomicEmpty}
                    valueTrue={!EconomicEmpty}
                />

                <div style={EconomicEmpty ? {} : { display: 'none' }} className='EmptyName'> کد اقتصادی نمی تواند خالی باشد </div>

            </div>
        </>
    )
}

export default EconomicCodeInput