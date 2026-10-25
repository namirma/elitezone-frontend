import React, { useState } from 'react';
import NameFAQInput from '../../Info/Components/Inputs/NameFAQInput';
import EmailFAQInput from '../../Info/Components/Inputs/EmailFAQInput';
import SubjectFAQInput from '../../Info/Components/Inputs/SubjectFAQInput';
import MessageFAQInput from '../../Info/Components/Inputs/MessageFAQInput';
import { useAppContext } from '../../../Context/AppContext';
import { useToast } from '../../../PersonalFunction/Toast';
import MainButton from '../../../Buttons/Components/MainButton';
import PhoneFAQInput from './PhoneFAQInput';
import MoreDetailFAQ from '../../Info/Components/Inputs/MoreDetailFAQ';
import SQGAModal from './Modal/SQGAModal';
import MainButton2 from '../../../Buttons/Components/MainButton2';

function SQGA() {

    const {
        SubjectFAQ, setSubjectFAQ, SubjectFAQTrue, setSubjectFAQTrue,
        MoreDeatilsFAQ, setMoreDeatilsFAQ,
        EmailFAQ, setEmailFAQ, EmailFAQTrue, setEmailFAQTrue,
        NameFAQ, setNameFAQ, NameFAQTrue, setNameFAQTrue,
        PhoneFAQ, setPhoneFAQ, PhoneFAQTrue, setPhoneFAQTrue,
        MessageFAQ, setMessageFAQ, MessageFAQTrue, setMessageFAQTrue,
    } = useAppContext();


    const { showToastError } = useToast();

    const handleSendEmail = () => {
        if (SubjectFAQTrue && EmailFAQTrue && NameFAQTrue && PhoneFAQTrue && MessageFAQTrue) {
            setSQGAShow(true)
        } else {
            showToastError('پیغام شما ارسال نشد');
        }
    };

    const [MoreDetails, setMoreDetails] = useState(false);

    const [SQGAShow, setSQGAShow] = useState(false);

    return (
        <>
            <div className='faq-container A_Style'>
                <div className='faq-content-container B_Style'>
                    <div className='faq-title'>
                        <div style={{ marginTop: '16px' }}>سوالی دارید؟</div>
                        <div> از ما بپرسید، در خدمت شما هستیم. </div>
                    </div>

                    <div className='foa_ContactUs_container'>

                        <span>
                            <div className='foa_ContactUs_rightside'>
                                <div style={{ width: '100%' }}>
                                    <SubjectFAQInput margin={0} setMoreDetails={setMoreDetails} />
                                </div>
                                {MoreDetails &&
                                    <div style={{ width: '100%' }}>
                                        <MoreDetailFAQ margin={0} />
                                    </div>
                                }
                                <div style={{ width: '100%' }}>
                                    <EmailFAQInput margin={0} />
                                </div>
                            </div>


                            <div className='foa_ContactUs_leftside'>
                                <div style={{ width: '100%' }}>
                                    <NameFAQInput margin={0} />
                                </div>

                                <div style={{ width: '100%' }}>
                                    <PhoneFAQInput margin={0} />
                                </div>
                            </div>
                        </span>

                        <div className='foa_ContactUs_Message'>
                            <MessageFAQInput margin={0} />
                        </div>
                    </div>


                    <div className='foa-button' onClick={handleSendEmail}>
                        {/* <MainButton ButtonMode={2} ImgMode={'Email'} Text='ثبت سوال' /> */}
                        <MainButton2 ButtonMode='Blue' Text='ثبت سوال' ImgMode={'Email'} />
                    </div>
                </div>
            </div>

            <SQGAModal SQGAShow={SQGAShow} setSQGAShow={setSQGAShow} MoreDetails={MoreDetails} />
        </>
    )
}

export default SQGA