import BestQuality_lowerPrice from '../../../Assets/Employer/BestQuality_lowerPrice.svg';
import ChooseElites from '../../../Assets/Employer/ChooseElites.svg';
import RightSystem from '../../../Assets/Employer/RightSystem.svg';
import When_signup from '../../../Assets/Employer/When_signup.svg';


const Description1 = () => {
    return (
        <>
            <strong> EliteZone </strong>
            کارفرمایان را از طریق مهندسان و پیمانکاران به شبکه‌ای از سوپلایرها (تأمین‌کنندگان معتبر) متصل می‌کند. سوپلایرها در
            <strong> EliteZone </strong>
            از بین نخبگان صنعت ساختمان و به دقت انتخاب شده اند. لذا اگر مهندس یا پیمانکار شما مصالح ساختمانی ارائه شده از طریق
            <strong> EliteZone </strong>
            را به شما معرفی می کند، با اطمینان خرید خود را انجام دهید.
        </>
    )
}

const Description2 = () => {
    return (
        <>
            با حساسیت های گروه نرم افزاری سازه تنها مصالح ساختمانی با بیشترین کیفیت در EliteZone  به کارفرمایان عرضه می شود. از سوی دیگر با توجه به حجم بسیار بزرگی از بازار که EliteZone  در اختیار تامین کنندگان قرار می دهد، قیمت های ارائه شده در این پلتفرم بسیار رقابتی هستند. لذا همیشه از EliteZone با اطمینان خرید کنید!
        </>
    )
}

const Description3 = () => {
    return (
        <>
            <strong> EliteZone </strong>
            با ایجاد بستری مطمئن تأخیر در تحویل، کیفیت پایین مصالح، عدم تطابق مشخصات با کالای خریداری شده، و سایر مشکلات لجستیکی را کاهش می دهد تا کارفرمایان خرید خود را با اطمینان انجام دهند.
            همه آنچه از یک سیستم درست انتظار دارید اینجا برای شما فراهم شده است!

        </>
    )
}

const Description4 = () => {
    return (
        <>
            اگر کارفرمای پروژه ساختمانی هستید، در
            <a href="/auth" style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> EliteZone  ثبت نام کنید </ a>
            و از طریق مهندسان یا پیمانکارانِ پروژه خود از امکانات EliteZone  بهره ببرید. اگر مهندسانی که با آنها کار می کنید عضو EliteZone نیستند، این پلتفرم را به آنها معرفی کنید و از طریق آنان از مزایای آن استفاده کنید. اگر شخصا مهندس یا پیمانکار هستید، می توانید بدون مراجعه به دیگران و مستقیما از امتیازات EliteZone بهره مند شوید.
        </>
    )
}

export const EmployerMoreDetail = [
    {
        Img: ChooseElites,
        Tilte: 'نخبگان را انتخاب می کنید!',
        Description: Description1()
    },
    {
        Img: BestQuality_lowerPrice,
        Tilte: 'بیشترین کیفیت، با کمترین قیمت!',
        Description: Description2()
    },
    {
        Img: RightSystem,
        Tilte: 'آنچه از یک سیستم درست انتظار دارید!',
        Description: Description3()
    },
    {
        Img: When_signup,
        Tilte: 'وقتی ثبت نام می کنید...',
        Description: Description4()
    },
]