import React, { useRef, useState } from 'react'
import './SQGAModal.css';
import ModalHeader from '../../../Info/Components/Modal/ModalHeader/ModalHeader';
import { Modal } from 'react-overlays';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';
import { useAppContext } from '../../../../Context/AppContext';
import { NullToDashString } from '../../../../PersonalFunction/ConvertFormat';
import { useToast } from '../../../../PersonalFunction/Toast';
import ApiBaseUI from '../../../../Api/axios';
import { radialGradient } from 'framer-motion/client';
import LoadingDots from '../../../Auth/Components/LoadingDots';


function SQGAModal(props) {

    const {
        SubjectFAQ, setSubjectFAQ, SubjectFAQTrue, setSubjectFAQTrue,
        MoreDeatilsFAQ, setMoreDeatilsFAQ,
        EmailFAQ, setEmailFAQ, EmailFAQTrue, setEmailFAQTrue,
        NameFAQ, setNameFAQ, NameFAQTrue, setNameFAQTrue,
        PhoneFAQ, setPhoneFAQ, PhoneFAQTrue, setPhoneFAQTrue,
        MessageFAQ, setMessageFAQ, MessageFAQTrue, setMessageFAQTrue,
    } = useAppContext();

    const { showToastSuccess, showToastError } = useToast();

    const ModalRef = useRef();

    const handleModalHeaderClick = () => {
        props.setSQGAShow(false)
    }

    const [IsLoading, setIsLoading] = useState(false);

    const handleSendQuestion = async () => {

        try {
            setIsLoading(true)
            const SendRequest = await ApiBaseUI.post('api/new-question', {
                email: EmailFAQ,
                name: NameFAQ,
                subject: SubjectFAQ,
                message: MessageFAQ,
                mobile: PhoneFAQ,
            }, {
                headers: {
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })

            if (SendRequest.status === 200) {
                setIsLoading(false)
                showToastSuccess('پیغام با موفقیت ارسال شد');
                setSubjectFAQ('');
                setSubjectFAQTrue(false);

                setMoreDeatilsFAQ('');

                setEmailFAQ('');
                setEmailFAQTrue(false);

                setNameFAQ('');
                setNameFAQTrue(false);

                setPhoneFAQ('');
                setPhoneFAQTrue(false);

                setMessageFAQ('');
                setMessageFAQTrue(false)

                props.setSQGAShow(false)

            } else {
                setIsLoading(false)
                showToastError('پیغام شما ارسال نشد');
            }
        } catch (err) {
            setIsLoading(false)
            console.log(err)
            showToastError('پیغام شما ارسال نشد');
        }
    }

    return (
        <>
            <Modal
                className='modal'
                show={props.SQGAShow}
                onClick={(event) => ModalCloser(ModalRef, props.setSQGAShow, event)}
            >
                <div className="modalcontainer2 F_Style" ref={ModalRef} >

                    <div className='modal-content'>

                        <ModalHeader
                            text='بازبینی سوال'
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>

                            <div className='infoedit-text'>
                                کاربر گرامی قبل از ارسال سوال خود، لطفا مجددا آن را برسی نمایید و در صورت درستی آن را ارسال کنید.
                            </div>

                            <div className='sqfa-review-container'>

                                <div className='sqfa-review'>
                                    <span> موضوع </span>
                                    <span> : </span>
                                    <span> {SubjectFAQ} </span>
                                </div>

                                {props.MoreDetails &&
                                    <div className='sqfa-review'>
                                        <span> توضیحات </span>
                                        <span> : </span>
                                        <span> {NullToDashString(MoreDeatilsFAQ)} </span>
                                    </div>
                                }

                                <div className='sqfa-review'>
                                    <span> ایمیل </span>
                                    <span> : </span>
                                    <span style={{fontFamily: 'SFLight'}}> {EmailFAQ} </span>
                                </div>

                                <div className='sqfa-review'>
                                    <span> نام و نام خانوداگی </span>
                                    <span> : </span>
                                    <span> {NameFAQ} </span>
                                </div>

                                <div className='sqfa-review'>
                                    <span> شماره تماس </span>
                                    <span> : </span>
                                    <span> {PhoneFAQ} </span>
                                </div>

                                <div className='sqfa-review'>
                                    <span> پیغام </span>
                                    <span> : </span>
                                    <span> {MessageFAQ} </span>
                                </div>

                            </div>

                            <div className='sqfa-review-btn'>
                                <div
                                    className='confirmrequest-Accept E_Style'
                                    style={{
                                        backgroundColor: 'var(--Primary-EZ)',
                                        color: 'white',
                                        border: 'none'
                                    }}
                                    onClick={handleSendQuestion}
                                >
                                    {IsLoading ?

                                        <LoadingDots Color='white' />
                                        :
                                        <>
                                            ارسال
                                        </>
                                    }

                                </div>


                                <div
                                    className='confirmrequest-Reject E_Style'
                                    onClick={() => props.setSQGAShow(false)}
                                    style={{
                                        backgroundColor: 'white',
                                        border: '2px solid var(--Primary-EZ)',
                                        color: 'var(--Primary-EZ)'
                                    }}
                                >
                                    ویرایش
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default SQGAModal