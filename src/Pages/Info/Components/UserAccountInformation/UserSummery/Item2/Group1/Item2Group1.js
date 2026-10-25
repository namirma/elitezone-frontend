import React, {useState} from 'react'
import '../../ItemStyle/ItemStyle.css';
import Edit_Blue_Icon from '../../../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import BadgeConfirm from './../../../../Badges/BadgeConfirme';
import PhoneNumberEditModal from './../../../../Modal/PhoneNumberEditModal';

//Context
import { useAppContext } from '../../../../../../../Context/AppContext';


function Item2Group1(props) {

    //Context
    const {PhoneNumber} = useAppContext();

    const [PhoneNumberEditShow, setPhoneNumberEditShow] = useState(false)

    const handlePhoneNumberEdit = () => {
        setPhoneNumberEditShow(true)
    }

    return (
        <>
            {/* Item2 Group1 */}
            <div className='item-container'>

                <div className='item-rightside'>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <BadgeConfirm text={'تایید شده'} BackgroundColor={'var(--SemanticColor-Success)'}/>
                        شماره موبایل
                    </div>
                    <div style={{letterSpacing: 'var(--letterSpacing)'}}> {PhoneNumber} </div>
                </div>

                <div className='item-leftside'>
                    <div onClick={handlePhoneNumberEdit} > <img src={Edit_Blue_Icon} alt="img" /> </div>
                    <PhoneNumberEditModal PhoneNumberEditShow={PhoneNumberEditShow} setPhoneNumberEditShow={setPhoneNumberEditShow} />
                </div>
            </div>
        </>
    )
}

export default Item2Group1