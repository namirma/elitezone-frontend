import React, { useState, useEffect } from 'react'
import '../../ItemStyle/ItemStyle.css';
import Add_Icon from '../../../../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import Edit_Blue_Icon from '../../../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import InfoEditModal from './../../../../Modal/InfoEditModal';
import TotalGeneralInfoModal from '../../../../Modal/TotalGeneralInfoModal';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item1Group2() {

    const {ProfileDataIsEmpty, NationalCode} = useAppContext();
    const [InfoEditShow, setInfoEditShow] = useState(false)
    const [TotalGeneralInfoShow, setTotalGeneralInfoShow] = useState(false);

    const handleInfoEdit = () => {
        if (ProfileDataIsEmpty) {
            setTotalGeneralInfoShow(true)
        } else {
            setInfoEditShow(true)
        }
    }

    const [Constant_NationalCode, setConstant_NationalCode] = useState('');
    useEffect(() => {
        setConstant_NationalCode(NationalCode)
    }, [])
 
    return (
        <>
            <div className='item-container'>

                <div className='item-rightside'>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        کد ملی
                    </div>
                    <div style={Constant_NationalCode === '' ? { display: 'none' } : {}}> <span style={{letterSpacing: 'var(--letterSpacing)'}}> {Constant_NationalCode}  </span></div>
                </div>

                <div className='item-leftside'>

                    <div onClick={handleInfoEdit}>
                        <img src={Constant_NationalCode === '' ? Add_Icon : Edit_Blue_Icon} alt='img' />
                    </div>

                    {ProfileDataIsEmpty ?
                        <TotalGeneralInfoModal
                            setTotalGeneralInfoShow={setTotalGeneralInfoShow}
                            TotalGeneralInfoShow={TotalGeneralInfoShow}
                        />
                        :
                        <InfoEditModal
                            InfoEditShow={InfoEditShow}
                            setInfoEditShow={setInfoEditShow}
                        />
                    }

                </div>
            </div>
        </>
    )
}

export default Item1Group2