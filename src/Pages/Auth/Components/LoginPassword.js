import React, { useState } from 'react'
import ApiBaseUrl from '../../../Api/axios';
import './LoginPassword.css';
import Flash2_SemanticSuccess_Icon from './../../../PublicAssets/Arrow_Icons/Flash2_SemanticSuccess_Icon.svg';
import SaveButton from '../../../Buttons/Components/SaveButton';
import StartSection from './StartSection';
import { useNavigate } from 'react-router-dom';
//Context
import LoadingDots from './LoadingDots';
import { useAppContext } from '../../../Context/AppContext';
import CustomizedInput from '../../../PersonalFunction/CustomizedInput';


function LoginPassword(props) {

    const navigate = useNavigate()

    //IsLoading
    const [IsLoading, setIsLoading] = useState(false);

    //Context 
    const { setAuthPage, setAuthStateValue, setUserLoggedIn } = useAppContext();

    const [Value, setValue] = useState('');
    const [IsEmpty, setIsEmpty] = useState(false)
    const [IsPasswordWrong, setIsPasswordWrong] = useState(false)
    const [RedBorder, setRedBorder] = useState(false)
    const [Error, setError] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (Value.length === 0) {
            setIsEmpty(true)
            setIsPasswordWrong(false)
            setRedBorder(true)
            setError(false)
            setIsLoading(false)
        } else {
            setRedBorder(false)
            setIsEmpty(false)
            setIsPasswordWrong(false)
            setError(false)
            setIsLoading(true)
            try {
                const sendRequest = await ApiBaseUrl.post('api/authenticate/password/check',
                    {
                        username: props.phonenumber,
                        password: Value
                    },
                    {
                        'Content-Type': 'application/json',
                    })

                setIsLoading(false)
                localStorage.setItem('Token', sendRequest.data.data.token)
                navigate('/')
                setUserLoggedIn(true)
            } catch (err) {
                setIsPasswordWrong(true)
                setRedBorder(true)
                setError(false)
                setIsLoading(false)
            }
        }
    }

    const [PasswordInput, setPasswordInput] = useState(false);

    const onPasswordInputClick = () => {
        setPasswordInput(!PasswordInput)
    }

    const handleOneTimeCode = async () => {
        try {
            setIsLoading(true)
            const requestBody = {
                username: props.phonenumber
            };

            const sendSmsCode = await ApiBaseUrl.post('api/authenticate/send-code', requestBody);
            if (sendSmsCode.status === 200) {
                setIsLoading(false)
                setAuthPage('SmsCode')
                setAuthStateValue('OnTimeCode')
                setError(false)
            } else {
                setIsLoading(false)
                setError(true)
            }
        } catch (err) {
            setIsLoading(false)
            setError(true)
        }
    }

    return (
        <>
            <div className='loginpass-container'>

                <div className='loginpass-style C_Style'>

                    <StartSection
                        Backward={true}
                    />

                    <div style={{ padding: '48px 40px' }}>
                        <div className='loginpass-header'>
                            رمز عبور را وارد کنید
                        </div>

                        <form id='loginpass' style={{ paddingTop: '20px' }} onSubmit={handleSubmit} >
                            <CustomizedInput
                                type={PasswordInput ? 'text' : 'password'}
                                value={Value}
                                onChange={handleChange}
                                redBorder={RedBorder}
                                PasswordInput={PasswordInput}
                                onPasswordInputClick={onPasswordInputClick}
                            />
                        </form>

                        <div style={{ display: IsEmpty ? '' : 'none' }} className='auth-error'> این  فیلد نمی تواند خالی باشد </div>
                        <div style={{ display: IsPasswordWrong ? '' : 'none' }} className='auth-error'> رمز وارد شده اشتباه است </div>
                        <div style={{ display: Error ? '' : 'none' }} className='auth-error'> خطایی رخ داده است </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '31px', marginBottom: '24px' }}>

                            <div className='loginpass-option' onClick={() => { handleOneTimeCode() }}>
                                <img src={Flash2_SemanticSuccess_Icon} alt="img" />
                                <button> ورود با رمز یکبار مصرف </button>
                            </div>

                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '44px' }}>
                            <div className='loginpass-option'
                                onClick={() => {
                                    setAuthPage('ConfirmationNumber')
                                    setAuthStateValue('ConfirmationNumber')
                                }}
                            >
                                <img src={Flash2_SemanticSuccess_Icon} alt="img" /> <button> فراموشی رمز عبور </button>
                            </div>
                        </div>

                        <div className='loginpass-button'>
                            <SaveButton
                                text={IsLoading ? <LoadingDots Color='white' /> : 'تایید'}
                                idform={'loginpass'}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginPassword