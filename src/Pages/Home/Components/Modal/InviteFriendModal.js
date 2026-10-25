import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-overlays/Modal';
import '../../../Info/Components/Modal/ModalStyle.css';
import './InviteFriendModal.css';

import eita from '../../Assets/SocialMedia/Eita.svg';
import telegram from '../../Assets/SocialMedia/Telegram.svg';
import whatsapp from '../../Assets/SocialMedia/WhatsApp.svg';
import x from '../../Assets/SocialMedia/x.svg';
import linkedin from '../../Assets/SocialMedia/Linkedin.svg';

import ModalHeader from '../../../Info/Components/Modal/ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';
import LoadingDots from '../../../Auth/Components/LoadingDots';

function InviteFriendModal(props) {
    const link = 'https://EliteZone.me';
    const text = `
الیت‌زون مسیری مدرن در بازار مصالح ساختمانی ایران
\n
از شما دعوت می کنم با کلیک روی لینک در این پلتفرم ثبت نام کنید.
\n
ارادتمند
`;

    const socialArray = [
        { img: eita, name: 'ایتا', link: `https://www.eitaa.com/share/url?url=${link}&text=${text}` },
        { img: telegram, name: 'تلگرام', link: `https://t.me/share/url?url=${link}&text=${encodeURIComponent(text)}` },
        { img: whatsapp, name: 'واتساپ', link: `https://api.whatsapp.com/send/?text=${encodeURIComponent(link + ' ' + text)}` },
        { img: x, name: 'توییتر', link: `https://twitter.com/intent/post?url=${link}&text=${encodeURIComponent(text)}` },
        { img: linkedin, name: 'لیندکین', link: `https://www.linkedin.com/sharing/share-offsite/?url=${link}&title=${encodeURIComponent(text)}` },
    ];

    const [isAllImgLoaded, setIsAllImgLoaded] = useState(false);
    const [numberImgLoaded, setNumberImgLoaded] = useState(0);

    const handleLoadImg = () => {
        setNumberImgLoaded((prevCount) => {
            const newCount = prevCount + 1;
            if (newCount === socialArray.length) {
                setIsAllImgLoaded(true);
            }
            return newCount;
        });
    };

    const handleSocialClick = (value) => {
        window.open(value, '_blank');
    };

    const [Text, setText] = useState('کپی لینک');
    const [color, setColor] = useState('var(--Primary-EZ)');
    const [timerId, setTimerId] = useState(null);

    const handleCopyLinkClick = () => {
        clearTimeout(timerId); // Clear previous timer
        navigator.clipboard.writeText('www.EliteZone.me')
            .then(() => {
                setColor('var(--SemanticColor-Success)');
                setText('کپی شد');

                const newTimerId = setTimeout(() => {
                    setText('کپی لینک');
                    setColor('var(--Primary-EZ)');
                }, 2000);

                setTimerId(newTimerId);
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    };

    const handleModalHeaderClick = () => {
        props.setInviteFriendShow(false);
    };

    const hanldeImgLoadedOnModalCloser = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsAllImgLoaded(false)
            setNumberImgLoaded(0);
        }
    }

    const modalRef = useRef();

    useEffect(() => {
        return () => {
            clearTimeout(timerId); // Clean up timer on unmount
        };
    }, [timerId]);

    return (
        <>
            <Modal
                className="modal"
                show={props.InviteFriendShow}
                onClick={(event) => ModalCloser(modalRef, props.setInviteFriendShow, event, hanldeImgLoadedOnModalCloser(event), setNumberImgLoaded(0))}
            >
                <div className="modalcontainer2 F_Style" ref={modalRef}>
                    <div className="modal-content" style={{ backgroundColor: '#E7F0FB' }}>
                        <ModalHeader
                            text="دعوت از دوستان"
                            ModalHeaderClick={handleModalHeaderClick}
                            style={{ backgroundColor: '#E7F0FB' }}
                        />

                        <div className="modal_style">
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div className="social-container">
                                    {socialArray.map((item, index) => (
                                        <div
                                            key={index}
                                            className="social-item"
                                            onClick={() => handleSocialClick(item.link)}
                                            style={{ display: isAllImgLoaded ? 'block' : 'none' }}
                                        >
                                            <img src={item.img} alt={item.name} onLoad={handleLoadImg} />
                                            <div>{item.name}</div>
                                        </div>
                                    ))}
                                    {!isAllImgLoaded &&
                                        <div style={{ width: '100%' }}>
                                            <LoadingDots Color="var(--Primary-EZ)" />
                                        </div>
                                    }
                                </div>

                                <div className="copylink-container">
                                    <span>www.EliteZone.me</span>
                                    <div style={{ backgroundColor: color }} onClick={handleCopyLinkClick}>
                                        {Text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default InviteFriendModal;
