import React, { useState } from 'react'
import './ConfirmationNumber.css';
import SaveButton from '../../../Buttons/Components/SaveButton';
import StartSection from './StartSection';
import { useRef } from 'react';
import ApiBaseUrl from '../../../Api/axios';
import LoadingDots from './LoadingDots';

//Context
import { useAppContext } from '../../../Context/AppContext';
import CustomizedInput from '../../../PersonalFunction/CustomizedInput';
import { transformDigits } from '../../../PersonalFunction/transformDigits';


function ConfirmationNumber(props) {

    //Context
    const { setAuthPage, setAuthStateValue, setPhoneNumber } = useAppContext();

    //IsLoading
    const [IsLoading, setIsLoading] = useState(false);

    //Make a Ref For Input 
    const InputRef = useRef(null);

    const [InputValue, setInputValue] = useState(props.phonenumber);

    const [RedBorder, setRedBorder] = useState(false);
    const [IsEmpty, setIsEmpty] = useState(false);
    const [LengthNotEqaultTo11, setLengthNotEqaultTo11] = useState(false)
    const [DontStartWith09, setDontsStartWith09] = useState(false)
    const [NotRegisterYet, setNotRegisterYet] = useState(false)
    const [Error, setError] = useState(false)

    const handleChange = (event) => {
        const regex = /^[0-9\b]+$/; // Only allow numbers
        const Value = event.target.value;
        const transformedValue = transformDigits(Value)
        if (transformedValue.length <= 11) {
            if (transformedValue === "" || regex.test(transformedValue)) {
                setInputValue(transformedValue);
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (InputValue.length === 0) {
            setIsEmpty(true)
            setLengthNotEqaultTo11(false)
            setDontsStartWith09(false)
            setNotRegisterYet(false)
            setIsLoading(false)
            setRedBorder(true)
            setError(false)
        } else if (InputValue.length !== 11) {
            setIsEmpty(false)
            setLengthNotEqaultTo11(true)
            setDontsStartWith09(false)
            setNotRegisterYet(false)
            setIsLoading(false)
            setRedBorder(true)
            setError(false)
        } else if (!InputValue.startsWith('09')) {
            setIsEmpty(false)
            setLengthNotEqaultTo11(false)
            setDontsStartWith09(true)
            setNotRegisterYet(false)
            setIsLoading(false)
            setRedBorder(true)
            setError(false)
        } else {
            setIsEmpty(false)
            setLengthNotEqaultTo11(false)
            setDontsStartWith09(false)
            setNotRegisterYet(false)
            setIsLoading(true)
            setRedBorder(false)
            setError(false)
            try {
                const sendRequest = await ApiBaseUrl.post('api/authenticate/forget-password',
                    {
                        username: InputValue
                    },
                    {
                        'Content-Type': 'application/json',
                    })

                if (sendRequest.status === 200) {
                    setAuthPage('SmsCode')
                    setAuthStateValue('GoToChangePass')
                    setIsLoading(false)
                }
            }
            catch (err) {
                setIsLoading(false)
                if (err.response && err.response.status === 404) {
                    setNotRegisterYet(true)
                    setRedBorder(true)
                } else {
                    setNotRegisterYet(false)
                    setError(true)
                }
            }
        }
    }

    return (
        <>
            <div className='changepass-container'>
                <div className='changepass-style C_Style'>

                    <StartSection />

                    <div style={{ padding: '48px 40px' }}>
                        <div className='changepass-header'>
                            <div>
                                تغییر رمز عبور
                            </div>
                        </div>

                        <div className='changepass-content'>
                            <p> برای تغییر رمز عبور، شماره موبایل را تایید کنید </p>
                        </div>

                        <form id='changepass' style={{ paddingTop: '20px' }} onSubmit={handleSubmit}>
                            <CustomizedInput
                                type='text'
                                value={InputValue}
                                onChange={handleChange}
                                redBorder={RedBorder}
                                onlyNum={true}
                            />
                        </form>

                        <div style={{ display: IsEmpty ? '' : 'none' }} className='auth-error'> این فیلد نمی تواند خالی باشد</div>
                        <div style={{ display: LengthNotEqaultTo11 ? '' : 'none' }} className='auth-error'> تعداد ارقام وارد شده کم است </div>
                        <div style={{ display: DontStartWith09 ? '' : 'none' }} className='auth-error'> شماره موبایل میبایست با 09 شروع شود </div>
                        <div style={{ display: NotRegisterYet ? '' : 'none' }} className='auth-error'> بااین شماره قبلا پسوردی ایجاد نشده است </div>
                        <div style={{ display: Error ? '' : 'none' }} className='auth-error'> شماره وارد شده در سیستم موجود نمی باشد </div>
                        <div style={{ display: Error ? '' : 'none' }} className='suggest-message-error'>
                            <div onClick={() => [setAuthPage('SignUp'), setPhoneNumber(InputValue)]}>
                                الان ثبت نام کنید
                            </div>
                        </div>

                        <div className='changepass-button'>
                            <SaveButton
                                text={IsLoading ? <LoadingDots Color='white' /> : 'تایید'}
                                idform={'changepass'}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ConfirmationNumber