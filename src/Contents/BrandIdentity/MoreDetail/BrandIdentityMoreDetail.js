import { useNavigate } from 'react-router-dom';
import Agility from './../../Assets/BrandIdentity/Agility.svg'
import Innovations from './../../Assets/BrandIdentity/Innovations.svg'
import Loyality from './../../Assets/BrandIdentity/Loyality.svg'
import Responsibility from './../../Assets/BrandIdentity/Responsibility.svg'
import Satisfications from './../../Assets/BrandIdentity/Satisfications.svg'


const Description1 = () => {
    return (
        <>
            برای ما، اصل اول، اصل دوم و اصل آخر، جلب رضایت قلبی همه شماست. به‌عنوان نمایندگان جامعه مهندسی ایران، با ارائه اطلاعات دقیق و رفتار حرفه‌ای، تمام تلاش خود را به‌کار می‌گیریم تا تجربه‌ای رضایت‌بخش و اعتمادآفرین برای همه مراجعین به الیت‌زون فراهم کنیم.
        </>
    )
}

const Description2 = () => {
    return (
        <>
            وفاداری، پایه و اساس پیشرفت ماست. ما به جامعه مهندسی ساختمان ایران، به تأمین‌کنندگانی که با ما همکارند، و به کارفرمایانی که از طریق اِلیت زون خرید می‌کنند، وفادار می‌مانیم. این تعهد را نه در کلام، بلکه در عمل به اثبات می‌رسانیم.
        </>
    )
}

const Description3 = () => {

    return (
        <>
            ما به‌طور کامل مسئولیت عملکرد خود را می‌پذیریم و برای انجام آنچه در توان داریم، متعهد هستیم. هدف ما این است که همه اعضای اِلیت‌زون در قبال مسئولیت‌های خود سربلند باشند و در مسیر موفقیت، اعتمادآفرینی کنند.
        </>
    )
}

const Description4 = () => {
    return (
        <>
            در اِلیت‌زون، انجام به‌موقع و دقیق کارها، اولویت اصلی ماست. ابعاد گسترده این پروژه، این فرصت را در اختیار مدیران گروه نرم‌افزاری سازه قرار داده تا سیستم‌هایی چابک، مؤثر و کارآمد طراحی و اجرا کنند.
        </>
    )
}

const Description5 = () => {
    return (
        <>
            نوآوری، شالوده اصلی فعالیت‌های حرفه‌ای ما در اِلیت‌زون است. همکاری ما با مجموعه‌های توانمند در شهرک علمی تحقیقاتی اصفهان و بهره‌گیری از پیشرفته‌ترین تکنولوژی‌های روز دنیا، امکان نوآوری و ارائه راه‌حل‌های خلاقانه را فراهم می‌سازد.
        </>
    )
}

export const BrandIdentityMoreDetail = [
    {
        Img: Satisfications,
        Tilte: 'کسب رضایت قلبی',
        Description: Description1()
    },
    {
        Img: Loyality,
        Tilte: 'وفاداری',
        Description: Description2()
    },
    {
        Img: Responsibility,
        Tilte: 'مسئولیت پذیری',
        Description: Description3()
    },
    {
        Img: Agility,
        Tilte: 'چابکی',
        Description: Description4()
    },
    {
        Img: Innovations,
        Tilte: 'نوآوری',
        Description: Description5()
    },
]