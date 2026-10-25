import React, { useRef, useState } from 'react'
import '../../ItemStyle/ItemStyle.css';
import Add_Icon from '../../../../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import Edit_Blue_Icon from '../../../../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import BirthdayEditModal from './../../../../Modal/BirthdayEditModal';
import { useAppContext } from '../../../../../../../Context/AppContext';

function Item3Group2(props) {

    //Context
    const { Birthday } = useAppContext();

    const [BirthdayEditShow, setBirthdayEditShow] = useState(false)

    const handleBirthdayEdit = () => {
        setBirthdayEditShow(true)
    }

    const PrevBirthday = useRef(Birthday)

    return (
        <>
            {/* Item3 Group2 */}
            <div className='item-container'>

                <div className='item-rightside'>
                    <div> تاریخ تولد </div>
                    <div style={(PrevBirthday.current === '' || PrevBirthday.current === null) ? { display: 'none' } : {}}>
                        <span style={{ letterSpacing: 'var(--letterSpacing)' }}>
                            {PrevBirthday.current}
                        </span>
                    </div>
                </div>

                <div className='item-leftside'>
                    
                    <div onClick={handleBirthdayEdit}>
                        <img src={(PrevBirthday.current === '' || PrevBirthday.current === null) ? Add_Icon : Edit_Blue_Icon} alt="img" />
                    </div>

                    <BirthdayEditModal
                        BirthdayEditShow={BirthdayEditShow}
                        setBirthdayEditShow={setBirthdayEditShow}
                    />

                </div>
            </div>
        </>
    )
}

export default Item3Group2