import React, { useContext, useEffect, useRef, useState } from 'react'
import './Panel.css';
import Lottie from 'lottie-react';
import Navbar from '../../../../Home/Components/Navbar';
import LoadingDots from '../../../../Auth/Components/LoadingDots';
import BackToProfileButton from '../../BackToProfileButton/BackToProfileButton';
import { ResponsiveContext } from '../../../../../Context/ResponsiveContext';
import EngineerImg from '../../../Assets/EngineerImg.svg';
import ContractorImg from '../../../Assets/ContractorImg.svg';
import SupplierImg from '../../../Assets/SupplierImg.svg';
import EmployerImg from '../../../Assets/EmployerImg.svg';
import InviteFriendModal from '../../../../Home/Components/Modal/InviteFriendModal';
import '@lottiefiles/lottie-player';
import { motion } from 'framer-motion'
import { useAppContext } from '../../../../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import MainButton2 from '../../../../../Buttons/Components/MainButton2';


function Panel() {

    const navigate = useNavigate();

    const [PanelImg, setPanelImg] = useState(null);

    const { UserRole } = useAppContext();

    const [InviteFriendShow, setInviteFriendShow] = useState(false);

    const HandleInviteClick = () => {
        setInviteFriendShow(true);
    };

    const HandleJobInfoClick = () => {
        navigate('/Professional-profile')
    }

    const [Text, setText] = useState(null);
    const [Text2, setTex2] = useState(null);
    const [Button, setButton] = useState(null)

    useEffect(() => {
        if (UserRole === 1) {
            fetch("https://lottie.host/ca763a3d-0c71-4bfd-a519-50a92e5eb5c7/105jzeSTJ0.json")
                .then((response) => response.json())
                .then((data) => setPanelImg(data));

            setText(
                <>
                    از ثبت‌نام شما متشکریم. در حال مذاکره با سوپلایرهای محترم هستیم. به محض راه اندازیِ امکانات جدید از طریق پیامک و ایمیل به شما اطلاع رسانی می‌کنیم. در این فاصله با اشتراک گذاری پلتفرم اِلیت‌زون با دوستان خود و تکمیل پروفایل، ما را در مذاکره‌ قویتر با سوپلایرهای محترم و ارائه‌ی خدمات بیشتر یاری فرمایید.
                </>
            )

            setButton(1)

        } else if (UserRole === 2) {
            fetch('https://lottie.host/2858ac0f-cfb6-4e23-961a-b145383e9db5/7iYcooBNNe.json')
                .then((response) => response.json())
                .then((data) => setPanelImg(data));

            setText(
                <>
                    از ثبت‌نام شما متشکریم. در حال مذاکره با سوپلایرهای محترم هستیم. به محض راه اندازیِ امکانات جدید از طریق پیامک و ایمیل به شما اطلاع رسانی می‌کنیم. در این فاصله با اشتراک گذاری پلتفرم اِلیت‌زون با دوستان خود و تکمیل پروفایل، ما را در مذاکره‌ قویتر با سوپلایرهای محترم و ارائه‌ی خدمات بیشتر یاری فرمایید.
                </>
            )

            setButton(2)

        } else if (UserRole === 3) {
            fetch('https://gist.githubusercontent.com/alirewzak/6ea2c3e877907c8d313f48dbae2dc0d4/raw/774cc6f430cf12076f2ed63091b9bf1e5e5f8a95/SupplierRoadMap.json')
                .then((response) => response.json())
                .then((data) => setPanelImg(data));

            setText(
                <>
                    از ثبت‌نام شما متشکریم. برای دریافت اطلاعات بیشتر همکاران ما با شما تماس خواهند گرفت. با توجه به ترافیک ثبت‌نام‌ها ممکن است این تماس با تأخیر بیشتری انجام بگیرد. از صبوری شما متشکریم. در این فاصله، لطفاً اطلاعات شغلی خود را تکمیل کنید تا ما بتوانیم خدمات بهتری به شما ارائه دهیم.                </>
            )

            setTex2(
                <>
                    همچنین، با اشتراک‌گذاری پلتفرم اِلیت‌زون با دوستان خود، ما را در گسترش خدمات و ارائه امکانات بیشتر یاری فرمایید. از حمایت شما سپاسگزاریم!
                </>
            )

            setButton(3)

        } else if (UserRole === 4) {
            fetch('https://lottie.host/bdf8a36f-9d41-49bf-a771-6f570db6a56e/QNoc41Jq3M.json')
                .then((response) => response.json())
                .then((data) => setPanelImg(data));

            setText(
                <>
                    از ثبت‌نام شما متشکریم. برای استفاده از امکانات اِلیت‌زون لازم است از طریق مهندسان یا پیمانکاران محترم اقدام فرمایید. در این خصوص چنانچه مهندس یا پیمانکار پروژه شما قبلا در اِلیت‌زون ثبت نام کرده‌اند به شما راهنمایی خواهند کرد. در غیر این صورت از آن ها بخواهید  در این پلتفرم ثبت نام نمایند.
                    ضمنا می توانید با اشتراک گذاری پلتفرم اِلیت‌زون با دوستان خود ما را در انجام مذاکره‌ی قویتر با سوپلایرهای محترم یاری فرمایید.
                </>
            )

            setButton(4)

        } else {
            setPanelImg(null)
        }
    }, [UserRole])

    const { StopShowProfileImg } = useContext(ResponsiveContext);

    const [IsImgLoaded, setIsImgLoaded] = useState(false);

    const ImgVarients = {
        begin: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .5,
                duration: 1,
                type: 'spring',
                stiffness: 50,
            }
        }
    }

    const LottieVarients = {
        begin: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .8,
                duration: 1,
                type: 'spring',
                stiffness: 50,
            }
        }
    }

    const lottieRef = useRef();
    const handleCharacterImg = () => {
        if (UserRole === 1) {
            return EngineerImg
        }
        else if (UserRole === 2) {
            return ContractorImg
        }
        else if (UserRole === 3) {
            return SupplierImg
        }
        else if (UserRole === 4) {
            return EmployerImg
        }
    }

    const [CompnentReady, setComponentReady] = useState(false);
    useEffect(() => {
        if (PanelImg !== null && IsImgLoaded === true) {
            setComponentReady(true)
        } else {
            setComponentReady(false)
        }
    }, [PanelImg, IsImgLoaded])


    const [BacktoProfileTitle, setBacktoProfileTitle] = useState(null);
    useEffect(() => {
        handleBacktoProfileTitle()
    }, [])
    const handleBacktoProfileTitle = () => {
        switch (UserRole) {
            case 1:
                setBacktoProfileTitle('پنل خرید مصالح ساختمانی')
                break;
            case 2:
                setBacktoProfileTitle('پنل خرید مصالح ساختمانی')
                break;
            case 3:
                setBacktoProfileTitle('پنل فروش مصالح ساختمانی')
                break;
            case 4:
                setBacktoProfileTitle('پنل اتصال به شبکه مهندسین')
                break;
            default:
                return 'انتخاب نقش'
        }
    }
    useEffect(() => {
        handleBacktoProfileTitle()
    }, [])

    return (
        <>
            <Navbar />

            <div className='Panel_Container A_Style'>


                <div className='Panel_style B_Style'>

                    <div className='PanelBackToProfile' style={{}}>
                        <BackToProfileButton text={BacktoProfileTitle} padding='0px 0px 0 0 ' panel={true} />
                    </div>

                    {!CompnentReady &&
                        <LoadingDots Color='var(--Primary-EZ)' />
                    }

                    <div style={{ display: !CompnentReady && 'none' }}>
                        <>
                            <div className='PanelContet-wrapper'>

                                <div className='PanelContet-img' style={{ display: StopShowProfileImg && 'none' }}>
                                    <motion.img
                                        src={handleCharacterImg()}
                                        alt='img'
                                        variants={ImgVarients}
                                        initial="begin"
                                        animate={IsImgLoaded ? "visible" : "begin"}
                                        onLoad={() => setIsImgLoaded(true)}
                                    />
                                </div>

                                <div className='PanelContet-content'>
                                    <motion.div
                                        variants={LottieVarients}
                                        initial="begin"
                                        animate={PanelImg ? "visible" : "begin"}
                                        onAnimationComplete={() => {
                                            if (lottieRef.current) {
                                                lottieRef.current.play();
                                            }
                                        }}
                                    >
                                        <Lottie
                                            animationData={PanelImg}
                                            lottieRef={lottieRef}
                                            speed={1}
                                            loop={false}
                                            autoplay={false} />
                                    </motion.div>
                                </div>

                            </div>

                            <div className='PanelContet-Text'>
                                {Text}
                            </div>

                            {UserRole === 3 &&
                                <div
                                    style={{
                                        marginTop: '24px',
                                        width: '100%',
                                        display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
                                        direction: 'ltr'
                                    }}
                                    onClick={HandleJobInfoClick}
                                >
                                    <MainButton2 ButtonMode='Blue' Text='تکمیل اطلاعات شغلی' ImgMode={'JobInformation'} />
                                </div>
                            }

                            {Text2 &&
                                <div className='PanelContet-Text' style={{margin: '24px 0 0 0'}}>
                                    {Text2}
                                </div>
                            }

                            <div
                                style={{
                                    marginTop: '24px',
                                    width: '100%',
                                    display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
                                    direction: 'ltr'
                                }}
                                onClick={HandleInviteClick}
                            >
                                <MainButton2 ButtonMode='Wine' Text='اشتراک گذاری' ImgMode={'Share'} />
                            </div>

                        </>
                    </div>
                </div>
            </div>

            <div style={{ height: '64px' }}></div>

            <InviteFriendModal InviteFriendShow={InviteFriendShow} setInviteFriendShow={setInviteFriendShow} />

        </>
    )
}

export default Panel