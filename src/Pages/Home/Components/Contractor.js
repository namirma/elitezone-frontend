import React, { useContext, useEffect, useState } from 'react'
import './CharacterStyle.css';
import TextShortener from '../../../PersonalFunction/TextShortener';
import { NavbarContext } from '../../../Context/NavbarContext';
import ShortenerButton from '../../../PersonalFunction/ShortenerButton';
import ContractorMainContent from '../../../Contents/Contractor/ContractorMain/MainContent/ContractorMainContent';
import ContentAnimation from './ContentAnimation';
import { ContractorMoreDetail } from '../../../Contents/Contractor/ContractorMain/MoreDetail/ContractorMoreDetail';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import ContractorBack from '../Assets/Lottie/Contractor/ContractorBack.svg';
import '@lottiefiles/lottie-player'
import MainButton from '../../../Buttons/Components/MainButton';
import VideoModal from './Modal/VideoModal';
import InviteFriendModal from './Modal/InviteFriendModal';
import MainButton2 from '../../../Buttons/Components/MainButton2';

function Contractor({ Exapanded }) {

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
      handleNavbarClick('Contractor', 64);
    }
  }, [isExpanded]);

  const { Under700 } = useContext(ResponsiveContext);
  const GridColumnValues = () => {
    return ContractorMoreDetail.map((_, index) => {
      if (!Under700) {
        if (index === 0 || index === 1) {
          return 'span 1'
        } else {
          return 'span 2'
        }
      }
      else {
        return 'span 2';
      }
    });
  };

  const gridColumn = GridColumnValues();

  const [VideoModalShow, setVideoModalShow] = useState(false);
  const handleVideoModalShow = () => {
    setVideoModalShow(true);
  }

  const [InviteFriendShow, setInviteFriendShow] = useState(false);

  return (
    <>
      <div className='CharacterStyle_container A_Style'>
        <div className='CharacterStyle_style B_Style'>

          <div className='container'>

            <div className='CharacterStyle_item1'>
              <div className='Img'>
                <img src={ContractorBack} alt='img' />
              </div>
              <div className='Lottie'>
                <lottie-player
                  src="https://gist.githubusercontent.com/alirewzak/d65127e0a3cfb53604b13785eb1d538a/raw/59b809b17972a2b8a0c4e2c20aa2789a9136c713/Contractor.json"
                  speed="1.5"
                  direction="1"
                  // mode="bounce"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>

            <div className='CharacterStyle_item2'>
              <span className='character_mobile'>
                <h1>پیمانکاران، قلب تپنده کارگاه ها!</h1>
                <div className='CharacterStyle_item2-text'>
                  <TextShortener value={ContractorMainContent} character={228} expanded={Exapanded ? Exapanded : expanded} />
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
                <ContentAnimation isExpanded={isExpanded} Content={ContractorMoreDetail} gridColumns={gridColumn} />
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
        VideoNumber={2}
      />

      <InviteFriendModal InviteFriendShow={InviteFriendShow} setInviteFriendShow={setInviteFriendShow} />

    </>
  )
}

export default Contractor