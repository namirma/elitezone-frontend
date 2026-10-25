import React, { useState, useEffect } from 'react'
import './ChangePassInput.css'
import Indicator_Blue_Icon from '../../../../PublicAssets/Indicator_Icons/Indicator_Blue_Icon.svg';
import OverlayButton from '../../../../Buttons/Components/OverlayButton.js';
import ApiBaseUrl from '../../../../Api/axios';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput.js';


function ChangePassInput() {

  const [Password, setPassword] = useState('');
  const [PasswordTrue, setPasswordTrue] = useState(false);
  const [Password2, setPassword2] = useState('');
  const [Password2True, setPassword2True] = useState('');

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
      setPasswordTrue(false)
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

  const [EnableButton, setEnableButton] = useState(false);

  useEffect(() => {
    if (
      // CurrentPassword.length > 0 === true
      /\d/.test(Password) === true
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

  //Submit for Setting Or Changings Password
  const [IsLoading, setIsLoadin] = useState(false)
  const [Error, setError] = useState(false);
  const handleSubmit = async () => {
    if (EnableButton) {
      setIsLoadin(true)
      try {
        const PsswordRequest = await ApiBaseUrl.post('api/profile/password', {
          password: Password,
          password_confirmation: Password2
        }, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('Token'),
            Accept: 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
          }
        })
        if (PsswordRequest.status === 200) {
          setIsLoadin(false)
          setError(false)
          window.location.reload();
        } else {
          setIsLoadin(false);
          setError(true)
        }
      } catch (err) {
        setIsLoadin(false);
        setError(true)
      }
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
      <div className='changepassinput-newpass1'>
        <label htmlFor='newpass1'>  <span style={{ display: 'flex', justifyContent: 'flex-end' }}> <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span> <span> رمز عبور جدید </span> </span> </label>
        <CustomizedInput
          type={PasswordInput ? 'text' : 'password'}
          id="newpass1"
          value={Password}
          onChange={handleInput}
          valueTrue={PasswordTrue}
          PasswordInput={PasswordInput}
          onPasswordInputClick={onPasswordInputClick}
        />
      </div>


      <div className='changepassinput-state-text'>
        <p style={Red === true && Orange === false ? { color: '#F32916' } : { visibility: 'hidden' }}> ضعیف </p>
        <p style={Orange === true && Red === false && Green === false ? { color: '#FFC103' } : { display: 'none' }}> متوسط </p>
        <p style={Green === true && Orange === false && Red === false ? { color: '#00AD9A' } : { display: 'none' }}> عالی شد </p>
      </div>

      {/* Check the Strengh of the Password   */}
      <div className={Red == false && Orange == false && Green == false ? 'changepassinput-check-strong' : 'changepassinput-check-strong-hidden'}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={Red ? 'changepassinput-check-strong-red' : 'changepassinput-check-strong-red-hidden'}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={Orange ? 'changepassinput-check-strong-orange' : 'changepassinput-check-strong-orange-hidden'}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={Green ? 'changepassinput-check-strong-green' : 'changepassinput-check-strong-green-hidden'}>
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

      <div className='changepassinput-newpass2'>
        <label htmlFor='newpass2'>  <span style={{ display: 'flex', justifyContent: 'flex-end' }}> <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span> <span> تکرار رمز عبور جدید </span> </span> </label>
        <CustomizedInput
          type={PasswordInput2 ? 'text' : 'password'}
          id="newpass1"
          value={Password2}
          onChange={handleInput2}
          valueTrue={Password2True}
          PasswordInput={PasswordInput2}
          onPasswordInputClick={onPasswordInputClick2}
        />
      </div>


      <div onClick={handleSubmit}>
        <OverlayButton
          disabled={EnableButton ? false : true}
          backgroundcolor={EnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
          text={'ثبت'}
          IsLoading={IsLoading}
          Cursor={!EnableButton && 'default'}
          Error={Error}
        />
      </div>
    </>
  )
}

export default ChangePassInput