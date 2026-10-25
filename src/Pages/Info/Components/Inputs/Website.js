import React, { useState } from 'react'
import './Website.css';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function Website(props) {

    const { Website_Context, setWebsite_Context, Disable_Website_Context, setDisable_Website_Context } = useAppContext();

    const handle_Website = (event) => {
        setWebsite_Context(event.target.value);
    }

    const handle_Disable_Website = () => {
        setDisable_Website_Context((prevState) => prevState === 0 ? 1 : 0);
        setWebsite_Context('');
    }


    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='website-address'>

                <div className='website-address-label'>
                    <label> آدرس وب سایت </label>
                </div>

                <div className='website-address-input'>

                    <CustomizedInput
                        type="text"
                        value={Website_Context}
                        onChange={handle_Website}
                        disabled={Disable_Website_Context ? true : false}
                        placeholder={Disable_Website_Context ? '' : 'مثال: elitezone.me'}
                        valueTrue={Website_Context}
                    />
                </div>


                <div className='disable-website-address'>
                    <label htmlFor='Disable_Website_Context'> این مورد به من مربوط نمی باشد </label>
                    <input onClick={handle_Disable_Website} defaultChecked={Disable_Website_Context} type="checkbox" id="Disable_Website_Context" />
                </div>

            </div>
        </>
    )
}

export default Website