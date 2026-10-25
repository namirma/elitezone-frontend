import React, { useState } from 'react'
import Navbar from '../../Home/Components/Navbar';
import Footer from '../../Home/Components/Footer';

import Employer_Poster_Video from '../../Home/Assets/VideoThumbnail/Employer_Poster_Video.jpg';
import EmployerPoster from '../../Home/Assets/VideoPoster/EmployerPoster.jpg'
import Video from '../../../Video/Video';
import Employer from '../../Home/Components/Employer';
import BreadCrumb from '../../../PersonalFunction/BreadCrumb/BreadCrumb';
import LogoSection from '../../BrandIdentity/Components/LogoSection';

import EliteZoneWhiteSymbol from '../../../PublicAssets/Logo_Icons/EliteZoneWhiteSymbol.svg';

function EmployerLanding() {

    const VideoMenuArray = [
        {
            Name: 'Employer',
            Thumbnail: Employer_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/Xx85weVAO2/h_,144_200,240_400,360_405,480_405,720_405,1080_405,k.mp4.list/master.m3u8",
            Poster: EmployerPoster
        },
    ]

    const Texts = {
        text1: {
            title: 'کارفرمایان، شایسته دریافت خدماتی شفاف و بهینه ',
            desc: 'الیت زون همراه شما در کاهش هزینه‌ها و افزایش کیفیت در پروژه‌های ساخت‌وساز...'
        },
    }

    const [HiddenCloseButton, setHiddenCloseButton] = useState(false)

    return (
        <>
            <Navbar />

            <BreadCrumb One={{ Link: '/employer', Text: 'کارفرمایان در اِلیت زون' }} />

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

            <Employer
                Exapanded={true}
            />

            <Footer />
        </>
    )
}

export default EmployerLanding