import React, { useState } from 'react'
import '../../ItemStyle/ItemStyle.css';
import Edit_Blue_Icon from '../../../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import Add_Icon from '../../../../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import PasswordEditModal from './../../../../Modal/PasswordEditModal';
import { useAppContext } from '../../../../../../../Context/AppContext';


function Item3Group1(props) {
    const [PasswordEditShow, setPasswordEditShow] = useState(false)

    const { Password } = useAppContext();

    const handlePasswordEdit = () => {
        setPasswordEditShow(true)
    }

    return (
        <>
            {/* Item3 Group1 */}
            <div className='item-container'>

                <div className='item-rightside'>
                    <div> رمز عبور</div>
                    <div style={Password === false ? { display: 'none' } : {}}> **** </div>
                </div>

                <div className='item-leftside'>

                    <div onClick={handlePasswordEdit}>
                        <img src={Password === false ? Add_Icon : Edit_Blue_Icon} alt='img' />
                    </div>

                    <PasswordEditModal
                        PasswordEditShow={PasswordEditShow}
                        setPasswordEditShow={setPasswordEditShow}
                    />

                </div>
            </div>
        </>
    )
}

export default Item3Group1