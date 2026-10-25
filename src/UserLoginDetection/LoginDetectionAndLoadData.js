import React, { useEffect, useState } from 'react'
import ApiBaseUrl from '../Api/axios'
// import LoadingDots from '../Pages/Auth/Components/LoadingDots'
// import EZBlueSquare from './../Pages/Home/Assets/EliteZoneBlueSquare.svg'

//Engineer Avatar
import EngineerProfButton from '../Pages/Info/Assets/Avatar/Engineer/EngineerProfButton.svg';
import EngineerProfButtonFocus from '../Pages/Info/Assets/Avatar/Engineer/EngineerProfButtonFocus.svg';

//Contractor Avatar
import ContractorProfButton from '../Pages/Info/Assets/Avatar/Contractor/ContractorProfButton.svg';
import ContractorProfButtonFocus from '../Pages/Info/Assets/Avatar/Contractor/ContractorProfButtonFocus.svg';

//Supplier Avatar
import SupplierProfButton from '../Pages/Info/Assets/Avatar/Supplier/SupplierProfButton.svg';
import SupplierProfButtonFocus from '../Pages/Info/Assets/Avatar/Supplier/SupplierProfButtonFocus.svg';

//Employer Avatar
import EmployerProfButton from '../Pages/Info/Assets/Avatar/Employer/EmployerProfButton.svg';
import EmployerProfButtonFocus from '../Pages/Info/Assets/Avatar/Employer/EmployerProfButtonFocus.svg';

//None Character
import NoneCharacte from '../Pages/Info/Assets/Avatar/NoneCharacter/NoneCharacter.svg';

import './LoginDetectionAndLoadData.css'
//Context
import { useAppContext } from '../Context/AppContext';
import { NullToDashString, NullToEmptyString } from '../PersonalFunction/ConvertFormat';
import axios from 'axios';
import Lottie from 'lottie-react'
import LoadingLogo from '../Pages/Home/Assets/Lottie/LoadingLogo/LoadingLogo.json';

