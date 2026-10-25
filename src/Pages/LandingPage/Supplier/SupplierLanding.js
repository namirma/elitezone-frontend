import React, { useState } from 'react'
import Navbar from '../../Home/Components/Navbar';
import Footer from '../../Home/Components/Footer';

import Suplier_Poster_Video from '../../Home/Assets/VideoThumbnail/Suplier_Poster_Video.jpg';
import SupplierPoster from '../../Home/Assets/VideoPoster/SupplierPoster.jpg'
import Video from '../../../Video/Video';
import Supplier from '../../Home/Components/Supplier';
import BreadCrumb from '../../../PersonalFunction/BreadCrumb/BreadCrumb';
import LogoSection from '../../BrandIdentity/Components/LogoSection';

import EliteZoneWhiteSymbol from '../../../PublicAssets/Logo_Icons/EliteZoneWhiteSymbol.svg';

function SupplierLanding() {

    const VideoMenuArray = [
        {
            Name: 'Supplier',
            Thumbnail: Suplier_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/VYqP8JWA3R/h_,144_200,240_400,360_404,480_404,720_404,1080_404,k.mp4.list/master.m3u8",
            Poster: SupplierPoster
        },

    ]

    const Texts = {
        text1: {
            title: ' تامین‌کنندگان، پشتوانه اصلی پروژه‌های عمرانی ',
            desc: 'الیت زون فرصت نمایش محصولات شما را به بهترین مخاطبان در صنعت ساختمان فراهم می‌کند...'
        },
    }

    const [HiddenCloseButton, setHiddenCloseButton] = useState(false)

    return (
        <>
            <Navbar />

            <BreadCrumb One={{ Link: '/supplier', Text: 'تامین‌کنندگان در اِلیت زون' }} />

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

            <Supplier
                Exapanded={true}
            />

            <Footer />
        </>
    )
}

export default SupplierLanding