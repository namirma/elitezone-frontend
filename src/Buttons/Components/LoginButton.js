import React from 'react'
import './LoginButton.css';
import { useNavigate } from 'react-router-dom';


function LoginButton() {

  const navigate = useNavigate();

  return (
    <>
      <div className='login-shadow'>
          <button onClick={() => navigate('/auth')} className='login'>
            <div className='login-text'>

              <div className='login-text-content'>
                <div> ثبت نام </div>
                <div className='divider-login'> | </div>
                <div> ورود </div>
              </div>

            </div>
          </button>
      </div>
    </>
  )
}

export default LoginButton