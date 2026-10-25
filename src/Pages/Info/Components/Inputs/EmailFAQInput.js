import React, { useState, useEffect } from 'react'
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';
import { useAppContext } from '../../../../Context/AppContext';

function EmailFAQInput(props) {

    const { EmailFAQ, setEmailFAQ, EmailFAQTrue, setEmailFAQTrue } = useAppContext();
    const [EmailEmpty, setEmailEmpty] = useState(false)
    const [EmailNoSupportFormat, setEmailNoSupportFormat] = useState(false)
    const [EmailNotValid, setEmailNotValid] = useState(false)
    const [EmailInputRedBorder, setEmailInputRedBorder] = useState(false)

    // Improved regex for email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleEmail = (event) => {

        setEmailFAQ(event.target.value)

        const InputEmail = event.target.value;
        if (InputEmail.length === 0) {
            setEmailEmpty(true)
            setEmailNoSupportFormat(false)
            setEmailNotValid(false)
            setEmailInputRedBorder(true)
            setEmailFAQTrue(false)
        } else if
            (!regex.test(InputEmail)) {
            setEmailEmpty(false)
            setEmailNoSupportFormat(true)
            setEmailNotValid(false)
            setEmailInputRedBorder(true)
            setEmailFAQTrue(false)
        } else {

            if (regex.test(InputEmail)) {
                setEmailEmpty(false)
                setEmailNoSupportFormat(false)
                setEmailNotValid(false)
                setEmailInputRedBorder(false)
                setEmailFAQTrue(true)
            } else {
                setEmailEmpty(false)
                setEmailNoSupportFormat(false)
                setEmailInputRedBorder(false)
                setEmailNotValid(false)
                setEmailFAQTrue(false)
            }

        }
    }

    const handleFocusOut = () => {
        if (EmailFAQ && !regex.test(EmailFAQ)) {
            setEmailEmpty(false)
            setEmailNoSupportFormat(false)
            setEmailNotValid(true)
            setEmailInputRedBorder(true)
            setEmailFAQTrue(false)
        } else {
            setEmailEmpty(false)
            setEmailNoSupportFormat(false)
            setEmailNotValid(false)
            setEmailInputRedBorder(false)
            setEmailFAQTrue(true)
        }
    }

    return (
        <>
            <div className='emailinput' style={{ margin: props.margin }}>

                <label htmlFor='emailinput' style={{ paddingBottom: '8px' }}>
                    <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
                        <span> ایمیل </span>
                    </span>
                </label>

                <CustomizedInput
                    id="emailinput"
                    type='email'
                    value={EmailFAQ}
                    onChange={handleEmail}
                    onBlur={handleFocusOut}
                    redBorder={EmailInputRedBorder}
                    valueTrue={EmailFAQTrue}
                    placeholder={'ایمیل'}
                    style={{ padding: '16px' }}
                />

                <div style={EmailEmpty ? {} : { display: 'none' }} className='EmptyEmail'> ایمیل نمیتواند خالی باشد </div>
                <div style={EmailNoSupportFormat ? {} : { display: 'none' }} className='UnSupportFormat'> فرمت وارد شده نادرست است </div>
                <div style={EmailNotValid ? {} : { display: 'none' }} className='UnSupportFormat'> ایمیل نا معتبر است </div>

            </div>
        </>
    )
}

export default EmailFAQInput

// import React, { useState } from 'react';
// import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';
// import { useAppContext } from '../../../../Context/AppContext';

// function EmailFAQInput(props) {
//     const { EmailFAQ, setEmailFAQ, EmailFAQTrue, setEmailFAQTrue } = useAppContext();
//     const [error, setError] = useState({ empty: false, invalidFormat: false });

//     // Updated regex to allow underscores and handle valid email formats
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     const validateEmail = (email) => {
//         if (!email) {
//             setError({ empty: true, invalidFormat: false });
//             setEmailFAQTrue(false);
//             return false;
//         }
//         if (!emailRegex.test(email)) {
//             setError({ empty: false, invalidFormat: true });
//             setEmailFAQTrue(false);
//             return false;
//         }
//         setError({ empty: false, invalidFormat: false });
//         setEmailFAQTrue(true);
//         return true;
//     };

//     const handleEmailChange = (event) => {
//         const email = event.target.value;
//         setEmailFAQ(email);
//         validateEmail(email);
//     };

//     const handleFocusOut = () => {
//         if (!validateEmail(EmailFAQ)) {
//             setError((prev) => ({ ...prev, invalidFormat: true }));
//         }
//     };

//     return (
//         <div className="emailinput" style={{ margin: props.margin }}>
//             <label htmlFor="emailinput" style={{ paddingBottom: '8px' }}>
//                 <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                     <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
//                     <span> ایمیل </span>
//                 </span>
//             </label>

//             <CustomizedInput
//                 id="emailinput"
//                 type="email"
//                 value={EmailFAQ}
//                 onChange={handleEmailChange}
//                 onBlur={handleFocusOut}
//                 redBorder={error.empty || error.invalidFormat}
//                 valueTrue={EmailFAQTrue}
//                 placeholder="ایمیل"
//                 style={{ padding: '16px' }}
//             />

//             {error.empty && <div className="EmptyEmail">ایمیل نمیتواند خالی باشد</div>}
//             {error.invalidFormat && <div className="UnSupportFormat">فرمت وارد شده نادرست است</div>}
//         </div>
//     );
// }

// export default EmailFAQInput;
