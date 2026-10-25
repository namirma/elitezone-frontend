import React, { useState, useEffect } from 'react';
import ApiBaseUrl from '../../../Api/axios';
import './Roles.css';
import ReadMore from '../../Roles/Assets/ReadMore/ReadMore.svg';
import engineer from '../../Home/Assets/Engineer.svg';
import contractor from '../../Home/Assets/Contractor.svg';
import supplier from '../../Home/Assets/Supplier.svg';
import employer from '../../Home/Assets/Employeer.svg';
import { Navigate, useNavigate } from 'react-router-dom';

//Context
import { useAppContext } from '../../../Context/AppContext';
import StartSection from '../../Auth/Components/StartSection';
import { useToast } from '../../../PersonalFunction/Toast';
import MainButton from '../../../Buttons/Components/MainButton';
import toast from 'react-hot-toast';
import LoadingDots from '../../Auth/Components/LoadingDots';
import MainButton2 from '../../../Buttons/Components/MainButton2';

function Roles() {

    //Context
    const { setUserLoggedIn, UserRole, TypeIds, setTypeIds, UserHasTypeId } = useAppContext();

    const { showToastRole, reset } = useToast();

    const [IsLoading, setIsLoading] = useState(false);
    const Token = localStorage.getItem('Token')

    //Load Type Ids From Data Base

    // useEffect(() => {
    //     if (TypeIds.length === 0)
    //         ApiBaseUrl.get('api/user-types', {
    //             headers: {
    //                 Authorization: 'Bearer ' + Token,
    //                 Accept: 'application/json',
    //                 "Access-Control-Allow-Origin": "*",
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //             .then((res) => {
    //                 setTypeIds(res.data.data)
    //             })
    // }, [])


    //Check User Has Type Id Value Or Type Id is Null
    // const [FirstLogin, setFirstLogin] = useState(false)
    // useEffect(() => {
    //     ApiBaseUrl.get('api/profile', {
    //         headers: {
    //             Authorization: 'Bearer ' + Token,
    //             Accept: 'application/json',
    //             "Access-Control-Allow-Origin": "*",
    //             'Content-Type': 'application/json',
    //         }
    //     }).then((res) => {
    //         res.data.data.type_id === null ?
    //             // ApiBaseUrl.post('api/profile/type', {
    //             //     type_id: 13
    //             // }, {
    //             //     headers: {
    //             //         Authorization: 'Bearer ' + Token,
    //             //         Accept: 'application/json',
    //             //         "Access-Control-Allow-Origin": "*",
    //             //         'Content-Type': 'application/json',
    //             //     }
    //             // })
    //             setFirstLogin(true)
    //             :
    //             setFirstLogin(false)
    //     })
    // }, [FirstLogin])


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
    const navigate = useNavigate();

    const handleContinue = async (value) => {
        try {
            setIsLoading(true)
            const sendUserTypes = await ApiBaseUrl.post('api/profile/type', {
                type_id: value
            }, {
                headers: {
                    Authorization: 'Bearer ' + Token,
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })
            if (sendUserTypes.status === 200) {
                setIsLoading(false)
                if (UserHasTypeId) {
                    window.location.href = '/'
                } else {
                    window.location.href = '/welcome'
                }
                toast.dismiss();
            }

        } catch (error) {
            setIsLoading(false)
        }
    }

    const handleReadMoreClick = (value) => {
        navigate(`/role-${value}`)
    }

    //When Component Unmount Reset Toast Notification
    useEffect(() => {
        return () => {
            reset();
        }
    }, [])

    return (
        <>

            {!UserHasTypeId ?
                <>
                    <StartSection
                        Backward={false}
                    />

                    <div className='registerPage-container'>

                        <div className='registerPage-text'>
                            <p> در ادامه نقش خود را در صنعت ساختمان مشخص کنید </p>
                        </div>

                        {!IsImgLoaded &&
                            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <LoadingDots Color='var(--Primary-EZ)' />
                            </div>
                        }

                        <div className='role-items-container' style={{ display: !IsImgLoaded && 'none' }}>
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
                                                <div className='role-item-img'>
                                                    <img
                                                        src={characterImg[item.id - 1]}
                                                        alt='img'
                                                        style={role === item.id ? { filter: 'none', opacity: '1', transform: 'scale(1)', transition: '.2s ease-in-out' } : {}}
                                                        onLoad={handleImageLoad}
                                                    />
                                                </div>
                                            </label>

                                        </div>

                                        {/* CheckBox And Text */}
                                        <div className='role-item-checkbox'>
                                            <span> {item.name} </span>
                                            <input type="checkbox"
                                                id={item.slug}
                                                name={item.slug}
                                                onChange={() => [setRole(item.id), showToastRole(` اکنون نقش شما ${item.name} است `)]}
                                                checked={role === item.id}
                                            />
                                        </div>

                                        {/* Continue Button */}
                                        <div className='role-item-button'
                                            style={role === item.id ? {} : { visibility: 'hidden' }}
                                        >
                                            <span onClick={() => handleContinue(item.id)}>
                                                {/* <MainButton ButtonMode={2} ImgMode='Continue' Text='ادامه' ButtonSize='sm' /> */}
                                                <MainButton2 ButtonMode='Blue' Text='ادامه' ImgMode={'Continue'} />
                                            </span>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </>
                :
                <Navigate to='/editrole' />
            }
        </>
    )
}

export default Roles