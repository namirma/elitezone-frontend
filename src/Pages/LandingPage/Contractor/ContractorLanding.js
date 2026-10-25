import React, { useState } from 'react'
import Navbar from '../../Home/Components/Navbar';
import Footer from '../../Home/Components/Footer';

import Contractor_Poster_Video from '../../Home/Assets/VideoThumbnail/Contractor_Poster_Video.jpg';
import ContractorPoster from '../../Home/Assets/VideoPoster/ContractorPoster.jpg'
import Video from '../../../Video/Video';
import Contractor from '../../Home/Components/Contractor';
import BreadCrumb from '../../../PersonalFunction/BreadCrumb/BreadCrumb';
import LogoSection from '../../BrandIdentity/Components/LogoSection';

import EliteZoneWhiteSymbol from '../../../PublicAssets/Logo_Icons/EliteZoneWhiteSymbol.svg';

function ContractorLanding() {

    const VideoMenuArray = [
        {
            Name: 'Contractor',
            Thumbnail: Contractor_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/4e63pBjVWO/h_,144_200,240_400,360_412,480_412,720_412,1080_412,k.mp4.list/master.m3u8",
            Poster: ContractorPoster
        },
    ]

    const Texts = {
        text1: {
            title: 'پیمانکاران، قلب تپنده ساخت‌وساز ',
            desc: 'در الیت زون، به ساده‌ترین شکل ممکن مصالح ساختمانی را برای پروژه های خود یا کارفرمایان تامین و روند اجرایی پروژه‌ها را بهبود ببخشید...'
        },
    }

    const [HiddenCloseButton, setHiddenCloseButton] = useState(false)

    return (
        <>
            <Navbar />

            <BreadCrumb One={{ Link: '/contractor', Text: 'پیمانکاران در اِلیت زون' }} />

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

            <Contractor
                Exapanded={true}
            />

            <Footer />
        </>
    )
}

export default ContractorLanding