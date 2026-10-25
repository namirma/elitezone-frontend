import React, { useEffect, useRef, useState } from 'react'
import '../../ItemStyle/ItemStyle.css';
import Add_Icon from '../../../../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import Edit_Blue_Icon from '../../../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import EmailEditModal from './../../../../Modal/EmailEditModal';
import BadgeConfirme from '../../../../Badges/BadgeConfirme';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item2Group2(props) {

    //Context
    const { Email, EmailVerfied } = useAppContext();

    console.log('EmailVerfied : ' + EmailVerfied)

    const [EmailEditShow, setEmailEditShow] = useState(false)

    const handleEditEmail = () => {
        setEmailEditShow(true)
    }

    const PrevEmail = useRef(Email);

    return (
        <>
            {/* Item2 Group2 */}
            <div className='item-container'>

                <div className='item-rightside'>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                        <div style={{ display: (PrevEmail.current === '' || PrevEmail.current === null) ? 'none' : 'flex' }}>
                            {EmailVerfied ?
                                <BadgeConfirme text={'تایید شده'} BackgroundColor={'var(--SemanticColor-Success)'} />
                                :
                                <BadgeConfirme text={'در انتظار تایید'} BackgroundColor={'var(--SemanticColor-Warning)'} />
                            }
                        </div>
                        ایمیل
                    </div>
                    <div
                        style={(PrevEmail.current === '' || PrevEmail.current === null) ?
                            { display: 'none' } :
                            { fontFamily: 'SFregular', letterSpacing: '1px' }}>
                        {PrevEmail.current}
                    </div>
                </div>


                <div className='item-leftside'>
                    <div onClick={handleEditEmail}> <img src={(PrevEmail.current === '' || PrevEmail.current === null) ? Add_Icon : Edit_Blue_Icon} alt="img" /> </div>
                    <EmailEditModal
                        EmailEditShow={EmailEditShow}
                        setEmailEditShow={setEmailEditShow}
                    />
                </div>

            </div>
        </>
    )
}

export default Item2Group2