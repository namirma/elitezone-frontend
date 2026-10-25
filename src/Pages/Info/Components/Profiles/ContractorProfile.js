import React, { useContext, useEffect, useRef, useState } from 'react'
import './ContractorProfile.css';
import Engineer_Member from '../Inputs/Engineer_Member';
import License_Number from '../Inputs/License_Number';
import DesginAndSupervision from '../Inputs/DesginAndSupervision';
import Trusted_Contractor from '../Inputs/Trusted_Contractor';
import Company_Name from '../Inputs/Company_Name';
import ProvincesofActivity from '../Inputs/ProvincesofActivity';
import Activity_History from '../Inputs/Activity_History';
import ProjectDoneAndInProgress from '../Inputs/ProjectDoneAndInProgress';
import SaveButton from '../../../../Buttons/Components/SaveButton';
import RecordJobInformation from '../ProfileHeader/RecordJobInformation';
import ContractorImg from '../../Assets/ContractorImg.svg';
import { useAppContext } from '../../../../Context/AppContext';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import ApiBaseUrl from '../../../../Api/axios';
import CheckDataEquality2 from '../../../../PersonalFunction/CheckDataEquality2';
import { EmptyStringToNull } from '../../../../PersonalFunction/ConvertFormat';
import { ResponsiveContext } from '../../../../Context/ResponsiveContext';
import { useNavigate } from 'react-router-dom';
import StartSection from '../../../Auth/Components/StartSection';
import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';
import { motion } from 'framer-motion';
import { ImgVarinets, ReadMoreImgVarinets } from '../../../../PersonalFunction/AnimationVarinets';


