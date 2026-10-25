import React, { useState } from 'react'
import './Activity_History.css';
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg';
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg'
//Context
import { useAppContext } from '../../../../Context/AppContext';


function Activity_History(props) {
    //Context
    const { Activity_History_Context, setActivity_History_Context } = useAppContext();

    const handleActivity_History = (value) => {
        setActivity_History_Context(value.index);
        setShowList(false)
    }

    const [ShowList, setShowList] = useState(false);
    const handleShowList = () => {
        setShowList(!ShowList);
    }

    const MultiselectWorkStyle = () => {
        if (Activity_History_Context !== null && !ShowList) {
            return {
                border: '1px solid var(--Success-Border)'
            }
        }
    }

    const Array =
        [
            { index: 1, value: 'کمتر از ۱ سال' },
            { index: 2, value: 'بین ۱ تا ۵ سال' },
            { index: 3, value: 'بین ۵ تا ۱۰ سال' },
            { index: 4, value: 'بین ۱۰ تا ۱۵ سال' },
            { index: 5, value: ' بین ۱۵ تا ۲۰ سال' },
            { index: 6, value: 'بیش از ۲۰ سال ' }
        ];

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }}
                className='workhistory'>
                {/* Label */}
                <div className='workhistory-label'>
                    <label> سابقه فعالیت </label>
                    <span>*</span>
                </div>

                <div className={ShowList ? 'workhistory-container-active' : 'workhistory-container'}>

                    <div style={MultiselectWorkStyle()} className={ShowList ? 'multiselect-work-active' : 'multiselect-work'} onClick={handleShowList}>
                        <div className='multiselect-work-content'>
                            <div className='multiselect-work-content-placeholder' style={Activity_History_Context === null ? {} : { display: 'none' }}>انتخاب بازه زمانی</div>
                            <div className='multiselect-work-content-item' style={Activity_History_Context === '' ? { display: 'none' } : {}}>
                                {/* {Activity_History_Context} */}
                                {Array.map((value) => (
                                    value.index === Activity_History_Context && value.value
                                ))}
                            </div>
                        </div>
                        <div className='multiselect-work-img'> <img src={Dropdown_Icon} alt='img' /> </div>
                        <div className='multiselect-work-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /> </div>
                    </div>

                    <div className='workhistory-divider' style={ShowList ? {} : { display: 'none' }}> {/*Divider Between Title and List*/} </div>

                    <div className='list-workes' style={ShowList ? {} : { display: 'none' }}>
                        <div className='list-workes-items-container'>
                            {Array.map((value) => (
                                <div key={value.index} className='list-workes-items' onClick={() => handleActivity_History(value)}>
                                    {value.value}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Activity_History