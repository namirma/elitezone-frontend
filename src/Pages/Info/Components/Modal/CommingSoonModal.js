import React, { useRef } from 'react'
import ModalCloser from '../../../../PersonalFunction/ModalCloser'
import Modal from 'react-overlays/esm/Modal'
import ModalHeader from './ModalHeader/ModalHeader'
import CommingSoon from '../CommingSoon/CommingSoon';

function CommingSoonModal(props) {

    const ModalRef = useRef();

    const handleModalHeaderClick = () => {
        props.setCommingSoonShow(false)
    }

    return (
        <>
            <Modal
                className="modal"
                show={props.CommingSoonShow}
                onClick={(event) => [ModalCloser(ModalRef, props.setCommingSoonShow, event), event.stopPropagation()]}
            >

                <div className="modalcontainer5 F_Style" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={''}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>
                            <CommingSoon />
                        </div>

                    </div>
                </div>

            </Modal>
        </>
    )
}

export default CommingSoonModal