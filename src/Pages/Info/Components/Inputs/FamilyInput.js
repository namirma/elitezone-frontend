import React, { useState, useEffect } from 'react';
import './FamilyInput.css';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function LastNameInput(props) {
    const { Family, setFamily, FamilyTrue, setFamilyTrue } = useAppContext();
    const [LastNameEmpty, setLastNameEmpty] = useState(false);
    const [LastNameIncludeDigit, setLastNameIncludeDigit] = useState(false);
    const [LastNameNoSupportFormat, setLastNameNoSupportFormat] = useState(false);
    const [LastNameInputRedBorder, setLastNameInputRedBorder] = useState(false);
    const [LastNameContainLatin, setLastNameContainLatin] = useState(false);

    const handleLastName = (event) => {
        setFamily(event.target.value);
        const InputLastName = event.target.value;
        if (InputLastName.length === 0) {
            setLastNameEmpty(true)
            setLastNameIncludeDigit(false)
            setLastNameNoSupportFormat(false)
            setLastNameInputRedBorder(true)
            setLastNameContainLatin(false)
            setFamilyTrue(false);

        } else if (/[۰-۹]/.test(InputLastName) || /^\d+$/.test(InputLastName) || /[0-9]/.test(InputLastName)) {
            setLastNameEmpty(false)
            setLastNameIncludeDigit(true)
            setLastNameNoSupportFormat(false)
            setLastNameInputRedBorder(true)
            setLastNameContainLatin(false)
            setFamilyTrue(false);

        } else if (/[~!@#$%^&*()_+-={};':",./<>?|]/.test(InputLastName) || InputLastName.includes('[') || InputLastName.includes(']') || InputLastName.includes('\\')) {
            setLastNameEmpty(false)
            setLastNameIncludeDigit(false)
            setLastNameNoSupportFormat(true)
            setLastNameInputRedBorder(true)
            setLastNameContainLatin(false)
            setFamilyTrue(false);


        } else if (/[a-z]/.test(InputLastName) || /[A-Z]/.test(InputLastName)) {
            setLastNameEmpty(false)
            setLastNameIncludeDigit(false)
            setLastNameNoSupportFormat(false)
            setLastNameInputRedBorder(true)
            setLastNameContainLatin(true)
            setFamilyTrue(false);

        } else {
            setLastNameEmpty(false)
            setLastNameIncludeDigit(false)
            setLastNameNoSupportFormat(false)
            setLastNameInputRedBorder(false)
            setLastNameContainLatin(false)
            setFamilyTrue(true);

        }
    };

    // ForOverlay Editing Family input And check Ready For Submit
    useEffect(() => {
        if (
            (Family === null) ||
            ((/[۰-۹]/.test(Family)) || (/^\d+$/.test(Family)) || (/[0-9]/.test(Family))) ||
            ((/[~!@#$%^&*()_+-={};':",./<>?|]/.test(Family)) || (Family.includes('[')) || (Family.includes(']')) || (Family.includes('\\'))) ||
            ((/[a-zA-Z]/.test(Family)))
        ) {
            setFamilyTrue(false);
        } else {
            setFamilyTrue(true);
        }
    }, []);

    return (
        <>
            <div className='lastnameinput' style={{ margin: props.margin }}>
                <label htmlFor='lastname'>
                    <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
                        <span> نام خانوادگی </span>
                    </span>
                </label>
                <CustomizedInput
                    id='lastname'
                    type='text'
                    value={Family}
                    onChange={handleLastName}
                    redBorder={LastNameInputRedBorder}
                    valueTrue={FamilyTrue}
                />
                <div style={LastNameEmpty ? {} : { display: 'none' }} className='EmptyLastName'>
                    نام خانوادگی نمی‌تواند خالی باشد
                </div>
                <div style={LastNameIncludeDigit ? {} : { display: 'none' }} className='DigitInLastName'>
                    نام خانوادگی نمی‌تواند شامل عدد باشد
                </div>
                <div style={LastNameNoSupportFormat ? {} : { display: 'none' }} className='UnSupportFormat'>
                    فرمت وارد شده نادرست است
                </div>
                <div style={LastNameContainLatin ? {} : { display: 'none' }} className='LastNameContainLatin'>
                    نام خانوادگی نمی‌تواند شامل حروف انگلیسی باشد
                </div>
            </div>
        </>
    );
}

export default LastNameInput