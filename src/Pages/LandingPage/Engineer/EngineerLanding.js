import React, { useState } from 'react';
import Navbar from '../../Home/Components/Navbar';
import Footer from '../../Home/Components/Footer';

import Engineer_Poster_Video from '../../Home/Assets/VideoThumbnail/Engineer_Poster_Video.jpg';
import EngineerPoster from '../../Home/Assets/VideoPoster/EngineerPoster.jpg'
import Video from '../../../Video/Video';
import Engineer from '../../Home/Components/Engineer';
import BreadCrumb from '../../../PersonalFunction/BreadCrumb/BreadCrumb';
import LogoSection from '../../BrandIdentity/Components/LogoSection';

import EliteZoneWhiteSymbol from '../../../PublicAssets/Logo_Icons/EliteZoneWhiteSymbol.svg';

function EngineerLanding() {

    const VideoMenuArray = [
        {
            Name: 'Engineer',
            Thumbnail: Engineer_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/qBYP8mz5Al/h_,144_200,240_400,360_411,480_411,720_411,1080_411,k.mp4.list/master.m3u8",
            Poster: EngineerPoster
        }
    ]

    const Texts = {
        text1: {
            title: 'مهندسان، کلید طراحی و مدیریت پروژه‌های موفق',
            desc: 'در الیت زون، ابزارها و منابع لازم برای اجرای دقیق و حرفه‌ای پروژه‌ها با ارائه مشاوره فنی به کارفرمایان برای خرید مصالح ساختمانی با کیفیت در اختیار شماست...'
        }
    }


    const [HiddenCloseButton, setHiddenCloseButton] = useState(false)

    return (
        <>
            <Navbar />

            <BreadCrumb One={{ Link: '/engineer', Text: 'مهندسان در اِلیت زون' }} />

            <LogoSection Img={EliteZoneWhiteSymbol} />

            <div className="Video-container">
                {VideoMenuArray.map((video, index) => {
                    const textKey = `text${index + 1}`;
                    const { title, desc } = Texts[textKey];

                    return (
                        <span key={index} style={{ maxWidth: '1320px', width: '100%', marginBottom: '0' }}>
                            <div className="VideoTilte">{title}</div>
                            <div className="VideoDescription">{desc}</div>
                            <div className="VideoWrapper">
                                <Video
                                    DisableVideoMenu={true}
                                    DisableSlidingLink={true}
                                    currentVideo={video}
                                    setCurrentVideo={() => { }}
                                    setHiddenCloseButton={setHiddenCloseButton}
                                />
                            </div>
                        </span>
                    );
                })}
            </div>

            <Engineer
                Exapanded={true}
            />

            <Footer />
        </>
    )
}

export default EngineerLanding