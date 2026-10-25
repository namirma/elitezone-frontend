import React, { useRef } from 'react'
import ContractorExplain from '../../../Roles/Components/ContractorExplain'
import Modal from 'react-overlays/Modal'
import './ModalStyle.css';
import './CharExplainModal.css';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';

function ContractorExplainModal(props) {
    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.ContractorExplainShow}
                onClick={(event) => [ModalCloser(ModalRef, props.setContractorExplainShow, event), event.stopPropagation()]}

            >
                <div className='modalcontainer3' ref={ModalRef}>
                    <div className='Char-Explain-Modal'>
                        <ContractorExplain setContractorExplainShow={props.setContractorExplainShow} />
                    </div>
                </div>
            </Modal >
        </>
    )
}

export default ContractorExplainModal