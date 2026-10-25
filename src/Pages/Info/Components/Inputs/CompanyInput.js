import React, { useEffect, useState } from 'react'
import './CompanyInput.css';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';
import { ValidateLength } from './Validate/ValidateLength';

const CompanyInput = (props) => {
    
    const { Company, setCompany } = useAppContext();
    const [NameEmpty, setNameEmpty] = useState(false);

    const handleCompany = (event) => {
        const Value = event.target.value;
        setCompany(Value);

        const rules = ValidateLength(Value)
        setNameEmpty(rules.nullValue)
    }


    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='CompanyInput'>

                <div className='CompanyInput-label'>
                    <label htmlFor='CompanyName'> نام سازمان </label>
                    <span> * </span>
                </div>

                <CustomizedInput
                    value={Company}
                    onChange={handleCompany}
                    type="text"
                    id="CompanyName"
                    placeholder='نام سازمان را وارد کنید'
                    redBorder={NameEmpty}
                    valueTrue={!NameEmpty}
                />

                <div style={NameEmpty ? {} : { display: 'none' }} className='EmptyName'> نام سازمان نمی تواند خالی باشد </div>
            </div>
        </>
    )
}

export default CompanyInput