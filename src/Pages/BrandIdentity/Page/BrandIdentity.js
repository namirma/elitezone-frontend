import React from 'react'
import './BrandIdentity.css';
import Navbar from '../../Home/Components/Navbar';
import LogoSection from '../Components/LogoSection';
import BI_TextSection from '../Components/BI_TextSection';
import BI_Description from '../Components/BI_Description';
import ContentAnimation from '../../Home/Components/ContentAnimation';
import { BrandIdentityMoreDetail } from '../../../Contents/BrandIdentity/MoreDetail/BrandIdentityMoreDetail';
import { useContext } from 'react';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import EliteZoneWhiteSymbol from '../../../PublicAssets/Logo_Icons/EliteZoneWhiteSymbol.svg';
import BreadCrumb from '../../../PersonalFunction/BreadCrumb/BreadCrumb';
import Mision from '../Assets/Mission.jpg';
import Vision from '../Assets/Vision.jpg';
import ProblemStatement from '../Assets/ProblemStatement.jpg';
import Footer from '../../Home/Components/Footer';

function BrandIdentity() {

    const { Under1280 } = useContext(ResponsiveContext);

    const GridColumnValues = () => {
        return BrandIdentityMoreDetail.map((_, index) => {
            if (!Under1280) {
                return 'span 1';
            }
            else {
                return 'span 5';
            }
        });
    };

    const gridColumns = GridColumnValues();

    const BITextSection = {
        title: 'ایده‌ها به آینده‌ جان می بخشند...',
        decription:
            <>
                آنچه بر نسل ما گذشته است، مسیری پر فراز و نشیب اما سرشار از معناست که فانوس راه ما به سوی آینده‌ای روشن است. هر قطعه از سنگفرش های این مسیر، با توانایی‌های مشترک شما و ما ساخته شده است.                <br />
                با هم، استوارتر ایستاده‌ایم،
                <br />
                با هم، شجاعانه‌تر گام برمی‌داریم،
                <br />
                با هم، آرامتریم،
                <br />
                و با هم، برای ساختن ایران به آینده جان می بخشیم!
            </>
    }

    const BIDescription1 = {
        img: ProblemStatement,
        title: 'بیان وضعیت',
        description:
            <>
                مطالعات و تجربیات ۳۰ ساله نشان می دهد که بازار مصالح ساختمانی ایران در وضعیتی در هم ریخته و نسبتا آشفته قرار دارد. تشخیص مصالح ساختمانی باکیفیت از نمونه‌های نامرغوب برای مصرف‌کنندگان نهایی دشوار است، صدای تولیدکنندگان معتبر در میان هیاهوی کالاهای نامعتبر به‌سختی به گوش می‌رسد و  کارفرمایان در انتخاب مصالح هم از لحاظ قیمت و هم از لحاظ کیفیت سردرگم هستند. پلتفرم
                <strong> اِلیت‌زون </strong>
                با ارائه مسیری مدرن در بازار مصالح ساختمانی ایران می تواند راه گشای حل مساله باشد.
            </>
    }

    const BIDescription2 = {
        img: Mision,
        title: ' ماموریت ما',
        description:
            <>
                علیرغم وضعیت آشفته بازار مصالح ساختمانی در ایران، سوپلایرها (تامین کنندگان ممتاز) متعددی در بازار ایران فعالیت می کنند که سرمایه گذاری قابل توجه و تولیدات مرغوب آنها می تواند گره گشای وضعیت به هم ریخته کنونی باشد اما دسترسی آنها به کل بازار به سادگی امکان پذیر نیست.
                <br />
                از سوی دیگر، جامعه مهندسی ایران با بهره‌گیری از دانش تخصصی، تجربیات ارزشمند و ارتباطات خود، ظرفیت نهفته‌ای دارد که می‌تواند در حل این چالش نقش‌آفرین باشد. به‌کارگیری این پتانسیل، نه‌تنها درآمد مهندسان را افزایش می‌دهد و آن‌ها را به حرفه خود امیدوارتر می‌کند، بلکه نظم و انسجام را به بازار مصالح ساختمانی کشور بازمی‌گرداند.
                <br />
                ماموریت ما در
                <strong> اِلیت‌زون </strong>
                ایجاد مسیری مدرن در بازار مصالح ساختمانی بر پایه پتانسیل های موجود در جامعه مهندسی ساختمان ایران، سوپلایرهای معتبر و کارفرمایان محترم است.
            </>
    }

    const BIDescription3 = {
        img: Vision,
        title: 'چشم انداز آینده',
        description:

            <>
                هدف اصلی گروه نرم افزاری سازه رشد و شکوفایی ایران، به‌ویژه در صنعت ساختمان است. تمام تلاش‌ها و برنامه‌های ما نیز در راستای همین هدف تعریف شده‌اند.
                <br />
                چشم‌انداز ما، ساخت ساختمان‌هایی با کیفیت ممتاز است که در تمامی مراحل، از تأمین مصالح ساختمانی تا اجرای نهایی، با برند
                <strong> اِلیت‌زون </strong>
                همراه باشند. در این چشم انداز کارفرمایان با اطمینان کامل از
                <strong> اِلیت‌زون </strong>
                خرید می‌کنند، تامین کنندگان معتبر به بازاری به بزرگی ایران دست پیدا می کنند، جامعه مهندسی به کیفیت و استاندارد مصالح تأمین‌شده از این برند افتخار می‌کند، و خریداران بازار املاک با شنیدن نام
                <strong> اِلیت‌زون </strong>
                در انتخاب خود تردید نمی کنند.
                <br />
                ما در
                <strong> اِلیت‌زون </strong>
                به ساخت ساختمان‌هایی باور داریم که تمامی مصالح مصرفی آن، از ابتدا تا انتها، با بالاترین استانداردهای جهانی و کیفیتی ممتاز تأمین شده باشد. این چشم‌انداز، نه‌تنها نمایانگر تعهد ما به کیفیت، بلکه گامی به سوی تحول و ارتقای صنعت ساختمان ایران عزیز است.

            </>
    }

    return (
        <>
            <Navbar />

            <BreadCrumb One={{ Link: '/elitezone-identity', Text: 'هویت برند الیت زون' }} />

            <LogoSection Img={EliteZoneWhiteSymbol} />

            <div className='BrandIdentity_Container A_Style'>

                <BI_TextSection BITextSection={BITextSection} />

                <BI_Description BIDescription={BIDescription1} />

                <BI_Description BIDescription={BIDescription2} />

                <BI_Description BIDescription={BIDescription3} />

                <div className='BrandIdentity_Cart'>
                    <div className='title'> ارزش های ما </div>
                    <ContentAnimation isExpanded={true} Content={BrandIdentityMoreDetail} gridColumns={gridColumns} gridTemplateColumns={'repeat(5, 1fr)'} />
                </div>

            </div>

            <Footer />

        </>
    )
}

export default BrandIdentity