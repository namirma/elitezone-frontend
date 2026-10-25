import React, { useState, useRef } from 'react'
import './Standards.css';
import Add_Icon from '../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import Add_Hover_Icon from '../../../../PublicAssets/Add_Icons/Add_Hover_Icon.svg';
import Add_Disable_Icon from '../../../../PublicAssets/Add_Icons/Add_Disable_Icon.svg';
import Plus_Green_Icon from '../../../../PublicAssets/Plus_Icons/Plus_Green_Icon.svg';
import Trashbin_Blue_Icon from '../../../../PublicAssets/Trashbin_Icons/Trashbin_Blue_Icon.svg';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';

// Earned Standards Uses Products Brand Style And The css file itself is empty

function Standards(props) {

    const { Disable_Standards, setDisable_Standards, Strandards_Context, setStrandards_Context } = useAppContext();
    const handle_Disable_Standards = () => {
        setDisable_Standards(!Disable_Standards);
        setInputValue('')
    }

    const [InputValue, setInputValue] = useState('');
    const handleInputChage = (event) => {
        setInputValue(event.target.value)
    }

    const handle_KeyDown = (event) => {
        if (event.keyCode === 13 && InputValue.trim() !== '') {
            const newTexts = [...Strandards_Context, InputValue];
            setStrandards_Context(newTexts.slice(-30)); // Limit the number of Strandards_Context to 30
            setInputValue('');
        }
    };

    const InputRef = useRef(null);
    const handleClick = () => {
        if (InputValue.trim() !== '') {
            const newTexts = [...Strandards_Context, InputValue];
            setStrandards_Context(newTexts.slice(-30));
            setInputValue('')
        }
        InputRef.current.focus();
    }

    const DeleteText = (index) => {
        const updatedArray = [...Strandards_Context];
        updatedArray.splice(index, 1);
        setStrandards_Context(updatedArray)
    }

    const handleOnblur = () => {
        if (InputValue.trim() !== '') {
            const newTexts = [...Strandards_Context, InputValue];
            setStrandards_Context(newTexts.slice(-30));
            setInputValue('')
        }
    }

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }}
                className='products-brand'>
                <label htmlFor='productsbrand'> استاندارد(های) کسب شده </label>
                <div className='products-brand-template'>

                    <CustomizedInput
                        value={InputValue}
                        onChange={handleInputChage}
                        onKeyDown={handle_KeyDown}
                        onBlur={handleOnblur}
                        ref={InputRef}
                        type="text" id="productsbrand" placeholder={Disable_Standards ? '' : 'استاندراد ها'}
                        disabled={Disable_Standards ? true : false}
                        valueTrue2={(Strandards_Context.length > 0)}
                    />

                    <div className='products-brand-template-imgtemp'>
                        <img style={Disable_Standards ? { display: 'none' } : {}} src={Add_Icon} alt="img" />
                        <img style={Disable_Standards ? { display: 'none' } : {}} src={Add_Hover_Icon} alt="img" onClick={handleClick} />
                        <img style={Disable_Standards ? {} : { display: 'none' }} src={Add_Disable_Icon} alt="img" />
                    </div>
                </div>


                {Strandards_Context.map((text, index) => (
                    <div key={index} className='products-brand-entered'>
                        <div className='products-brand-entered-item1'>
                            <span>
                                <img src={Plus_Green_Icon} alt="img" />
                            </span>
                            <span>
                                <div> {text} </div>
                            </span>
                        </div>
                        <div className='products-brand-entered-itme2'>
                            <img style={{ cursor: 'pointer' }} src={Trashbin_Blue_Icon} alt="img" onClick={() => DeleteText(index)} />
                        </div>
                    </div>
                ))}

                <div style={Strandards_Context.length >= 1 ? { display: 'none' } : {}} className='disable-products-brand'>
                    <label htmlFor='Disable_Standards'> این مورد به من مربوط نمی باشد </label>
                    <input
                        onClick={handle_Disable_Standards}
                        defaultChecked={Disable_Standards}
                        type="checkbox"
                        id="Disable_Standards"
                    />
                </div>
            </div>
        </>
    )
}

export default Standards