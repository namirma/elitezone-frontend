import React, { useState, useEffect } from 'react'
import './SmsCodeInput.css'
import ApiBaseUrl from '../../../../Api/axios';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';
//Context
import { useAppContext } from '../../../../Context/AppContext';
import { transformDigits } from '../../../../PersonalFunction/transformDigits';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';
import CountDown from '../../../Auth/Components/CountDown';

function SmsCodeInput(props) {
    //Context
    const { PhoneNumber } = useAppContext();

    const [Error, setError] = useState(false);
    const [IsLoading, setIsLoading] = useState(false)

    const [SmsValue, setSmsValue] = useState('');
    const [PhoneNumberValue, setPhoneNumberValue] = useState('');
    const [FormattedValue, setFormattedValue] = useState('');

    const handleChange = (event) => {
        const regex = /^[0-9]+$/;
        const value = event.target.value;
        const transformedValue = transformDigits(value).replace(/\D/g, '')

        if (transformedValue.length <= 6) {
            if (transformedValue === '' || regex.test(transformedValue)) {
                setSmsValue(transformedValue);
            }

            const FormattedValueWithSpace = transformedValue.split('').join('      ').trim();
            setFormattedValue(FormattedValueWithSpace)
        }

        setDisable(transformedValue.length < 6);
    }

    //Input New Phone Number Handler
    function handleNewPhoneNumberChange(event) {
        const regex = /^[0-9]+$/;
        const value = event.target.value;
        const transformedValue = transformDigits(value).replace(/\D/g, '')

        if (transformedValue.length <= 11) {
            if (transformedValue === '' || regex.test(transformedValue)) {
                setPhoneNumberValue(transformedValue);
            }
        }
    }

    //SmsCode
    const [RedBorder, setRedBorder] = useState(false);
    const [IsEmpty, setIsEmpty] = useState(false);
    const [LessDigits, setLessDigits] = useState(false);
    const [WrongPassword, setWrongPassword] = useState(false);

    //New PhoneNumber
    const [Disable, setDisable] = useState(true);
    const [RedBorderPhoneNum, setRedBorderPhoneNum] = useState(false);
    const [IsEmptyPhoneNum, setIsEmptyPhoneNum] = useState(false);
    const [LengthNotEqaultTo11, setLengthNotEqaultTo11] = useState(false)
    const [DontStartWith09, setDontsStartWith09] = useState(false)
    const [ErrorOccured, setErrorOccured] = useState(false)
    const [DuplicateNumber, setDuplicateNumber] = useState(false)
    const [SamePhoneNumber, setSamePhoneNumber] = useState(false)

    const [ValueTrue, setValueTrue] = useState(false)

    //Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (SmsValue === '') {
            setIsEmpty(true)
            setLessDigits(false)
            setWrongPassword(false)
            setRedBorder(true)
            setIsLoading(false)
            setDuplicateNumber(false)
        } else if (SmsValue.length < 6) {
            setIsEmpty(false)
            setLessDigits(true)
            setWrongPassword(false)
            setRedBorder(true)
            setIsLoading(false)
            setDuplicateNumber(false)
        } else {
            setIsEmpty(false)
            setLessDigits(false)
            setWrongPassword(false)
            setRedBorder(false)
            setIsLoading(true)
            setDuplicateNumber(false)
            setValueTrue(true)

            if (props.SendFromWichComponent === 'passwordEditModal') {

                try {
                    const sendSmsCode = await ApiBaseUrl.post('api/authenticate/verify-code',
                        {
                            username: PhoneNumber,
                            code: parseInt(SmsValue),
                            forget_password: 1
                        })

                    if (sendSmsCode.status === 200) {
                        props.setChangePassState('step3')
                        // localStorage.setItem('Token', sendSmsCode.data.data.token)
                        setIsLoading(false)
                    } else {
                        setError(true)
                        setIsLoading(true)
                    }


                } catch (error) {
                    setIsLoading(false)
                    setWrongPassword(true)
                    setRedBorder(true)
                }

            }

            else if (props.SendFromWichComponent === 'phoneNumberEditModalstep2') {
                if (Disable === false) {
                    if (PhoneNumberValue.length === 0) {
                        setIsEmptyPhoneNum(true)
                        setLengthNotEqaultTo11(false)
                        setDontsStartWith09(false)
                        setRedBorderPhoneNum(true)
                        setIsLoading(false)
                        setErrorOccured(false)
                        setSamePhoneNumber(false)
                    } else if (PhoneNumberValue.length !== 11) {
                        setIsEmptyPhoneNum(false)
                        setLengthNotEqaultTo11(true)
                        setDontsStartWith09(false)
                        setRedBorderPhoneNum(true)
                        setIsLoading(false)
                        setErrorOccured(false)
                        setSamePhoneNumber(false)
                    } else if (!PhoneNumberValue.startsWith('09')) {
                        setIsEmptyPhoneNum(false)
                        setLengthNotEqaultTo11(false)
                        setDontsStartWith09(true)
                        setRedBorderPhoneNum(true)
                        setIsLoading(false)
                        setErrorOccured(false)
                        setSamePhoneNumber(false)
                    } else if (PhoneNumberValue === PhoneNumber) {
                        setIsEmptyPhoneNum(false)
                        setLengthNotEqaultTo11(false)
                        setDontsStartWith09(false)
                        setRedBorderPhoneNum(true)
                        setIsLoading(false)
                        setErrorOccured(false)
                        setSamePhoneNumber(true)
                    } else {
                        setIsEmptyPhoneNum(false)
                        setLengthNotEqaultTo11(false)
                        setDontsStartWith09(false)
                        setRedBorderPhoneNum(false)
                        setIsLoading(true)
                        setErrorOccured(false)
                        setSamePhoneNumber(false)

                        PhoneNumberEditStep2()
                    }
                }
            }

            else if (props.SendFromWichComponent === 'phoneNumberEditModalstep3') {
                PhoneNumberEditStep3();
            }
        }
    }

    const PhoneNumberEditStep2 = async () => {
        try {
            const sendSmsCode = await ApiBaseUrl.post('api/profile/change-mobile/verify-code',
                {
                    code: parseInt(SmsValue),
                    username: PhoneNumberValue

                }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('Token'),
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })

            if (sendSmsCode.status === 200 || sendSmsCode.status === 202) {
                props.setChangePhoneNumberState('step3')
                props.setNewPhoneNumberValue(PhoneNumberValue)
                setIsLoading(false)
            } else {
                setError(true)
                setIsLoading(true)
            }

        } catch (error) {
            setIsLoading(false)
            setWrongPassword(true)
            setRedBorder(true)
        }
    }

    const PhoneNumberEditStep3 = async () => {
        if (!DuplicateNumber) {
            try {
                const SendRequest = await ApiBaseUrl.post('api/profile/change-mobile/confirm', {
                    username: props.NewPhoneNumberValue,
                    code: parseInt(SmsValue)
                }, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('Token'),
                        Accept: 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                    }
                })

                if (SendRequest.status === 200 || SendRequest.status === 202) {
                    window.location.reload();
                } else {
                    setError(true)
                    setIsLoading(true)
                }
            } catch (err) {

                if (err.response.status === 500) {
                    setIsLoading(false)
                    setRedBorder(true)
                    setDuplicateNumber(true)
                } else {
                    setIsLoading(false)
                    setWrongPassword(true)
                    setRedBorder(true)
                }
            }
        } else {
            props.setPhoneNumberEditShow(false)
        }
    }

    const HandleResend = () => {
        if (props.SendFromWichComponent === 'phoneNumberEditModalstep2') {
            return (
                props.handleChangePhoneNumberStep1()
            )
        }
        else if (props.SendFromWichComponent === 'phoneNumberEditModalstep3') {
            return (
                PhoneNumberEditStep2()
            )
        }
        else if (props.SendFromWichComponent === 'passwordEditModal') {
            ApiBaseUrl.get('api/profile/change-password/first-attempt', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('Token'),
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })
            setSmsValue('');
        }
    }

    const ResetErrorState = () => {
        setIsEmpty(false)
        setLessDigits(false)
        setWrongPassword(false)
        setRedBorder(false)
        setIsLoading(false)
    }

    return (
        <>
            <div style={{ paddingTop: '0' }} className='smscode-content'>
                کد تایید برای شماره {props.SendFromWichComponent === 'phoneNumberEditModalstep3' ?
                    <span style={{ letterSpacing: 'var(--letterSpacing)' }}>{props.NewPhoneNumberValue}</span> :
                    <span style={{ letterSpacing: 'var(--letterSpacing)' }}> {PhoneNumber} </span>}
                پیامک شد
            </div>

            <div id='my-form' className='smscode-input'>
                <CustomizedInput
                    type='text'
                    style={{ textAlign: "center", direction: 'ltr' }}
                    value={FormattedValue}
                    onChange={handleChange}
                    redBorder={RedBorder}
                    inputMode='numeric'
                />
            </div>

            <div style={{ display: IsEmpty ? '' : 'none' }} className='auth-error'> لطفا کد 6 رقمی پیامک شده را وارد نمایید </div>
            <div style={{ display: LessDigits ? '' : 'none' }} className='auth-error'>کد تایید با 6 رقمی باشد</div>
            <div style={{ display: WrongPassword ? '' : 'none' }} className='auth-error'> کد تایید وارد شده اشتباه است </div>
            <div style={{ display: DuplicateNumber ? '' : 'none' }} className='auth-error'> شماره <span style={{ letterSpacing: 'var(--letterSpacing)' }}> {props.NewPhoneNumberValue} </span> قبلا در سیستم ثبت شده است </div>

            {!DuplicateNumber &&
                <CountDown
                    phonenumber={props.SendFromWichComponent === 'phoneNumberEditModalstep2' ? PhoneNumber : PhoneNumberValue}
                    ResendFunction={HandleResend}
                    ResetErrorState={ResetErrorState}
                />
            }

            {/* IF Chnage Number Were in Step 2 Show This Filed */}
            {props.SendFromWichComponent === 'phoneNumberEditModalstep2' &&

                <div>
                    <div className='newphonenumberinput' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
                        <span> شماره موبایل جدید </span>
                    </div>


                    <CustomizedInput
                        type='text'
                        value={PhoneNumberValue}
                        onChange={handleNewPhoneNumberChange}
                        disabled={Disable}
                        redBorder={RedBorderPhoneNum}
                        onlyNum={true}
                        valueTrue={ValueTrue}
                        inputMode='numeric'
                    />


                    <div style={{ display: IsEmptyPhoneNum ? '' : 'none' }} className='auth-error'> این فیلد نمی تواند خالی باشد</div>
                    <div style={{ display: LengthNotEqaultTo11 ? '' : 'none' }} className='auth-error'> تعداد ارقام وارد شده کم است </div>
                    <div style={{ display: DontStartWith09 ? '' : 'none' }} className='auth-error'> شماره موبایل میبایست با 09 شروع شود </div>
                    <div style={{ display: SamePhoneNumber ? '' : 'none' }} className='auth-error'> شماره وارده با شماره فعلی یکسان است </div>
                    <div style={{ display: ErrorOccured ? '' : 'none' }} className='auth-error'> خطایی رخ داده است </div>
                </div>
            }

            <div style={{ marginTop: '20px' }} onClick={handleSubmit}>
                <OverlayButton
                    disableOnClick={true}
                    text={DuplicateNumber ? 'خروج' : 'تایید'}
                    IsLoading={IsLoading}
                    Error={Error}
                />
            </div>

        </>
    )
}

export default SmsCodeInput