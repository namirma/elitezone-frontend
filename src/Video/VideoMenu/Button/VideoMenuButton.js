import React from 'react'
import VideoList from '../Assets/VideoList.svg';
import CloseVideo from '../Assets/CloseVideo.svg';

function VideoMenuButton({ VideoMenuShow, setVideoMenuShow }) {
    return (
        <>
            <div className='MenuVideoModal'
                onClick={() => [setVideoMenuShow(!VideoMenuShow)]}
            >
                {VideoMenuShow ?
                    <img src={CloseVideo} alt="img" />
                    :
                    <img src={VideoList} alt="img" />
                }

            </div>
        </>
    )
}

export default VideoMenuButton