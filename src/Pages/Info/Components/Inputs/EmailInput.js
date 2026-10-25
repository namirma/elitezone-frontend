import React, { useState, useEffect } from 'react';
import './EmailInput.css';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function EmailInput({
    DisableLable,
    Email,
    setEmail,
    EmailTrue,
    setEmailTrue,
    DuplicatedEmail,
    ...props
}) {
    const [EmailEmpty, setEmailEmpty] = useState(false);
    const [EmailNoSupportFormat, setEmailNoSupportFormat] = useState(false);
    const [EmailNotValid, setEmailNotValid] = useState(false);
    const [EmailInputRedBorder, setEmailInputRedBorder] = useState(false);

    // Improved regex for email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validateEmail = (email) => {
        if (!email) {
            setEmailEmpty(true);
            setEmailNoSupportFormat(false);
            setEmailNotValid(false);
            setEmailInputRedBorder(true);
            setEmailTrue(false);
            return false;
        }

        if (!regex.test(email)) {
            setEmailEmpty(false);
            setEmailNoSupportFormat(true);
            setEmailNotValid(false);
            setEmailInputRedBorder(true);
            setEmailTrue(false);
            return false;
        }

        setEmailEmpty(false);
        setEmailNoSupportFormat(false);
        setEmailNotValid(false);
        setEmailInputRedBorder(false);
        setEmailTrue(true);
        return true;
    };

    const handleEmail = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        validateEmail(inputEmail);
    };

    const handleFocusOut = () => {
        if (!validateEmail(Email)) {
            setEmailNotValid(true);
            setEmailInputRedBorder(true);
        }
    };

    useEffect(() => {
        validateEmail(Email);
    }, [Email]);

    return (
        <>
            <div className="emailinput" style={{ margin: props.margin }}>
                {!DisableLable && (
                    <label htmlFor="emailinput">
                        <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
                            <span> ایمیل </span>
                        </span>
                    </label>
                )}

                <CustomizedInput
                    id="emailinput"
                    type="email"
                    value={Email}
                    onChange={handleEmail}
                    onBlur={handleFocusOut}
                    redBorder={EmailInputRedBorder || DuplicatedEmail}
                    valueTrue={EmailTrue}
                    style={{ fontFamily: 'SFregular', letterSpacing: '1px' }}
                />

                {EmailEmpty && <div className="EmptyEmail">ایمیل نمیتواند خالی باشد</div>}
                {EmailNoSupportFormat && (
                    <div className="UnSupportFormat">فرمت وارد شده نادرست است</div>
                )}
                {EmailNotValid && <div className="UnSupportFormat">ایمیل نا معتبر است</div>}
                {DuplicatedEmail && <div className="UnSupportFormat">ایمیل قبلا ثبت شده است</div>}
            </div>
        </>
    );
}

export default EmailInput;
