import React, { useEffect, useState } from 'react'
import './PbMenuItem1.css';
//Avatar Contractor
import ContractorProfButtonMenu from './../../../../Assets/Avatar/Contractor/ContractorProfButtonMenu.svg';

//Avatar Engineer
import EngineerProfButtonMenu from './../../../../Assets/Avatar/Engineer/EngineerProfButtonMenu.svg';

//Avatar Supplier
import SupplierProfButtonMenu from './../../../../Assets/Avatar/Supplier/SupplierProfButtonMenu.svg';

//Avatar Employer
import EmployerProfButtonMenu from './../../../../Assets/Avatar/Employer/EmployerProfButtonMenu.svg';

//None Character 
import NoneCharacter from './../../../../Assets/Avatar/NoneCharacter/NoneCharacter.svg';

import Flash2_TextEZ02_Icon from '../../../../../../PublicAssets/Arrow_Icons/Flash2_TextEZ02_Icon.svg';

import { useNavigate } from 'react-router-dom';

//Context
import { useAppContext } from '../../../../../../Context/AppContext';

function PbMenuItem1() {

    //Context
    const { UserRole } = useAppContext();
    const { Name } = useAppContext();

    const [Img, setImg] = useState('');
    const [Text, setText] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (UserRole === 1) {
            setImg(EngineerProfButtonMenu)
            setText('مهــــــــــــندس ')
        }
        else if (UserRole === 2) {
            setImg(ContractorProfButtonMenu)
            setText('پیــــــــــــمانکار')
        }
        else if (UserRole === 3) {
            setImg(SupplierProfButtonMenu)
            setText('سوپــــــــــــلایر')
        }
        else if (UserRole === 4) {
            setImg(EmployerProfButtonMenu)
            setText('کارفــــــــــــرما')
        }
        else {
            setImg(NoneCharacter)
            setText('بدون نقش')
        }
    })

    const handleImgStyle = () => {
        if (UserRole === 1) {
            return {
                width: 'auto'
            }
        }
        else if (UserRole === 2) {
            return {
                width: 'auto'
            }
        }
        else if (UserRole === 3) {
            return {
                width: '65px'
            }
        }
        else if (UserRole === 4) {
            return {
                width: '65px'
            }
        }
    }

    const HandleOnClick = () => {
        if (UserRole) {
            navigate('/profile')
        }else {
            navigate('/setrole')
        }
    }

    return (
        <>
            <div onClick={HandleOnClick}>
                <div className='profilebutton-menu-item1'>

                    <div className='profilebutton-menu-item1-rightside'>

                        <div className='profilebutton-menu-item1-rightside-img'>
                            <img style={handleImgStyle()} src={Img} alt='img' />
                        </div>

                        <div className='profilebutton-menu-item1-rightside-text'>
                            {
                                Name ?
                                    <div> {Name} عزیز </div>
                                    :

                                    <div> </div>
                            }
                            <div> {Text} </div>
                        </div>

                    </div>

                    <div className='profilebutton-menu-item1-arrow'>
                        <img src={Flash2_TextEZ02_Icon} alt='img' />
                    </div>

                </div>
            </div>


        </>
    )
}

export default PbMenuItem1