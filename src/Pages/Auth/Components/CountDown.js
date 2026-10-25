import React, { useState, useEffect } from 'react';
import './CountDown.css';
import Countdown from 'react-countdown';
import Flash2_SemanticSuccess_Icon from './../../../PublicAssets/Arrow_Icons/Flash2_SemanticSuccess_Icon.svg';
import Info_Blue_Icon from './../../../PublicAssets/Info_Icons/Info_Blue_Icon.svg';

function CountDown(props) {

    const [completed, setCompleted] = useState(false);
    const endTimestamp = parseInt(localStorage.getItem(`${props.phonenumber}_countdownEndTimestamp`) || 0, 10);
    const now = Date.now();
    const initialRemainingTime = endTimestamp > now ? endTimestamp - now : 120000;
    const [remainingTime, setRemainingTime] = useState(initialRemainingTime);

    const handleStorage = (endTimestamp) => {
        localStorage.setItem(`${props.phonenumber}_countdownEndTimestamp`, endTimestamp);
    };

    useEffect(() => {
        if (!completed) {
            const timerId = setInterval(() => {
                setRemainingTime(prev => {
                    const newTime = prev - 1000;
                    handleStorage(Date.now() + newTime);
                    return newTime;
                });
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [completed]);

    const handleResendClick = () => {
        setCompleted(false);
        setRemainingTime(120000);
        handleStorage(Date.now() + 120000);
        props.ResendFunction();

        if (props.ResetErrorState()) {
            props.ResetErrorState()
        }
    };

    const renderer = ({ minutes, seconds }) => {
        if (completed) {
            return (
                <>
                    <div className='resend-verification-code'>
                        <p> دریافت مجدد کد از طریق </p>
                        <div className='resend-verification-code-link' onClick={handleResendClick}>
                            <div> پیامک </div>
                            <img src={Flash2_SemanticSuccess_Icon} alt="img" />
                        </div>
                    </div>

                    <div className='resend-verification-tip'>
                        <img src={Info_Blue_Icon} alt='img' />
                        <span>
                            در صورت عدم دریافت کد تایید
                            <strong> عدد ۱۲ را به سرشماره ۳۰۰۰۱۴۴۳ پیامک کنید </strong>
                            و پس از آن مجددا بر روی
                            دکمه دریافت پیامک کلیک کنید.
                        </span>
                    </div>

                </>
            );
        } else {
            return (
                <div className='smscode-timer'>
                    <p>مانده تا دریافت کد </p>
                    <p>
                        {minutes} : {seconds}
                    </p>
                </div>
            );
        }
    };

    return (
        <>
            <Countdown
                date={Date.now() + remainingTime}
                renderer={renderer}
                onComplete={() => setCompleted(true)}
            />
        </>
    );
}

export default CountDown;