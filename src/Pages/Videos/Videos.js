import React, { useState, useRef } from 'react';
import './Videos.css';
import Navbar from '../Home/Components/Navbar';
import Concept_Poster_Video from '../Home/Assets/VideoThumbnail/Concept_Poster_Video.jpg'
import Engineer_Poster_Video from '../Home/Assets/VideoThumbnail/Engineer_Poster_Video.jpg'
import Contractor_Poster_Video from '../Home/Assets/VideoThumbnail/Contractor_Poster_Video.jpg'
import Suplier_Poster_Video from '../Home/Assets/VideoThumbnail/Suplier_Poster_Video.jpg'
import Employer_Poster_Video from '../Home/Assets/VideoThumbnail/Employer_Poster_Video.jpg'

import ConceptPoster from '../Home/Assets/VideoPoster/ConceptPoster.jpg';
import EngineerPoster from '../Home/Assets/VideoPoster/EngineerPoster.jpg';
import ContractorPoster from '../Home/Assets/VideoPoster/ContractorPoster.jpg';
import SupplierPoster from '../Home/Assets/VideoPoster/SupplierPoster.jpg';
import EmployerPoster from '../Home/Assets/VideoPoster/EmployerPoster.jpg';
import Video from '../../Video/Video';

function Videos() {


    const VideoMenuArray = [
        {
            Name: 'Concept',
            Thumbnail: Concept_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/5aEjnL87kV/h_,144_200,240_391,360_391,480_391,720_391,1080_391,k.mp4.list/master.m3u8",
            Poster: ConceptPoster
        },

        {
            Name: 'Engineer',
            Thumbnail: Engineer_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/qBYP8mz5Al/h_,144_200,240_400,360_411,480_411,720_411,1080_411,k.mp4.list/master.m3u8",
            Poster: EngineerPoster
        },

        {
            Name: 'Contractor',
            Thumbnail: Contractor_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/4e63pBjVWO/h_,144_200,240_400,360_412,480_412,720_412,1080_412,k.mp4.list/master.m3u8",
            Poster: ContractorPoster
        },

        {
            Name: 'Supplier',
            Thumbnail: Suplier_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/VYqP8JWA3R/h_,144_200,240_400,360_404,480_404,720_404,1080_404,k.mp4.list/master.m3u8",
            Poster: SupplierPoster
        },

        {
            Name: 'Employer',
            Thumbnail: Employer_Poster_Video,
            src: "https://elitezone.arvanvod.ir/Q9vyBeKeD6/Xx85weVAO2/h_,144_200,240_400,360_405,480_405,720_405,1080_405,k.mp4.list/master.m3u8",
            Poster: EmployerPoster
        },
    ];

    const Texts = {
        text1: {
            title: 'الیت زون؛ پلی بین مهندسین، پیمانکاران، تامین‌کنندگان و کارفرمایان',
            desc: 'با ما، خرید مصالح ساختمانی به ساده‌ترین، سریع‌ترین و کارآمدترین شکل ممکن انجام می‌شود... '
        },

        text2: {
            title: 'مهندسین، کلید طراحی و مدیریت پروژه‌های موفق ',
            desc: 'در الیت زون، ابزارها و منابع لازم برای اجرای دقیق و حرفه‌ای پروژه‌ها با ارائه مشاوره فنی به کارفرمایان برای خرید مصالح ساختمانی با کیفیت در اختیار شماست...'
        },

        text3: {
            title: 'پیمانکاران، قلب تپنده ساخت‌وساز ',
            desc: 'در الیت زون، به ساده‌ترین شکل ممکن مصالح ساختمانی را برای پروژه های خود یا کارفرمایان تامین و روند اجرایی پروژه‌ها را بهبود ببخشید...'
        },

        text4: {
            title: ' تامین‌کنندگان، پشتوانه اصلی پروژه‌های عمرانی ',
            desc: 'الیت زون فرصت نمایش محصولات شما را به بهترین مخاطبان در صنعت ساختمان فراهم می‌کند...'
        },

        text5: {
            title: 'کارفرمایان، شایسته دریافت خدماتی شفاف و بهینه ',
            desc: 'الیت زون همراه شما در کاهش هزینه‌ها و افزایش کیفیت در پروژه‌های ساخت‌وساز...'
        },
    }

    const [HiddenCloseButton, setHiddenCloseButton] = useState(false)

    return (
        <>
            <Navbar />
            <div className="Video-container">
                {VideoMenuArray.map((video, index) => {
                    const textKey = `text${index + 1}`;
                    const { title, desc } = Texts[textKey];

                    return (
                        <span key={index}>
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
        </>
    )
}

export default Videos