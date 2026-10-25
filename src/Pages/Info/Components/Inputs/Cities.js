import React, { useEffect, useState, useRef } from 'react';
import './Provinces.css';
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg';
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg';
//Context
import { useAppContext } from '../../../../Context/AppContext';

function Cities({
    CityName, setCityName,
    CityId, setCityId,
    ProvinceId,
    DisableCity,
    Title,
    ...props
}) {

    const {CitiesList} = useAppContext();

    const [ShowList, setShowList] = useState(false);
    const prevProvinceId = useRef(ProvinceId);

    const handleShowList = () => {
        setShowList(!ShowList);
    }

    const handleSelectCities = (value) => {
        setCityId(value.item.id);
        setCityName(value.item.Name);
        setShowList(false);
    }

    useEffect(() => {
        if (prevProvinceId.current !== ProvinceId) {
            setCityId(null);
            setCityName(null)
            prevProvinceId.current = ProvinceId;
        }
    }, [ProvinceId]);

    const IsCityIsEmpty = CitiesList.length === 0 || DisableCity === true ? true : false;

    const handleSelectCitiesStyle = () => {
        if (IsCityIsEmpty) {
            return {
                backgroundColor: 'var(--Disable-Button-BackGround01)',
                cursor: 'default'
            }
        } else {
            if (CityId && !ShowList) {
                return {
                    border: '1px solid var(--Success-Border)'
                }
            } else {
                return {};
            }
        }
    }

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='MembProvinces'>
                {/* Label */}
                <div className='Provinces-lable'>
                    <label> <span> {Title ? Title : 'شهر'} </span> </label>
                    <div style={{ color: 'var(--SemanticColor-Error)' }}> * </div>
                </div>

                <div className={ShowList && !IsCityIsEmpty ? 'Province-container-active' : 'Provinces-container'}
                    style={handleSelectCitiesStyle()}
                >

                    <div className={ShowList && !IsCityIsEmpty ? 'Province-Box-Active' : 'Province-Box'} onClick={handleShowList}>
                        <div className='Province-Box-Content'>

                            <div className='Province-Box-Placeholder' style={CityId === null ? {} : { display: 'none' }}> انتخاب کنید </div>

                            <div className='Province-Box-Value' style={CityId === null ? { display: 'none' } : {}}>
                                <div>
                                    {CityName}
                                </div>
                            </div>

                        </div>
                        <div className='Province-Box-img'> <img src={Dropdown_Icon} alt='img' /> </div>
                        <div className='Province-Box-img-hover'>
                            <img src={ProvinceId === null || DisableCity === true ? Dropdown_Icon : Dropdown_Hover_Icon} alt='img' />
                        </div>

                    </div>

                    <div className='Provinces-List-Divider' style={ShowList && !IsCityIsEmpty ? {} : { display: 'none' }}> {/*Divider Between Title and List*/} </div>

                    <div className='Province-List' style={ShowList && !IsCityIsEmpty ? {} : { display: 'none' }}>
                        <div className='Province-List-Items-Container'>

                            {CitiesList.map((item) => (
                                <div key={item.id} className='Province-List-Items' onClick={() => handleSelectCities({ item })}> {item.Name} </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Cities;
