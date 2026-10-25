import { useNavigate } from 'react-router-dom';
import Heart from '../../../Assets/Concept/Heart.svg'
import MapIran from '../../../Assets/Concept/MapIran.svg';
import Registeration from '../../../Assets/Concept/Registeration.svg';
import platformWork from '../../../Assets/Concept/platformWork.svg';


const Description1 = () => {
    return (
        <>
            EliteZone  وSAZE90  هردو محصول گروه نرم افزاری سازه هستند. مبنای پلتفرمEliteZone  شبکه بزرگ کاربران و استفاده کنندگان از نتایج نرم افزارSAZE90  است. تنها در سال 1403 مساحت پروژه های در دسترس در EliteZone از طریق مهندسانِ کاربر نرم افزار SAZE90
            <strong > ده ها میلیون مترمربع </strong>
            است!
        </>
    )
}

const Description2 = () => {
    return (
        <>
            با همه فراز و نشیب ها، مدیران گروه نرم‌افزاری سازه طی 30 سال تلاش بی وقفه،
            <strong> تعهد به صنعت ساختمان ایران </strong>
            را به اثبات رسانده اند. در ادامه این راه، پلتفرمEliteZone  به عنوان یک راه حل ملی مبتنی بر تکنولوژی برای تهیه مصالح ساختمانی استاندارد ارائه شده است. موفقیت این پروژه ملی با حضور هزاران مهندس، پیمانکار، سوپلایر، و کارفرما تضمین شده است.
        </>
    )
}

const Description3 = () => {

    return (
        <>
            در EliteZone، مهندسان و پیمانکاران به معرفی مصالح ساختمانی استاندارد و با قیمت رقابتی به کارفرمایان می‌پردازند تا سوپلایرها (تامین‌کنندگان ممتاز) به کل بازار ایران دسترسی پیدا کنند. امکانات لازم برای همه تراکنش ها در بخش پروفایل
            <a href='/auth' style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> ثبت نام </a>
            کنندگان پیش بینی شده است.
        </>
    )
}

const Description4 = () => {
    return (
        <>
            اگر مهندس، پیمانکار، سوپلایر، و یا کارفرما هستید با
            <a href='/auth' style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> ثبت نام زودهنگام در EliteZone </a>
            نشانPioneer  دریافت کنید و درآمد یا منافع خود را به نحو قابل توجه افزایش دهید!
        </>
    )
}

export const ConceptMoreDetail = [
    {
        Img: MapIran,
        Tilte: 'همه بازار ساختمان ایران؟',
        Description: Description1()
    },
    {
        Img: Heart,
        Tilte: 'اعتبار، نقشِ نیکی بر قلب ها!',
        Description: Description2()
    },
    {
        Img: platformWork,
        Tilte: 'این پلتفرم، چگونه کار می کند؟',
        Description: Description3()
    },
    {
        Img: Registeration,
        Tilte: 'با ثبت نام شروع کنید.',
        Description: Description4()
    },
]