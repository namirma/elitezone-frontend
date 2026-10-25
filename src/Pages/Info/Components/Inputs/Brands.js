import React, { useState, useRef } from 'react'
import './Brands.css';
import Add_Icon from '../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import Add_Hover_Icon from '../../../../PublicAssets/Add_Icons/Add_Hover_Icon.svg';
import Add_Disable_Icon from '../../../../PublicAssets/Add_Icons/Add_Disable_Icon.svg';
import Plus_Green_Icon from '../../../../PublicAssets/Plus_Icons/Plus_Green_Icon.svg';
import Trashbin_Blue_Icon from '../../../../PublicAssets/Trashbin_Icons/Trashbin_Blue_Icon.svg';
import { useAppContext } from '../../../../Context/AppContext';
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput';


function Brands(props) {

    const { Disable_Brands, setDisable_Brands, Brands_Context, setBrands_Context } = useAppContext();

    const handle_Disbale_Brands = () => {
        setDisable_Brands((prevState) => prevState === 0 ? 1 : 0);
        setInputValue('')
    }

    const [InputValue, setInputValue] = useState('');
    const handleInputChage = (event) => {
        setInputValue(event.target.value)
    }

    const handle_KeyDown = (event) => {
        if (event.keyCode === 13 && InputValue.trim() !== '') {
            const newTexts = [...Brands_Context, InputValue];
            setBrands_Context(newTexts.slice(-30)); // Limit the number of Brands_Context to 30
            setInputValue('');
        }
    };

    const InputRef = useRef(null);
    const handle_Click = () => {
        if (InputValue.trim() !== '') {
            const newTexts = [...Brands_Context, InputValue];
            setBrands_Context(newTexts.slice(-30));
            setInputValue('')
        }
        InputRef.current.focus();
    }

    const Delete_Text = (index) => {
        const updatedArray = [...Brands_Context];
        updatedArray.splice(index, 1);
        setBrands_Context(updatedArray)
    }

    const handleOnblur = () => {
        if (InputValue.trim() !== '') {
            const newTexts = [...Brands_Context, InputValue];
            setBrands_Context(newTexts.slice(-30));
            setInputValue('')
        }
    }

    return (
        <>
            <div style={{ margin: props.margin, padding: props.padding }} className='products-brand'>

                <label htmlFor='brands'> برند(ها) محصولات </label>

                <div className='products-brand-template'>

                    <span>
                        <CustomizedInput
                            type="text"
                            id="brands"
                            value={InputValue}
                            onChange={handleInputChage}
                            onKeyDown={handle_KeyDown}
                            onBlur={handleOnblur}
                            ref={InputRef}
                            style={{ paddingLeft: '40px' }}
                            placeholder={Disable_Brands ? '' : 'برند(ها)'}
                            disabled={Disable_Brands ? true : false}
                            valueTrue2={(Brands_Context.length > 0)}
                        />
                    </span>

                    <div className='products-brand-template-imgtemp'>
                        <img style={Disable_Brands ? { display: 'none' } : {}} src={Add_Icon} alt="img" />
                        <img style={Disable_Brands ? { display: 'none' } : {}} src={Add_Hover_Icon} alt="img" onClick={handle_Click} />
                        <img style={Disable_Brands ? {} : { display: 'none' }} src={Add_Disable_Icon} alt="img" />
                    </div>
                </div>



                {Brands_Context.map((text, index) => (

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
                            <img style={{ cursor: 'pointer' }} src={Trashbin_Blue_Icon} alt="img" onClick={() => Delete_Text(index)} />
                        </div>

                    </div>
                ))}


                <div style={Brands_Context.length >= 1 ? { display: 'none' } : {}} className='disable-products-brand'>
                    <label htmlFor='DisableBrand'> این مورد به من مربوط نمی باشد </label>
                    <input onClick={handle_Disbale_Brands} defaultChecked={Disable_Brands} type="checkbox" id="DisableBrand" />
                </div>

            </div>
        </>
    )
}

export default Brands