import React, { useRef } from 'react';
import Modal from 'react-overlays/Modal';
import './ModalStyle.css';
import './MyBadgesModal.css';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';
import ModalHeader from './ModalHeader/ModalHeader';

function MyBadgesModal({ ShowBadge, setShowBadge, BadgeTitle, BadgeImg, BadgeDescription }) {

    const ModalRef = useRef();

    const handleModalHeaderClick = () => {
        setShowBadge(false)
    }

    return (
        <>
            <Modal
                className="modal"
                show={ShowBadge}
                onClick={(event) => ModalCloser(ModalRef, setShowBadge, event)}
            >

                <div className="modalcontainer2 F_Style" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={''}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>

                            <div className='MyBaggesContent'>
                                <img src={BadgeImg} alt='img' />

                                <div className='MBC_Header'>
                                    {BadgeTitle}
                                </div>

                                <div className='MBC_Desc'>
                                    {BadgeDescription}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </Modal>
        </>
    )
}

export default MyBadgesModal