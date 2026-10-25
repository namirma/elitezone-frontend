import React from 'react';
import './Trusted_Contractor.css';
import Switch from '../../../../Buttons/Components/Switch';
import { useAppContext } from '../../../../Context/AppContext';

function Trusted_Contractor() {
    
    //Context
    const { Trusted_Contractor_Context, setTrusted_Contractor_Context } = useAppContext();

    const handleClick = () => {
        setTrusted_Contractor_Context(prevValue => prevValue === 0 ? 1 : 0);
    }

    return (
        <>
            <div className='qualified-contractor-container'>

                <div className='qualified-contractor-text'> پیمانکار با صلاحیت هستم </div>

                <div onClick={handleClick}>
                    <Switch
                        SwitchState={Trusted_Contractor_Context}
                    />
                </div>
                
            </div>
        </>
    )
}

export default Trusted_Contractor