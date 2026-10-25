import React, { useRef, useState } from 'react'
import './MyBadges.css';
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import Arrow_DarkBlue_Icon from '../../../../PublicAssets/Arrow_Icons/Arrow_DarkBlue_Icon.svg';
import { WorkingTogether } from './BadgesGroup/WorkingTogether';
import MyBadgesModal from '../Modal/MyBadgesModal';
import { useAppContext } from '../../../../Context/AppContext';
import { Pioneer } from './BadgesGroup/Pioneer';
import { SazeSoftwareGroup } from './BadgesGroup/SazeSoftwareGroup';

function MyBadges() {

    const CarouelRef = useRef();

    const { UserRole, Badge } = useAppContext();

    const handleSlide = (direction) => {
        if (CarouelRef.current) {
            const maxScrollAmount = 400;
            const currentScrollPosition = CarouelRef.current.scrollLeft;
            const scrollableWidth = CarouelRef.current.scrollWidth - CarouelRef.current.clientWidth;

            // Calculate the effective scroll distance based on the remaining scrollable width
            const scrollAmount = Math.min(maxScrollAmount, scrollableWidth - currentScrollPosition);

            if (direction === "left") {
                CarouelRef.current.scrollBy(-scrollAmount, 0);
            } else {
                CarouelRef.current.scrollBy(scrollAmount, 0);
            }
        }
    };

    const [ShowBadge, setShowBadge] = useState(false);
    const [BadgeTitle, setBadgeTitle] = useState('');
    const [BadgeImg, setBadgeImg] = useState(null)
    const [BadgeDescription, setBadgeDescription] = useState(null)

    const HandleBadgeClick = (item) => {
        setShowBadge(true)
        setBadgeTitle(item.Title)
        setBadgeImg(item.Img)
        setBadgeDescription(item.Description)
    }

    return (
        <>
            <div className='My_Badges B_Style'>

                <BackToProfileButton text='نشان های من' padding='0 16px 16px' />

                {/* Working Together */}
                {/* <div className='My_Badges_Header'> سطح همکاری </div> */}

                <div className='My_Badges_Content'>

                    <section className='check'>

                        {UserRole &&
                            <>
                                <div className='Badges-Button Badges-Button-Left' onClick={() => handleSlide('left')}>
                                    <img style={{ rotate: '180deg' }} src={Arrow_DarkBlue_Icon} alt='img' />
                                </div>

                                <div className='Badges-Button Badges-Button-Right' onClick={() => handleSlide('right')} >
                                    <img src={Arrow_DarkBlue_Icon} alt="img" />
                                </div>
                            </>
                        }


                        <div className="carousel-body" ref={CarouelRef}>
                            {UserRole ?
                                <div>
                                    {/* Pioneer Badge */}
                                    {
                                        Pioneer.map((item, index) => {
                                            return (
                                                <div key={index} className='carousel-items'>
                                                    <img src={item.Img} alt='img' onClick={() => HandleBadgeClick(item)} />
                                                </div>
                                            )
                                        })
                                    }

                                    {/* Working Badge & Saze Software Groupe Badge */}
                                    {Badge === 'gold' || Badge === 'silver' || Badge === 'bronze' ?
                                        <>
                                            {

                                                WorkingTogether.map((item, index) => {
                                                    return (
                                                        <div key={index} className='carousel-items'>
                                                            {item.name === Badge &&
                                                                <img src={item.Img} alt='img' onClick={() => HandleBadgeClick(item)} />
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                SazeSoftwareGroup.map((item, index) => {
                                                    return (
                                                        <div key={index} className='carousel-items'>
                                                            <img src={item.Img} alt='img' onClick={() => HandleBadgeClick(item)} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        Badge === 'serial' ?
                                            <>
                                                {
                                                    SazeSoftwareGroup.map((item, index) => {
                                                        return (
                                                            <div key={index} className='carousel-items'>
                                                                <img src={item.Img} alt='img' onClick={() => HandleBadgeClick(item)} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                            :
                                            null
                                    }
                                </div>
                                :
                                <div className='NoBadgeRecived'> هنوز نشانی دریافت نکرده اید. </div>
                            }

                        </div>
                    </section>

                </div>

            </div>

            <MyBadgesModal
                ShowBadge={ShowBadge}
                setShowBadge={setShowBadge}
                BadgeImg={BadgeImg}
                BadgeTitle={BadgeTitle}
                BadgeDescription={BadgeDescription}
            />
        </>
    )
}

export default MyBadges