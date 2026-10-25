import Energy from '../../../Assets/Engineer/Energy.svg';
import Highincome from '../../../Assets/Engineer/Highincome.svg';
import SpotLight from '../../../Assets/Engineer/SpotLight.svg';
import YoureImportant from '../../../Assets/Engineer/YoureImportant.svg';

const Description1 = () => {
    return (
        <>
            در EliteZone  نقش مهندسان فراتر از یک طراح یا ناظر است؛ آنها به‌عنوان
            <strong> مشاوران کلیدی در زنجیره تأمین مصالح ساختمانی </strong>
            در پروژه‌ها عمل می‌کنند. مهندسان به عنوان معتمدین کارفرمایان از یک سو و با تسلط بر استانداردهای فنی و شناخت دقیق از نیازهای پروژه‌ها از سوی دیگر در تصمیم‌گیری‌های مهم مربوط به انتخاب سوپلایرها نقش مؤثری دارند. این نقش موثر منجر
            <strong> به افزایش قابل توجه درآمد </strong>
            برای مهندسان می گردد.

        </>
    )
}

const Description2 = () => {
    return (
        <>
            پنل مهندسان درEliteZone
            <strong> بهترین مصالح ساختمانی از نظر فنی و قیمت  </strong>
            را برای پیشنهاد به کارفرمایان در اختیار آنان قرار می دهد. این مشارکت مستقیم در فرآیند انتخاب مصالح ساختمانی تضمین می‌کند که تمامی محصولات به کار رفته در پروژه‌ها
            <strong >در جهت منافع کارفرما </strong>
            انتخاب و استفاده شود. اگر به صورت همزمان کارفرما و مهندس هستید، می توانید با انتخاب نقش مهندس
            <a href="/auth" style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> هنگام ثبت نام </a>
            ،از امتیازات کارفرما و مهندس به صورت همزمان بهره مند شوید.
        </>
    )
}

const Description3 = () => {
    return (
        <>
            با توجه به تعداد قابل توجه مهندسان و پروژه ها در EliteZone، سوپلایرها(تامین کنندگان ممتاز) توسط مهندسان به بازاری به وسعت کل ایران متصل می شوند. این بازار فقط برای مهندسانِ کاربر نرم افزار SAZE90 در سال 1403
            <strong> ده ها میلیون مترمربع </strong> 
            بوده است!
            مهندسان از طریق EliteZone محصولات استاندارد را به کارفرمایان معرفی و در نتیجه 
            <strong> نقشِ کلیدی و انرژی بخش در ارتقا منافع تامین‌کنندگان (سوپلایرها) </strong>
            ایفا می کنند.
        </>
    )
}

const Description4 = () => {
    return (
        <>
             با توجه به نقش کلیدی مهندسان، حضور شما و تعداد بیشتری از مهندسان منجر به
            <strong> افزایش قدرت بازار EliteZone </strong>
            می گردد و در نتیجه سوپلایرهای قویتری این شبکه را انتخاب می کنند. اگر مهندس هستید همین امروز با
            <a href="/auth" style={{ color: 'var(--Primary-EZ)', cursor: 'pointer', textDecoration: 'none' }}> ثبت نام زودهنگام در EliteZone </a>
            قدرت این شبکه را افزایش دهید، نشان Pioneer دریافت کنید، و با استفاده از پنل ویژه درآمد خود را به نحو قابل توجه افزایش دهید! همچنین پس از ثبت نام با استفاده از امکانات فراهم شده
            <strong> EliteZone را به همکاران دیگر خود معرفی کنید. </strong>
        </>
    )
}

export const EngineerMoreDetail = [
    {
        Img: Highincome,
        Tilte: 'مهندسان، نقش تازه، درآمد بالا',
        Description: Description1()
    },
    {
        Img: SpotLight,
        Tilte: 'مهندسان، روشنگرِ راهِ کارفرمایان',
        Description: Description2()
    },
    {
        Img: Energy,
        Tilte: 'مهندسان، انرژی بخش برای سوپلایرها',
        Description: Description3()
    },
    {
        Img: YoureImportant,
        Tilte: 'شما مهم هستید!',
        Description: Description4()
    },
]