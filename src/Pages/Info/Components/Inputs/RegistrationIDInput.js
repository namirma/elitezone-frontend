import React, { useState } from 'react'
import './RegistrationIDInput.css';
import { transformDigits } from '../../../../PersonalFunction/transformDigits';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function RegistrationIDInput(props) {

  const { RegisterId, setRegisterId } = useAppContext();
  const [RegisterIdEmpty, setRegisterIdEmpty] = useState();

  const handleRegistrationIDValue = (event) => {
    const regex = /^[0-9\b]+$/; // Only allow numbers
    const Value = event.target.value;
    const transformedValue = transformDigits(Value);

    if (transformedValue === "" || regex.test(transformedValue)) {
      setRegisterId(transformedValue)

      if (transformedValue.length === 0) {
        setRegisterIdEmpty(true)
      } else {
        setRegisterIdEmpty(false)
      }

    }

  }

  return (
    <>
      <div style={{ padding: props.padding, margin: props.margin }} className='RegisterID-name'>

        <div className='RegisterID-name-label'>
          <label htmlFor='RegisterIDInput'> شناسه ثبت </label>
          <span> * </span>
        </div>

        <CustomizedInput
          value={RegisterId}
          onChange={handleRegistrationIDValue}
          type="text"
          id="RegisterIDInput"
          placeholder='شناسه ثبت را وارد کنید'
          onlyNum={true}
          inputMode={'numeric'}
          redBorder={RegisterIdEmpty}
          valueTrue={!RegisterIdEmpty}
        />

        <div style={RegisterIdEmpty ? {} : { display: 'none' }} className='EmptyName'>شناسه ثبت نمی تواند خالی باشد </div>


      </div>
    </>
  )
}

export default RegistrationIDInput