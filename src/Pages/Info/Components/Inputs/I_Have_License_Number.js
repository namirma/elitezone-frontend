import React from 'react'
import './I_Have_License_Number.css';
import Switch from '../../../../Buttons/Components/Switch';
import { useAppContext } from '../../../../Context/AppContext';


function I_Have_License_Number(props) {
  const { I_Have_License_Number_Context, setI_Have_License_Number_Context } = useAppContext();
  const handleClick = () => {
    setI_Have_License_Number_Context(prevState => prevState === 0 ? 1 : 0)
  }
  return (
    <>
      <div className='engworkpermit-contractor-container'>

        <div className='engworkpermit-contractor-text'> پروانه اشتغال مهندسی دارم </div>

        <div className='switch_cotainer' onClick={handleClick}>
          <Switch
            SwitchState={I_Have_License_Number_Context}
          />
        </div>

      </div>
    </>
  )
}

export default I_Have_License_Number