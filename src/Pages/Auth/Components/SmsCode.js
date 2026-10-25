import React, { useState } from 'react'
import './SmsCode.css';
import SaveButton from '../../../Buttons/Components/SaveButton';
import StartSection from './StartSection';

import LoadingDots from './LoadingDots';
//Context
import { useNavigate } from 'react-router-dom';
import ApiBaseUrl from '../../../Api/axios';
import { useAppContext } from '../../../Context/AppContext';
import { transformDigits } from '../../../PersonalFunction/transformDigits';
import CountDown from './CountDown';
import CustomizedInput from '../../../PersonalFunction/CustomizedInput';

function SmsCode(props) {

  const navigate = useNavigate();

  //Context
  const { setAuthPage, AuthStateValue, setUserLoggedIn } = useAppContext();

  //IsLoading
  const [IsLoading, setIsLoading] = useState(false);

  const [Value, setValue] = useState('');
  const [FormattedValue, setFormattedValue] = useState('');

  //ّInput Value Handler
  const handleChange = async (event) => {
    const regex = /^[0-9]+$/;
    const value = event.target.value;
    const transformedValue = transformDigits(value).replace(/\D/g, '')

    if (transformedValue.length <= 6) {
      if (transformedValue === '' || regex.test(transformedValue)) {
        setValue(transformedValue);
      }

      const FormattedValueWithSpace = transformedValue.split('').join('      ').trim();
      setFormattedValue(FormattedValueWithSpace)
    }

    if (transformedValue.length >= 6) {
      setIsLoading(true)
      setIsEmpty(false)
      setLessDigits(false)
      setWrongPassword(false)
      setRedBorder(false)
      try {

        const requestBody = {
          username: props.phonenumber,
          code: transformedValue,
        };

        if (AuthStateValue === 'GoToChangePass') {
          requestBody.forget_password = 1;
        }

        const sendSmsCode = await ApiBaseUrl.post('api/authenticate/verify-code', requestBody);

        if (sendSmsCode.status === 200) {
          if (AuthStateValue === 'GoToChangePass') {
            setIsLoading(false)
            setAuthPage('ChangePassword')
            props.setSmsCodeValue(transformedValue)
          }
          else {
            if (sendSmsCode.status === 200 && sendSmsCode.data.data.user.type_id !== null) {
              setIsLoading(false)
              setUserLoggedIn(true)
              navigate('/')
              localStorage.setItem('Token', sendSmsCode.data.data.token)
            }
            else if (sendSmsCode.status === 200 && sendSmsCode.data.data.user.type_id === null) {
              setIsLoading(false)
              setUserLoggedIn(true)
              navigate('/setrole')
              localStorage.setItem('Token', sendSmsCode.data.data.token)
            }
          }
        }
        else {
          setIsLoading(false)
        }

      } catch (error) {
        setIsLoading(false)
        setWrongPassword(true)
        setRedBorder(true)
      }
    }
  }

  const [RedBorder, setRedBorder] = useState(false);
  const [IsEmpty, setIsEmpty] = useState(false);
  const [LessDigits, setLessDigits] = useState(false);
  const [WrongPassword, setWrongPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Value === '') {
      setIsEmpty(true)
      setLessDigits(false)
      setWrongPassword(false)
      setRedBorder(true)
      setIsLoading(false)
    } else if (Value.length < 6) {
      setIsEmpty(false)
      setLessDigits(true)
      setWrongPassword(false)
      setRedBorder(true)
      setIsLoading(false)
    } else {
      setIsEmpty(false)
      setLessDigits(false)
      setWrongPassword(false)
      setRedBorder(false)
      setIsLoading(true)
      ContinueSubmit();
    }
  }

  const ContinueSubmit = async () => {
    try {

      const requestBody = {
        username: props.phonenumber,
        code: parseInt(Value),
      };

      if (AuthStateValue === 'GoToChangePass') {
        requestBody.forget_password = 1;
      }

      const sendSmsCode = await ApiBaseUrl.post('api/authenticate/verify-code', requestBody);

      if (sendSmsCode.status === 200) {
        if (AuthStateValue === 'GoToChangePass') {
          setIsLoading(false)
          setAuthPage('ChangePassword')
          props.setSmsCodeValue(Value)
        }
        else {
          if (sendSmsCode.status === 200 && sendSmsCode.data.data.user.type_id !== null) {
            setIsLoading(false)
            setUserLoggedIn(true)
            navigate('/')
            localStorage.setItem('Token', sendSmsCode.data.data.token)
          }
          else if (sendSmsCode.status === 200 && sendSmsCode.data.data.user.type_id === null) {
            setIsLoading(false)
            navigate('/setrole')
            localStorage.setItem('Token', sendSmsCode.data.data.token)
          }
        }
      }
      else {
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      setWrongPassword(true)
      setRedBorder(true)
    }

  }

  const ResendVerifyCode = () => {
    if (AuthStateValue === 'GoToChangePass') {
      ApiBaseUrl.post('api/authenticate/forget-password', { username: props.phonenumber }, { 'Content-Type': 'application/json', })
    }
    else if (AuthStateValue === 'OnTimeCode') {
      ApiBaseUrl.post('api/authenticate/send-code', {username: props.phonenumber}, { 'Content-Type': 'application/json' });
    }
    else {
      ApiBaseUrl.post('api/authenticate', { username: props.phonenumber }, { 'Content-Type': 'application/json' });
    }
  }

  const ResetErrorState = () => {
    setIsEmpty(false)
    setLessDigits(false)
    setWrongPassword(false)
    setRedBorder(false)
    setIsLoading(false)
  };

  return (
    <>
      <div className='smscode-container'>
        <div className='smscode-style C_Style'>

          <StartSection
            Backward={true}
          />

          <div style={{ padding: '48px 40px' }}>
            <div className='smscode-header'>
              کد تایید را وارد کنید
            </div>

            <div className='smscode-content'>
              کد تایید برای شماره <span style={{ letterSpacing: 'var(--letterSpacing)' }}>{props.phonenumber}</span> پیامک شد
            </div>

            <form id='my-form' style={{ paddingTop: '20px' }} onSubmit={handleSubmit}>
              <CustomizedInput
                type='text'
                value={FormattedValue}
                onChange={handleChange}
                redBorder={RedBorder}
                inputMode='numeric'
                style={{ textAlign: "center", direction: 'ltr' }}
                autocomplete='one-time-code'
              />
            </form>

            <div style={{ display: IsEmpty ? '' : 'none' }} className='auth-error'> لطفا کد 6 رقمی پیامک شده را وارد نمایید </div>
            <div style={{ display: LessDigits ? '' : 'none' }} className='auth-error'>کد تایید با 6 رقمی باشد</div>
            <div style={{ display: WrongPassword ? '' : 'none' }} className='auth-error'> کد تایید وارد شده اشتباه است </div>

            <CountDown phonenumber={props.phonenumber} ResendFunction={ResendVerifyCode} ResetErrorState={ResetErrorState} />

            <div className='smscode-button'>
              <SaveButton
                text={IsLoading ? <LoadingDots Color='white' /> : 'تایید'}
                idform={'my-form'}
              />
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default SmsCode