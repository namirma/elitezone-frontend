import React, { useState, useEffect } from 'react'
import './NameInput.css';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';
import { validateName } from './Validate/ValidateName';

function NameFAQInput(props) {
    const { NameFAQ, setNameFAQ, setNameFAQTrue, NameFAQTrue } = useAppContext();
    const [NameEmpty, setNameEmpty] = useState(false);
    const [NameIncludeDigit, setNameIncludeDigit] = useState(false);
    const [NameNoSupportFormat, setNameNoSupportFormat] = useState(false)
    const [NameInputRedBorder, setNameInputRedBorder] = useState(false)
    const [NameContainLatin, setNameContainLatin] = useState(false);

    const handleName = (event) => {

        setNameFAQ(event.target.value)

        //Rules For Name
        const InputName = event.target.value;
        if (InputName.length === 0) {
            setNameEmpty(true)
            setNameIncludeDigit(false)
            setNameNoSupportFormat(false)
            setNameInputRedBorder(true)
            setNameContainLatin(false)
            setNameFAQTrue(false);

        } else if (/[۰-۹]/.test(InputName) || /^\d+$/.test(InputName) || /[0-9]/.test(InputName)) {
            setNameEmpty(false)
            setNameIncludeDigit(true)
            setNameNoSupportFormat(false)
            setNameInputRedBorder(true)
            setNameContainLatin(false)
            setNameFAQTrue(false);

        } else if (/[~!@#$%^&*()_+-={};':",./<>?|]/.test(InputName) || InputName.includes('[') || InputName.includes(']') || InputName.includes('\\')) {
            setNameEmpty(false)
            setNameIncludeDigit(false)
            setNameNoSupportFormat(true)
            setNameInputRedBorder(true)
            setNameContainLatin(false)
            setNameFAQTrue(false);


        } else if (/[a-z]/.test(InputName) || /[A-Z]/.test(InputName)) {
            setNameEmpty(false)
            setNameIncludeDigit(false)
            setNameNoSupportFormat(false)
            setNameInputRedBorder(true)
            setNameContainLatin(true)
            setNameFAQTrue(false);

        } else {
            setNameEmpty(false)
            setNameIncludeDigit(false)
            setNameNoSupportFormat(false)
            setNameInputRedBorder(false)
            setNameContainLatin(false)
            setNameFAQTrue(true);
        }
    }

    // ForOverlay ٍName is Ready For Submit With Default Value
    useEffect(() => {
        const rules = validateName(NameFAQ);
        if (rules.isEmpty || rules.hasDigit || rules.noSupportFormat || rules.hasLatinChars) {
            setNameFAQTrue(false)
        } else {
            setNameFAQTrue(true)
        }
    }, [])

    return (
        <>
            {/* <div className='nameinput' style={{ margin: props.margin }}>

                <CustomizedInput
                    id='firstname'
                    type="text"
                    value={NameFAQ}
                    onChange={handleName}
                    redBorder={NameInputRedBorder}
                    valueTrue={NameFAQTrue}
                    placeholder={'نام و نام خانوادگی'}
                    style={{padding: '16px'}}
                />

                <div style={NameEmpty ? {} : { display: 'none' }} className='EmptyName'> نام نمی تواند خالی باشد </div>
                <div style={NameIncludeDigit ? {} : { display: 'none' }} className='DigitInName'> نام نمیتواند شامل عدد باشد </div>
                <div style={NameNoSupportFormat ? {} : { display: 'none' }} className='UnSupportFormat'> فرمت وارد شده نادرست است </div>
                <div style={NameContainLatin ? {} : { display: 'none' }} className='NameContainLatin'> نام نمیتواند شامل حروف انگلیسی باشد </div>
            </div> */}

            <div className='nameinput' style={{ margin: props.margin }}>

                <label htmlFor='firstname' style={{paddingBottom: '8px'}}>
                    <span style={{ display: 'flex', justifyContent: 'flex-end' }}> <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
                        <span> نام و نام خانوادگی </span>
                    </span>
                </label>

                <CustomizedInput
                    id='firstname'
                    type="text"
                    value={NameFAQ}
                    onChange={handleName}
                    redBorder={NameInputRedBorder}
                    valueTrue={NameFAQTrue}
                    placeholder={'نام و نام خانوادگی'}
                    style={{ padding: '16px' }}
                />

                <div style={NameEmpty ? {} : { display: 'none' }} className='EmptyName'> نام نمی تواند خالی باشد </div>
                <div style={NameIncludeDigit ? {} : { display: 'none' }} className='DigitInName'> نام نمیتواند شامل عدد باشد </div>
                <div style={NameNoSupportFormat ? {} : { display: 'none' }} className='UnSupportFormat'> فرمت وارد شده نادرست است </div>
                <div style={NameContainLatin ? {} : { display: 'none' }} className='NameContainLatin'> نام نمیتواند شامل حروف انگلیسی باشد </div>

            </div>

        </>
    )
}

export default NameFAQInput