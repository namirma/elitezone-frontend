import React, { useContext, useEffect, useState } from 'react'
import './CharacterStyle.css';
import TextShortener from '../../../PersonalFunction/TextShortener';
import { NavbarContext } from '../../../Context/NavbarContext';
import ShortenerButton from '../../../PersonalFunction/ShortenerButton';
import ContentAnimation from './ContentAnimation';
import EmployerMainContent from '../../../Contents/Employer/EmployerMain/MainContent/EmployerMainContent';
import { EmployerMoreDetail } from '../../../Contents/Employer/EmployerMain/MoreDetail/EmployerMoreDetail';
import EmployerBack from '../Assets/Lottie/Employer/EmployerBack.svg';
import '@lottiefiles/lottie-player';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import MainButton from '../../../Buttons/Components/MainButton';
import VideoModal from './Modal/VideoModal';
import InviteFriendModal from './Modal/InviteFriendModal';
import MainButton2 from '../../../Buttons/Components/MainButton2';

function Employer({ Exapanded }) {

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
      handleNavbarClick('Employer', 64);
    }
  }, [isExpanded]);


  const { Under700 } = useContext(ResponsiveContext);
  const GridColumnValues = () => {
    return EmployerMoreDetail.map((_, index) => {
      if (!Under700) {
        if (index === 0 || index === 3) {
          return 'span 2'
        } else {
          return 'span 1'
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
                <img src={EmployerBack} alt="img" style={{ zIndex: '1' }} />
              </div>
              <div className='Lottie' style={{ zIndex: 2 }}>
                <lottie-player
                  backgroundempl="red"
                  src="https://gist.githubusercontent.com/alirewzak/9b93359e083d9e848dd477fce282540e/raw/5cf527388dcc737df11497e891b4cc409f22d686/Employer.json"
                  speed="1.5"
                  direction="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>

            <div className='CharacterStyle_item2'>
              <span className='character_mobile'>
                <h1>کارفرمایان، فرماندهان صنعت ساختمان ایران!</h1>
                <div className='CharacterStyle_item2-text'>
                  <TextShortener value={EmployerMainContent} character={247} setIsExpanded={setIsExpanded} expanded={Exapanded ? Exapanded : expanded} />
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
              <div className='ContentAnimation-Container  character_mobile'>
                <ContentAnimation isExpanded={isExpanded} Content={EmployerMoreDetail} gridColumns={gridColumn} />
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
        VideoNumber={4}
      />

      <InviteFriendModal InviteFriendShow={InviteFriendShow} setInviteFriendShow={setInviteFriendShow} />

    </>
  )
}

export default Employer