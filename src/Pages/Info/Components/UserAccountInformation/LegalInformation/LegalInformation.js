import React, { useState } from 'react'
import './LegalInformation.css';
import Flash2_SemanticSuccess_Icon from '../../../../../PublicAssets/Arrow_Icons/Flash2_SemanticSuccess_Icon.svg';
import Trashbin_Red_Icon from '../../../../../PublicAssets/Trashbin_Icons/Trashbin_Red_Icon.svg';
import Edit_Blue_Icon from '../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import LegalInfoEditModal from '../../Modal/LegalInfoEditModal';
import Item1Group1Legal from './Item1/Group1/Item1Group1Legal';
import Item1Group2Legal from './Item1/Group2/Item1Group2Legal';
import Item2Group1Legal from './Item2/Group1/Item2Group1Legal';
import Item2Group2Legal from './Item2/Group2/Item2Group2Legal';
import Item3Group1Legal from './Item3/Group1/Item3Group1Legal';
import ConfirmRequestModal from '../../Modal/ConfirmRequestModal';
import { useAppContext } from '../../../../../Context/AppContext';
import { useToast } from '../../../../../PersonalFunction/Toast';


function LegalInformation() {

    //Context 
    const { ProfileDataIsEmpty, Entity } = useAppContext();

    const [LegalEditShow, setLegalEditShow] = useState(false);
    const [ConfirmRequest, setConfirmRequest] = useState(false)

    const { showToastButton } = useToast();

    const handleLegalInfoEditShow = () => {
        if (ProfileDataIsEmpty) {
            showToastButton('اطلاعات حساب کاربری خود را تکمیل نکرده اید!');
        } else {
            setLegalEditShow(true)
        }
    }

    const handleConfirmRequest = () => {
        setConfirmRequest(true)
    }

    return (
        <>

            {Entity === 'legal' ?

                <div className='legalinfo B_Style'>

                    <div className='legalinfo-title'>
                        اطلاعات حقوقی
                    </div>

                    <div style={{display:'flex', flexDirection: 'row'}}>
                        <div className='table'>

                            <div className='table-items'>

                                <div className='usesummery-item-1'>
                                    <Item1Group1Legal />
                                </div>

                                <div className='usesummery-item-2'>
                                    <Item1Group2Legal />
                                </div>

                            </div>

                            <div className='table-items'>

                                <div className='usesummery-item-1'>
                                    <Item2Group1Legal />
                                </div>

                                <div className='usesummery-item-2'>
                                    <Item2Group2Legal />
                                </div>

                            </div>

                            <div className='table-items'>

                                <div className='usesummery-item-1'>
                                    <Item3Group1Legal />
                                </div>

                                <div className='usesummery-item-2'>
                                    <Item2Group1Legal />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='legalinfo-button'>

                        <div onClick={handleLegalInfoEditShow} style={{ width: 'max-content', whiteSpace: 'nowrap' }}>
                            <img src={Edit_Blue_Icon} alt="img" />
                            <button style={{ color: 'var(--Text-EZ-01)', paddingRight: '8px' }} type="button">ویرایش اطلاعات حقوقی</button>
                        </div>

                        <div onClick={handleConfirmRequest} style={{ width: 'max-content', whiteSpace: 'nowrap' }}>
                            <img src={Trashbin_Red_Icon} alt="img" />
                            <button style={{ color: 'var(--SemanticColor-Error)', paddingRight: '8px' }} type="button"> حذف اطلاعات حقوقی </button>
                        </div>

                    </div>

                </div>

                :

                <div className='legalinfo B_Style'>
                    <div className='legalinfo-title'>
                        اطلاعات حقوقی
                    </div>

                    <div className='legalinfo-description'>
                        در صورتی که شخص حقوقی هستید این بخش را تکمیل نمایید.
                    </div>

                    <div className='legalinfo-button'>
                        <div onClick={handleLegalInfoEditShow}>
                            <button type="button"> ثبت اطلاعات حقوقی</button>
                            <img src={Flash2_SemanticSuccess_Icon} alt="img" style={{Width: '8px'}}/>
                        </div>
                    </div>
                </div>

            }

            <LegalInfoEditModal
                LegalEditShow={LegalEditShow}
                setLegalEditShow={setLegalEditShow}
            />

            <ConfirmRequestModal
                text={'از حذف اطلاعات حقوقی خود مطمئن هستید؟ '}
                ConfirmRequest={ConfirmRequest}
                setConfirmRequest={setConfirmRequest}
                Requested={'DeleteLegalInfo'}

                acceptText='بله'
                RejectText='خیر'
            />

        </>
    )
}

export default LegalInformation