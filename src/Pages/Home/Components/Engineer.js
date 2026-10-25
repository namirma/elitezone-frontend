import React, { useContext, useEffect, useState } from 'react'
import './CharacterStyle.css';
import TextShortener from '../../../PersonalFunction/TextShortener';
import EngineerMainContent from '../../../Contents/Engineer/EnginnerHome/MainExplain/EngineerMainContent';
import { EngineerMoreDetail } from '../../../Contents/Engineer/EnginnerHome/MoreDetail/EngineerMoreDetail';
import { NavbarContext } from '../../../Context/NavbarContext';
import ShortenerButton from '../../../PersonalFunction/ShortenerButton';
import ContentAnimation from './ContentAnimation';
import EngineerBack from '../Assets/Lottie/Engineer/EngineerBack.svg';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import '@lottiefiles/lottie-player';
import MainButton from '../../../Buttons/Components/MainButton';
import VideoModal from './Modal/VideoModal';
import InviteFriendModal from './Modal/InviteFriendModal';
import MainButton2 from '../../../Buttons/Components/MainButton2';

function Engineer({ Exapanded }) {

  const [expanded, setExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(Exapanded ? Exapanded : null);

  const toggleExpand = () => {
    const value = !expanded;
    setExpanded(value);
    (setIsExpanded && setIsExpanded(value));
  };

  const { handleNavbarClick } = useContext(NavbarContext);
  useEffect(() => {
    if (isExpanded === false) {
      handleNavbarClick('Engineer', 64);
    }
  }, [isExpanded]);

  const { Under700 } = useContext(ResponsiveContext);
  const GridColumnValues = () => {
    return EngineerMoreDetail.map((_, index) => {
      if (!Under700) {
        if (index === 0 || index === 3) {
          return 'span 2';
        }
        return 'span 1';
      }
      else {
        return 'span 2';
      }
    });
  };

  const gridColumns = GridColumnValues();

  const [VideoModalShow, setVideoModalShow] = useState(false);
  const handleVideoModalShow = () => {
    setVideoModalShow(true);
  }

  const [InviteFriendShow, setInviteFriendShow] = useState(false);

  return (
    <>
      <div className='CharacterStyle_container A_Style' style={{ position: 'relative' }}>
        <div className='CharacterStyle_style B_Style'>

          <div className='container'>

            <div className='CharacterStyle_item1'>
              <div className='Img'>
                <img src={EngineerBack} alt='img' />
              </div>
              <div className='Lottie'>
                <lottie-player
                  src="https://gist.githubusercontent.com/alirewzak/25aed59549fe89b8048bf7bd9f91fcfa/raw/54a6a0d62905c44ca52cb1fbc42521876005c956/Engineer.json"
                  speed="1.5"
                  direction="1"
                  mode="bounce"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>

            <div className='CharacterStyle_item2'>
              <span className='character_mobile'>
                <h1> بدون مهندسان، هرگز! </h1>
                <div className='CharacterStyle_item2-text' style={{ position: 'relative' }}>
                  <TextShortener value={EngineerMainContent} character={385} expanded={Exapanded ? Exapanded : expanded} />
                  {(!isExpanded && !Exapanded) &&
                    <ShortenerButton expanded={expanded} setExpanded={setExpanded} toggleExpand={toggleExpand} />
                  }
                </div>
              </span>

              {(!isExpanded && !Exapanded) &&
                <div className='character_Btn_Container'>
                  <div onClick={handleVideoModalShow}>
                    <MainButton2 ButtonMode='Wine' Text='مشاهده ویدیو' ImgMode={'Video'} />
                  </div>
                </div>
              }

            </div>
          </div>

          {isExpanded &&
            <>
              <div className='ContentAnimation-Container character_mobile'>
                <ContentAnimation isExpanded={isExpanded} Content={EngineerMoreDetail} gridColumns={gridColumns} />
              </div>

              {!Exapanded &&
                <div className='character_mobile' style={{ direction: 'rtl' }}>
                  <ShortenerButton expanded={expanded} setExpanded={setExpanded} toggleExpand={toggleExpand} />
                </div>
              }

              {!Exapanded &&
                <div className='character_Btn_Container'>
                  <div onClick={handleVideoModalShow}>
                    <MainButton2 ButtonMode='Wine' Text='مشاهده ویدیو' ImgMode={'Video'} />
                  </div>
                </div>
              }

              {Exapanded &&
                <div className='character_Btn_Container' style={{ marginTop: '24px' }}>
                  <div onClick={() => setInviteFriendShow(true)}>
                    <MainButton2 ButtonMode='Wine' Text='مشاهده ویدیو' ImgMode={'Video'} />
                  </div>
                </div>
              }

            </>
          }

        </div>
      </div>

      <VideoModal
        VideoModalShow={VideoModalShow}
        setVideoModalShow={setVideoModalShow}
        VideoNumber={1}
      />

      <InviteFriendModal InviteFriendShow={InviteFriendShow} setInviteFriendShow={setInviteFriendShow} />

    </>
  )
}

export default Engineer