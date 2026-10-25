import React, { useContext } from 'react'
import './UserMenuPart1.css';
import { useNavigate } from 'react-router-dom';

//Avatar Contractor
import ContractorProfIcon from './../../Assets/Avatar/Contractor/ContractorProfIcon.svg';

//Avatar Engineer
import EngineerProfIcon from './../../Assets/Avatar/Engineer/EngineerProfIcon.svg';

//Avatar Supplier
import SupplierProfIcon from './../../Assets/Avatar/Supplier/SupplierProfIcon.svg';

//Avatar Karfrma
import EmployerProfIcon from './../../Assets/Avatar/Employer/EmployerProfIcon.svg';

import NoneCharacter from './../../Assets/Avatar/NoneCharacter/NoneCharacter.svg';

import Edit_Blue_Icon from './../../../../PublicAssets/Edit_Icons/Edit_Blue_Icon.svg';

//Context
import { useAppContext } from '../../../../Context/AppContext';
import { ResponsiveContext } from '../../../../Context/ResponsiveContext';

function UserMenuPart1() {

    const { Under1280 } = useContext(ResponsiveContext);

    //Context
    const { UserRole } = useAppContext();
    const { NameAndLastName } = useAppContext();
    const { PhoneNumber } = useAppContext();

    const navigate = useNavigate();
    const handleEdit_Blue_IconClick = () => {
        navigate('/profile/job-info')
    }

    return (
        <>
            <div className='part1'>

                {UserRole === 1 &&
                    <div className='part1-img' style={{ paddingRight: Under1280 ? '24px' : '16px' }}>
                        <img src={EngineerProfIcon} alt="img" />
                    </div>
                }

                {UserRole === 2 &&
                    <div className='part1-img' style={{ paddingRight: Under1280 ? '24px' : '18px' }}>
                        <img src={ContractorProfIcon} alt="img" />
                    </div>
                }

                {UserRole === 3 &&
                    <div className='part1-img' style={{ paddingRight: Under1280 ? '24px' : '18px' }}>
                        <img src={SupplierProfIcon} alt="img" />
                    </div>
                }

                {UserRole === 4 &&
                    <div className='part1-img' style={{ paddingRight: Under1280 ? '24px' : '18px' }}>
                        <img src={EmployerProfIcon} alt="img" />
                    </div>
                }

                {UserRole === null &&
                    <div className='part1-img' style={{ paddingRight: Under1280 ? '24px' : '18px' }}>
                        <img src={NoneCharacter} alt="img" />
                    </div>
                }

                <div className='part1-name-phone'>

                    <div>
                        {PhoneNumber === NameAndLastName
                            ?
                            <span style={{ letterSpacing: 'var(--letterSpacing)' }}>{PhoneNumber}</span>
                            :
                            NameAndLastName
                        }
                    </div>

                    {UserRole === 1 &&
                        <div> مهــــــــــــندس  </div>
                    }
                    {UserRole === 2 &&
                        <div> پیــــــــــــمانکار </div>
                    }
                    {UserRole === 3 &&
                        <div> سوپــــــــــــلایر </div>
                    }
                    {UserRole === 4 &&
                        <div> کارفــــــــــــرما </div>
                    }
                    {UserRole === null &&
                        <div> بدون نقش </div>
                    }

                    <div>
                        {PhoneNumber === NameAndLastName ? '' : <span style={{ letterSpacing: 'var(--letterSpacing)' }}>{PhoneNumber}</span>}
                    </div>

                </div>

                <div className='part1-edit'>
                    <img src={Edit_Blue_Icon} alt="img" onClick={handleEdit_Blue_IconClick} style={{ cursor: 'pointer' }} />
                </div>

            </div>
        </>
    )
}

export default UserMenuPart1