import React, { useRef, useState } from 'react'
import '../../ItemStyle/ItemStyle.css';
import Add_Icon from '../../../../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import Edit_Blue_Icon from '../../../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import InfoEditModal from './../../../../Modal/InfoEditModal';
import TotalGeneralInfoModal from '../../../../Modal/TotalGeneralInfoModal';
//Context
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item1Group1() {

    //Constxt 
    const { Name, Family, ProfileDataIsEmpty } = useAppContext();

    const [InfoEditShow, setInfoEditShow] = useState(false)
    const [TotalGeneralInfoShow, setTotalGeneralInfoShow] = useState(false);

    const handleInfoEdit = () => {
        if (ProfileDataIsEmpty) {
            setTotalGeneralInfoShow(true)
        } else {
            setInfoEditShow(true)
        }
    }

    const PrevName = useRef(Name)
    const PrevFamily = useRef(Family)

    return (
        <>
            <div className='item-container'>

                <div className='item-rightside'>
                    <div>
                        نام و نام خانوادگی
                    </div>
                    <div style={(PrevName.current || PrevFamily.current) === '' ? { display: 'none' } : {}} > {PrevName.current + ' ' + PrevFamily.current} </div>
                </div>

                <div className='item-leftside'>

                    <div onClick={handleInfoEdit}>
                        <img src={(PrevName.current || PrevFamily.current) === '' ? Add_Icon : Edit_Blue_Icon} alt='img' />
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

export default Item1Group1