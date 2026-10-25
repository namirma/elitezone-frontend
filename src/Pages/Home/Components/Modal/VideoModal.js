import React, { useEffect, useRef, useState } from 'react';
import './VideoModal.css';
import '../../../Info/Components/Modal/ModalStyle.css';
import Modal from 'react-overlays/Modal';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';

import Concept_Poster_Video from '../../../Home/Assets/VideoThumbnail/Concept_Poster_Video.jpg'
import Engineer_Poster_Video from '../../../Home/Assets/VideoThumbnail/Engineer_Poster_Video.jpg'
import Contractor_Poster_Video from '../../../Home/Assets/VideoThumbnail/Contractor_Poster_Video.jpg'
import Suplier_Poster_Video from '../../../Home/Assets/VideoThumbnail/Suplier_Poster_Video.jpg'
import Employer_Poster_Video from '../../../Home/Assets/VideoThumbnail/Employer_Poster_Video.jpg'

import ConceptPoster from '../../../Home/Assets/VideoPoster/ConceptPoster.jpg';
import EngineerPoster from '../../../Home/Assets/VideoPoster/EngineerPoster.jpg';
import ContractorPoster from '../../../Home/Assets/VideoPoster/ContractorPoster.jpg';
import SupplierPoster from '../../../Home/Assets/VideoPoster/SupplierPoster.jpg';
import EmployerPoster from '../../../Home/Assets/VideoPoster/EmployerPoster.jpg';

import VideoControlerBar from '../../../../Video/ControlerBar/VideoControlerBar';
import VideoMenuButton from '../../../../Video/VideoMenu/Button/VideoMenuButton';
import CloseButton from '../../../../Video/CloseButton/CloseButton';
import VideoMenu from '../../../../Video/VideoMenu/Menu/VideoMenu';
import VideoPlayer from '../../../../Video/VideoPlayer/VideoPlayer';
import SlidingLink from '../../../../Video/SlidingLink/SlidingLink';
import { useAppContext } from '../../../../Context/AppContext';
import Video from '../../../../Video/Video';

function VideoModal({VideoNumber, ...props}) {

    const { VideoMenuShow, setVideoMenuShow, setNumberImgLoaded } = useAppContext();
    const [HiddenCloseButton, setHiddenCloseButton] = useState(false)

    const ModalRef = useRef();

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

    const [currentVideo, setCurrentVideo] = useState(VideoMenuArray[VideoNumber]);

    const handleClose = () => {
        if (VideoMenuShow) {
            setVideoMenuShow(false)
            setNumberImgLoaded(0)
        }
    }

    return (
        <>
            <Modal
                className='modal'
                show={props.VideoModalShow}
                onClick={(event) => ModalCloser(ModalRef, props.setVideoModalShow, event, handleClose)}
            >
                <div className="modalcontainer4" ref={ModalRef}>
                    <div style={{ position: 'relative', overflowX: 'hidden' }}>

                        {HiddenCloseButton === false &&
                            <CloseButton
                                setVideoModalShow={props.setVideoModalShow}
                            />
                        }

                        <Video
                            DisableVideoMenu={false}
                            DisableSlidingLink={false}
                            currentVideo={currentVideo}
                            setCurrentVideo={setCurrentVideo}
                            VideoMenuArray={VideoMenuArray}
                            setHiddenCloseButton={setHiddenCloseButton}
                        />

                    </div>
                </div>
            </Modal >
        </>
    );
}

export default VideoModal;


