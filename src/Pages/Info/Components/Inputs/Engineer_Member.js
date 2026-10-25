import React, { useEffect } from 'react'
import './Engineer_Member.css';
import Switch from '../../../../Buttons/Components/Switch';
import { useAppContext } from '../../../../Context/AppContext';

function Engineer_Member(props) {

    //Context
    const { Engineer_Member_Context, setEngineer_Member_Context } = useAppContext();

    const handleClick = () => {
        setEngineer_Member_Context(prevValue => prevValue === 0 ? 1 : 0);
    }

    return (
        <>
            <div className='Engineer_Member-container'>

                <div className='Engineer_Member-Text'> عضو نظام مهندسی هستم </div>

                <div onClick={handleClick}>
                    <Switch
                        SwitchState={Engineer_Member_Context}
                    />
                </div>

            </div>
        </>
    )
}
export default Engineer_Member