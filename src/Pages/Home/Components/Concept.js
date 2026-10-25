import React, { useContext, useEffect, useRef } from 'react'
import './Concept.css';
import VideoModal from './Modal/VideoModal';
import { useState } from 'react';
import TextShortener from '../../../PersonalFunction/TextShortener';
import MainButton from '../../../Buttons/Components/MainButton';
import ShortenerButton from '../../../PersonalFunction/ShortenerButton';
import ConceptMainContent from '../../../Contents/Concept/ConceptMain/MainContent/ConceptMainContent';
import { ConceptMoreDetail } from '../../../Contents/Concept/ConceptMain/MoreDetail/ConceptMoreDetail';
import { NavbarContext } from '../../../Context/NavbarContext';
import ContentAnimation from './ContentAnimation';
import ConceptVideo from '../Assets/ConceptVideo.gif';
import ConceptMobileVideo from '../Assets/ConceptMobileVideo.gif';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import MainButton2 from '../../../Buttons/Components/MainButton2';

function Concept() {

  const { Under700 } = useContext(ResponsiveContext);

  const [expanded, setExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(null);

  const toggleExpand = () => {
    const value = !expanded;
    setExpanded(value);
    (setIsExpanded && setIsExpanded(value));
  };

  const [VideoModalShow, setVideoModalShow] = useState(false);
  const handleVideoModalShow = () => {
    setVideoModalShow(true);
  }

  const { handleNavbarClick } = useContext(NavbarContext);
  useEffect(() => {
    if (isExpanded === false) {
      handleNavbarClick('Concept', 64);
    }
  }, [isExpanded]);

  const videoRef1 = useRef(null);

  const [hasPlayed, setHasPlayed] = useState(false);

  // Update the video source based on `Under700` state
  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.src = Under700 ? ConceptMobileVideo : ConceptVideo;
      videoRef1.current.load();
      setHasPlayed(false);
    }
  }, [Under700]);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasPlayed) {
        videoRef1.current.play();
        setHasPlayed(true);
      }
    }, { threshold: [0.3, 0.5, 0.8] });

    if (videoRef1.current) observer1.observe(videoRef1.current);

    return () => {
      if (videoRef1.current) observer1.unobserve(videoRef1.current);
    };
  }, [hasPlayed]);

  // useEffect(() => {
  //   if (videoRef1.current) videoRef1.current.playbackRate = 1.5;
  // });

  return (
    <>
      <div className='Concept-container A_Style'>
        <div className='Concept-style B_Style'>

          <div className='Concept-img'>

            {/* <div className='Concept-img-hover' onClick={handleVideoModalShow}>
                <img src={PlayImg} alt='img' />
            </div> */}

            {/* <div className='Concept-img1'>
              <img src={ConceptImg} alt="Img" />
            </div>

            <div className='Concept-img2'>
              <img src={ConceptMobile} alt="Img" />
            </div> */}

            <video
              ref={videoRef1}
              muted
              playsInline
              src={Under700 ? ConceptMobileVideo : ConceptVideo}
            >
            </video>

            <div className='Concept-text'>

              <h1>اِلیت زون، ارتباط، تکنیک، درآمد</h1>

              <div className='Concept-text-content'>
                <TextShortener value={ConceptMainContent} character={453} expanded={expanded} />
              </div>

              {isExpanded &&
                <div className='ConceptContentAnimation' style={{ direction: 'rtl' }}>
                  <ContentAnimation isExpanded={isExpanded} Content={ConceptMoreDetail} />
                </div>
              }

              <div style={{ direction: 'rtl' }}>
                <div className='ConceptShortenerButton'>
                  <ShortenerButton expanded={expanded} setExpanded={setExpanded} toggleExpand={toggleExpand} />
                </div>
              </div>

              <div className='Concept-text-Button' onClick={handleVideoModalShow}>
                {/* <MainButton ButtonMode={1} ImgMode='Video' Text='مشاهده ویدیو' /> */}
                <MainButton2 ButtonMode='Wine' Text='مشاهده ویدیو' ImgMode={'Video'} />
              </div>

              <VideoModal
                VideoModalShow={VideoModalShow}
                setVideoModalShow={setVideoModalShow}
                VideoNumber={0}
               />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Concept