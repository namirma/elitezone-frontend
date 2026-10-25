import React, { useContext, useState } from "react";

//Create a New Context
const AppContext = React.createContext();

// A Custom Context Provider
const AppContextProvider = ({ children }) => {

    //Video
    const [IsPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [VideoMenuShow, setVideoMenuShow] = useState(false);
    const [NumberImgLoaded, setNumberImgLoaded] = useState(0);
    const [PopUpLink, setPopUpLink] = useState({ state: false, text: '', src: null })

    const [AuthPage, setAuthPage] = useState('SignUp')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [AuthStateValue, setAuthStateValue] = useState('')
    const [UserRole, setUserRole] = useState(null);
    const [UserRoleName, setUserRoleName] = useState('مهندس')
    const [NameAndLastName, setNameAndLastName] = useState(null);
    const [UserLoggedIn, setUserLoggedIn] = useState(null);
    const [UserHasTypeId, setUserHasTypeId] = useState(null);

    const [remainingTime, setRemainingTime] = useState('')

    const [ProfileButtonImg, setProfileButtonImg] = useState(null);
    const [ProfileButtonImgFocus, setProfileButtonImgFocus] = useState(null);

    //Typed Id
    const [TypeIds, setTypeIds] = useState([]);

    //Combination City And Province
    const [DisableCity, setDisableCity] = useState(false)

    // FAQ
    const [NameFAQ, setNameFAQ] = useState('');
    const [NameFAQTrue, setNameFAQTrue] = useState(false);
    const [EmailFAQ, setEmailFAQ] = useState('');
    const [EmailFAQTrue, setEmailFAQTrue] = useState(false);
    const [SubjectFAQ, setSubjectFAQ] = useState('');
    const [SubjectFAQTrue, setSubjectFAQTrue] = useState(false);
    const [MoreDeatilsFAQ, setMoreDeatilsFAQ] = useState('');
    const [PhoneFAQ, setPhoneFAQ] = useState('');
    const [PhoneFAQTrue, setPhoneFAQTrue] = useState(false);
    const [MessageFAQ, setMessageFAQ] = useState('')
    const [MessageFAQTrue, setMessageFAQTrue] = useState(false)

    //User Agent (Device Mode)
    const [UserAgent, setUserAgent] = useState(null);

    //General Info
    //Check if profile is empty show Total Genral Info Modal To User Instead Other Modal
    const [ProfileDataIsEmpty, setProfileDataIsEmpty] = useState(false)
    //Checking whether the user is real or legal to decide Format of sending data
    const [Entity, setEntity] = useState('');

    //Real
    const [Name, setName] = useState('');
    const [NameTrue, setNameTrue] = useState(false);

    const [Family, setFamily] = useState('');
    const [FamilyTrue, setFamilyTrue] = useState(false);

    const [NationalCode, setNationalCode] = useState('');
    const [NationalCodeTrue, setNationalCodeTrue] = useState(false);

    const [Email, setEmail] = useState('');
    const [EmailTrue, setEmailTrue] = useState(false)
    const [DuplicatedEmail, setDuplicatedEmail] = useState(false)
    const [EmailVerfied, setEmailVerfied] = useState(false)

    const [Day, setDay] = useState(null);
    const [DayTrue, setDayTrue] = useState(false);
    const [Month, setMonth] = useState(null);
    const [MonthTrue, setMonthTrue] = useState(false);
    const [Year, setYear] = useState(null);
    const [YearTrue, setYearTrue] = useState(false);
    const [Birthday, setBirthday] = useState('');

    const [ProvincesList, setProvincesList] = useState([]);
    const [ProvinceName, setProvinceName] = useState(null);
    const [ProvinceId, setProvinceId] = useState(null)
    const [CitiesList, setCitiesList] = useState([]);
    const [CityName, setCityName] = useState(null);
    const [CityId, setCityId] = useState(null)

    const [Password, setPassword] = useState(false);

    //Legal
    const [Company, setCompany] = useState('');
    const [EconomicCode, setEconomicCode] = useState('');
    const [NationalId, setNationalId] = useState('');
    const [RegisterId, setRegisterId] = useState('');
    const [LandlineNumber, setLandlineNumber] = useState('');

    //Specialized Profile
    const [ProfessionalProfile, setProfessionalProfile] = useState(false);
    //Engineer
    const [Engineer_Member_Context, setEngineer_Member_Context] = useState(0);
    const [Student_Context, setStudent_Context] = useState(0);
    const [University_Name_Context, setUniversity_Name_Context] = useState('');
    const [Fields_Of_Study_Context, setFields_Of_Study_Context] = useState('');
    const [Member_Number_Context, setMember_Number_Context] = useState('');
    const [I_Have_License_Number_Context, setI_Have_License_Number_Context] = useState(0);
    const [License_Number_Context, setLicense_Number_Context] = useState('');
    const [Design_Base_Context, setDesign_Base_Context] = useState('');
    const [Supervision_Base_Context, setSupervision_Base_Context] = useState('');
    const [Activity_Province_Id, setActivity_Province_Id] = useState('');
    const [Activity_City_Id, setActivity_City_Id] = useState('');
    const [Activity_Province_Name, setActivity_Province_Name] = useState('');
    const [Activity_City_Name, setActivity_City_Name] = useState('');
    const [DisableActivityCity, setDisableActivityCity] = useState(false);
    const [ErrorInDesignAndSupervision, setErrorInDesignAndSupervision] = useState('');

    //Contractor
    const [Trusted_Contractor_Context, setTrusted_Contractor_Context] = useState(0);
    const [Company_Name_Context, setCompany_Name_Context] = useState('');
    const [Disable_Company_Name_Context, setDisable_Company_Name_Context] = useState(0);
    const [MultiProvinceId, setMultiProvinceId] = useState([]);
    const [Activity_History_Context, setActivity_History_Context] = useState(null);
    const [Project_Done_Context, setProject_Done_Context] = useState('');
    const [Project_In_Progress_Context, setProject_In_Progress_Context] = useState('');

    //Supplier
    const [Activity_Field_Menu_List, setActivity_Field_Menu_List] = useState('');
    const [Activity_Field_Menu_Context, setActivity_Field_Menu_Context] = useState([]);
    const [Activity_Description_Button, setActivity_Description_Button] = useState(0)
    const [Activity_Description_Context, setActivity_Description_Context] = useState('');
    const [Disable_Brands, setDisable_Brands] = useState(0);
    const [Brands_Context, setBrands_Context] = useState([]);
    const [Production_Amount_Context, setProduction_Amount_Context] = useState('');
    const [Disable_Standards, setDisable_Standards] = useState(false);
    const [Strandards_Context, setStrandards_Context] = useState([]);
    const [Disable_Website_Context, setDisable_Website_Context] = useState(0);
    const [Website_Context, setWebsite_Context] = useState('');

    //Notifications
    const [UnReadNotif, setUnReadNotif] = useState([]);
    const [ReadNotif, setReadNotif] = useState([]);

    //Badge
    const [Badge, setBadge] = useState(null);

    const [Item1Group1Title, setItem1Group1Title] = useState(null);
    const [Item1Group1Value, setItem1Group1Value] = useState(null);

    const [Item1Group2Title, setItem1Group2Title] = useState(null);
    const [Item1Group2Value, setItem1Group2Value] = useState(null);

    const [Item2Group1Title, setItem2Group1Title] = useState(null);
    const [Item2Group1Value, setItem2Group1Value] = useState(null);

    const [Item2Group2Title, setItem2Group2Title] = useState(null);
    const [Item2Group2Value, setItem2Group2Value] = useState(null);

    const [Item3Group1Title, setItem3Group1Title] = useState(null);
    const [Item3Group1Value, setItem3Group1Value] = useState(null);

    const [Item3Group2Title, setItem3Group2Title] = useState(null);
    const [Item3Group2Value, setItem3Group2Value] = useState(null);

    const [Item4Group1Title, setItem4Group1Title] = useState(null);
    const [Item4Group1Value, setItem4Group1Value] = useState(null);

    const [Item4Group2Title, setItem4Group2Title] = useState(null);
    const [Item4Group2Value, setItem4Group2Value] = useState(null);

    const [Item5Group1Title, setItem5Group1Title] = useState(null);
    const [Item5Group1Value, setItem5Group1Value] = useState(null);

    const [Item5Group2Title, setItem5Group2Title] = useState(null);
    const [Item5Group2Value, setItem5Group2Value] = useState(null);

    const [Item6Group1Title, setItem6Group1Title] = useState(null);
    const [Item6Group1Value, setItem6Group1Value] = useState(null);

    const [Item6Group2Title, setItem6Group2Title] = useState(null);
    const [Item6Group2Value, setItem6Group2Value] = useState(null);

    // Wrap All States and setStates in a singleObject 
    const AppContextValue = {

        IsPlaying, setIsPlaying,
        isMuted, setIsMuted,
        elapsedTime, setElapsedTime,
        totalTime, setTotalTime,
        progress, setProgress,
        VideoMenuShow, setVideoMenuShow,
        NumberImgLoaded, setNumberImgLoaded,
        PopUpLink, setPopUpLink,

        AuthPage,
        setAuthPage,

        PhoneNumber,
        setPhoneNumber,

        AuthStateValue,
        setAuthStateValue,

        UserRole,
        setUserRole,
        UserRoleName,
        setUserRoleName,

        NameAndLastName,
        setNameAndLastName,

        UserLoggedIn,
        setUserLoggedIn,

        UserHasTypeId,
        setUserHasTypeId,

        remainingTime,
        setRemainingTime,

        ProfileButtonImg, setProfileButtonImg, ProfileButtonImgFocus, setProfileButtonImgFocus,

        TypeIds, setTypeIds,

        ProvincesList, setProvincesList,
        CitiesList, setCitiesList,

        DisableCity,
        setDisableCity,

        NameFAQ, setNameFAQ, NameFAQTrue, setNameFAQTrue,
        EmailFAQ, setEmailFAQ, EmailFAQTrue, setEmailFAQTrue,
        SubjectFAQ, setSubjectFAQ, SubjectFAQTrue, setSubjectFAQTrue,
        MoreDeatilsFAQ, setMoreDeatilsFAQ,
        PhoneFAQ, setPhoneFAQ, PhoneFAQTrue, setPhoneFAQTrue,
        MessageFAQ, setMessageFAQ, MessageFAQTrue, setMessageFAQTrue,

        UserAgent, setUserAgent,

        ProfessionalProfile,
        setProfessionalProfile,

        Engineer_Member_Context,
        setEngineer_Member_Context,

        Student_Context,
        setStudent_Context,

        University_Name_Context,
        setUniversity_Name_Context,

        Fields_Of_Study_Context,
        setFields_Of_Study_Context,

        Member_Number_Context,
        setMember_Number_Context,

        I_Have_License_Number_Context,
        setI_Have_License_Number_Context,

        License_Number_Context,
        setLicense_Number_Context,

        Design_Base_Context,
        setDesign_Base_Context,

        Supervision_Base_Context,
        setSupervision_Base_Context,

        Activity_Province_Id, setActivity_Province_Id,
        Activity_City_Id, setActivity_City_Id,
        Activity_Province_Name, setActivity_Province_Name,
        Activity_City_Name, setActivity_City_Name,
        DisableActivityCity, setDisableActivityCity,

        ErrorInDesignAndSupervision,
        setErrorInDesignAndSupervision,

        ProfileDataIsEmpty,
        setProfileDataIsEmpty,

        Entity,
        setEntity,

        Name,
        setName,
        NameTrue,
        setNameTrue,

        Family,
        setFamily,
        FamilyTrue,
        setFamilyTrue,

        NationalCode,
        setNationalCode,
        NationalCodeTrue,
        setNationalCodeTrue,

        Email, setEmail, EmailTrue, setEmailTrue, DuplicatedEmail, setDuplicatedEmail, EmailVerfied, setEmailVerfied,

        Day, setDay, DayTrue, setDayTrue,
        Month, setMonth, MonthTrue, setMonthTrue,
        Year, setYear, YearTrue, setYearTrue,
        Birthday, setBirthday,

        ProvinceName, setProvinceName, ProvinceId, setProvinceId,

        CityName, setCityName, CityId, setCityId,

        Password,
        setPassword,

        Company, setCompany,

        EconomicCode, setEconomicCode,

        NationalId,
        setNationalId,

        RegisterId,
        setRegisterId,

        LandlineNumber,
        setLandlineNumber,

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

        Activity_Field_Menu_List, setActivity_Field_Menu_List,

        Activity_Field_Menu_Context, setActivity_Field_Menu_Context,

        Activity_Description_Button, setActivity_Description_Button, Activity_Description_Context, setActivity_Description_Context,

        Brands_Context, setBrands_Context, Disable_Brands, setDisable_Brands,

        Production_Amount_Context, setProduction_Amount_Context,

        Disable_Standards, setDisable_Standards, Strandards_Context, setStrandards_Context,

        Website_Context, setWebsite_Context, Disable_Website_Context, setDisable_Website_Context,

        UnReadNotif, setUnReadNotif, ReadNotif, setReadNotif,

        Badge, setBadge,

        Item1Group1Title, setItem1Group1Title, Item1Group1Value, setItem1Group1Value,

        Item1Group2Title, setItem1Group2Title, Item1Group2Value, setItem1Group2Value,

        Item2Group1Title, setItem2Group1Title, Item2Group1Value, setItem2Group1Value,

        Item2Group2Title, setItem2Group2Title, Item2Group2Value, setItem2Group2Value,

        Item3Group1Title, setItem3Group1Title, Item3Group1Value, setItem3Group1Value,

        Item3Group2Title, setItem3Group2Title, Item3Group2Value, setItem3Group2Value,

        Item4Group1Title, setItem4Group1Title, Item4Group1Value, setItem4Group1Value,

        Item4Group2Title, setItem4Group2Title, Item4Group2Value, setItem4Group2Value,

        Item5Group1Title, setItem5Group1Title, Item5Group1Value, setItem5Group1Value,

        Item5Group2Title, setItem5Group2Title, Item5Group2Value, setItem5Group2Value,

        Item6Group1Title, setItem6Group1Title , Item6Group1Value, setItem6Group1Value,

        Item6Group2Title, setItem6Group2Title , Item6Group2Value, setItem6Group2Value,

    }

    return <AppContext.Provider value={AppContextValue}> {children} </AppContext.Provider>
}

// A custom hook to consume the context
const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };