import React, { useEffect, useState } from 'react'
import './NameInput.css';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function NameInput(props) {
    const { Name, setName, setNameTrue, NameTrue } = useAppContext();
    const [NameEmpty, setNameEmpty] = useState(false);
    const [NameIncludeDigit, setNameIncludeDigit] = useState(false);
    const [NameNoSupportFormat, setNameNoSupportFormat] = useState(false)
    const [NameInputRedBorder, setNameInputRedBorder] = useState(false)
    const [NameContainLatin, setNameContainLatin] = useState(false);


    const handleName = (event) => {
        setName(event.target.value)

        //Rules For Name
        const InputName = event.target.value;
        if (InputName.length === 0) {
            setNameEmpty(true)
            setNameIncludeDigit(false)
            setNameNoSupportFormat(false)
            setNameInputRedBorder(true)
            setNameContainLatin(false)
            setNameTrue(false);

        } else if (/[۰-۹]/.test(InputName) || /^\d+$/.test(InputName) || /[0-9]/.test(InputName)) {
            setNameEmpty(false)
            setNameIncludeDigit(true)
            setNameNoSupportFormat(false)
            setNameInputRedBorder(true)
            setNameContainLatin(false)
            setNameTrue(false);

        } else if (/[~!@#$%^&*()_+-={};':",./<>?|]/.test(InputName) || InputName.includes('[') || InputName.includes(']') || InputName.includes('\\')) {
            setNameEmpty(false)
            setNameIncludeDigit(false)
            setNameNoSupportFormat(true)
            setNameInputRedBorder(true)
            setNameContainLatin(false)
            setNameTrue(false);


        } else if (/[a-z]/.test(InputName) || /[A-Z]/.test(InputName)) {
            setNameEmpty(false)
            setNameIncludeDigit(false)
            setNameNoSupportFormat(false)
            setNameInputRedBorder(true)
            setNameContainLatin(true)
            setNameTrue(false);

        } else {
            setNameEmpty(false)
            setNameIncludeDigit(false)
            setNameNoSupportFormat(false)
            setNameInputRedBorder(false)
            setNameContainLatin(false)
            setNameTrue(true);
        }
    }

    // ForOverlay ٍName is Ready For Submit With Default Value
    useEffect(() => {
        if (
            (Name === null) ||
            ((/[۰-۹]/.test(Name)) || (/^\d+$/.test(Name)) || (/[0-9]/.test(Name))) ||
            ((/[~!@#$%^&*()_+-={};':",./<>?|]/.test(Name)) || (Name.includes('[')) || (Name.includes(']')) || (Name.includes('\\'))) ||
            ((/[a-z]/.test(Name)) || (/[A-Z]/.test(Name)))
        ) {
            setNameTrue(false)
        } else {
            setNameTrue(true)
        }
    }, [])

    return (
        <>
            <div className='nameinput' style={{ margin: props.margin }}>

                <label htmlFor='firstname'>
                    <span style={{ display: 'flex', justifyContent: 'flex-end' }}> <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
                        <span> نام </span>
                    </span>
                </label>

                <CustomizedInput
                    id='firstname'
                    type="text"
                    value={Name}
                    onChange={handleName}
                    redBorder={NameInputRedBorder}
                    valueTrue={NameTrue}
                />

                <div style={NameEmpty ? {} : { display: 'none' }} className='EmptyName'> نام نمی تواند خالی باشد </div>
                <div style={NameIncludeDigit ? {} : { display: 'none' }} className='DigitInName'> نام نمیتواند شامل عدد باشد </div>
                <div style={NameNoSupportFormat ? {} : { display: 'none' }} className='UnSupportFormat'> فرمت وارد شده نادرست است </div>
                <div style={NameContainLatin ? {} : { display: 'none' }} className='NameContainLatin'> نام نمیتواند شامل حروف انگلیسی باشد </div>
            </div>

        </>
    )
}

export default NameInput
