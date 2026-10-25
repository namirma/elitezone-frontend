import React, { useContext, useEffect, useRef, useState } from 'react'
import './SupplierProfile.css';
import ProvincesofActivity from '../Inputs/ProvincesofActivity';
import Brands from '../Inputs/Brands';
import Standards from '../Inputs/Standards';
import WebsiteAddress from '../Inputs/Website';
import Production_Amount from '../Inputs/Production_Amount';
import RecordJobInformation from '../ProfileHeader/RecordJobInformation';
import Activity_Field from '../Inputs/Activity_Field';
import Activity_Description from '../Inputs/Activity_Description';
import SaveButton from '../../../../Buttons/Components/SaveButton';
import Activity_History from '../Inputs/Activity_History';
import SupplierImg from '../../Assets/SupplierImg.svg';
import { useAppContext } from '../../../../Context/AppContext';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import CheckDataEquality2 from '../../../../PersonalFunction/CheckDataEquality2';
import ApiBaseUrl from '../../../../Api/axios';
import { ResponsiveContext } from '../../../../Context/ResponsiveContext';
import Company_Name from '../Inputs/Company_Name';
import { useNavigate } from 'react-router-dom';
import StartSection from '../../../Auth/Components/StartSection';
import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';
import { motion } from 'framer-motion';
import { ImgVarinets, ReadMoreImgVarinets } from '../../../../PersonalFunction/AnimationVarinets';

