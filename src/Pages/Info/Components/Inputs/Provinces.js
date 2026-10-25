import React, { useEffect, useRef, useState } from 'react'
import './Provinces.css';
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg';
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg';
//Context
import { useAppContext } from '../../../../Context/AppContext';

function Provinces({ ProvinceId,
    setProvinceId,
    ProvinceName,
    setProvinceName,
    setDisableCity,
    Title,
    ...props }) {

    //Context 
    const {
        ProvincesList
    } = useAppContext();

    const [ShowList, setShowList] = useState(false);
    const handleShowList = () => {
        setShowList(!ShowList);
        setDisableCity(!ShowList)
    }

    const handleProvinces = (value) => {
        setProvinceId(value.item.id)
        setProvinceName(value.item.Name)

        setShowList(false)

        //If User After Selected Province and City. Open Province Again Disable (Gray Background) City Input
        setDisableCity(false)
    }


    useEffect(() => {
        if (props.ClearData && props.ClearData === true) {
            setProvinceId(null)
        }
    })

    // useEffect(() => {
    //     if (ProvincesList.length > 0) {
    //         ProvincesList.map((item) => (
    //             item.id === ProvinceGenralInfoId && setProvinceName(item.Name)
    //         ))
    //     }
    // }, [ProvincesList]);

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='MembProvinces'>
                {/* Label */}
                <div className='Provinces-lable'>
                    <label>  <span> {Title ? Title : 'استان'} </span>  </label>
                    <div style={{ color: 'var(--SemanticColor-Error)' }}> * </div>
                </div>

                <div className={ShowList ? 'Province-container-active' : 'Provinces-container'}
                    style={{
                        border: ProvinceId && !ShowList && '1px solid var(--Success-Border)',
                        overflow: 'auto'
                    }}
                >

                    <div className={ShowList ? 'Province-Box-Active' : 'Province-Box'} onClick={handleShowList}>
                        <div className='Province-Box-Content'>

                            {/* Placeholder */}
                            <div className='Province-Box-Placeholder' style={ProvinceId === null ? {} : { display: 'none' }}> انتخاب کنید </div>

                            {/* Selected Province */}
                            <div className='Province-Box-Value' style={ProvinceId === null ? { display: 'none' } : {}}>
                                <div>
                                    {ProvinceName}
                                </div>
                            </div>

                        </div>
                        <div className='Province-Box-img'> <img src={Dropdown_Icon} alt='img' /> </div>
                        <div className='Province-Box-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /> </div>
                    </div>

                    {/*Divider Between Title and List*/}
                    <div className='Provinces-List-Divider' style={ShowList ? {} : { display: 'none' }}> </div>

                    <div className='Province-List' style={ShowList ? {} : { display: 'none' }}>

                        <div className='Province-List-Items-Container'>
                            {ProvincesList.map((item) => (
                                <div key={item.id} className='Province-List-Items' onClick={() => handleProvinces({ item })}> {item.Name} </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Provinces