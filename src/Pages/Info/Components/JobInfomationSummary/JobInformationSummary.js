import React, { useEffect, useState } from 'react'
import './JobInformationSummary.css';
import Item1Group1 from './Items/Item1/Group1/Item1Group1';
import Item1Group2 from './Items/Item1/Group2/Item1Group2';
import Item2Group1 from './Items/Item2/Group1/Item2Group1';
import Item2Group2 from './Items/Item2/Group2/Item2Group2';
import Item3Group1 from './Items/Item3/Group1/Item3Group1';
import Item3Group2 from './Items/Item3/Group2/Item3Group2';
import Item4Group1 from './Items/Item4/Group1/Item4Group1';
import Item4Group2 from './Items/Item4/Group2/Item4Group2';
import Item5Group1 from './Items/Item5/Group1/Item5Group1';
import Item5Group2 from './Items/Item5/Group2/Item5Group2';
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import Flash2_SemanticSuccess_Icon from '../../../../PublicAssets/Arrow_Icons/Flash2_SemanticSuccess_Icon.svg';
import Edit_Blue_Icon from './../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';
import Info_Blue_Icon from '../../../../PublicAssets/Info_Icons/Info_Blue_Icon.svg';

//Context
import { useAppContext } from '../../../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../../PersonalFunction/Toast';

function JobInformationSummary() {

    //Context
    const { UserRole, ProfessionalProfile, Item5Group1Title, Item5Group2Title,
        Item4Group1Title, Item4Group2Title, Item3Group1Title, Item3Group2Title,
        UserRoleName, ProfileDataIsEmpty
    } = useAppContext();

    const [RoleNames, setRoleNames] = useState('');

    useEffect(() => {
        if (UserRole === 1) {
            setRoleNames('مهندسین')
        }
        else if (UserRole === 2) {
            setRoleNames('پیمانکاران')
        }
        else if (UserRole === 3) {
            setRoleNames('سوپلایر ها')
        }
        else if (UserRole === 4) {
            setRoleNames('کارفرمایان')
        }
        else {

        }
    }, [UserRole, setRoleNames])

    const navigate = useNavigate();

    const { showToastButton } = useToast();

    const handleJobInformation = () => {
        if (UserRole) {
            if (ProfileDataIsEmpty) {
                showToastButton('برای دسترسی اطلاعات حساب کاربری خود را ثبت نمایید ')
            }else {
                navigate('/Professional-profile')
            }
        } 
        else {
            showToastButton('برای دسترسی لطفا نقش خود را تعیین نمایید')
        }
    }

    return (
        <>
            {ProfessionalProfile ?
                (
                    <div className='jobinfo B_Style'>

                        <BackToProfileButton text='اطلاعات شغلی' padding='16px 32px 0 0 ' />

                        <div className='table'>

                            <div className='table-items'>

                                <div className='usesummery-item-1'>
                                    <Item1Group1 />
                                </div>

                                <div className='usesummery-item-2' >
                                    <Item1Group2 />
                                </div>

                            </div>

                            <div className='table-items'>

                                <div className='usesummery-item-1'>
                                    <Item2Group1 />
                                </div>

                                <div className='usesummery-item-2'>
                                    <Item2Group2 />
                                </div>

                            </div>

                            <div className='table-items' style={{ display: Item3Group1Title === null && Item3Group2Title === null ? 'none' : '' }}>

                                <div className='usesummery-item-1'>
                                    <Item3Group1 />
                                </div>

                                <div className='usesummery-item-2'>
                                    <Item3Group2 />
                                </div>

                            </div>

                            <div className='table-items' style={{ display: Item4Group1Title === null && Item4Group2Title === null ? 'none' : '' }}>

                                <div className='usesummery-item-1'>
                                    <Item4Group1 />
                                </div>

                                <div className='usesummery-item-2'>
                                    <Item4Group2 />
                                </div>

                            </div>

                            <div className='table-items' style={{ display: Item5Group1Title === null && Item5Group2Title === null ? 'none' : '' }}>

                                <div className='usesummery-item-1'>
                                    <Item5Group1 />
                                </div>

                                <div className='usesummery-item-2' >
                                    <Item5Group2 />
                                </div>

                            </div>

                        </div>

                        <div className='jobinfo-button'>

                            {/* ویرایش اطلاعات شغلی */}
                            <div>
                                <img src={Edit_Blue_Icon} alt='img' />
                                <button
                                    style={{ color: 'var(--Text-EZ-01)', padding: '0 8px 0 0 ' }}
                                    type="button"
                                    onClick={handleJobInformation} > ویرایش اطلاعات شغلی </button>
                            </div>

                            {/* اطلاعات بیشتر و تغییر نقش */}
                            <div>
                                <img src={Info_Blue_Icon} alt="img" />
                                <button
                                    style={{ color: 'var(--SemanticColor-Info)', padding: '0 8px 0 0 ' }}
                                    type="button"
                                    onClick={() => navigate('/editrole')} > اطلاعات بیشتر و تغییر نقش </button>
                            </div>

                        </div>


                    </div>
                )
                :
                (
                    // Profile Data Dosent Exist
                    <div className='jobinfo B_Style'>

                        <BackToProfileButton text='اطلاعات شغلی' padding='16px 32px 0 32px ' />

                        {UserRole ?
                            <div className='jobinfo-description'>
                                {UserRoleName} گرامی، در این بخش خواهید توانست اطلاعات شغلی خود
                                ( اطلاعات شغلی ویژه {RoleNames} )
                                را تکمیل نمایید و یا در صورت نیاز به تغییر نقش اقدام فرمایید.
                            </div>
                            :
                            <div className='jobinfo-description'>
                                کاربر گرامی برای دسترسی به اطلاعات شغلی لطفا نقش خود را انتخاب نمایید
                            </div>

                        }

                        <div className='jobinfo-button'>


                            <div onClick={handleJobInformation}>
                                <button type="button"> ثبت اطلاعات شغلی </button>
                                <img src={Flash2_SemanticSuccess_Icon} style={{ paddingRight: '8px', width: '8px' }} alt="img" />
                            </div>

                            <div>
                                <img src={Info_Blue_Icon} style={{ paddingLeft: '8px' }} alt="img" />

                                {UserRole ?
                                    <button style={{ color: 'var(--SemanticColor-Info)' }} type="button" onClick={() => navigate('/editrole')}>
                                        اطلاعات بیشتر و تغییر نقش
                                    </button>
                                    :
                                    <button style={{ color: 'var(--SemanticColor-Info)' }} type="button" onClick={() => navigate('/setrole')}>
                                        اطلاعات بیشتر و انتخاب نقش
                                    </button>
                                }
                            </div>

                        </div>

                    </div>
                )
            }

        </>
    )
}

export default JobInformationSummary