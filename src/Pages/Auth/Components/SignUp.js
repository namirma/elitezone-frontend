import React, { useState } from 'react'
import './SignUp.css';
import SaveButton from '../../../Buttons/Components/SaveButton';
//Context
import LoadingDots from './LoadingDots';
import { useAppContext } from '../../../Context/AppContext';
import StartSection from './StartSection';
import { transformDigits } from '../../../PersonalFunction/transformDigits';
import CustomizedInput from '../../../PersonalFunction/CustomizedInput';
import { useNavigate } from 'react-router-dom';
import ApiBaseUI from '../../../Api/axios';

function SignUp() {

    //Context
    const { setAuthPage, setPhoneNumber, PhoneNumber, setAuthStateValue } = useAppContext();

    //IsLoading
    const [IsLoading, setIsLoading] = useState(false);

    const [InputValue, setInputValue] = useState(PhoneNumber ? PhoneNumber : '');
    const [RedBorder, setRedBorder] = useState(false);
    const [IsEmpty, setIsEmpty] = useState(false);
    const [LengthNotEqaultTo11, setLengthNotEqaultTo11] = useState(false)
    const [DontStartWith09, setDontsStartWith09] = useState(false)
    const [ErrorOccured, setErrorOccured] = useState(false)

    const handleChange = (event) => {
        const regex = /^[0-9]+$/;
        const Value = event.target.value;
        const transformedValue = transformDigits(Value).replace(/\D/g, '')
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
            setRedBorder(true)
            setIsLoading(false)
            setErrorOccured(false)
        } else if (InputValue.length !== 11) {
            setIsEmpty(false)
            setLengthNotEqaultTo11(true)
            setDontsStartWith09(false)
            setRedBorder(true)
            setIsLoading(false)
            setErrorOccured(false)
        } else if (!InputValue.startsWith('09')) {
            setIsEmpty(false)
            setLengthNotEqaultTo11(false)
            setDontsStartWith09(true)
            setRedBorder(true)
            setIsLoading(false)
            setErrorOccured(false)
        } else {
            setIsEmpty(false)
            setLengthNotEqaultTo11(false)
            setDontsStartWith09(false)
            setRedBorder(false)
            setIsLoading(true);
            setErrorOccured(false)
            SendCodeFunction();
        }

    }

    const SendCodeFunction = async () => {
        try {
            const sendRequest = await ApiBaseUI.post('api/authenticate',
                {
                    username: InputValue
                },
                {
                    'Content-Type': 'application/json',
                })

            if (sendRequest.status === 202) {
                setIsLoading(false)
                setAuthPage('SmsCode')
                setPhoneNumber(InputValue)
                setAuthStateValue('202')
            } else if (sendRequest.status === 200) {
                setIsLoading(false)
                setAuthPage('LoginPass')
                setPhoneNumber(InputValue)
                setAuthStateValue('200')
            }


        } catch (error) {
            setIsLoading(false)
            setRedBorder(true)
            setErrorOccured(true)
        }
    }

    const navigate = useNavigate();


    return (
        <div className='signup-container'>
            <div className='signup-style C_Style'>

                <StartSection Backward={false} EnableClick={true} />

                <div style={{ padding: '48px 40px 48px 40px' }}>
                    <div className='signup-header'>
                        <p>
                            ثبت نام
                            <span className='signup-login-divider'> | </span>
                            ورود
                        </p>
                    </div>

                    <div className='signup-content'>
                        <p> !سلام </p>
                        <p>  برای ورود و یا ثبت نام در الیت‌ زون شماره موبایل خود را وارد نمایید</p>
                    </div>

                    <form id='signup' style={{ paddingTop: '20px' }} onSubmit={handleSubmit} >
                        <CustomizedInput
                            type='text'
                            value={InputValue}
                            onChange={handleChange}
                            redBorder={RedBorder}
                            onlyNum={true}
                            inputMode='numeric'
                        />
                    </form>

                    <div style={{ display: IsEmpty ? '' : 'none' }} className='auth-error'> این فیلد نمی تواند خالی باشد</div>
                    <div style={{ display: LengthNotEqaultTo11 ? '' : 'none' }} className='auth-error'> تعداد ارقام وارد شده کم است </div>
                    <div style={{ display: DontStartWith09 ? '' : 'none' }} className='auth-error'> شماره موبایل میبایست با 09 شروع شود </div>
                    <div style={{ display: ErrorOccured ? '' : 'none' }} className='auth-error'> خطایی رخ داده است </div>

                    <div className='signup-button'>
                        <SaveButton
                            text={IsLoading ? <LoadingDots Color='white' /> : 'ورود'}
                            idform={'signup'}
                        />
                    </div>

                    <div className='signup-endtext'>
                        ورود شما به معنای پذیرش
                        <span onClick={() => navigate('/terms')}> شرایط الیت زون </span>
                        و
                        <span onClick={() => navigate('/privacy')}> قوانین حریم خصوصی </span>
                        است
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp