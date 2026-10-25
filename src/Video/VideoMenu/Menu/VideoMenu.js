import React, { useEffect, useState } from "react";
import './VideoMenu.css';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingDots from "../../../Pages/Auth/Components/LoadingDots";
import { useAppContext } from "../../../Context/AppContext";


const VideoMenu = ({
    videoRef,
    VideoMenuArray,
    currentVideo,
    setCurrentVideo,
    VideoMenuShow,
    setVideoMenuShow,
    setProgress,
    setIsPlaying,
    setIsMuted,
    NumberImgLoaded,
    setNumberImgLoaded,
}) => {

    const [IsAllthumbnailLoaded, setIsAllthumbnailLoaded] = useState(false);

    const handleLoadImg = () => {
        setNumberImgLoaded((prevState) => prevState + 1);
    };
    useEffect(() => {
        if (NumberImgLoaded === (VideoMenuArray.length - 1)) {
            setIsAllthumbnailLoaded(true);
        }
    }, [NumberImgLoaded]);

    const handleVideoSelection = (video) => {
        setVideoMenuShow(false); // Close the video menu
        setNumberImgLoaded(0); // Reset loaded images count
        setProgress(0); // Reset video progress
        setIsPlaying(false); // Pause the video
        setIsMuted(false); // Unmute video
        setCurrentVideo(video); // Update selected video

        // Ensure the videoRef is updated without rendering issues
        if (videoRef.current) {
            videoRef.current.load();
        }
    };

    return (
        <>
            <AnimatePresence>
                {VideoMenuShow &&
                    <motion.div
                        className='VideMenuContainer'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2, type: 'tween', ease: 'easeInOut' }}
                    >

                        <div className='VideoMenu' style={{ display: !IsAllthumbnailLoaded && 'none' }}>
                            {VideoMenuArray.filter(video => currentVideo && video.Name !== currentVideo.Name)
                                .map((item, index) => (
                                    <div key={index} onClick={() => handleVideoSelection(item)}>
                                        <img src={item.Thumbnail} alt={item.Name} onLoad={handleLoadImg} />
                                    </div>
                                ))}
                        </div>

                        {!IsAllthumbnailLoaded &&
                            <LoadingDots Color='white' />
                        }

                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default VideoMenu