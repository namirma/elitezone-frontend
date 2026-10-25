import React, { useState, useEffect } from 'react';
import './ProvincesOfActivity.css';
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg'
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg'
import ApiBaseUrl from '../../../../Api/axios';
import { useAppContext } from '../../../../Context/AppContext';

function ProvincesofActivity(props) {

    const [ShowProvinces, setShowProvinces] = useState(false)
    const showProvincesList = () => {
        setShowProvinces(!ShowProvinces);
    }

    //Context
    const {MultiProvinceId, setMultiProvinceId} = useAppContext();
    const [CountProvincSelected, setCountProvinceSelected] = useState(MultiProvinceId.length);

    const handleMultiChoiseProvince = (value) => {
        const IsChecked = MultiProvinceId.includes(value.id)
        if (IsChecked) {
            setMultiProvinceId(MultiProvinceId.filter((UnCheckedValue) => UnCheckedValue !== value.id))
        }else {
            setMultiProvinceId([...MultiProvinceId, value.id]);
        }
        if (!MultiProvinceId.includes(value.id)) {
            setCountProvinceSelected(CountProvincSelected + 1);
        } else {
            setCountProvinceSelected(CountProvincSelected - 1);
        }
    }

    const MultiselectProvincesStyle = () => {
        if (CountProvincSelected > 0 && !ShowProvinces) {
            return {
                border: '1px solid var(--Success-Border)'
            }
        }
    }

    
    const [Provinces, setProvinces] = useState([]);
    useEffect(() => {
        const SendRequest = async () => {
            const ListOfProvinces = await ApiBaseUrl.get('api/province', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('Token'),
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })
            if (ListOfProvinces.status === 200) {
                const data = await ListOfProvinces.data.data;
                setProvinces(data)
            }
        }
        SendRequest();
    }, [])

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='provinces'>
                
                <div className='provinces-lable'>
                    <label> <span>استان(های)</span> محل فعالیت </label>
                    <div> * </div>
                </div>

                <div className={ShowProvinces ? 'provinces-container-active' : 'provinces-container'} >

                    <div style={MultiselectProvincesStyle()} className={ShowProvinces ? 'multiselect-provinces-active' : 'multiselect-provinces'} onClick={showProvincesList}>
                        <div className='multiselect-provinces-content'>
                            <div className='multiselect-provinces-content-item1'>
                                <div style={CountProvincSelected > 0 ? { display: 'none' } : {}}> انتخاب استان </div>
                                <div style={CountProvincSelected > 0 ? {} : { display: 'none' }}> (ها)استان </div>
                            </div>
                            <div className='multiselect-provinces-content-item2' style={CountProvincSelected === 0 ? { display: 'none' } : {}}> {CountProvincSelected} </div>
                        </div>
                        <div className='multiselect-provinces-img'> <img src={Dropdown_Icon} alt="img" /> </div>
                        <div className='multiselect-provinces-img-hover'> <img src={Dropdown_Hover_Icon} alt="img" /> </div>
                    </div>

                    <div className='provinces-divider' style={ShowProvinces ? {} : { display: 'none' }}> {/*Divider Between Title and List*/} </div>

                    <div style={ShowProvinces ? {} : { display: 'none' }} className='list-provinces'>

                        {Provinces.map((item) => (
                            <div key={item.id} className='list-provinces-item'>
                                <div className='list-provinces-item-city'>
                                    <label>
                                        <input type="checkbox"
                                         name={item.Name}
                                         checked={MultiProvinceId.includes(item.id)}
                                         onChange={() => handleMultiChoiseProvince(item)} />
                                        {item.Name}
                                    </label>

                                </div>
                                <span className='provinces-divider-items'></span>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </>
    )
}

export default ProvincesofActivity