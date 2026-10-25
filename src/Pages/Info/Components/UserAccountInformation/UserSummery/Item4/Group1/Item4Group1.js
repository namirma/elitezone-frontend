import React, { useRef, useState } from 'react'
import '../../ItemStyle/ItemStyle.css';
import Add_Icon from '../../../../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import Edit_Blue_Icon from '../../../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import ProvinceAndCityModal from '../../../../Modal/ProvinceAndCityModal';
import TotalGeneralInfoModal from '../../../../Modal/TotalGeneralInfoModal';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item4Group1() {

    const {ProvinceId ,ProvinceName, ProfileDataIsEmpty} = useAppContext();

    const [ProvinceAndCityEditShow, setProvinceAndCityEditShow] = useState(false)
    const [TotalGeneralInfoShow, setTotalGeneralInfoShow] = useState(false);

    const handleProvinceAndCityEditShow = () => {
        if (ProfileDataIsEmpty) {
            setTotalGeneralInfoShow(true)
        } else {
            setProvinceAndCityEditShow(true)
        }
    }

    const PrevProvinceId = useRef(ProvinceId);
    const PrevProvinceName = useRef(ProvinceName);

    return (
        <>
            <div className='item-container'>

                <div className='item-rightside'>
                    <div> استان </div>
                    <div> {PrevProvinceName.current} </div>
                </div>

                <div className='item-leftside'>
                    <div onClick={handleProvinceAndCityEditShow}>
                        <img src={PrevProvinceName.current === null ? Add_Icon : Edit_Blue_Icon} alt='img' />
                    </div>

                    {ProfileDataIsEmpty ?
                        <TotalGeneralInfoModal
                            setTotalGeneralInfoShow={setTotalGeneralInfoShow}
                            TotalGeneralInfoShow={TotalGeneralInfoShow}

                        />
                        :
                        <ProvinceAndCityModal
                            ProvinceAndCityEditShow={ProvinceAndCityEditShow}
                            setProvinceAndCityEditShow={setProvinceAndCityEditShow}
                        />
                    }

                </div>
            </div>
        </>
    )
}

export default Item4Group1