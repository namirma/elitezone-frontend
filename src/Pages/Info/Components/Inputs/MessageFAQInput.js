import React, { useState } from 'react'
import CustomizedTextarea from '../../../../PersonalFunction/CustomizedTextarea'
import { useAppContext } from '../../../../Context/AppContext'
import { ValidateLength } from './Validate/ValidateLength';

function MessageFAQInput(props) {
    const { MessageFAQ, setMessageFAQ, MessageFAQTrue, setMessageFAQTrue } = useAppContext();

    const [MessageFAQEmpty, setMessageFAQEmpty] = useState(false);

    const handleMessage = (event) => {
        setMessageFAQ(event.target.value);

        const InputValue = event.target.value
        const rules = ValidateLength(InputValue)
        setMessageFAQEmpty(rules.nullValue);
        setMessageFAQTrue(!rules.nullValue)

    }

    return (
        <div className='nameinput' style={{ margin: props.margin }}>

            <label htmlFor='messagefaq' style={{ paddingBottom: '8px' }}>
                <span style={{ display: 'flex', justifyContent: 'flex-end' }}> <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
                    <span> پیغام </span>
                </span>
            </label>

            <CustomizedTextarea
                id='messagefaq'
                value={MessageFAQ}
                onChange={handleMessage}
                redBorder={MessageFAQEmpty}
                valueTrue={MessageFAQTrue}
                placeholder={'پیغام شما ...'}
                style={{ padding: '16px' }}
            />

            <div style={MessageFAQEmpty ? {} : { display: 'none' }} className='EmptyName'> پیغام نمی تواند خالی باشد </div>
        </div>
    )
}

export default MessageFAQInput