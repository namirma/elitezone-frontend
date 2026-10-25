import React, { useState } from 'react'
import './Activity_Description.css';
import { useAppContext } from '../../../../Context/AppContext';

function Activity_Description(props) {

    const { Activity_Description_Button, setActivity_Description_Button, Activity_Description_Context, setActivity_Description_Context } = useAppContext();
    const [AD_Focus, setADFocus] = useState(false);

    const handle_Activity_Description_Button = () => {
        setActivity_Description_Button((prevState) => prevState === 0 ? 1 : 0)
        setActivity_Description_Context('')
    }

    const handle_Activity_Description = (event) => {
        setActivity_Description_Context(event.target.value)
    }


    const Activity_Description_Style = () => {
        if (Activity_Description_Context && Activity_Description_Context.length > 0 && !AD_Focus) {
            return {
                border: '1px solid var(--Success-Border)',
                transition: '.1s ease'
            }
        } else if (Activity_Description_Context && Activity_Description_Context.length > 0 && AD_Focus) {
            return {
                borderColor: 'var(--Primary-EZ)',
                transition: '.1s ease'
            }
        }

        return {
            transition: '.1s ease'
        }
    }
    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='Activity_Description_Button'>

                <label htmlFor='ActivityDescriptionButton'> نیاز به وارد کردن توضیح بیشتر برای زمینه فعالیت دارم </label>

                <input
                    type="checkbox"
                    onClick={handle_Activity_Description_Button}
                    id="ActivityDescriptionButton"
                    defaultChecked={Activity_Description_Button} />

            </div>

            <div style={{ display: Activity_Description_Button ? '' : 'none' }} className='Activity_Description-container'>

                <div>
                    <label htmlFor='Activity_Description'> توضیح </label>
                </div>

                <textarea
                    style={Activity_Description_Style()}
                    onFocus={() => setADFocus(true)}
                    onBlur={() => setADFocus(false)}
                    type='text'
                    id='Activity_Description'
                    value={Activity_Description_Context}
                    onChange={handle_Activity_Description}
                    placeholder='توضیحات بیشتر را وارد کنید'
                />

            </div>
        </>
    )
}

export default Activity_Description