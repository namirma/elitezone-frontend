import React from 'react'
import './SaveButton.css';
import LoadingDots from '../../Pages/Auth/Components/LoadingDots';

function SaveButton(props) {
  return (
    <>
      <button
        className='savebutton E_Style'
        form={props.idform}
        disabled={props.disabled}
        style={{ backgroundColor: props.BackgroundColor, color: props.Color, cursor: props.Cursor }}
        type='submit'
      >

        {props.IsLoading ? <LoadingDots Color='white' /> : props.text}

      </button>

      <div style={{ display: props.Error ? '' : 'none' }} className='auth-error'> خطایی رخ داده است </div>
    </>
  )
}

export default SaveButton