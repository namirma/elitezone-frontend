import React, { useEffect, useState } from 'react';
import './ChangePassword.css';
import Indicator_Blue_Icon from './../../../PublicAssets/Indicator_Icons/Indicator_Blue_Icon.svg';
import SaveButton from '../../../Buttons/Components/SaveButton';
import StartSection from './StartSection';
import { useNavigate } from 'react-router-dom';
import ApiBaseUrl from '../../../Api/axios';
import LoadingDots from './LoadingDots';
import CustomizedInput from '../../../PersonalFunction/CustomizedInput';
import { useToast } from '../../../PersonalFunction/Toast';


function ChangePassword(props) {

    const navigate = useNavigate()

    const { showToastSuccess } = useToast();

    //IsLoading
    const [IsLoading, setIsLoading] = useState(false);

    const [Password, setPassword] = useState('');
    const [PasswordTrue, setPasswordTrue] = useState('');
    const [Password2, setPassword2] = useState('');
    const [Password2True, setPassword2True] = useState('');

    const [Error, setError] = useState(false);

    const [EnableButton, setEnableButton] = useState(false);

    const [Red, setRed] = useState(false)
    const [Orange, setOrange] = useState(false)
    const [Green, setGreen] = useState(false)

    const handleInput = (e) => {
        e.preventDefault();

        /* We Have 3 conditions */
        /* If one of them is True */
        setPassword(e.target.value)
        if (e.target.value.length >= 8) {
            setRed(true)
        } else if (/\d/.test(e.target.value)) {
            setRed(true)
        }
        else if (/[a-z]/.test(e.target.value)) {
            setRed(true)
        } else if ((/[A-Z]/.test(e.target.value))) {
            setRed(true)
        } else if ((/[!@#$%^&*]/.test(e.target.value))) {
            setRed(true)
        } else {
            setRed(false)
        }

        /* If two of them are True */
        if (e.target.value.length >= 8 && /[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value)) {
            setOrange(true)
            setRed(false)
        } else if (e.target.value.length >= 8 && /[!@#$%^&*]/.test(e.target.value)) {
            setOrange(true)
            setRed(false)
        } else if (/[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value) && /[!@#$%^&*]/.test(e.target.value)) {
            setOrange(true)
            setRed(false)
        } else if (/\d/.test(e.target.value) && e.target.value.length >= 8) {
            setOrange(true)
            setRed(false)
        } else if (/\d/.test(e.target.value) && /[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value)) {
            setOrange(true)
            setRed(false)
        } else if (/\d/.test(e.target.value) && /[!@#$%^&*]/.test(e.target.value)) {
            setOrange(true)
            setRed(false)
        }
        else {
            setOrange(false)
        }

        /* if three of them are true */
        if (/\d/.test(e.target.value) && e.target.value.length >= 8 && /[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value) && /[!@#$%^&*]/.test(e.target.value)) {
            setGreen(true)
            setRed(false)
            setOrange(false)
            setPasswordTrue(true)
        } else {
            setGreen(false)
            setPasswordTrue(true)
        }
    }

    useEffect(() => {
        if (/\d/.test(Password) === true
            && Password.length > 7 === true
            && /[!@#$%^&*]/.test(Password) === true
            && /[a-z]/.test(Password)
            && /[A-Z]/.test(Password) === true
            && Password === Password2) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (EnableButton) {
            setError(false)
            setIsLoading(true)
            try {
                const sendRequest = await ApiBaseUrl.post('api/authenticate/change-password',
                    {
                        username: props.phonenumber,
                        code: props.SmsCodeValue,
                        password: Password,
                        password_confirmation: Password2
                    },
                    {
                        headers: {
                            Accept: 'application/json',
                            "Access-Control-Allow-Origin": "*",
                            'Content-Type': 'application/json',
                        }
                    })
                if (sendRequest.status === 200) {
                    showToastSuccess('پسورد با موفقیت تغییر یافت')
                    localStorage.setItem('Token', sendRequest.data.data.token)
                    setIsLoading(false)
                    window.location.href = '/';
                } else {
                    setError(true)
                }

            } catch (err) {
                setError(true)
            }
        }
    }

    const handleInput2 = (e2) => {
        setPassword2(e2.target.value)
        if (Password === e2.target.value) {
            setPassword2True(true)
        } else {
            setPassword2True(false)
        }
    }

    const [PasswordInput, setPasswordInput] = useState(false);
    const onPasswordInputClick = () => {
        setPasswordInput(!PasswordInput)
    }

    const [PasswordInput2, setPasswordInput2] = useState(false);
    const onPasswordInputClick2 = () => {
        setPasswordInput2(!PasswordInput2)
    }
    return (
        <>
            <div className='chpass-container'>
                <div className='chpass-style C_Style'>

                    <StartSection />

                    <div style={{ padding: '48px 40px 48px 40px' }}>
                        <div className='chpass-header'>
                            رمز عبور
                        </div>

                        <div className='chpass-content'>
                            <p> رمز عبور باید حداقل 8 حرفی باشد </p>
                        </div>

                        <div className='chpass-input-label'>
                            <div> * </div>
                            <p> رمز عبور جدید </p>
                        </div>


                        <form id='chpass' onSubmit={handleSubmit}>
                            <CustomizedInput
                                type={PasswordInput ? 'text' : 'password'}
                                id="newpass1"
                                value={Password}
                                onChange={handleInput}
                                valueTrue={PasswordTrue}
                                PasswordInput={PasswordInput}
                                onPasswordInputClick={onPasswordInputClick}
                            />
                        </form>

                        <div className='pass-state-text'>
                            <p style={Red === true && Orange === false ? { color: '#F32916' } : { visibility: 'hidden' }}> ضعیف </p>
                            <p style={Orange === true && Red === false && Green === false ? { color: '#FFC103' } : { display: 'none' }}> متوسط </p>
                            <p style={Green === true && Orange === false && Red === false ? { color: '#00AD9A' } : { display: 'none' }}> عالی شد </p>
                        </div>

                        {/* Check the Strengh of the Password    */}
                        <div className={Red == false && Orange == false && Green == false ? 'chpass-check-strong' : 'chpass-check-strong-hidden'}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div style={{ display: Red ? '' : 'none' }} className='chpass-check-strong-red'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div style={{ display: Orange ? '' : 'none' }} className='chpass-check-strong-orange'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div style={{ display: Green ? '' : 'none' }} className='chpass-check-strong-green'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className='changepassinput-check-terms'>
                            <span style={/\d/.test(Password) === true ? { display: 'none' } : {}}>
                                <img src={Indicator_Blue_Icon} alt='img' />
                                <p> شامل عدد </p>
                            </span>

                            <span style={Password.length > 7 === true ? { display: 'none' } : {}}>
                                <img src={Indicator_Blue_Icon} alt='img' />
                                <p> حداقل 8 حرف </p>
                            </span>

                            <span style={/[!@#$%^&*]/.test(Password) === true ? { display: 'none' } : {}}>
                                <img src={Indicator_Blue_Icon} alt='img' />
                                <p> (!@#$%^&*) شامل علامت </p>
                            </span>

                            <span style={/[a-z]/.test(Password) && /[A-Z]/.test(Password) === true ? { display: 'none' } : {}}>
                                <img src={Indicator_Blue_Icon} alt='img' />
                                <p> شامل یک حرف بزرگ و کوچک </p>
                            </span>
                        </div>

                        <div className='chpass-input-label'>
                            <div> * </div>
                            <p> تکرار رمز عبور جدید </p>
                        </div>

                        <form id='chpass' onSubmit={handleSubmit}>
                            <CustomizedInput
                                type={PasswordInput2 ? 'text' : 'password'}
                                id="newpass2"
                                value={Password2}
                                onChange={handleInput2}
                                valueTrue={Password2True}
                                PasswordInput={PasswordInput2}
                                onPasswordInputClick={onPasswordInputClick2}
                            />
                        </form>

                        <div style={{ display: Error ? '' : 'none' }} className='auth-error'> خطایی رخ داده است </div>

                        <div className='chpass-button'>
                            <SaveButton
                                text={IsLoading ? <LoadingDots Color='white' /> : 'تغییر رمز عبور'}
                                disabled={EnableButton ? false : true}
                                BackgroundColor={EnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                                Color={EnableButton ? '' : 'var(--Disable-Button-Text01)'}
                                idform={'chpass'}
                                Cursor={EnableButton ? '' : 'default'}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword