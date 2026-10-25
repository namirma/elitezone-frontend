import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-overlays/Modal';
import './ModalStyle.css';
import EmailInput from '../Inputs/EmailInput';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';
import { useAppContext } from '../../../../Context/AppContext';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';
import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';
import ApiBaseUI from '../../../../Api/axios';

function EmailEditModal(props) {

    //Context 
    const { Email, setEmail, EmailTrue, setEmailTrue, DuplicatedEmail, setDuplicatedEmail } = useAppContext();

    const IsSameData = CheckDataEquality([Email])
    const [SimilarData, restSimilarData] = useSimilarData(IsSameData)

    const [EnableButton, setEnableButton] = useState(false);

    useEffect(() => {
        if (EmailTrue && !IsSameData) {
            setEnableButton(true)
        } else {
            setEnableButton(false)
        }
    }, [EmailTrue, IsSameData, setEnableButton])

    const PrevEmail = useRef(Email);

    const handleModalHeaderClick = () => {
        props.setEmailEditShow(false)
        setDuplicatedEmail(false)
        setEmail(PrevEmail.current)
        restSimilarData();
    }

    useEffect(() => {
        if (props.EmailEditShow) {
            setDuplicatedEmail(false)
            setEmail(PrevEmail.current)
            restSimilarData();
        }
    }, [props.EmailEditShow]);


    const ModalRef = useRef();

    const handleEmailSend = async (e) => {

        try {
            const SendRequest = await ApiBaseUI.post('api/profile', {
                email: Email
            },
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('Token'),
                        Accept: 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                    }
                })

            if (SendRequest.status === 200) {
                window.location.reload();
            } else {
                console.log('Error Ocurd in if')
            }
        } catch (error) {
            console.log('Error Ocurd')
        }

    }


    return (
        <>
            <Modal
                className="modal"
                show={props.EmailEditShow}
                onClick={(event) => ModalCloser(ModalRef, props.setEmailEditShow, event)}
            >
                <div className="modalcontainer B_Style_withoutHover" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={' پست الکترونیکی خود را وارد کنید '}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>
                            <EmailInput
                                Email={Email}
                                setEmail={setEmail}
                                EmailTrue={EmailTrue}
                                setEmailTrue={setEmailTrue}
                                DuplicatedEmail={DuplicatedEmail}
                            />

                            <OverlayButton
                                text='تایید'
                                disableOnClick={true}
                                sendFromEmail={true}
                                disabled={EnableButton ? false : true}
                                backgroundcolor={EnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                                Cursor={!EnableButton && 'default'}
                            />

                            <SimilarDataWarning SimilarData={SimilarData} />
                        </div>

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default EmailEditModal