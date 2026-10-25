import React, { useState } from 'react'
import './Production_Amount.css';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function Production_Amount(props) {

    const { Production_Amount_Context, setProduction_Amount_Context } = useAppContext();

    const handle_Production_Amount = (event) => {
        setProduction_Amount_Context(event.target.value)
    }

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='Production_Amount_Container'>

                <div>
                    <label htmlFor='ProductionAmount'> میزان تولید </label>
                    {/* <span>*</span> */}
                </div>

                <span style={{width:'100%'}}>
                    <CustomizedInput
                        type='text'
                        id='ProductionAmount'
                        value={Production_Amount_Context}
                        onChange={handle_Production_Amount}
                        placeholder='تولید در واحد زمان را مشخص کنید (مثال:100تن در سال)'
                        valueTrue={Production_Amount_Context}
                    />
                </span>

            </div>
        </>
    )
}

export default Production_Amount