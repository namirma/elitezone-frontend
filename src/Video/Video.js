import React, { useEffect, useRef, useState } from 'react'
import VideoMenuButton from './VideoMenu/Button/VideoMenuButton';
import VideoMenu from './VideoMenu/Menu/VideoMenu';
import SlidingLink from './SlidingLink/SlidingLink';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoControlerBar from './ControlerBar/VideoControlerBar';

function Video({
    currentVideo,
    setCurrentVideo,
    VideoMenuArray,
    DisableVideoMenu,
    DisableSlidingLink
    , setHiddenCloseButton
}) {

    const videoRef = useRef();

    const [VideoMenuShow, setVideoMenuShow] = useState(false)
    const [progress, setProgress] = useState(0);
    const [IsPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [NumberImgLoaded, setNumberImgLoaded] = useState(0);
    const [PopUpLink, setPopUpLink] = useState({ state: false, text: '', src: null })
    const [elapsedTime, setElapsedTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        if (VideoMenuShow) {
            setHiddenCloseButton(true)
        }
        else {
            setHiddenCloseButton(false)
        }
    }, [VideoMenuShow])

    return (
        <>
            {/* Video Menu Button */}
            {!DisableVideoMenu &&
                <>
                    <VideoMenuButton
                        VideoMenuShow={VideoMenuShow}
                        setVideoMenuShow={setVideoMenuShow}
                    />

                    <VideoMenu
                        videoRef={videoRef}
                        VideoMenuArray={VideoMenuArray}
                        currentVideo={currentVideo}
                        setCurrentVideo={setCurrentVideo}
                        VideoMenuShow={VideoMenuShow}
                        setVideoMenuShow={setVideoMenuShow}
                        setProgress={setProgress}
                        setIsPlaying={setIsPlaying}
                        setIsMuted={setIsMuted}
                        NumberImgLoaded={NumberImgLoaded}
                        setNumberImgLoaded={setNumberImgLoaded}
                    />
                </>
            }

            {!DisableSlidingLink &&
                <SlidingLink
                    videoRef={videoRef}
                    currentVideo={currentVideo}
                    setCurrentVideo={setCurrentVideo}
                    PopUpLink={PopUpLink}
                    setPopUpLink={setPopUpLink}
                    setProgress={setProgress}
                    setIsPlaying={setIsPlaying}
                    setIsMuted={setIsMuted}
                />
            }

            <div className='VideoModalContainer'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '100%',
                    width: '100%',
                    boxSizing: 'border-box',
                    overflow: 'auto'
                }}>

                    <VideoPlayer
                        videoRef={videoRef}
                        currentVideo={currentVideo}
                        setTotalTime={setTotalTime}
                        setProgress={setProgress}
                        setIsPlaying={setIsPlaying}
                        setElapsedTime={setElapsedTime}
                        setVideoMenuShow={setVideoMenuShow}
                        setIsMuted={setIsMuted}
                    />

                    <VideoControlerBar
                        videoRef={videoRef}
                        currentVideo={currentVideo}
                        IsPlaying={IsPlaying}
                        setIsPlaying={setIsPlaying}
                        isMuted={isMuted}
                        setIsMuted={setIsMuted}
                        totalTime={totalTime}
                        elapsedTime={elapsedTime}
                    />

                </div>
            </div>
        </>
    )
}

export default Video