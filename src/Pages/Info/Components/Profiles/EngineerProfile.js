import React, { useContext, useEffect, useRef, useState } from 'react'
import './EngineerProfile.css';
import Fields_Of_Study from '../Inputs/Fields_Of_Study';
import Engineer_Member from '../Inputs/Engineer_Member';
import I_Have_License_Number from '../Inputs/I_Have_License_Number';
import Student from '../Inputs/Student';
import University_Name from '../Inputs/University_Name';
import Member_Number from '../Inputs/Member_Number';
import DesginAndSupervision from '../Inputs/DesginAndSupervision';
import SaveButton from '../../../../Buttons/Components/SaveButton';
import RecordJobInformation from '../ProfileHeader/RecordJobInformation';
import License_Number from '../Inputs/License_Number';
import EngineerImg from '../../Assets/EngineerImg.svg';
import { useAppContext } from '../../../../Context/AppContext';
import ApiBaseUrl from '../../../../Api/axios';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import { ResponsiveContext } from '../../../../Context/ResponsiveContext';
import { useNavigate } from 'react-router-dom';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';
import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import StartSection from '../../../Auth/Components/StartSection';
import { motion } from 'framer-motion';
import { ImgVarinets, ReadMoreImgVarinets } from '../../../../PersonalFunction/AnimationVarinets';
import Provinces from '../Inputs/Provinces';
import Cities from '../Inputs/Cities';


