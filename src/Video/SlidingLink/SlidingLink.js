import React, { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from "../../Context/AppContext";

const SlidingLink = ({
    videoRef,
    setCurrentVideo,
    PopUpLink,
    setPopUpLink,
    setProgress,
    setIsPlaying,
    setIsMuted
}) => {

    useEffect(() => {
        setTimeout(() => {
            if (PopUpLink.state) {
                setPopUpLink({
                    state: false,
                    text: '',
                    src: null,
                });
            }
        }, 2000);
    }, [PopUpLink.state])

    //Handle PopUp Link 
    const handlePopUpLinkClick = () => {
        if (PopUpLink.src) {
            // Set the selected video as current
            setCurrentVideo({ src: PopUpLink.src });
            setProgress(0);
            setIsPlaying(true);
            setIsMuted(false);

            // Load and play the new video
            videoRef.current.load(); // Load the new source
            videoRef.current.play(); // Start playing
        }

        // Hide the popup after click
        setPopUpLink({
            state: false,
            text: '',
            src: null,
        });
    };

    return (
        <>
            <AnimatePresence>
                {/* PopUp Link */}
                {PopUpLink.state &&
                    <motion.div
                        className='PopUpVideoLink'
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        onClick={handlePopUpLinkClick}
                    >
                        {PopUpLink.text}
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default SlidingLink