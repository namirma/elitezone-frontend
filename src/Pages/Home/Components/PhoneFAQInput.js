import React, { useState } from 'react'
import { transformDigits } from '../../../PersonalFunction/transformDigits';
import CustomizedInput from '../../../PersonalFunction/CustomizedInput';
import { useAppContext } from '../../../Context/AppContext';

function PhoneFAQInput(props) {
    //Context
    const { PhoneFAQ, setPhoneFAQ, PhoneFAQTrue, setPhoneFAQTrue } = useAppContext();

    const [RedBorder, setRedBorder] = useState(false);
    const [IsEmpty, setIsEmpty] = useState(false);
    const [LengthNotEqaultTo11, setLengthNotEqaultTo11] = useState(false)
    const [DontStartWith09, setDontsStartWith09] = useState(false)
    const [ErrorOccured, setErrorOccured] = useState(false)

    const handleChange = (event) => {
        const regex = /^[0-9]+$/;
        const Value = event.target.value;
        const transformedValue = transformDigits(Value).replace(/\D/g, '');

        if (transformedValue.length <= 11) {
            if (transformedValue === "" || regex.test(transformedValue)) {
                setPhoneFAQ(transformedValue);

                // Inline validation while typing
                if (transformedValue === "") {
                    setIsEmpty(true);
                    setLengthNotEqaultTo11(false);
                    setDontsStartWith09(false);
                    setRedBorder(true);
                    setPhoneFAQTrue(false);
                } else if (transformedValue.length !== 11) {
                    setIsEmpty(false);
                    setLengthNotEqaultTo11(true);
                    setDontsStartWith09(false);
                    setRedBorder(true);
                    setPhoneFAQTrue(false);
                } else if (!transformedValue.startsWith('09')) {
                    setIsEmpty(false);
                    setLengthNotEqaultTo11(false);
                    setDontsStartWith09(true);
                    setRedBorder(true);
                    setPhoneFAQTrue(false);
                } else {
                    setIsEmpty(false);
                    setLengthNotEqaultTo11(false);
                    setDontsStartWith09(false);
                    setRedBorder(false);
                    setPhoneFAQTrue(true);
                }
            }
        }
    };

    return (
        <>
            <div className='phoneinput' style={{ margin: props.margin }}>

                <label htmlFor='firstname' style={{ paddingBottom: '8px' }}>
                    <span style={{ display: 'flex', justifyContent: 'flex-end' }}> <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
                        <span> تلفن همراه </span>
                    </span>
                </label>

                <CustomizedInput
                    type='text'
                    value={PhoneFAQ}
                    onChange={handleChange}
                    redBorder={RedBorder}
                    valueTrue={PhoneFAQTrue}
                    onlyNum={true}
                    placeholder={'تلفن همراه'}
                    inputMode='numeric'
                />

                <div style={{ display: IsEmpty ? '' : 'none' }} className='auth-error'> این فیلد نمی تواند خالی باشد</div>
                <div style={{ display: LengthNotEqaultTo11 ? '' : 'none' }} className='auth-error'> تعداد ارقام وارد شده کم است </div>
                <div style={{ display: DontStartWith09 ? '' : 'none' }} className='auth-error'> شماره موبایل میبایست با 09 شروع شود </div>
                <div style={{ display: ErrorOccured ? '' : 'none' }} className='auth-error'> خطایی رخ داده است </div>

            </div>
        </>
    )
}

export default PhoneFAQInput
