import React, { useContext, useEffect, useRef, useState } from 'react'
import './EmployerProfile.css';
import RecordJobInformation from '../ProfileHeader/RecordJobInformation';
import ProjectDoneAndInProgress from '../Inputs/ProjectDoneAndInProgress';
import ProvincesofActivity from '../Inputs/ProvincesofActivity';
import SaveButton from '../../../../Buttons/Components/SaveButton';
import EmployerImg from '../../Assets/EmployerImg.svg';
import { useAppContext } from '../../../../Context/AppContext';
import CheckDataEquality2 from '../../../../PersonalFunction/CheckDataEquality2';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import { EmptyStringToNull } from '../../../../PersonalFunction/ConvertFormat';
import ApiBaseUrl from '../../../../Api/axios';
import { ResponsiveContext } from '../../../../Context/ResponsiveContext';
import { useNavigate } from 'react-router-dom';
import StartSection from '../../../Auth/Components/StartSection';
import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';
import { motion } from 'framer-motion';
import { ImgVarinets, ReadMoreImgVarinets } from '../../../../PersonalFunction/AnimationVarinets';


function EmployerProfile() {

  const [Error, setError] = useState(false);

  const { StopShowProfileImg } = useContext(ResponsiveContext);

  //Context
  const {
    Project_Done_Context,
    setProject_Done_Context,

    Project_In_Progress_Context,
    setProject_In_Progress_Context,

    MultiProvinceId,
    setMultiProvinceId,

    ProfessionalProfile
  } = useAppContext();

  const Inputs = [
    // 1
    Project_Done_Context,
    // 2
    Project_In_Progress_Context,
    // 3
    MultiProvinceId
  ]

  const contexts = [
    { ref: useRef(Project_Done_Context), setter: setProject_Done_Context },
    { ref: useRef(Project_In_Progress_Context), setter: setProject_In_Progress_Context },
    { ref: useRef(MultiProvinceId), setter: setMultiProvinceId }
  ]

  const ReturnData = () => {
    contexts.forEach(context => {
      context.setter(context.ref.current);
    })
  }

  const inputArray = Inputs.map((item, index) => {
    return { id: index + 1, value: item }
  })

  // Remove Inputs that Doesnt Have Any Values Or They Are Equal To = ''
  const filteredArray = inputArray.filter((item) => item.value !== '' && item.value.length !== 0)
  const IsDataSamed = CheckDataEquality(Inputs.filter((item) => item !== MultiProvinceId))
  const IsDataSamed2 = CheckDataEquality2(MultiProvinceId)
  const [SimilarData, resetSimilarData] = useSimilarData(IsDataSamed, IsDataSamed2);

  const handleonCloseIconClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    return () => {
      ReturnData();
    }
  }, [])

  //Enable Button
  const [EmployerEnableButton, setEmployerEnableButton] = useState(false);
  useEffect(() => {
    if ([3].every((id) => filteredArray.some((item) => item.id === id)) && (!IsDataSamed2 || !IsDataSamed)) {
      setEmployerEnableButton(true)
    } else {
      setEmployerEnableButton(false)
    }
  }, [filteredArray, IsDataSamed2, IsDataSamed, setEmployerEnableButton])

  const [IsLoading, setIsLoading] = useState('');
  //Submit 
  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      if (EmployerEnableButton) {
        const SendRequest = await ApiBaseUrl.post('api/profile/employer', {
          project_done: EmptyStringToNull(Project_Done_Context),
          project_in_progress: EmptyStringToNull(Project_In_Progress_Context),
          activity_provinces: JSON.stringify(MultiProvinceId),
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

      <div className='eng-prof-container'>

        <div style={{ display: StopShowProfileImg ? 'none' : '', cursor: 'pointer', marginLeft: '96px', overflowX: 'hidden' }}>
          <motion.img
            src={EmployerImg}
            alt='img'
            style={{ maxWidth: '100%' }}
            onClick={() => navigate('/role-employer')}
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

            <ProjectDoneAndInProgress padding={'0 0 24px 0'} />

            <ProvincesofActivity />

            <div style={{ marginTop: '48px' }} onClick={handleSubmit}>
              <SaveButton
                text='ذخیره اطلاعات'
                disabled={EmployerEnableButton ? false : true}
                BackgroundColor={EmployerEnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                Color={EmployerEnableButton ? '' : 'var(--Disable-Button-Text01)'}
                Cursor={!EmployerEnableButton && 'default'}
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
          <img src={EmployerImg} alt='img' style={{ maxWidth: '100%' }} />
        </div>


      </div>

    </>
  )
}

export default EmployerProfile