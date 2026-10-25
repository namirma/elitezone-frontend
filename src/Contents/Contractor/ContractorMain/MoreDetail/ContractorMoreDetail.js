import Agent from '../../../Assets/Contractor/Agent.svg';
import Invitation from '../../../Assets/Contractor/Invitation.svg';
import Similar from '../../../Assets/Contractor/Similar.svg';

const Description1 = () => {
    return (
        <>
            اگر پیمانکار یا مهندس هستید می توانید برای پروژه ای که متعلق به خود شماست بدون واسطه از امکاناتEliteZone  برای خرید مصالح ساختمانی با استاندارد بسیار بالا و قیمت رقابتی استفاده کنید. در این حالت، علاوه بر امتیازات کارفرما، امتیازات پیمانکار را نیز دریافت خواهید کرد. کافیست با انتخاب نقش پیمانکار
            <a href="/auth" style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> هنگام ثبت نام </a>، 
            از امتیازات کارفرما و پیمانکار به صورت همزمان بهره مند شوید.
        </>
    )
}

const Description2 = () => {
    return (
        <>
            اگر پیمانکار هستید اما پروژه کارفرمای دیگری دارد، با توجه به تجربه عملی و دانش مهندسی می توانید در انتخاب مصالح ساختمانی استاندارد به کارفرمایان کمک کنید. EliteZone  می تواند به شما کمک کند تا خرید درست را برای کارفرما انجام دهید و بالتبع در چارچوب های تعریف شده از همکاری با EliteZone  منتفع گردید.
        </>
    )
}

const Description3 = () => {
    return (
        <>
            پیمانکاران عزیز، حضور شما منجر به
            <strong> افزایش قدرت بازار EliteZone </strong>
            می گردد و در نتیجه سوپلایرهای قویتری این شبکه را انتخاب می کنند. اگر پیمانکار هستید همین امروز با
            <a href="/auth" style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> ثبت نام زودهنگام در EliteZone </a>
            قدرت این شبکه را افزایش دهید، نشان Pioneer دریافت کنید، و با استفاده از پنل ویژه درآمد خود را به نحو قابل توجه افزایش دهید.
            <strong> ما با هم می توانیم </strong>
            بازار بزرگ مصالح ساختمانی ایران را بازتعریف کنیم!
        </>
    )
}

export const ContractorMoreDetail = [
    {
        Img: Similar,
        Tilte: 'وقتی پیمانکار، کارفرماست.',
        Description: Description1()
    },
    {
        Img: Agent,
        Tilte: 'پیمانکار نماینده کارفرما',
        Description: Description2()
    },
    {
        Img: Invitation,
        Tilte: 'پیمانکاران محترم، دعوت ما را بپذیرید!',
        Description: Description3()
    },
]