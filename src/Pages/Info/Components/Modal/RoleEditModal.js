import React, { useEffect, useRef, useState } from 'react'
import './ModalStyle.css';
import '../../../Roles/Page/Roles.css'
import ReadMore from '../../../Roles/Assets/ReadMore/ReadMore.svg';
import engineer from '../../../Home/Assets/Engineer.svg';
import contractor from '../../../Home/Assets/Contractor.svg';
import supplier from '../../../Home/Assets/Supplier.svg';
import employer from '../../../Home/Assets/Employeer.svg';
import { useAppContext } from '../../../../Context/AppContext';
import StartSection from '../../../Auth/Components/StartSection';
import ConfirmRequestModal from './ConfirmRequestModal';
import { useToast } from '../../../../PersonalFunction/Toast';
import MainButton from '../../../../Buttons/Components/MainButton';
import { useNavigate } from 'react-router-dom';
import LoadingDots from '../../../Auth/Components/LoadingDots';
import MainButton2 from '../../../../Buttons/Components/MainButton2';


function RoleEditModal() {

    //Context
    const { UserRole, UserRoleName, TypeIds } = useAppContext();

    //Show Confirm Request Modal
    const [ConfirmRequest, setConfirmRequest] = useState(false)

    //Type Id
    const [TypeId, setTypeId] = useState(null);

    // const items = [1, 2, 3, 4];
    const characterImg = [engineer, contractor, supplier, employer]
    const [IsImgLoaded, setIsImgLoaded] = useState(false)
    const [CountImgLoaded, setCountImgLoaded] = useState(0)
    const handleImageLoad = () => {
        setCountImgLoaded((prevNumber) => {
            const TotalNumer = prevNumber + 1
            if (TotalNumer === characterImg.length) {
                setIsImgLoaded(true);
            }
            return TotalNumer
        });
    }

    const [role, setRole] = useState(UserRole ? UserRole : 1);

    const handleContinue = async (value) => {
        setConfirmRequest(true)
        setTypeId(value)
    }

    const ModalRef = useRef();

    const { showToastButton, showToastRole, reset } = useToast();

    useEffect(() => {
        if (IsImgLoaded) {
            showToastButton(`نقش فعلی شما ${UserRoleName} است`);
        }
    }, [IsImgLoaded])

    const navigate = useNavigate();

    const handleReadMoreClick = (value) => {
        navigate(`/role-${value}`)
        reset()
    }

    //When Component Unmount Reset Toast Notification
    useEffect(() => {
        return () => {
            reset()
        }
    }, [])


    return (
        <>
            <div ref={ModalRef}>

                <StartSection
                    closeicon={true}
                    onCloseIconClick={() => [navigate(-1), reset()]}
                    EnableLogoRightSide={true}
                />

                {!IsImgLoaded &&
                    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LoadingDots Color='var(--Primary-EZ)' />
                    </div>
                }


                <div className='registerPage-container' style={{ display: !IsImgLoaded && 'none' }}>

                    <div className='registerPage-text'>
                        <p>در ادامه خواهید توانست نقش خود را تغییر دهید </p>
                    </div>

                    <div className='role-items-container'>
                        {TypeIds && TypeIds.map((item) => {

                            return (
                                <div className='role-items-group' key={item.id}>
                                    {/* Read More */}
                                    <div className='tooltip'>
                                        <span className="tooltiptext"> درباره نقش {item.name} </span>

                                        <div className='role-item-readmore'>
                                            <img src={ReadMore} alt='img' onClick={() => handleReadMoreClick(item.slug)} />
                                        </div>

                                    </div>

                                    {/* Main Img */}
                                    <div>
                                        <label htmlFor={item.slug}>
                                            <div className='role-item-img' style={{ pointerEvents: UserRole === item.id ? 'none' : 'auto' }}  >

                                                <img
                                                    src={characterImg[item.id - 1]}
                                                    alt='img'
                                                    style={
                                                        UserRole === item.id ?
                                                            { filter: 'blur(3px)', opacity: 1, transform: 'scale(1)', transition: '.2s ease-in-out' }
                                                            : role === item.id ?
                                                                { filter: 'none', opacity: 1, transform: 'scale(1)', transition: '.2s ease-in-out' }
                                                                : null
                                                    }
                                                    onLoad={handleImageLoad}
                                                />
                                                <div className='current-role' style={{ display: UserRole !== item.id ? 'none' : '' }}>
                                                    <span className='current-role2'>
                                                        نقش فعلی شما
                                                    </span>
                                                </div>


                                            </div>
                                        </label>
                                    </div>

                                    {/* CheckBox And Text */}
                                    <div className='role-item-checkbox'>
                                        <span> {item.name} </span>
                                        <input
                                            type="checkbox"
                                            id={item.slug}
                                            name={item.slug}
                                            onChange={() => [UserRole !== item.id ? setRole(item.id) : '', UserRole !== item.id ? showToastRole(` نقش شما به  ${item.name} تغییر پیدا خواهد کرد `) : '']}
                                            checked={role === item.id}
                                            style={{ display: UserRole === item.id ? 'none' : '' }}
                                        />
                                    </div>

                                    {/* Continue Button */}
                                    <div className='role-item-button'
                                        style={role === item.id && UserRole !== item.id ? {} : { visibility: 'hidden' }}
                                    >
                                        <span onClick={() => handleContinue(item.id)}>
                                            {/* <MainButton ButtonMode={2} ImgMode='Continue' Text='تغییر نقش' ButtonSize='sm' />*/}
                                            <MainButton2 ButtonMode='Blue' Text='تغییر نقش' ImgMode={'Continue'} />
                                        </span>
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>

                <ConfirmRequestModal
                    text={'از تغییر نقش خود مطمئن هستید؟ '}
                    desc={'در صورت تایید اطلاعات نقش فعلی شما پاک خواهد شد'}

                    ConfirmRequest={ConfirmRequest}
                    setConfirmRequest={setConfirmRequest}

                    Requested={'RoleEdit'}
                    TypeId={TypeId}

                    acceptText='تایید'
                    RejectText='انصراف'
                />

            </div>
        </>
    )
}

export default RoleEditModal