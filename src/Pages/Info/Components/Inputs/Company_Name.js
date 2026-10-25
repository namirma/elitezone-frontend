import React, { useEffect, useState } from 'react'
import './Company_Name.css';
import { useAppContext } from '../../../../Context/AppContext';
import Checkbox from '../../../../Buttons/Components/Checkbox';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function Company_Name({ text, DisableCheckBox, EnableStar, padding }) {

    //Context
    const {
        Company_Name_Context,
        setCompany_Name_Context,
        Disable_Company_Name_Context,
        setDisable_Company_Name_Context } = useAppContext();

    const handleCompany_Name = (event) => {
        setCompany_Name_Context(event.target.value);
    }

    const Company_Name_Style = () => {
        if (Disable_Company_Name_Context === 1) {
            return { backgroundColor: 'var(--Disable-Button-BackGround01)' }
        }
    }

    useEffect(() => {
        if (Disable_Company_Name_Context === 1) {
            setCompany_Name_Context('')
        }
    }, [Disable_Company_Name_Context])

    return (
        <>
            <div className='contractor-company' style={{ padding: padding }}>

                <label htmlFor='contractorcompany' className='foa-label' style={{ direction: 'ltr' }}>
                    <div> {text ? text : 'نام شرکت یا موسسه پیمانکاری'} </div>
                    {EnableStar && <div> * </div>}
                </label>

                <span style={{width: '100%'}}>
                    <CustomizedInput
                        type="text"
                        id="contractorcompany"
                        style={Company_Name_Style()}
                        value={Company_Name_Context}
                        onChange={handleCompany_Name}
                        placeholder={Disable_Company_Name_Context ? '' : 'شرکت'}
                        disabled={Disable_Company_Name_Context === 1 ? true : false}
                        valueTrue={Company_Name_Context}
                    />
                </span>

                {!DisableCheckBox
                    &&
                    <Checkbox
                        onChangeValue={setDisable_Company_Name_Context}
                        CheckedValue={Disable_Company_Name_Context}
                    />
                }

            </div>
        </>
    )
}

export default Company_Name