function EngineerProfile() {

    const navigate = useNavigate();

    const [Error, setError] = useState(false);

    const { StopShowProfileImg } = useContext(ResponsiveContext);

    //Context
    const {
        Engineer_Member_Context,
        setEngineer_Member_Context,

        Student_Context,
        setStudent_Context,

        I_Have_License_Number_Context,
        setI_Have_License_Number_Context,

        University_Name_Context,
        setUniversity_Name_Context,

        Fields_Of_Study_Context,
        setFields_Of_Study_Context,

        Member_Number_Context,
        setMember_Number_Context,

        License_Number_Context,
        setLicense_Number_Context,

        Design_Base_Context,
        setDesign_Base_Context,

        Supervision_Base_Context,
        setSupervision_Base_Context,

        ErrorInDesignAndSupervision,

        ProfessionalProfile,

        Activity_Province_Id,
        setActivity_Province_Id,
        Activity_Province_Name,
        setActivity_Province_Name,
        Activity_City_Id,
        setActivity_City_Id,
        Activity_City_Name,
        setActivity_City_Name,
        DisableActivityCity,
        setDisableActivityCity
    } = useAppContext();

    const contexts = [
        { ref: useRef(Engineer_Member_Context), setter: setEngineer_Member_Context },
        { ref: useRef(Student_Context), setter: setStudent_Context },
        { ref: useRef(I_Have_License_Number_Context), setter: setI_Have_License_Number_Context },
        { ref: useRef(University_Name_Context), setter: setUniversity_Name_Context },
        { ref: useRef(Fields_Of_Study_Context), setter: setFields_Of_Study_Context },
        { ref: useRef(Member_Number_Context), setter: setMember_Number_Context },
        { ref: useRef(License_Number_Context), setter: setLicense_Number_Context },
        { ref: useRef(Design_Base_Context), setter: setDesign_Base_Context },
        { ref: useRef(Supervision_Base_Context), setter: setSupervision_Base_Context },
    ];

    const ReturnData = () => {
        contexts.forEach(context => {
            context.setter(context.ref.current);
        });
    }

    // run only when the component unmounts
    useEffect(() => {
        return () => {
            ReturnData();
        };
    }, []);

    const Inputs = [
        //1
        Engineer_Member_Context,
        //2
        Student_Context,
        //3
        I_Have_License_Number_Context,
        //4
        University_Name_Context,
        //5
        Fields_Of_Study_Context,
        //6
        Member_Number_Context,
        //7
        License_Number_Context,
        //8
        Design_Base_Context,
        //9
        Supervision_Base_Context,
        // //10
        // Activity_Province_Id,
        // //11
        // Activity_City_Id
    ]

    // console.log('Activity_Province_Id : ' + Activity_Province_Id)
    // console.log('Activity_City_Id : ' + Activity_City_Id)

    const IsSameData = CheckDataEquality(Inputs)
    const [SimilarData] = useSimilarData(IsSameData)

    // Function to handle the close icon click
    const handleonCloseIconClick = () => {
        navigate(-1);
    };

    // Enable Button 
    const [EngineerEnableButton, setEngineerEnableButton] = useState(false);
    //     if (Engineer_Member_Context === 1 && Student_Context === 1 && I_Have_License_Number_Context === 1) {
    //         if ([1, 2, 3, 4, 5, 6].every((id) => filteredArray.some((item) => item.id === id))) {
    //             if (ErrorInDesignAndSupervision) {
    //                 setEngineerEnableButton(false)
    //             } else {
    //                 if (IsSameData) {
    //                     setEngineerEnableButton(false)
    //                 } else {
    //                     setEngineerEnableButton(true)
    //                 }
    //             }
    //         } else {
    //             setEngineerEnableButton(false)
    //         }
    //     } else if (Engineer_Member_Context === 1 && Student_Context === 1) {
    //         if ([1, 2, 3].every((id) => filteredArray.some((item) => item.id === id))) {
    //             if (IsSameData) {
    //                 setEngineerEnableButton(false)
    //             } else {
    //                 setEngineerEnableButton(true)
    //             }
    //         } else {
    //             setEngineerEnableButton(false)
    //         }
    //     } else if (Engineer_Member_Context === 1 && I_Have_License_Number_Context === 1) {
    //         if ([2, 3, 4, 5, 6].every((id) => filteredArray.some((item) => item.id === id))) {
    //             if (ErrorInDesignAndSupervision) {
    //                 setEngineerEnableButton(false)
    //             } else {
    //                 if (IsSameData) {
    //                     setEngineerEnableButton(false)
    //                 } else {
    //                     setEngineerEnableButton(true)
    //                 }
    //             }
    //         } else {
    //             setEngineerEnableButton(false)
    //         }
    //     } else if (Engineer_Member_Context === 1) {
    //         if ([2, 3].every((id) => filteredArray.some((item) => item.id === id))) {
    //             if (IsSameData) {
    //                 setEngineerEnableButton(false)
    //             } else {
    //                 setEngineerEnableButton(true)
    //             }
    //         } else {
    //             setEngineerEnableButton(false)
    //         }
    //     } 
    //     else if (Student_Context === 1) {
    //         if ([1].every((id) => filteredArray.some((item) => item.id === id))) {
    //             if (IsSameData) {
    //                 setEngineerEnableButton(false)
    //             } else {
    //                 setEngineerEnableButton(true)
    //             }
    //         } else {
    //             setEngineerEnableButton(false)
    //         }
    //     } else {
    //         setEngineerEnableButton(false)
    //     }
    // }, [filteredArray, Engineer_Member_Context, Student_Context, I_Have_License_Number_Context, IsSameData, ErrorInDesignAndSupervision]);

    useEffect(() => {
        const areRequiredFieldsFilled = (fields) => fields.every(field => field !== '' && field !== null && (Array.isArray(field) ? field.length > 0 : true));

        if (Engineer_Member_Context === 1 && Student_Context === 1 && I_Have_License_Number_Context === 1) {
            if (areRequiredFieldsFilled([Fields_Of_Study_Context, Member_Number_Context, University_Name_Context, License_Number_Context, Design_Base_Context, Supervision_Base_Context,
                //  Activity_Province_Id, Activity_City_Id
                ])) {
                if (ErrorInDesignAndSupervision || IsSameData) {
                    setEngineerEnableButton(false);
                } else {
                    setEngineerEnableButton(true);
                }
            } else {
                setEngineerEnableButton(false);
            }
        }
        else if (Engineer_Member_Context === 1 && Student_Context === 1) {
            if (areRequiredFieldsFilled([Fields_Of_Study_Context, Member_Number_Context, University_Name_Context])) {
                if (IsSameData) {
                    setEngineerEnableButton(false);
                } else {
                    setEngineerEnableButton(true);
                }
            } else {
                setEngineerEnableButton(false);
            }
        }
        else if (Engineer_Member_Context === 1 && I_Have_License_Number_Context === 1) {
            if (areRequiredFieldsFilled([Fields_Of_Study_Context, Member_Number_Context, License_Number_Context, Design_Base_Context, Supervision_Base_Context,
                //  Activity_Province_Id, Activity_City_Id
                ])) {
                if (ErrorInDesignAndSupervision || IsSameData) {
                    setEngineerEnableButton(false);
                } else {
                    setEngineerEnableButton(true);
                }
            } else {
                setEngineerEnableButton(false);
            }
        }
        else if (Engineer_Member_Context === 1) {
            if (areRequiredFieldsFilled([Fields_Of_Study_Context, Member_Number_Context])) {
                if (IsSameData) {
                    setEngineerEnableButton(false);
                } else {
                    setEngineerEnableButton(true);
                }
            } else {
                setEngineerEnableButton(false);
            }
        }
        else if (Student_Context === 1) {
            if (areRequiredFieldsFilled([University_Name_Context])) {
                if (IsSameData) {
                    setEngineerEnableButton(false);
                } else {
                    setEngineerEnableButton(true);
                }
            } else {
                setEngineerEnableButton(false);
            }
        }
        else {
            setEngineerEnableButton(false);
        }
    }, [
        Engineer_Member_Context,
        Student_Context,
        I_Have_License_Number_Context,
        Fields_Of_Study_Context,
        Member_Number_Context,
        University_Name_Context,
        License_Number_Context,
        Design_Base_Context,
        Supervision_Base_Context,
        // Activity_Province_Id,
        // Activity_City_Id,
        IsSameData,
        ErrorInDesignAndSupervision
    ]);



    useEffect(() => {
        if (Student_Context === 0) {
            setUniversity_Name_Context('')
        }
    }, [Student_Context, setUniversity_Name_Context])

    // If Engineer_Member_Context Switch Change To 0 Empty Its Value
    useEffect(() => {
        if (Engineer_Member_Context === 0) {
            setFields_Of_Study_Context('')
            setMember_Number_Context('')
            setI_Have_License_Number_Context(0)
        }
    }, [Engineer_Member_Context, setFields_Of_Study_Context, setMember_Number_Context, setI_Have_License_Number_Context])

    // If I_Have_License_Number_Context Switch Change To 0 Empty Its Value
    useEffect(() => {
        if (I_Have_License_Number_Context === 0) {
            setLicense_Number_Context('')
            setDesign_Base_Context('')
            setSupervision_Base_Context('')
            setActivity_Province_Id('')
            setActivity_Province_Name('')
            setActivity_City_Id('')
            setActivity_City_Name('')
        }
    }, [I_Have_License_Number_Context, setLicense_Number_Context, setDesign_Base_Context, setSupervision_Base_Context])

    const [IsLoading, setIsLoading] = useState('');
    //Submit
    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            if (EngineerEnableButton) {
                const sendRequest = await ApiBaseUrl.post('api/profile/engineer', {
                    engineer_member: Engineer_Member_Context,
                    student: Student_Context,
                    university_name: University_Name_Context,
                    fields_of_study: Fields_Of_Study_Context,
                    member_number: Member_Number_Context,
                    license_number: License_Number_Context,
                    design_base: Design_Base_Context,
                    supervision_base: Supervision_Base_Context,
                    // activity_province_id: Activity_Province_Id,
                    // activity_city_id: Activity_City_Id
                }, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('Token'),
                        Accept: 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                    }
                })

                if (sendRequest.status === 200) {
                    window.location.href = '/profile/job-info'
                    setIsLoading(false)
                    setError(false)
                }
                else {
                    setIsLoading(false)
                    setError(true)
                }
            }
        } catch (err) {
            setIsLoading(false)
            setError(true)
        }
    }

    const [IsImgLoaded, setImgLoaded] = useState(false);

    return (
        <>
            <StartSection
                closeicon={true}
                onCloseIconClick={handleonCloseIconClick}
                EnableLogoRightSide={true}
            />

            <div className='eng-prof-container'>

                <div style={{ display: StopShowProfileImg ? 'none' : '', cursor: 'pointer', marginLeft: '96px', overflowX: 'hidden' }}>
                    <motion.img
                        src={EngineerImg}
                        alt='img'
                        style={{ maxWidth: '100%' }}
                        onClick={() => navigate('/role-engineer')}
                        variants={ImgVarinets}
                        initial="begin"
                        animate={IsImgLoaded ? "visible" : "begin"}
                        onLoad={() => setImgLoaded(true)}
                    />
                </div>

                <motion.div
                    className='ProfessioanlProfile-wrapper'
                    variants={ReadMoreImgVarinets}
                    initial="begin"
                    animate="visial"
                >
                    <div className='eng-prof C_Style'>

                        <RecordJobInformation />

                        <Engineer_Member />

                        <Student />

                        <div style={Student_Context ? {} : { display: 'none' }}>
                            <University_Name margin={'24px 0 0 0 '} />
                        </div>

                        <div style={Engineer_Member_Context ? {} : { display: 'none' }}>

                            <Fields_Of_Study />

                            <Member_Number />

                            <I_Have_License_Number />

                            <div style={I_Have_License_Number_Context ? {} : { display: 'none' }}>
                                <License_Number />

                                <DesginAndSupervision />

                                {/* <Provinces
                                    margin='24px 0 0 0'
                                    Title='استان محل فعالیت'
                                    ProvinceId={Activity_Province_Id}
                                    setProvinceId={setActivity_Province_Id}
                                    ProvinceName={Activity_Province_Name}
                                    setProvinceName={setActivity_Province_Name}
                                    setDisableCity={setDisableActivityCity}
                                />

                                <Cities
                                    margin='24px 0 0 0'
                                    Title='شهر محل فعالیت'
                                    CityName={Activity_City_Name}
                                    setCityName={setActivity_City_Name}
                                    CityId={Activity_City_Id}
                                    setCityId={setActivity_City_Id}
                                    ProvinceId={Activity_Province_Id}
                                    DisableCity={DisableActivityCity}
                                /> */}

                            </div>

                        </div>

                        <div style={{ marginTop: '48px' }} onClick={handleSubmit}>
                            <SaveButton
                                text='ذخیره اطلاعات'
                                disabled={EngineerEnableButton ? false : true}
                                BackgroundColor={EngineerEnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                                Color={EngineerEnableButton ? '' : 'var(--Disable-Button-Text01)'}
                                Cursor={EngineerEnableButton ? '' : 'default'}
                                IsLoading={IsLoading}
                                Error={Error}
                            />
                        </div>

                        {ProfessionalProfile &&
                            <SimilarDataWarning SimilarData={SimilarData} />
                        }

                    </div>
                </motion.div>


                <div style={{ display: StopShowProfileImg ? 'none' : '', visibility: 'hidden', marginRight: '96px' }}>
                    <img src={EngineerImg} alt='img' style={{ maxWidth: '100%' }} />
                </div>

            </div>

        </>
    )
}
export default EngineerProfile