function ContractorProfile(props) {

    const [Error, setError] = useState(false);

    const { StopShowProfileImg } = useContext(ResponsiveContext);

    //Context
    const {
        Engineer_Member_Context,
        setEngineer_Member_Context,

        License_Number_Context,
        setLicense_Number_Context,

        Design_Base_Context,
        setDesign_Base_Context,

        Supervision_Base_Context,
        setSupervision_Base_Context,

        ErrorInDesignAndSupervision,

        Trusted_Contractor_Context,
        setTrusted_Contractor_Context,

        Company_Name_Context,
        setCompany_Name_Context,

        Disable_Company_Name_Context,
        setDisable_Company_Name_Context,

        MultiProvinceId,
        setMultiProvinceId,

        Activity_History_Context,
        setActivity_History_Context,

        Project_Done_Context,
        setProject_Done_Context,

        Project_In_Progress_Context,
        setProject_In_Progress_Context,

        ProfessionalProfile

    } = useAppContext();

    const contexts = [
        { ref: useRef(Engineer_Member_Context), setter: setEngineer_Member_Context },
        { ref: useRef(License_Number_Context), setter: setLicense_Number_Context },
        { ref: useRef(Design_Base_Context), setter: setDesign_Base_Context },
        { ref: useRef(Supervision_Base_Context), setter: setSupervision_Base_Context },
        { ref: useRef(Trusted_Contractor_Context), setter: setTrusted_Contractor_Context },
        { ref: useRef(Company_Name_Context), setter: setCompany_Name_Context },
        { ref: useRef(Disable_Company_Name_Context), setter: setDisable_Company_Name_Context },
        { ref: useRef(MultiProvinceId), setter: setMultiProvinceId },
        { ref: useRef(Activity_History_Context), setter: setActivity_History_Context },
        { ref: useRef(Project_Done_Context), setter: setProject_Done_Context },
        { ref: useRef(Project_In_Progress_Context), setter: setProject_In_Progress_Context },
    ]

    const ReturnData = () => {
        contexts.forEach((context) => {
            context.setter(context.ref.current);
        })
    }

    useEffect(() => {
        return () => {
            ReturnData();
        }
    }, [])

    const Inputs = [
        // 1
        License_Number_Context,
        // 2
        Design_Base_Context,
        // 3
        Supervision_Base_Context,
        // 4
        Trusted_Contractor_Context,
        // 5
        Company_Name_Context,
        // 6
        MultiProvinceId,
        // 7
        Activity_History_Context,
        // 8
        Project_Done_Context,
        // 9
        Project_In_Progress_Context,
        //10
        Disable_Company_Name_Context
    ]

    const IsDataSamed = CheckDataEquality(Inputs.filter((item) => item !== MultiProvinceId));
    const IsDataSamed2 = CheckDataEquality2(MultiProvinceId)
    const [SimilarData, resetSimilarData] = useSimilarData(IsDataSamed, IsDataSamed2)

    // Function to handle the close icon click
    const handleonCloseIconClick = () => {
        navigate(-1);
    }

    //Enable Button
    const [ContractorEnableButton, setContractorEnableButton] = useState(false);
    useEffect(() => {
        // Helper function to check if all provided fields are non-empty and not null
        const areRequiredFieldsFilled = (fields) => fields.every(field => field !== '' && field !== null && (Array.isArray(field) ? field.length > 0 : true));

        if (Engineer_Member_Context === 1) {
            // Check if all necessary fields are filled for Engineer context
            if (areRequiredFieldsFilled([License_Number_Context, Design_Base_Context, Supervision_Base_Context, MultiProvinceId, Activity_History_Context])) {
                if (!ErrorInDesignAndSupervision && (!IsDataSamed || !IsDataSamed2)) {
                    setContractorEnableButton(true);
                } else {

                }
            } else {
                setContractorEnableButton(false);
            }
        } else {
            // Check if all necessary fields are filled when not in Engineer context
            if (areRequiredFieldsFilled([MultiProvinceId, Activity_History_Context])) {
                if (!IsDataSamed || !IsDataSamed2) {
                    setContractorEnableButton(true);
                } else {
                    setContractorEnableButton(false);
                }
            } else {
                setContractorEnableButton(false);
            }
        }
    }, [
        Engineer_Member_Context,
        License_Number_Context,
        Design_Base_Context,
        Supervision_Base_Context,
        Trusted_Contractor_Context,
        Company_Name_Context,
        MultiProvinceId,
        Activity_History_Context,
        Project_Done_Context,
        Project_In_Progress_Context,
        IsDataSamed,
        IsDataSamed2,
        ErrorInDesignAndSupervision
    ]);

    // If Engineer_Member_Context Switch Change To 0 Empty Its Value
    useEffect(() => {
        if (Engineer_Member_Context === 0) {
            setLicense_Number_Context('')
            setDesign_Base_Context('')
            setSupervision_Base_Context('')
            setTrusted_Contractor_Context(0)
        }
    }, [Engineer_Member_Context])

    const [IsLoading, setIsLoading] = useState('');
    //Submit
    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            if (ContractorEnableButton) {
                const SendRequest = await ApiBaseUrl.post('api/profile/contractor', {
                    engineer_member: Engineer_Member_Context,
                    license_number: EmptyStringToNull(License_Number_Context),
                    design_base: EmptyStringToNull(Design_Base_Context),
                    supervision_base: EmptyStringToNull(Supervision_Base_Context),
                    trusted_contractor: Trusted_Contractor_Context,
                    company_name: EmptyStringToNull(Company_Name_Context),
                    not_related: Disable_Company_Name_Context,
                    activity_provinces: JSON.stringify(MultiProvinceId),
                    activity_history: Activity_History_Context,
                    project_done: EmptyStringToNull(Project_Done_Context),
                    project_in_progress: EmptyStringToNull(Project_In_Progress_Context),
                }, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('Token'),
                        Accept: 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                    }
                })

                if (SendRequest.status === 200) {
                    window.location.href = '/profile/job-info'
                    setIsLoading(false)
                    setError(false)
                } else {
                    setIsLoading(false)
                    setError(true)
                }
            }
        } catch (err) {
            setIsLoading(false)
            setError(true)
        }
    }

    const navigate = useNavigate();

    const [IsImgLoaded, setImgLoaded] = useState(false);

    return (
        <>
            <StartSection
                closeicon={true}
                onCloseIconClick={handleonCloseIconClick}
                EnableLogoRightSide={true}
            />

            <div className='pey-prof-container'>

                <div style={{ display: StopShowProfileImg ? 'none' : '', cursor: 'pointer', marginLeft: '96px', overflowX: 'hidden' }}>
                    <motion.img
                        src={ContractorImg}
                        alt='img'
                        style={{ maxWidth: '100%' }}
                        onClick={() => navigate('/role-contractor')}
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
                    <div className='pey-prof C_Style'>

                        <RecordJobInformation />

                        <Engineer_Member />

                        <div style={Engineer_Member_Context ? {} : { display: 'none' }}>
                            <License_Number />

                            <DesginAndSupervision />

                            <Trusted_Contractor />
                        </div>

                        <Company_Name />

                        <ProvincesofActivity />

                        <Activity_History margin={'24px 0 0 0'} />

                        <ProjectDoneAndInProgress />

                        <div style={{ marginTop: '48px' }} onClick={handleSubmit}>
                            <SaveButton text='ذخیره اطلاعات'
                                disabled={ContractorEnableButton ? false : true}
                                BackgroundColor={ContractorEnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                                Color={ContractorEnableButton ? '' : 'var(--Disable-Button-Text01)'}
                                Cursor={ContractorEnableButton ? '' : 'default'}
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
                    <img src={ContractorImg} alt='img' style={{ maxWidth: '100%' }} />
                </div>


            </div>

        </>
    )
}

export default ContractorProfile