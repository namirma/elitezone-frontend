import React, { useContext, useEffect, useState } from 'react'
import './CharacterStyle.css';
import TextShortener from '../../../PersonalFunction/TextShortener';
import { NavbarContext } from '../../../Context/NavbarContext';
import ShortenerButton from '../../../PersonalFunction/ShortenerButton';
import ContentAnimation from './ContentAnimation';
import SupplierMainContent from '../../../Contents/Supplier/SupplierMain/MainExplain/SupplierMainContent';
import { SupplierMoreDetail } from '../../../Contents/Supplier/SupplierMain/MoreDetail/SupplierMoreDetail';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import SupplierBack from '../Assets/Lottie/Supplier/SupplierBack.svg';
import '@lottiefiles/lottie-player';
import MainButton from '../../../Buttons/Components/MainButton';
import VideoModal from './Modal/VideoModal';
import InviteFriendModal from './Modal/InviteFriendModal';
import MainButton2 from '../../../Buttons/Components/MainButton2';

function Supplier({ Exapanded }) {

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
      handleNavbarClick('Supplier', 64);
    }
  }, [isExpanded]);

  const { Under700 } = useContext(ResponsiveContext);
  const GridColumnValues = () => {
    return SupplierMoreDetail.map((_, index) => {
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

  const gridColumns = GridColumnValues();

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
                <img src={SupplierBack} alt="img" />
              </div>
              <div className='Lottie'>
                <lottie-player
                  src="https://gist.githubusercontent.com/alirewzak/9ad37f9cebb6a9f8389b707a6837a5a5/raw/594d8c2367a84c00cfe9bb30331d543ab58e460a/Supplier.json"
                  speed="2"
                  direction="1"
                  // mode="bounce"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>

            <div className='CharacterStyle_item2'>
              <span className='character_mobile'>
                <h1> همه این پلتفرم برای سوپلایرها! </h1>
                <div className='CharacterStyle_item2-text'>
                  <TextShortener value={SupplierMainContent} character={295} expanded={Exapanded ? Exapanded : expanded} />
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
                <ContentAnimation isExpanded={isExpanded} Content={SupplierMoreDetail} gridColumns={gridColumns} />
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
        VideoNumber={3}
      />

      <InviteFriendModal InviteFriendShow={InviteFriendShow} setInviteFriendShow={setInviteFriendShow} />

    </>
  )
}

export default Supplier