function SupplierProfile() {

  const [Error, setError] = useState(false);

  const { StopShowProfileImg } = useContext(ResponsiveContext);

  //Context
  const {
    Activity_Field_Menu_Context,
    setActivity_Field_Menu_Context,

    Activity_Description_Button,
    setActivity_Description_Button,

    Activity_Description_Context,
    setActivity_Description_Context,

    MultiProvinceId,
    setMultiProvinceId,

    Disable_Brands,
    setDisable_Brands,

    Brands_Context,
    setBrands_Context,

    Activity_History_Context,
    setActivity_History_Context,

    Production_Amount_Context,
    setProduction_Amount_Context,

    Disable_Standards,
    setDisable_Standards,

    Strandards_Context,
    setStrandards_Context,

    Disable_Website_Context,
    setDisable_Website_Context,

    Website_Context,
    setWebsite_Context,

    Company_Name_Context,
    setCompany_Name_Context,

    ProfessionalProfile
  } = useAppContext();

  const contexts = [
    { ref: useRef(Activity_Field_Menu_Context), setter: setActivity_Field_Menu_Context },
    { ref: useRef(Activity_Description_Button), setter: setActivity_Description_Button },
    { ref: useRef(Activity_Description_Context), setter: setActivity_Description_Context },
    { ref: useRef(MultiProvinceId), setter: setMultiProvinceId },
    { ref: useRef(Disable_Brands), setter: setDisable_Brands },
    { ref: useRef(Brands_Context), setter: setBrands_Context },
    { ref: useRef(Activity_History_Context), setter: setActivity_History_Context },
    { ref: useRef(Production_Amount_Context), setter: setProduction_Amount_Context },
    { ref: useRef(Disable_Standards), setter: setDisable_Standards },
    { ref: useRef(Strandards_Context), setter: setStrandards_Context },
    { ref: useRef(Disable_Website_Context), setter: setDisable_Website_Context },
    { ref: useRef(Website_Context), setter: setWebsite_Context },
    { ref: useRef(Company_Name_Context), setter: setCompany_Name_Context },
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
    Company_Name_Context,
    // 1
    Activity_Field_Menu_Context,
    // 2
    Activity_Description_Button,
    // 3
    Activity_Description_Context,
    // 4
    MultiProvinceId,
    // 5
    Brands_Context,
    // 6
    Activity_History_Context,
    // 7
    Production_Amount_Context,
    // 8
    Strandards_Context,
    // 9
    Website_Context,
    // 10
    Disable_Brands,
    // 11
    Disable_Standards,
    // 12
    Disable_Website_Context,
  ]

  const IsDataSamed = CheckDataEquality(Inputs.filter((item) => item !== MultiProvinceId));
  const IsDataSamed2 = CheckDataEquality2(MultiProvinceId)
  const [SimilarData, resetSimilarData] = useSimilarData(IsDataSamed, IsDataSamed2);

  const navigate = useNavigate();
  const handleonCloseIconClick = () => {
    navigate(-1);
  }

  //Enable Button
  const [SupplierEnableButton, setSupplierEnableButton] = useState(false);
  useEffect(() => {
    const areRequiredFieldsFilled = () => {
      if ((Company_Name_Context && Company_Name_Context.trim() !== '') &&
        (Activity_Field_Menu_Context && Activity_Field_Menu_Context.length > 0) &&
        (MultiProvinceId && MultiProvinceId.length > 0) &&
        (Activity_History_Context && Activity_History_Context !== null)
      ) {
        return (
          true
        )
      } else {
        return (
          false
        )
      }
    };

    if (areRequiredFieldsFilled() && (!IsDataSamed || !IsDataSamed2)) {
      setSupplierEnableButton(true);
    } else {
      setSupplierEnableButton(false);
    }

  }, [
    Company_Name_Context,
    Activity_Field_Menu_Context,
    MultiProvinceId,
    Activity_History_Context,
    IsDataSamed,
    IsDataSamed2,
    setSupplierEnableButton
  ]);

  const [IsLoading, setIsLoading] = useState('');
  //Submit
  const handleSubmit = async () => {
    try {
      if (SupplierEnableButton) {
        setIsLoading(true)
        const SendRequest = await ApiBaseUrl.post('api/profile/supplier', {
          company: Company_Name_Context,
          activity_category_id: Activity_Field_Menu_Context,
          activity_description: Activity_Description_Context,
          brands: JSON.stringify(Brands_Context),
          brands_not_related: Disable_Brands,
          activity_history: Activity_History_Context,
          activity_provinces: JSON.stringify(MultiProvinceId),
          production_amount: Production_Amount_Context,
          standards: JSON.stringify(Strandards_Context),
          standards_not_related: Disable_Standards,
          website: Website_Context,
          website_not_related: Disable_Website_Context
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

  const [IsImgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      <StartSection
        closeicon={true}
        onCloseIconClick={handleonCloseIconClick}
        EnableLogoRightSide={true}
      />

      <div className='sup-prof-container'>

        <div style={{ display: StopShowProfileImg ? 'none' : '', cursor: 'pointer', marginLeft: '96px', overflowX: 'hidden' }}>
          <motion.img
            src={SupplierImg}
            alt='img'
            style={{ maxWidth: '100%' }}
            onClick={() => navigate('/role-supplier')}
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
          <div className='sup-prof C_Style'>
            <RecordJobInformation />

            <Company_Name
              text={'نام شرکت'}
              DisableCheckBox={true}
              EnableStar={true}
              padding={'0 0 32px 0'}
            />

            <Activity_Field />

            <Activity_Description
              margin={'8px 0 0 0 '}
            />

            <ProvincesofActivity
              margin={'24px 0 0 0 '}
            />

            <Brands
              margin={'16px 0 0 0'} />

            <Activity_History
              margin={'16px 0 0 0'}
            />

            <Production_Amount
              margin={'16px 0 0 0'}
            />

            <Standards
              margin={'24px 0 0 0'}
            />

            <WebsiteAddress
              margin={'32px 0 48px 0'}
            />

            <div onClick={handleSubmit}>
              <SaveButton
                text='ذخیره'
                BackgroundColor={SupplierEnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                Color={SupplierEnableButton ? '' : 'var(--Disable-Button-Text01)'}
                Cursor={SupplierEnableButton ? '' : 'default'}
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
          <img src={SupplierImg} alt='img' style={{ maxWidth: '100%' }} />
        </div>

      </div>

    </>
  )
}

export default SupplierProfile