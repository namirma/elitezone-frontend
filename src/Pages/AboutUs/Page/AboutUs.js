import React from 'react'
import './AboutUs.css';
import Navbar from '../../Home/Components/Navbar';
import AboutUsText from '../Components/AboutUsText';
import AboutUsYear from '../Components/AboutUsYear';
import AboutUsContent from '../Components/Content/AboutUsContent';
import LogoSection from '../../BrandIdentity/Components/LogoSection';
import SazeLogo from '../Assets/SazeLogo.svg';
import BreadCrumb from '../../../PersonalFunction/BreadCrumb/BreadCrumb';
import Footer from '../../Home/Components/Footer';

function AboutUs() {

  const S1400 = {
    texts: [
      { text: 'الیت زون مسیری مدرن در بازار مصالح ساختمانی ایران', link: null },
      { text: 'دکترسازه چکر منتشر شد', link: 'https://www.saze90.com/checker' },
      { text: 'استقرار در شهرک علمی-تحقیقاتی اصفهان', link: null },
      { text: 'CIS-China Partnership', link: 'https://cisec.cn/Spider/Spider.aspx' },
      { text: 'OMNIX International Partnership', link: 'https://omnix.com/omnix-partner/spider/' },
      { text: 'Sulaymaniyah- CHP Show', link: null },
      { text: 'DUBAI-BIG5 Fair', link: null },
      { text: 'DUBAI-BIG5 Fair', link: null },
      { text: 'SAZE90 in International Market', link: 'https://spidtech.com/' },
    ],
    images: [
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/55.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/47.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/54.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/53.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/52.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/51.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/50.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/49.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/48.png?versionId=',
    ],
  };


  const S1398 = {
    texts: [
      { text: 'SAZE90, Ver 1400-Fast Import منتشر شد.', link: null },
      { text: 'ریبراندینگ محصولات', link: null },
      { text: 'دیتایلر اجزاء غیرسازه ای NSE منتشر شد.', link: null },
      { text: 'DrSAZE-FRP منتشر شد.', link: null },
      { text: 'RED-Factor منتشر شد.', link: null }
    ],
    images: [
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/45.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/46.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/44.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/42.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/43.png?versionId=',
    ]
  };
  
  const S1395 = {
    texts: [
      { text: 'توسعه بازار', link: null },
      { text: '(1) SAZEMINAR اصفهان', link: null },
      { text: '(2) SAZEMINAR اصفهان', link: null },
      { text: '(3) SAZEMINAR اصفهان', link: null },
      { text: '(1) SAZEMINAR تهران', link: null },
      { text: '(2) SAZEMINAR تهران', link: null },
      { text: '(3) SAZEMINAR تهران', link: null }
    ],
    images: [
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/41.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/38.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/39.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/40.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/37.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/36.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/35.png?versionId=',
    ]
  };
  
  const S1390 = {
    texts: [
      { text: 'SPIDTECH دروازه صادرات', link: 'https://spidtech.com/' },
      { text: 'توسعه تیم', link: null },
      { text: 'چاپ کتاب ETABS2016+SAZE90', link: null },
      { text: 'اپلیکیشن های موبایل برای مهندسین', link: 'http://sazeapps.com/' },
      { text: 'انتشار دکتر سازه وال', link: null },
      { text: 'انتشار بهینه ساز طراحی', link: null },
      { text: 'انتشار فونداسیون پیشرفته', link: null },
      { text: 'انتشار SAZE90', link: null },
      { text: '10 سال همراه با شما', link: null }
    ],
    images: [
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/33.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/32.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/34.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/31.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/30.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/29.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/28.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/27.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/26.png?versionId=',
    ]
  };
  
  const S1386 = {
    texts: [
      { text: 'راه حل نظام مهندسی مبتنی بر وب', link: 'https://www.saze90.com/system' },
      { text: 'انتخابات نظام مهندسی اصفهان', link: 'https://web.archive.org/web/20090728050359/http://www.iagree.ir/' },
      { text: 'شبکه خبری مهندسین', link: 'https://www.iiiwe.com/member' },
      { text: 'World Summit Award (1)', link: null },
      { text: 'World Summit Award (2)', link: null },
      { text: 'Iranian IT Award (1)', link: null },
      { text: 'Iranian IT Award (2)', link: null },
      { text: 'دیوار برشی پیشرفته', link: null },
      { text: 'راه حل سهمیه مهندسین مبتنی بر وب', link: 'https://web.archive.org/web/20080722140000/http://www.sahmieh.com/?part1=home' }
    ],
    images: [
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/23.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/24.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/25.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/16.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/17.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/18.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/13.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/14.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/15.png?versionId=',
    ]
  };
  
  const S1380 = {
    texts: [
      { text: '(1) توسعه بازار', link: null },
      { text: '(2) توسعه بازار', link: null },
      { text: '(3) توسعه بازار', link: null },
      { text: 'وبسایت فروش آنلاین', link: 'https://web.archive.org/web/20051129035800/http:/www.saze80.com/' },
      { text: '(1) نمایشگاه صنعت ساختمان 1380', link: null },
      { text: '(2) نمایشگاه صنعت ساختمان 1380', link: null },
      { text: 'SAZE80 منتشر شد!', link: null }
    ],
    images: [
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/12.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/11.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/10.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/9.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/8.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/7.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/6.png?versionId=',
    ]
  };
  
  const S1368 = {
    texts: [
      { text: 'ساخت ورودی SAP90', link: null },
      { text: 'توسعه اولین سابروتین ها', link: null },
      { text: 'توسعه اولین کُدها', link: null },
      { text: 'اولین منبع مطالعاتی', link: null },
      { text: 'اولین ایده، لویزان تهران', link: null }
    ],
    images: [
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/5.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/4.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/3.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/2.png?versionId=',
      'https://sazehistory.s3.ir-thr-at1.arvanstorage.ir/1.png?versionId=',
    ]
  };

  return (
    <>
        <Navbar />

        <BreadCrumb One={{ Link: '/aboutus', Text: 'تاریخچه گروه نرم افزاری سازه' }} />

        {/* <div className='abtus-img'>
          <img src={AboutJS} alt='img' />
        </div> */}

        <LogoSection Img={SazeLogo} MaxWidth={'400px'} BackgroundColor={"#FFC113"} />

        <div className='abtus-style'>

          <AboutUsText />

          <AboutUsYear ShowTopYearLine={false} solar={'1400'} ad={'2021 - 2025'} />

          <AboutUsContent reverse={false} Content={S1400} />

          {/* S1398 */}
          <AboutUsYear ShowTopYearLine={true} solar={'1398'} ad={'2019 - 2020'} />

          <AboutUsContent reverse={true} Content={S1398} />

          {/* S1395 */}
          <AboutUsYear ShowTopYearLine={true} solar={'1395'} ad={'2016 - 2018'} />

          <AboutUsContent reverse={false} Content={S1395} />

          {/* S1390 */}
          <AboutUsYear ShowTopYearLine={true} solar={'1390'} ad={'2011 - 2015'} />

          <AboutUsContent reverse={true} Content={S1390} />

          {/* S1386 */}
          <AboutUsYear ShowTopYearLine={true} solar={'1386'} ad={'2007 - 2010'} />

          <AboutUsContent reverse={false} Content={S1386} />

          {/* S1380 */}
          <AboutUsYear ShowTopYearLine={true} solar={'1380'} ad={'2001 - 2006'} />

          <AboutUsContent reverse={true} Content={S1380} />

          {/* S1368 */}
          <AboutUsYear ShowTopYearLine={true} solar={'1368'} ad={'1989 - 2000'} />

          <AboutUsContent reverse={false} Content={S1368} />

        </div>

        <Footer />
    </>
  )
}

export default AboutUs;
