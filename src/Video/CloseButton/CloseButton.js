import React from 'react';
import CloseVideo from '../VideoMenu/Assets/CloseVideo.svg'
import { useAppContext } from '../../Context/AppContext';

function CloseButton({ setVideoModalShow, VideoMenuShow }) {

    const { setVideoMenuShow, setNumberImgLoaded } = useAppContext();

    return (
        <>
                <div className='CloseVideoModal'
                    onClick={() =>
                        [
                            setVideoModalShow(false),
                            setVideoMenuShow(false),
                            setNumberImgLoaded(0)
                        ]}
                >
                    <img src={CloseVideo} alt="img" />
                </div>
        </>
    )
}

export default CloseButton