import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import EliteZoneWhite from '../../../PublicAssets/Logo_Icons/EliteZoneWhite.svg';
import EliteZoneWhiteSymbol from '../../../PublicAssets/Logo_Icons/EliteZoneWhiteSymbol.svg';
import LoginButton from '../../../Buttons/Components/LoginButton';
import ProfileButton from '../../Info/Components/ProfileButton/ProfileButton';
import { useAppContext } from "../../../Context/AppContext";
import { Squash as Hamburger } from 'hamburger-react';
import MenuItem from "./HamBurger/MenuItem";
import HmgburgerMenuContainer from "./HamBurger/HmgburgerMenuContainer";
import { NavbarContext } from "../../../Context/NavbarContext";
import { ResponsiveContext } from "../../../Context/ResponsiveContext";
import InviteFriendModal from "./Modal/InviteFriendModal";
import { motion, AnimatePresence } from 'framer-motion';
import AboutUsDropDown from "./AboutUsDropDown";
import MainButton2 from "../../../Buttons/Components/MainButton2";

function Navbar() {

  const { UserLoggedIn } = useAppContext();
  const { Under700, Under1280 } = useContext(ResponsiveContext);
  const { handleNavbarClick } = useContext(NavbarContext);
  const [InviteFriendShow, setInviteFriendShow] = useState(false);

  const HandleInviteClick = () => {
    setInviteFriendShow(true);
  };

  const MenuArray = [
    { title: 'دیـدگاه اِلیـت زون', id: 'Concept' },
    { title: 'مهنــدس', id: 'Engineer' },
    { title: 'پیمانکــار', id: 'Contractor' },
    { title: 'سوپلایــر', id: 'Supplier' },
    { title: 'کارفرمــا', id: 'Employer' },
    { title: 'ســوالات متداول', id: 'FAQ' },
    { title: 'ویدیوها', id: 'Video' },
    Under1280 ?
      { title: 'دربـــاره مــــا', id: 'AboutUs' }
      :
      { dropdown: (<AboutUsDropDown />) },
    {
      component: (
        <div style={{ direction: 'ltr', display: !Under700 && 'none', paddingTop: '24px' }}>
          {UserLoggedIn ? (
            <span onClick={HandleInviteClick}>
              <MainButton2 ButtonMode='Wine' Text='اشتراک گذاری' ImgMode={'Share'} />
            </span>
          ) : (
            <Link to='/auth' style={{ textDecoration: 'none' }}>
              <MainButton2 ButtonMode='Wine' Text='ثبت نام کنید' ImgMode={'Login'} />
            </Link>
          )}
        </div>
      )
    }
  ];

  const MenuArray2 = [
    { title: 'تماس با ما', id: 'ContactUs' },
    { title: 'هویت برند', id: 'BrandIdentity' },
    { title: 'تاریخچه', id: 'Aboutus' },
  ]

  const [ShowHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    if (!Under1280) {
      setShowHamburger(false);
    }
  }, [Under1280]);

  const [AboutUsDropDownValue, setAboutUsDropDownValue] = useState(false);

  const menuItems =
    AboutUsDropDownValue ?
      MenuArray2.map((item, index) => (
        <MenuItem
          key={index}
          delay={`${index * 0.04}s`}
          Component={item.component ? true : false}
          AboutUsDropDownValue={AboutUsDropDownValue}
          LastItemOfMenuArray={index === MenuArray2.length - 1}
          onClick={() => {
            setShowHamburger(false);
            handleNavbarClick(item.id, 64);
            setAboutUsDropDownValue(false)
          }}
        >
          {item.title}
        </MenuItem>
      ))
      :
      MenuArray.map((item, index) => (
        <MenuItem
          key={index}
          delay={`${index * 0.04}s`}
          Component={item.component ? true : false}
          ArrowImg={item.id === 'AboutUs' ? true : false}
          onClick={() => {
            if (!item.component && item.id !== 'AboutUs') {
              setShowHamburger(false);
              handleNavbarClick(item.id, 64);
            } else if (item.id === 'AboutUs') {
              setAboutUsDropDownValue(true)
            }
          }}
        >
          {item.title || item.component}
        </MenuItem>
      ));

  const HandleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div className='navbar-container'>
        <div className="navbar_wrapper">
          <div className='navbar-style'>
            {!Under1280 ? (
              <div className='navbar-content'>
                <div className='navbar-leftAndRight'>
                  {UserLoggedIn ? <ProfileButton /> : <LoginButton />}
                </div>
                <nav>
                  <ul className='ul'>
                    {MenuArray.map((item, index) => (
                      <div key={index} style={{ display: (item.component) ? 'none' : 'flex' }}>
                        {item.dropdown ?
                          (item.dropdown)
                          :
                          (
                            <li onClick={() => handleNavbarClick(item.id, 64)}>
                              <div className='underline-nav'>
                                <div className='padding-around-menu-text'>
                                  <span></span>  {item.title}
                                </div>
                              </div>
                            </li>
                          )}
                        <div style={{ display: (((MenuArray.length) - 2) === index) ? 'none' : '' }} className='divider-between-menu-item'> | </div>
                      </div>
                    ))}

                  </ul>
                </nav>
                <div className="navbar-leftAndRight">
                  <a style={{ display: 'inherit' }} href='/'> <img src={EliteZoneWhite} alt="img" /> </a>
                </div>
              </div>
            )
              :
              (
                <div className='navbar-content'>

                  {/* Profile Button Or Login Button */}
                  <AnimatePresence>
                    <motion.span
                      animate={{
                        opacity: (Under700 && ShowHamburger && !UserLoggedIn) ? 0 : 1,
                        visibility: (Under700 && ShowHamburger && !UserLoggedIn) ? 'hidden' : 'visible'
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {UserLoggedIn ? <ProfileButton /> : <LoginButton />}
                    </motion.span>
                  </AnimatePresence>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', direction: 'rtl' }}>

                    {/* Hamburger Menu Button */}
                    <span className="navbar-hamburger">
                      <span>
                        <Hamburger
                          toggled={ShowHamburger}
                          toggle={() => [setShowHamburger(!ShowHamburger), setAboutUsDropDownValue(false)]}
                          size={29}
                          color="white"
                          rounded
                        />
                      </span>
                    </span>

                    {/* Divider Between Hamburger and Logo */}
                    <div className='divider-between-menu-item1'>  </div>

                    {/* Logo */}
                    <div className="navbar-mobile-logo" style={{ marginRight: '16px' }}>
                      {Under700 ? (
                        <img src={EliteZoneWhiteSymbol} alt="img" style={{ maxWidth: '40px' }} onClick={HandleLogoClick} />
                      ) : (
                        <img src={EliteZoneWhite} alt="img" style={{ maxWidth: '180px' }} onClick={HandleLogoClick} />
                      )}
                    </div>

                  </div>
                </div>
              )}
          </div>
        </div>

        {/* Hamburger Menu */}
        <HmgburgerMenuContainer
          open={ShowHamburger}
          AboutUsDropDownValue={AboutUsDropDownValue}
          setAboutUsDropDownValue={setAboutUsDropDownValue}
        >
          {menuItems}
        </HmgburgerMenuContainer>

      </div>

      <InviteFriendModal InviteFriendShow={InviteFriendShow} setInviteFriendShow={setInviteFriendShow} />
    </>
  );
}

export default Navbar;