function LoginDetectionAndLoadData({ children }) {

    // Context
    const {
        UserLoggedIn, setUserLoggedIn,
        setNameAndLastName,
        setUserRole,
        setUserRoleName,
        setPhoneNumber,
        TypeIds,
        setTypeIds,
        setUnReadNotif,
        setReadNotif,

        setUserHasTypeId,

        //Check if profile is empty show Total Genral Info Modal To User Instead Other Modal
        ProfileDataIsEmpty,
        setProfileDataIsEmpty,
        //Checking whether the user is real or legal to decide Format of sending data
        setEntity,
        //Provinces List And City List
        ProvincesList,
        setProvincesList,
        CitiesList,
        setCitiesList,
        //Real
        setName,
        setFamily,
        setNationalCode,
        setEmail,
        setEmailVerfied,
        setBirthday,
        setYear,
        setMonth,
        setDay,
        ProvinceName,
        setProvinceName,
        ProvinceId,
        setProvinceId,
        CityName,
        setCityName,
        CityId,
        setCityId,
        setPassword,
        //Legal
        setCompany,
        setEconomicCode,
        setNationalId,
        setRegisterId,
        setLandlineNumber,

        //Specialized Profile
        setProfessionalProfile,
        setEngineer_Member_Context,
        setStudent_Context,
        setUniversity_Name_Context,
        setFields_Of_Study_Context,
        setMember_Number_Context,
        setI_Have_License_Number_Context,
        setLicense_Number_Context,
        setDesign_Base_Context,
        setSupervision_Base_Context,
        setTrusted_Contractor_Context,
        setCompany_Name_Context,
        setDisable_Company_Name_Context,
        setMultiProvinceId,
        setActivity_History_Context,
        setProject_Done_Context,
        Activity_Field_Menu_List,
        setActivity_Field_Menu_List,
        setProject_In_Progress_Context,
        setActivity_Field_Menu_Context,
        setActivity_Description_Button,
        setActivity_Description_Context,
        setDisable_Brands,
        setBrands_Context,
        setProduction_Amount_Context,
        setWebsite_Context,
        setDisable_Website_Context,
        setStrandards_Context,
        setDisable_Standards,
        setActivity_Province_Id,
        setActivity_City_Id,

        //Badges
        Badge, setBadge,

        //Profile Button Imgs
        ProfileButtonImg, setProfileButtonImg,
        ProfileButtonImgFocus, setProfileButtonImgFocus,

        //Items
        setItem1Group1Title,
        setItem1Group1Value,
        setItem1Group2Title,
        setItem1Group2Value,
        setItem2Group1Title,
        setItem2Group1Value,
        setItem2Group2Title,
        setItem2Group2Value,
        setItem3Group1Title,
        setItem3Group1Value,
        setItem3Group2Title,
        setItem3Group2Value,
        setItem4Group1Title,
        setItem4Group1Value,
        setItem4Group2Title,
        setItem4Group2Value,
        setItem5Group1Title,
        setItem5Group1Value,
        setItem5Group2Title,
        setItem5Group2Value,
        setItem6Group1Title,
        setItem6Group1Value,
        setItem6Group2Title,
        setItem6Group2Value,

    } = useAppContext();

    const [IsLoading, setIsLoading] = useState(true)

    const Token = localStorage.getItem('Token') || ''

    useEffect(() => {
        if (Token && Token.length > 0) {
            SendReqForData();
        } else {
            setIsLoading(false);
        }
    }, [UserLoggedIn]);

    const SendReqForData = async () => {
        try {
            const SendRequest = await ApiBaseUrl.get('api/profile', {
                headers: {
                    Authorization: 'Bearer ' + Token,
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })

            if (SendRequest.status === 200) {

                if (SendRequest.data.data.type_id === null) {
                    setUserHasTypeId(false)
                } else {
                    setUserHasTypeId(true)
                }

                setUserLoggedIn(true)

                LoadBasicInformation(SendRequest);

                LoadGenralInfo(SendRequest);

                LoadProfessionalInfo(SendRequest);

                LoadBirthdayInfo(SendRequest);

                LoadEmailInfo(SendRequest)

                CheckUserPassword(SendRequest);

                LoadUserBadge(SendRequest)

                LoadSupplierActivityField(SendRequest)

            }

            else {
                setUserLoggedIn(false)
                setIsLoading(false);
            }

        }
        catch (err) {
            setIsLoading(false)
            setUserLoggedIn(false)
        }

    }

    const handleUserRoleName = (value) => {
        switch (value) {
            case 1: return 'مهندس';
            case 2: return 'پیمانکار';
            case 3: return 'سوپلایر';
            case 4: return 'کارفرما';
            default: return 'بدون نقش';
        }
    };


    const LoadBasicInformation = async (SendRequest) => {

        setPhoneNumber(SendRequest.data.data.mobile);
        setUserRole(SendRequest.data.data.type_id);

        const role = SendRequest.data.data.type_id;
        let profileImage;
        let profileImageFocus;
        switch (role) {
            case 1:
                profileImage = EngineerProfButton;
                profileImageFocus = EngineerProfButtonFocus;
                break;
            case 2:
                profileImage = ContractorProfButton;
                profileImageFocus = ContractorProfButtonFocus;
                break;
            case 3:
                profileImage = SupplierProfButton;
                profileImageFocus = SupplierProfButtonFocus;
                break;
            case 4:
                profileImage = EmployerProfButton;
                profileImageFocus = EmployerProfButtonFocus;
                break;
            default:
                profileImage = NoneCharacte;
                profileImageFocus = NoneCharacte;
        }

        setProfileButtonImg(profileImage);
        setProfileButtonImgFocus(profileImageFocus);

        setUserRoleName(handleUserRoleName(role));
    }

    const handleActivityHistory = (ActivtyHistory) => {
        if (ActivtyHistory === 1) {
            return 'کمتر از ۱ سال'
        }
        else if (ActivtyHistory === 2) {
            return 'بین ۱ تا ۵ سال'
        }
        else if (ActivtyHistory === 3) {
            return 'بین ۵ تا ۱۰ سال'
        }
        else if (ActivtyHistory === 4) {
            return 'بین ۱۰ تا ۱۵ سال'
        }
        else if (ActivtyHistory === 5) {
            return ' بین ۱۵ تا ۲۰ سال'
        }
        else if (ActivtyHistory === 6) {
            return 'بیش از ۲۰ سال '
        }
        else {
            return null
        }
    }

    // const [ProvinceGenralInfoId, setProvinceGenralInfoId] = useState(null);
    // const [CityGenralInfoId, setCityGenralInfoId] = useState(null);

    const LoadGenralInfo = async (SendRequest) => {
        if ((SendRequest.data.data.profile !== null)) {
            if ((SendRequest.data.data.profile.name === null)) {
                setProfileDataIsEmpty(true)
            }
            else {
                setName(SendRequest.data.data.profile.name)
                setFamily(SendRequest.data.data.profile.family)
                setNationalCode(SendRequest.data.data.profile.national_code)
                setProvinceId(SendRequest.data.data.profile.province_id)
                setCityId(SendRequest.data.data.profile.city_id)

                setNameAndLastName((SendRequest.data.data.profile.name || SendRequest.data.data.profile.family) === null ? SendRequest.data.data.mobile : (SendRequest.data.data.profile.name + ' ' + SendRequest.data.data.profile.family))

                if (SendRequest.data.data.profile.entity === 'legal') {
                    setEntity('legal')
                    setCompany(SendRequest.data.data.profile.company)
                    setEconomicCode(SendRequest.data.data.profile.economic_code)
                    setNationalId(SendRequest.data.data.profile.national_id)
                    setRegisterId(SendRequest.data.data.profile.register_id)
                    setLandlineNumber(SendRequest.data.data.profile.phone)
                }
                else {
                    setEntity('real')
                }

                // setProvinceGenralInfoId(SendRequest.data.data.profile.province_id)
                // setCityGenralInfoId(SendRequest.data.data.profile.city_id)
            }
        } else {
            setProfileDataIsEmpty(true)
        }
    }

    const LoadProfessionalInfo = (SendRequest) => {

        const handleProvinceRequest = async (provinceIds) => {
            const SendRequest2 = await ApiBaseUrl.get('api/province', {
                headers: {
                    Authorization: 'Bearer ' + Token,
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            });

            if (SendRequest2.status === 200 && provinceIds.length >= 1) {
                const data = await SendRequest2.data.data;
                return data.filter(obj => provinceIds.includes(obj.id)).map(item => item.Name + ' ').join(' , ');
            }
            return '';
        };

        const handleActivityCategories = async (activityCategory) => {
            // Ensure activityCategory is an array and map its items to their names
            return (activityCategory || []).map(category => category.name).join(' , ');
        };

        const setTitlesAndValues = (titles) => {
            titles.forEach((item, index) => {
                const setItemTitle = eval(`setItem${Math.floor(index / 2) + 1}Group${(index % 2) + 1}Title`);
                const setItemValue = eval(`setItem${Math.floor(index / 2) + 1}Group${(index % 2) + 1}Value`);
                setItemTitle(item[0]);
                setItemValue(item[1]);
            });
        };

        const handleEngineerData = (engineerData) => {
            setProfessionalProfile(true);
            setEngineer_Member_Context(engineerData.engineer_member);
            setStudent_Context(engineerData.student);
            setUniversity_Name_Context(NullToEmptyString(engineerData.university_name));
            setFields_Of_Study_Context(NullToEmptyString(engineerData.fields_of_study));
            setMember_Number_Context(NullToEmptyString(engineerData.member_number));
            setI_Have_License_Number_Context((engineerData.license_number === '' || engineerData.license_number === null) ? 0 : 1);
            setLicense_Number_Context(NullToEmptyString(engineerData.license_number));
            setDesign_Base_Context(NullToEmptyString(engineerData.design_base));
            setSupervision_Base_Context(NullToEmptyString(engineerData.supervision_base));
            // setActivity_Province_Id(NullToEmptyString(engineerData.activity_province_id));
            // setActivity_City_Id(NullToEmptyString(engineerData.activity_city_id));

            const titles = [
                ['عضو نظام مهندسی', engineerData.engineer_member === 0 ? 'نیستم' : 'هستم'],
                ['دانشجو', engineerData.student === 0 ? 'نیستم' : 'هستم'],
                ['نام دانشگاه', NullToDashString(engineerData.university_name)],
                ['رشته تحصیلی', NullToDashString(engineerData.fields_of_study)],
                ['شماره عضویت', NullToDashString(engineerData.member_number)],
                ['پروانه اشتغال مهندسی', (engineerData.license_number === '' || engineerData.license_number === null) ? 'ندارم' : 'دارم'],
                ['شماره پروانه اشتغال', NullToDashString(engineerData.license_number)],
                ['پایه طراحی', NullToDashString(engineerData.design_base)],
                ['پایه نظارت', NullToDashString(engineerData.supervision_base)],
                // ['استان محل فعالیت', NullToDashString(engineerData.activity_province_id)],
                // ['شهر محل فعالیت', NullToDashString(engineerData.activity_city_id)],
            ];

            setTitlesAndValues(titles);
        };

        const handleContractorData = async (contractorData) => {
            setProfessionalProfile(true);
            const MultiChoiseProvince = JSON.parse(contractorData.activity_provinces || '[]');
            setEngineer_Member_Context(contractorData.engineer_member);
            setLicense_Number_Context(NullToEmptyString(contractorData.license_number));
            setDesign_Base_Context(NullToEmptyString(contractorData.design_base));
            setSupervision_Base_Context(NullToEmptyString(contractorData.supervision_base));
            setTrusted_Contractor_Context(contractorData.trusted_contractor);
            setCompany_Name_Context(NullToEmptyString(contractorData.company_name));
            setMultiProvinceId(MultiChoiseProvince);
            setDisable_Company_Name_Context(contractorData.not_related);
            setActivity_History_Context(NullToEmptyString(contractorData.activity_history));
            setProject_Done_Context(NullToEmptyString(contractorData.project_done));
            setProject_In_Progress_Context(NullToEmptyString(JSON.stringify(contractorData.project_in_progress)));

            const provinceNames = await handleProvinceRequest(MultiChoiseProvince);

            const titles = [
                ['عضو نظام مهندسی', contractorData.engineer_member === 0 ? 'نیستم' : 'هستم'],
                ['شماره پروانه اشتغال', NullToDashString(contractorData.license_number)],
                ['پایه طراحی', NullToDashString(contractorData.design_base)],
                ['پایه نظارت', NullToDashString(contractorData.supervision_base)],
                ['پیمانکار با صلاحیت', contractorData.trusted_contractor === 0 ? 'نیستم' : 'هستم'],
                ['نام شرکت یا موسسه پیمانکاری', NullToDashString(contractorData.company_name)],
                ['استان(های) محل فعالیت', provinceNames],
                ['سابقه فعالیت', NullToDashString(handleActivityHistory(contractorData.activity_history))],
                ['پروژه انجام شده', NullToDashString(contractorData.project_done)],
                ['پروژه در دست اجرا', NullToDashString(contractorData.project_in_progress)]
            ];

            setTitlesAndValues(titles);
        };

        const handleSupplierData = async (supplierData) => {
            setProfessionalProfile(true);
            const MultiChoiseProvince = JSON.parse(supplierData.activity_provinces || '[]');
            const activityCategoryIds = (supplierData.activity_categories || []).map(category => category.id);
            setCompany_Name_Context(NullToEmptyString(supplierData.company));
            setActivity_Field_Menu_Context(activityCategoryIds);
            setActivity_Description_Button(supplierData.activity_description === null ? 0 : 1);
            setActivity_Description_Context(NullToEmptyString(supplierData.activity_description));
            setMultiProvinceId(MultiChoiseProvince);
            setDisable_Brands(supplierData.brands_not_related);
            setBrands_Context(JSON.parse(supplierData.brands || '[]'));
            setActivity_History_Context(NullToEmptyString(supplierData.activity_history));
            setProduction_Amount_Context(NullToEmptyString(supplierData.production_amount));
            setDisable_Standards(supplierData.standards_not_related);
            setStrandards_Context(JSON.parse(supplierData.standards || '[]'));
            setDisable_Website_Context(NullToEmptyString(supplierData.website_not_related));
            setWebsite_Context(NullToEmptyString(supplierData.website));

            const provinceNames = await handleProvinceRequest(MultiChoiseProvince);
            const activityCategories = await handleActivityCategories(supplierData.activity_categories || []);

            const titles = [
                ['نام شرکت', NullToDashString(supplierData.company)],
                ['زمینه فعالیت', activityCategories],
                ['توضیحات', NullToDashString(supplierData.activity_description)],
                ['استان(های) محل فعالیت', provinceNames],
                ['برند(های) محصولات', NullToDashString(JSON.parse(supplierData.brands || '[]').join(" , "))],
                ['سابقه فعالیت', NullToDashString(handleActivityHistory(supplierData.activity_history))],
                ['میزان تولید', NullToDashString(supplierData.production_amount)],
                ['استاندارد(ها)', NullToDashString(JSON.parse(supplierData.standards || '[]').join(" , "))],
                ['وبسایت', NullToDashString(supplierData.website)]
            ];

            setTitlesAndValues(titles);
        };

        const handleEmployerData = async (employerData) => {
            setProfessionalProfile(true);
            const MultiChoiseProvince = JSON.parse(employerData.activity_provinces || '[]');
            setProject_Done_Context(NullToEmptyString(employerData.project_done));
            setProject_In_Progress_Context(NullToEmptyString(employerData.project_in_progress));
            setMultiProvinceId(MultiChoiseProvince);

            const provinceNames = await handleProvinceRequest(MultiChoiseProvince);

            const titles = [
                ['پروژه انجام شده', NullToDashString(employerData.project_done)],
                ['پروژه در دست اجرا', NullToDashString(employerData.project_in_progress)],
                ['استان(های) محل فعالیت', provinceNames],
            ];

            setTitlesAndValues(titles);
        };

        const { engineer, contractor, supplier, employer } = SendRequest.data.data;

        if (engineer !== null) {
            handleEngineerData(engineer);
        } else if (contractor !== null) {
            handleContractorData(contractor, Token);
        } else if (supplier !== null) {
            handleSupplierData(supplier, Token);
        } else if (employer !== null) {
            handleEmployerData(employer, Token);
        } else {
            //Empty All Profiles
            setProfessionalProfile(false)
        }
    }

    const LoadBirthdayInfo = (SendRequest) => {
        if ((SendRequest.data.data.profile !== null)) {
            if ((SendRequest.data.data.profile.birthday === null)) {
                setBirthday(null)
            }
            else {
                const BirthDaySplitData = SendRequest.data.data.profile.birthday.split('/')
                setBirthday(SendRequest.data.data.profile.birthday)
                setYear(parseInt(BirthDaySplitData[0]))
                setMonth(parseInt(BirthDaySplitData[1]))
                setDay(parseInt(BirthDaySplitData[2]))
            }
        }
    }

    const LoadEmailInfo = (SendRequest) => {
        if ((SendRequest.data.data.profile !== null)) {
            if ((SendRequest.data.data.profile.email === null)) {
                setEmail(null)
                setEmailVerfied(false)
            }
            else {
                setEmail(SendRequest.data.data.profile.email)
                if (SendRequest.data.data.profile.email_verified_at === null) {
                    setEmailVerfied(false)
                } else {
                    setEmailVerfied(true)
                }
            }
        }
    }

    const CheckUserPassword = (SendRequest) => {
        setPassword(SendRequest.data.data.password)
    }

    const LoadUserBadge = async (SendRequest) => {
        try {
            const SendRequestBadge = await axios.get(`https://www.saze90.com/get-certificate?mobile=${SendRequest.data.data.mobile}`, {
                headers: {
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })

            if (SendRequestBadge.status === 200) {
                setBadge(SendRequestBadge.data.message)
            } else if (SendRequestBadge.status === 200 && SendRequestBadge.data.status === 401) {
                setBadge(false)
            } else {
                setBadge(false)
            }

        } catch (err) {
            setBadge('Error')
        }
    }

    const LoadSupplierActivityField = async (SendRequest) => {
        if (SendRequest.data.data.type_id === 3) {
            try {
                const SendRequest = await ApiBaseUrl.get('api/profile/supplier/activity-categories', {
                    headers: {
                        Authorization: 'Bearer ' + Token,
                        Accept: 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                    },
                });

                if (SendRequest.status === 200) {
                    const data = SendRequest.data.data;

                    // Create dynamic arrays based on the `name` field
                    const arrays = data.reduce((acc, item) => {
                        acc[item.name] = item.children?.map(child => ({ id: child.id, name: child.name })) || [];
                        return acc;
                    }, {});

                    setActivity_Field_Menu_List(arrays)
                } else {
                    console.error('Error loading Activity Field Menu List');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    // // Load List Of Provinces
    // useEffect(() => {
    //     if (UserLoggedIn) {
    //         LoadProvinces();
    //     }
    // }, [UserLoggedIn, Token]);
    // const LoadProvinces = async () => {
    //     const LOCAL_STORAGE_KEY = "provinces";

    //     try {
    //         // Check if data already exists in local storage
    //         const storedProvinces = localStorage.getItem(LOCAL_STORAGE_KEY);

    //         if (storedProvinces) {
    //             setProvincesList(JSON.parse(storedProvinces)); // Use cached data
    //             return;
    //         }

    //         // If no cached data, fetch from API
    //         const response = await ApiBaseUrl.get('api/province', {
    //             headers: {
    //                 Authorization: 'Bearer ' + Token,
    //                 Accept: 'application/json',
    //                 "Access-Control-Allow-Origin": "*",
    //                 'Content-Type': 'application/json',
    //             }
    //         });

    //         if (response.status === 200) {
    //             const data = response.data.data;
    //             setProvincesList(data);

    //             // Save to local storage
    //             localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    //         } else {
    //             setProvincesList([]);
    //         }
    //     } catch (error) {
    //         setProvincesList([]); // Handle API errors
    //     }
    // };

    // // Load List Of Cities Of Province Id
    // useEffect(() => {
    //     if (ProvinceId !== null && UserLoggedIn) {
    //         LoadCities();
    //     }
    // }, [UserLoggedIn, ProvinceId, Token]);
    // const LoadCities = async () => {

    //     const LOCAL_STORAGE_KEY = `cities_${ProvinceId}`; // Unique key for each province's cities

    //     try {
    //         // Clear unnecessary city entries from local storage
    //         Object.keys(localStorage).forEach((key) => {
    //             if (key.startsWith("cities_") && key !== LOCAL_STORAGE_KEY) {
    //                 localStorage.removeItem(key);
    //             }
    //         });

    //         // Check if cities for this province are already stored in local storage
    //         const storedCities = localStorage.getItem(LOCAL_STORAGE_KEY);

    //         if (storedCities) {
    //             setCitiesList(JSON.parse(storedCities)); // Use cached data
    //             return;
    //         }

    //         // If no cached data, fetch from API
    //         const response = await ApiBaseUrl.get(`api/province/cities/${ProvinceId}`, {
    //             headers: {
    //                 Authorization: 'Bearer ' + Token,
    //                 Accept: 'application/json',
    //                 "Access-Control-Allow-Origin": "*",
    //                 'Content-Type': 'application/json',
    //             }
    //         });

    //         if (response.status === 200) {
    //             const data = response.data.data;
    //             setCitiesList(data);

    //             // Save to local storage
    //             localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    //         } else {
    //             setCitiesList([]);
    //         }
    //     } catch (error) {
    //         setCitiesList([]); // Handle API errors
    //     }
    // };

    // // Load Province Name According To Province Id
    // useEffect(() => {
    //     if (ProvincesList.length > 0) {
    //         ProvincesList.map((item) => (
    //             item.id === ProvinceId && setProvinceName(item.Name)
    //         ))
    //     }
    // }, [ProvincesList]);

    // // Load City Name According To City Id
    // useEffect(() => {
    //     if (CitiesList.length > 0) {
    //         CitiesList.map((item) => (
    //             (item.id === CityId) && setCityName(item.Name)
    //         ))
    //     }
    // }, [CitiesList, ProvincesList, ProvinceId])

    const loadProvincesAndCities = async () => {
        const PROVINCES_LOCAL_STORAGE_KEY = "provinces";
        const CITIES_LOCAL_STORAGE_KEY = `cities_${ProvinceId}`;

        try {
            // Load Provinces
            const storedProvinces = localStorage.getItem(PROVINCES_LOCAL_STORAGE_KEY);

            if (storedProvinces) {
                setProvincesList(JSON.parse(storedProvinces));
            } else {
                const provincesResponse = await ApiBaseUrl.get('api/province', {
                    headers: {
                        Authorization: 'Bearer ' + Token,
                        Accept: 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                    }
                });

                if (provincesResponse.status === 200) {
                    const provincesData = provincesResponse.data.data;
                    setProvincesList(provincesData);
                    localStorage.setItem(PROVINCES_LOCAL_STORAGE_KEY, JSON.stringify(provincesData));
                } else {
                    setProvincesList([]);
                }
            }

            // Load Cities if ProvinceId is available
            if (ProvinceId !== null) {
                Object.keys(localStorage).forEach((key) => {
                    if (key.startsWith("cities_") && key !== CITIES_LOCAL_STORAGE_KEY) {
                        localStorage.removeItem(key);
                    }
                });

                const storedCities = localStorage.getItem(CITIES_LOCAL_STORAGE_KEY);

                if (storedCities) {
                    setCitiesList(JSON.parse(storedCities));
                } else {
                    const citiesResponse = await ApiBaseUrl.get(`api/province/cities/${ProvinceId}`, {
                        headers: {
                            Authorization: 'Bearer ' + Token,
                            Accept: 'application/json',
                            "Access-Control-Allow-Origin": "*",
                            'Content-Type': 'application/json',
                        }
                    });

                    if (citiesResponse.status === 200) {
                        const citiesData = citiesResponse.data.data;
                        setCitiesList(citiesData);
                        localStorage.setItem(CITIES_LOCAL_STORAGE_KEY, JSON.stringify(citiesData));
                    } else {
                        setCitiesList([]);
                    }
                }
            }
        } catch (error) {
            setProvincesList([]);
            setCitiesList([]);
        }
    };

    useEffect(() => {
        if (UserLoggedIn) {
            loadProvincesAndCities();
        }
    }, [UserLoggedIn, Token, ProvinceId]);

    useEffect(() => {
        if (ProvincesList.length > 0) {
            const province = ProvincesList.find((item) => item.id === ProvinceId);
            if (province) setProvinceName(province.Name);
        }
    }, [ProvincesList, ProvinceId]);

    useEffect(() => {
        if (CitiesList.length > 0) {
            const city = CitiesList.find((item) => item.id === CityId);
            if (city) setCityName(city.Name);
        }
    }, [CitiesList, CityId]);

    // Load User Types
    useEffect(() => {
        if (UserLoggedIn) {
            LoadUserTypes();
        }
    }, [UserLoggedIn])
    const LoadUserTypes = async () => {
        try {
            const SendRequest = await ApiBaseUrl.get('api/user-types', {
                headers: {
                    Authorization: 'Bearer ' + Token,
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })
            if (SendRequest.status === 200) {
                setTypeIds(SendRequest.data.data)
            } else {
                setTypeIds('')
            }
        }
        catch (err) {
            setTypeIds('')
        }
    }

    // Load Notifications
    useEffect(() => {
        if (UserLoggedIn) {
            LoadNotification();
        }
    }, [UserLoggedIn])
    const LoadNotification = async () => {
        try {
            const sendRequest = await ApiBaseUrl.get('api/profile/messages', {
                headers: {
                    Authorization: 'Bearer ' + Token,
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            });

            if (sendRequest.status === 200) {
                const messages = sendRequest.data.data;

                const unreadMessages = messages.filter(item => !item.read_at);
                const readMessages = messages.filter(item => item.read_at);

                setUnReadNotif(unreadMessages);
                setReadNotif(readMessages);
            }
            else {
                setUnReadNotif('');
                setReadNotif('');
            }

        }
        catch (error) {
            setUnReadNotif('');
            setReadNotif('');
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {(IsLoading) ?
                <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        {/* <div className='LoadingAnimationForEZSquare'>
                            <img src={EZBlueSquare} alt='img' />
                        </div>

                        <div>
                            <LoadingDots Color='var(--Primary-EZ)' />
                        </div> */}

                        <Lottie
                            animationData={LoadingLogo}
                            loop={true} autoplay={true}
                            style={{ width: 300, height: 300 }}
                        />

                    </div>
                </div>
                :
                children
            }
        </>
    )
}

export default LoginDetectionAndLoadData;
