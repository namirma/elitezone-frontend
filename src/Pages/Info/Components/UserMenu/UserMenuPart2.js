import React, { useContext, useState } from 'react'
import './UserMenuPart2.css';
import AccountsMenuIcon from '../../Assets/AccountMenuIcon.svg';
import JobInfoMenuIcon from '../../Assets/JobInfoMenuIcon.svg';
import Panel from '../../Assets/Panel.svg';
import RoleGuideMenuIcon from '../../Assets/RoleGuideMenuIcon.svg';
import SummeryOfActivites from '../../Assets/SummeryOfActivites.svg';
import ShoppingMenuIcon from '../../Assets/ShoppingMenuIcon.svg';
import MyAccountsMenuIcon from '../../Assets/MyAccountsMenuIcon.svg';
import MyBadgesMenuIcon from '../../Assets/MyBadgesMenuIcon.svg';
import CommentMenuIcon from '../../Assets/CommentMenuIcon.svg';
import AddressMenuIcon from '../../Assets/AddressMenuIacon.svg';
import MessageMenuIcon from '../../Assets/MessageMenuIcon.svg';
import ExitMenuIcon from '../../Assets/ExitMenuIcon.svg';
import { Link, useLocation } from 'react-router-dom';
import Flash2_TextEZ02_Icon from '../../../../PublicAssets/Arrow_Icons/Flash2_TextEZ02_Icon.svg';
//Context
import { ResponsiveContext } from '../../../../Context/ResponsiveContext';
import { NavbarContext } from '../../../../Context/NavbarContext';
import { useAppContext } from '../../../../Context/AppContext';
import ConfirmRequestModal from '../Modal/ConfirmRequestModal';
import CommingSoonModal from '../Modal/CommingSoonModal';

function UserMenuPart2() {

    // Context
    const { Under1280 } = useContext(ResponsiveContext)
    const { handleNavbarClick } = useContext(NavbarContext);
    const { UserRole, UnReadNotif } = useAppContext();

    const HandleScrollPage = (route) => {
        if (Under1280) {
            handleNavbarClick('UserAccountInfo', 48)
        }
    }

    const [CommingSoonShow, setCommingSoonShow] = useState(false);
    const HandleDisable = () => {
        setCommingSoonShow(true);
    }

    const [ConfirmRequest, setConfirmRequest] = useState(false)
    const handleExitClick = () => {
        setConfirmRequest(!ConfirmRequest)
    }

    const location = useLocation();

    const handletitle = () => {
        switch (UserRole) {
            case 1:
                return 'پنل مشاوره و خرید مصالح ساختمانی'
                break;
            case 2:
                return 'پنل مشاوره و خرید مصالح ساختمانی'
                break;
            case 3:
                return 'پنل فروش مصالح ساختمانی'
                break;
            case 4:
                return 'پنل خرید مصالح ساختمانی'
                break;
            default:
                return 'انتخاب نقش'
        }
    }

    const handleRoleGuideRoute = () => {
        switch (UserRole) {
            case 1:
                return '/role-engineer';
            case 2:
                return '/role-contractor';
            case 3:
                return '/role-supplier';
            case 4:
                return '/role-employer';
            default:
                return '/profile';
        }
    };

    const MenuArray = [
        { Img: AccountsMenuIcon, Title: 'اطلاعات حساب کاربری', Route: '/profile' },
        { Img: JobInfoMenuIcon, Title: 'اطلاعات شغلی', Route: '/profile/job-info' },
        ...(UserRole !== null
            ? [{ Img: Panel, Title: handletitle(), Route: '/panel' }]
            : []),
        ...(UserRole !==null
            ? [{ Img: RoleGuideMenuIcon, Title: 'فرآیند اجرایی', Route: '/profile/impl-process' }]
            : []),
        { Img: MyBadgesMenuIcon, Title: 'نشان های من', Route: '/profile/my-badges' },
        { Img: MessageMenuIcon, Title: 'پیغام ها', Route: '/profile/notification' },
        // { Img: SummeryOfActivites, Title: 'خلاصه فعالیت ها', Route: '/profile/summary-activities', disable: true },
        { Img: ShoppingMenuIcon, Title: 'سفارش ها', Route: '/profile/orders', disable: true },
        { Img: MyAccountsMenuIcon, Title: 'حساب های من', Route: '/profile/my-accounts', disable: true },
        // { Img: CommentMenuIcon, Title: 'دیدگاه ها', Route: '/profile/comments', disable: true },
        // { Img: AddressMenuIcon, Title: 'آدرس ها', Route: '/profile/addresses', disable: true },
    ]


    // const firstDisabledIndex = MenuArray.findIndex(item => item.disable);
    // const lastDisabledIndex = MenuArray.findLastIndex(item => item.disable);
    // const handleStyle = (index) => {
    //     if (index === firstDisabledIndex - 1) {
    //         return {
    //             borderBottom: 'none'
    //         }
    //     }

    //     if (index === lastDisabledIndex) {
    //         return {
    //             borderBottom: 'none'
    //         }
    //     }
    // }
    const percentage = 80;

    return (
        <>

            <div className='part2'>

                {MenuArray.map((item, index) => (
                    <span key={index}>
                        <div style={item.disable && { opacity: '35%' }}>
                            <Link to={!item.disable && item.Route} style={{ textDecoration: 'none' }}>
                                <div className='part2-item' style={{ cursor: item.disable && 'default' }} onClick={!item.disable ? HandleScrollPage : HandleDisable}>

                                    <div
                                        style={Under1280 ? { display: 'none' } : { visibility: location.pathname === item.Route ? '' : 'hidden' }}
                                        className='part2-item-indicator'>
                                    </div>

                                    <div className='part2-item-icon'> <img src={item.Img} alt="img" /> </div>

                                    <div className='part2-item-group'>
                                        <div className='part2-item-group-text'>
                                            {item.Title}
                                            {
                                                (item.Route === '/profile/notification' && (UnReadNotif.length >= 1))
                                                &&
                                                <div className='profilebutton-menu-item-number'> {UnReadNotif.length} </div>
                                            }
                                        </div>

                                        <div style={Under1280 ? { display: 'inline' } : { display: 'none' }} className='part2-item-group-Mobile-Indicator'>
                                            <img src={Flash2_TextEZ02_Icon} alt="img" />
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    </span>
                ))}

                <div className='part2-item' onClick={handleExitClick}>
                    <div style={Under1280 ? { display: 'none' } : { visibility: 'hidden' }} className='part2-item-indicator'></div>
                    <div className='part2-item-icon'> <img src={ExitMenuIcon} alt="img" /> </div>
                    <div className='part2-item-group' style={{ borderBottom: 'none' }}>
                        <div className='part2-item-group-text'> خروج </div>
                        <div style={Under1280 ? { display: 'inline' } : { display: 'none' }} className='part2-item-group-Mobile-Indicator'>
                            <img src={Flash2_TextEZ02_Icon} alt="img" />
                        </div>
                    </div>
                </div>

            </div>

            <ConfirmRequestModal
                text={'از حساب کاربری خود خارج می شود؟'}
                ConfirmRequest={ConfirmRequest}
                setConfirmRequest={setConfirmRequest}
                Requested='Logout'

                acceptText='خروج'
                RejectText='انصراف'
            />

            <CommingSoonModal
                CommingSoonShow={CommingSoonShow}
                setCommingSoonShow={setCommingSoonShow}
            />
        </>
    )
}

export default UserMenuPart2