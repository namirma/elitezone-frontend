import React, { useEffect, useState } from 'react';
import './VerifyEmail.css';
import Navbar from '../Home/Components/Navbar';
import Lottie from 'lottie-react';
import LoadingDots from '../Auth/Components/LoadingDots';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiBaseUI from '../../Api/axios';
import { header } from 'framer-motion/m';
import BasicButton from '../../Buttons/Components/BasicButton';

function VerifyEmail() {

    const [VerifyEmailImg, setVerifyEmailImg] = useState(null);
    const [VerifyEmailImgFailed, setVerifyEmailImgFailed] = useState(null);
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/alirewzak/d75fd306d1fd718a6efce16c9d742068/raw/4d94b1831289f0f68fd00d0e05aaa925dc32892c/VerifyEmail.json")
            .then((response) => response.json())
            .then((data) => setVerifyEmailImg(data));

        fetch("https://gist.githubusercontent.com/alirewzak/36d255c170c2b7cdf5cac1725a651b24/raw/34b1c76ef29cac70ab3993d14cee1c853312c8da/Failed.json")
            .then((response) => response.json())
            .then((data) => setVerifyEmailImgFailed(data));
    }, [])

    const [IsLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState(false);

    const location = useLocation();

    useEffect(() => {
        // Extract the token from the URL
        const path = location.pathname;
        const token = path.split("/verify-email/")[1];

        const SendEmailVerify = async () => {
            try {
                const SendRequest = await ApiBaseUI.post(
                    "api/check-email-token",
                    {
                        token: token
                    },
                    {
                        headers: {
                            Accept: "application/json",
                            "Access-Control-Allow-Origin": "*",
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (SendRequest.status === 200) {
                    setIsLoading(false)
                    setError(false)
                } else {
                    setIsLoading(false)
                    setError(true)
                }
            } catch (err) {
                setIsLoading(false)
                setError(true)
            }
        };

        if (token) {
            SendEmailVerify();
            setIsLoading(true)
            setError(false)
        } else {
            setIsLoading(false)
            setError(true)
        }

    }, [location]);

    return (
        <>
            <Navbar />

            <div className='verifyEmail_Container B_Style'>

                {(Error === true && IsLoading === false) &&
                    <>
                        {VerifyEmailImgFailed ? (
                            <Lottie
                                animationData={VerifyEmailImgFailed}
                                speed={1}
                                loop
                                autoplay
                                style={{ maxWidth: '100px' }}
                            />
                        ) : (
                            <LoadingDots Color={'var(--Primary-EZ)'} />
                        )}
                        <div className="text"> خطایی رخ داد </div>
                        <BasicButton ButtonMode={2} Text="بازگشت به صفحه اصلی" LinkTo="/" />
                    </>
                }


                {(Error === false && IsLoading === true) &&
                    <>
                        <LoadingDots Color={'var(--Primary-EZ)'} />
                    </>
                }

                {(Error === false && IsLoading === false) &&
                    <>
                        {VerifyEmailImg ? (
                            <Lottie
                                animationData={VerifyEmailImg}
                                speed={1}
                                loop
                                autoplay
                                style={{ maxWidth: '100px' }}
                            />
                        ) : (
                            <LoadingDots Color={'var(--Primary-EZ)'} />
                        )}
                        <div className="text"> .ایمیل شما با موفقیت تایید شد </div>
                        <BasicButton ButtonMode={2} Text="بازگشت به صفحه اصلی" LinkTo="/" />
                    </>
                }

            </div>

        </>
    )
}

export default VerifyEmail