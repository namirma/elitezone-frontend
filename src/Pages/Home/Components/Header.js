import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HiroBuilding from './../Assets/Hiro_Building.svg';
import Flash2_SecondaryEZ_Icon from './../../../PublicAssets/Arrow_Icons/Flash2_SecondaryEZ_Icon.svg';
// ContextNavbar2
import { useAppContext } from '../../../Context/AppContext';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import InviteFriendModal from './Modal/InviteFriendModal';
import MainButton2 from '../../../Buttons/Components/MainButton2';

function Header() {
  // Context
  const { UserLoggedIn } = useAppContext();
  const { Under700 } = useContext(ResponsiveContext);

  // Handle Height Of Header Title
  const TitleHeightRef = useRef(null);
  const [TitleHeight, setTitleHeight] = useState(null);

  const handleFixedTextHeightResize = () => {
    const Result = TitleHeightRef.current ? TitleHeightRef.current.offsetHeight : '';
    setTitleHeight(Result);
  }

  useEffect(() => {
    handleFixedTextHeightResize();
    window.addEventListener('resize', handleFixedTextHeightResize);
    window.addEventListener('orientationchange', handleFixedTextHeightResize);
    return () => {
      window.removeEventListener('resize', handleFixedTextHeightResize);
      window.addEventListener('orientationchange', handleFixedTextHeightResize);
    };
  }, [Under700]);

  const HeaderRef = useRef(null);

  // Handle Go Down Button
  const handleClick = () => {
    const CalcHeaderHeight = HeaderRef.current ? HeaderRef.current.clientHeight : 0;
    window.scrollTo(0, CalcHeaderHeight);
  };

  // Handle BigHiro Img
  const HeaderGroupHeightRef = useRef(null);
  const [HeightOfHeader, setHeightOfHeader] = useState(null);

  const handleImageResize = () => {
    const headerHeight = HeaderRef.current ? HeaderRef.current.offsetHeight : 0;
    const headerGroupHeight = HeaderGroupHeightRef.current ? HeaderGroupHeightRef.current.offsetHeight : 148;

    if (Under700) {
      setHeightOfHeader(headerHeight - headerGroupHeight);
    } else {
      setHeightOfHeader(headerHeight - 64);
    }
  };

  useEffect(() => {
    handleImageResize();
    window.addEventListener('resize', handleImageResize);
    // window.addEventListener('orientationchange', handleImageResize);
    return () => {
      window.removeEventListener('resize', handleImageResize);
      // window.removeEvekntListener('orientationchange', handleImageResize);
    };
  });

  const [InviteFriendShow, setInviteFriendShow] = useState(false);
  const HandleInviteClick = () => {
    setInviteFriendShow(true);
  };

  return (
    <>
      <div className='underlayer'>
        <div className='header-style'>
          <div className='header-content' ref={HeaderRef}>

            <div className='BigHero'>
              <img
                style={{ maxHeight: HeightOfHeader, maxWidth: '100%' }}
                src={HiroBuilding}
                alt="img"
              />
            </div>

            <div
              className='header-group'
              ref={HeaderGroupHeightRef}
            >
              <div className='HeaderTitle'>
                <div className='HeaderTitle-Fixed' ref={TitleHeightRef}>
                  در اِلیت زون همــــ
                </div>
                <div style={{ height: TitleHeight, display: TitleHeight === null && 'none', }} className='changeable'>
                  <div className='changeable-Item'>تیـــــــم</div>
                  <div className='changeable-Item'>کــــــــــار</div>
                  <div className='changeable-Item'>فـــــــکر</div>
                  <div className='changeable-Item'>ســــــــــو</div>
                  <div className='changeable-Item'>پیمـان</div>
                </div>
                <div className='HeaderTitle-Fixed'> هستیم. </div>
              </div>
              <div className='HeaderText'> مسیــری مـدرن در بـازار مصالـح سـاختـمــانی ایــران </div>
              {UserLoggedIn ? (
                <span className='Header_Button_Container' onClick={HandleInviteClick}>
                  <MainButton2 ButtonMode='Wine' Text='اشتراک گذاری' ImgMode={'Share'} />
                </span>
              ) : (
                <Link to='/auth' className='Header_Button_Container' style={{ textDecoration: 'none' }}>
                  <MainButton2 ButtonMode='Wine' Text='ثبت نام کنید' ImgMode={'Login'} />
                </Link>
              )}
            </div>

            <div className='GoToDownArrow' onClick={handleClick}>
              <img src={Flash2_SecondaryEZ_Icon} alt="Go-Down" />
            </div>

          </div>
        </div>
      </div>
      <InviteFriendModal InviteFriendShow={InviteFriendShow} setInviteFriendShow={setInviteFriendShow} />
    </>
  );
}

export default Header;
