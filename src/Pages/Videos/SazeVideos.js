import React, { useState } from 'react';
import './Videos.css';
import Saze90Poster from '../Home/Assets/VideoPoster/Saze90Poster.jpg'
import Navbar from '../Home/Components/Navbar';
import Video from '../../Video/Video';
import Footer from '../Home/Components/Footer';

function SazeVideos() {

    const VideoMenuArray = [
        {
            Name: 'Saze',
            Thumbnail: Saze90Poster,
            src: "https://elitezone.arvanvod.ir/q8JWOZdkXg/GNRjVw7rqn/h_,144_200,240_400,360_457,480_457,720_457,1080_457,k.mp4.list/master.m3u8",
            Poster: Saze90Poster
        },
    ];

    const Texts = {
        text1: {
            title: 'ما الیت زون را برای شما ساخته ایم!',
            desc: <>
                وقتشه که از توانایی‌هاتون در طراحی سازه یک قدم فراتر برید.
                <br />
                الیت زون به شما کمک می‌کنه که نه‌تنها تعهدات تکنیکال خودتون را به عنوان یه مهندس در بخش مصالح ساختمانی به بهترین نحو انجام بدین، بلکه به کسب درآمد بیشتر هم برسید.
                <br />
                با
                <a href="/auth" style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> ثبت نام زودهنگام در الیت زون</a>
                 ، علاوه بر دریافت نشان PIONEER به شبکه‌ای از مهندسین حرفه‌ای، کارفرمایان بزرگ، و سوپلایرهای معتبر متصل می‌شید. 
                <br />
                همکاری سازنده در فروش مصالح ساختمانی، تجربه‌ای جدید و سودآور برای کاربران سازه۹۰ خواهد بود.
                <br />
                <br />
                همین حالا قدم اول رو بردارید و با
                <a href="/auth" style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> ثبت نام در این پلتفرم </a>
                بی نظیر به جمع برترین‌های صنعت ساخت‌وساز ایران بپیوندید!
            </>
        },
    }
    const [HiddenCloseButton, setHiddenCloseButton] = useState(false)

    const iframeStyles = {
        position: "relative",
        overflow: "hidden",
        width: "200px",
        height: "200px",
        // paddingTop: "56.25%",
    };

    const innerIframeStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "0",
    };


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

            <Footer />
        </>
    )
}

export default SazeVideos