import React, { useContext, useEffect, useState } from 'react'
import './Footer.css';

import EliteZoneWhite from './../../../PublicAssets/Logo_Icons/EliteZoneWhite.svg';

import LowestPrice from '../Assets/Footer/LowestPrice.svg'
import HighestQuality from '../Assets/Footer/HighestQuality.svg'
import IntegratedStructure from '../Assets/Footer/IntegratedStructure.svg'
import QualityAssurance from '../Assets/Footer/QualityAssurance.svg'
import WeAllWin from '../Assets/Footer/WeAllWin.svg'

import Daneshbonyan from '../Assets/Footer/License/Daneshbonyan.png'
import SazmanSenfi from '../Assets/Footer/License/SazmanSenfi.png'
import Enamad from '../Assets/Footer/License/Enamad-logo.png'

import SAZE90 from './../Assets/Footer/SocialMedia/SAZE90.svg';
import IIIwe from './../Assets/Footer/SocialMedia/IIIwe.svg';
import Spider from './../Assets/Footer/SocialMedia/Spider.svg';
import Instagram from './../Assets/Footer/SocialMedia/Instagram.png';
import Telegram from './../Assets/Footer/SocialMedia/Telegram.png';

import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import Flash2_White_Icon from '../../../PublicAssets/Arrow_Icons/Flash2_White_Icon.svg';
import { NavbarContext } from '../../../Context/NavbarContext';
import { useNavigate } from 'react-router-dom';
import MailerLiteForm from '../../../PersonalFunction/MailerLiteForm';

