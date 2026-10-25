import React from 'react'
import './Checkbox.css';

function Checkbox(props) {

    const handleChange = () => {
        props.onChangeValue(prevValue => prevValue === 0 ? 1 : 0)
    }

    return (
        <div className='checkbox_container'>
            <label htmlFor='disablecontractorcompany'> این مورد به من مربوط نمی باشد </label>
            <input
                defaultChecked={props.CheckedValue === 1 ? true : false}
                onClick={handleChange}
                type="checkbox"
                id="disablecontractorcompany" />
        </div>
    )
}

export default Checkbox