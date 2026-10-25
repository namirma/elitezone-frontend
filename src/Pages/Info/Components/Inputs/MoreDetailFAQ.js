import React from 'react'
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

function MoreDetailFAQ(props) {
    const { MoreDeatilsFAQ, setMoreDeatilsFAQ } = useAppContext();

    const handleInput = (event) => {
        setMoreDeatilsFAQ(event.target.value)
    }
    return (
        <>
         <div className='nameinput' style={{ margin: props.margin }}>

                <label htmlFor='moredetailfaq' style={{paddingBottom: '8px'}}>
                    <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <span> توضیحات </span>
                    </span>
                </label>

                <CustomizedInput
                    id='moredetailfaq'
                    type="text"
                    value={MoreDeatilsFAQ}
                    onChange={handleInput}
                    valueTrue={((MoreDeatilsFAQ !== '' || MoreDeatilsFAQ !== null) ? true : false)}
                    placeholder={'توضیح بیشتر درباره موضوع'}
                    style={{ padding: '16px' }}
                />

            </div>

        </>
    )
}

export default MoreDetailFAQ