function Footer() {

  const { handleNavbarClick } = useContext(NavbarContext);

  const { Under1280 } = useContext(ResponsiveContext);

  const [ListLink, setListLink] = useState([]);
  const handleClick = (value) => {
    const alreadyExist = ListLink.includes(value)
    if (alreadyExist) {
      setListLink(ListLink.filter((item) => item !== value))
    } else {
      setListLink([value])
    }
  }


  const navigate = useNavigate();

  //   const enamadCode = `
  //   <a 
  //     referrerpolicy='origin'
  //     target='_blank'
  //     href='https://trustseal.enamad.ir/?id=560326&Code=rh7EtNcs9fODyjFHG37DAa2YO8FNbhaN'
  //   >
  //     <img
  //       referrerpolicy='origin'
  //       src='https://trustseal.enamad.ir/Content/Images/Star2/81.png?v=5.0.0.3777' 
  //       alt='Enamad Logo' 
  //       class='enamad-img'
  //       code='rh7EtNcs9fODyjFHG37DAa2YO8FNbhaN' 
  //     />
  //   </a>
  // `;
  return (
    <>
      <div className='footer-container'>
        <div className='footer-style'>

          <div className='footer-content'>
            <img src={EliteZoneWhite} className='img' alt='img' />
            <p className='text'>مسیــری مـدرن در بـازار مصالـح سـاختـمــانی ایــران  </p>
            <div className='description'>
              <span className='wrapper'>
                <span className='title'>شماره تماس : </span>
                <a href="tel:03134005000" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span className='value'> 031-34005000</span>
                </a>
              </span>
              <span className='divider'> | </span>
              <span className='wrapper'>
                <span className='title'>ایمیل : </span>
                <a href="mailto:info@elitezone.me" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span className='value' style={{ fontFamily: 'SFLight', letterSpacing: '2px' }}> Info@EliteZone.me </span>
                </a>
              </span>
            </div>
          </div>

          {!Under1280 &&
            <div className='footer-imgExplaintion'>

              <div>
                <img src={QualityAssurance} alt='img' />
                <span className='desc'> کالای استاندارد </span>
              </div>

              <div>
                <img src={LowestPrice} alt='img' />
                <div className='desc'> خرید اعتباری </div>
              </div>

              <div>
                <img src={IntegratedStructure} alt='img' />
                <div className='desc'> همه دیوایس ها </div>
              </div>

              <div>
                <img src={HighestQuality} alt='img' />
                <div className='desc'> تضمین کیفیت </div>
              </div>

              <div>
                <img src={WeAllWin} alt='img' />
                <div className='desc'> همه برنده اند! </div>
              </div>

            </div>
          }

          <div className='footer-List-Container'>

            <div className='footer-List' onClick={() => handleClick('withelitezone')}>
              <div className='title'>
                با اِلیت‌زون

                {Under1280 &&
                  <img src={Flash2_White_Icon} alt='img' style={{ transform: ListLink.includes('withelitezone') ? 'rotate(-270deg)' : 'rotate(-90deg)' }} />
                }

              </div>

              {Under1280 ?
                <>
                  {ListLink.includes('withelitezone') &&
                    <>
                      <div className='item' onClick={() => handleNavbarClick('ContactUs', 64)}>تماس با ما</div>
                      <div className='item' onClick={() => handleNavbarClick('BrandIdentity', 64)}>هویت برند</div>
                      <div className='item' onClick={() => handleNavbarClick('Aboutus', 64)}>تاریخچه</div>
                    </>
                  }
                </>
                :
                <>
                  <div className='item' onClick={() => handleNavbarClick('ContactUs', 64)}>تماس با ما</div>
                  <div className='item' onClick={() => handleNavbarClick('BrandIdentity', 64)}>هویت برند</div>
                  <div className='item' onClick={() => handleNavbarClick('Aboutus', 64)}>تاریخچه</div>
                </>
              }
            </div>

            <div className='footer-List'>

              <div className='title' onClick={() => handleClick('customerservice')}>
                خدمات مشتریان

                {Under1280 &&
                  <img src={Flash2_White_Icon} alt='img' style={{ transform: ListLink.includes('customerservice') ? 'rotate(-270deg)' : 'rotate(-90deg)' }} />
                }

              </div>

              {Under1280 ?
                <>
                  {ListLink.includes('customerservice') &&
                    <>
                      <div className='item' onClick={() => handleNavbarClick('FAQ', 64)}>سوالات متداول</div>
                      <div className='item' onClick={() => navigate('/terms')}>شرایط الیت زون</div>
                      <div className='item' onClick={() => navigate('/privacy')}>حریم خصوصی</div>
                      <div className='item' onClick={() => handleNavbarClick('ContactUs', 64)}>گزارش خطا</div>
                    </>
                  }
                </>
                :
                <>
                  <div className='item' onClick={() => handleNavbarClick('FAQ', 64)}>سوالات متداول</div>
                  <div className='item' onClick={() => navigate('/terms')}>شرایط الیت زون</div>
                  <div className='item' onClick={() => navigate('/privacy')}>حریم خصوصی</div>
                  <div className='item' onClick={() => handleNavbarClick('SQGA', 64)}>گزارش خطا</div>
                </>
              }
            </div>

            <div className='footer-List'>
              <div className='title' onClick={() => handleClick('instruction')}>
                فرآیند اجرایی
                {Under1280 &&
                  <img src={Flash2_White_Icon} alt='img' style={{ transform: ListLink.includes('instruction') ? 'rotate(-270deg)' : 'rotate(-90deg)' }} />
                }
              </div>

              {Under1280 ?
                <>
                  {ListLink.includes('instruction') &&
                    <>
                      <div className='item' onClick={() => navigate('/role-engineer')}>مهندس</div>
                      <div className='item' onClick={() => navigate('/role-contractor')}>پیمانکار</div>
                      <div className='item' onClick={() => navigate('/role-supplier')}>سوپلایر</div>
                      <div className='item' onClick={() => navigate('/role-employer')}>کارفرما</div>
                    </>
                  }
                </>
                :
                <>
                  <div className='item' onClick={() => navigate('/role-engineer')}>مهندس</div>
                  <div className='item' onClick={() => navigate('/role-contractor')}>پیمانکار</div>
                  <div className='item' onClick={() => navigate('/role-supplier')}>سوپلایر</div>
                  <div className='item' onClick={() => navigate('/role-employer')}>کارفرما</div>
                </>
              }

            </div>

            <div className='footer-incos'>
              <div className='title'> همراه ما باشید </div>
              <div className='icons'>
                <img src={SAZE90} alt="img" onClick={() => window.open(" https://www.saze90.com", "_blank")} />
                <img src={IIIwe} alt="img" onClick={() => window.open("https://www.iiiwe.com/member", "_blank")} />
                <img src={Spider} alt="img" onClick={() => window.open("https://spidtech.com/products/spider", "_blank")} />
                <img src={Instagram} alt="img" onClick={() => window.open("https://www.instagram.com/sazesoftwaregroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")} />
                <img src={Telegram} alt="img" onClick={() => window.open("https://t.me/SAZESoftwareGroup", "_blank")} />
              </div>

              <div className='title'> با ثبت ایمیل، از جدید‌ترین اخبار اِلیت‌زون با‌خبر شوید </div>
              <div className="email">
                {/* MailerLite Embedded Form */}
                <MailerLiteForm />
              </div>
            </div>

          </div>

          <div className='footer-license'>
            {!Under1280 && (
              <div className='text'>
                EliteZone منطقه نخبگان صنعت ساختمان ایران است! مهندسان و پیمانکاران از طریق این سامانه سوپلایرها (تأمین‌کنندگان ممتاز) را به کارفرمایان وصل می کنند تا کل بازار مصالح ساختمانی ایران اینجا شکل بگیرد. تنها در سال 1403 مساحت پروژه های در دسترس در EliteZone از طریق مهندسانِ کاربر نرم افزار SAZE90 ده ها میلیون مترمربع است!
              </div>
            )}
            <img src={Daneshbonyan} alt='Daneshbonyan' />
            <img
              src={SazmanSenfi}
              alt='SazmanSenfi'
              onClick={() =>
                window.open(
                  "https://esfahan.irannsr.org/fa/page/104571-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D9%87-%D8%A7%D8%B9%D8%B6%D8%A7.html?ctp_id=1086&id=27182",
                  "_blank"
                )
              }
            />

            <a
              href='https://trustseal.enamad.ir/?id=560326&Code=rh7EtNcs9fODyjFHG37DAa2YO8FNbhaN'
              className='enamad-container'
              target='_blank'
              referrerPolicy='origin'
            >
              <div>
                <img
                  referrerPolicy='origin'
                  src={Enamad}
                  alt='نماد اعتماد الکترونیک'
                  code='rh7EtNcs9fODyjFHG37DAa2YO8FNbhaN'
                />
              </div>
            </a>

      </div>

      <div className='final-text'>
        <p> کلیه حقوق برای شرکت نرم افزاری اسپادانا (SAZE90.COM) محفوظ است. </p>
      </div>

    </div >
      </div >
    </>
  )
}

export default Footer