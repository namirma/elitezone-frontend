import React, { useRef, useState } from 'react'
import './ModalStyle.css';
import Modal from 'react-overlays/Modal';
import PhoneInput from '../Inputs/PhoneInput';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';
import ApiBaseUrl from '../../../../Api/axios';
import SmsCodeInput from '../Inputs/SmsCodeInput';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';


function PhoneNumberEditModal(props) {

    const [ChangePhoneNumberState, setChangePhoneNumberState] = useState('step1')
    const [IsLoading, setIsLoading] = useState(false)
    const [Error, setError] = useState(false)
    const [NewPhoneNumberValue, setNewPhoneNumberValue] = useState('');
    const [TrunOFFCounter, setTrunOFFCounter] = useState(false)

    const handleChangePhoneNumberStep1 = async () => {
        setIsLoading(true)
        try {
            const SendRequest = await ApiBaseUrl.get('api/profile/change-mobile', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('Token'),
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })
            if (SendRequest.status === 200 || SendRequest.status === 202) {
                setChangePhoneNumberState('step2')
                setIsLoading(false)
            } else {
                setIsLoading(false)
                setError(true)
            }
        } catch (err) {
            setError(true)
        }
    }

    const handleModalHeaderClick = () => {
        props.setPhoneNumberEditShow(false)
        setChangePhoneNumberState('step1')
        setTrunOFFCounter(false)
    }

    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.PhoneNumberEditShow}
                onClick={(event) => ModalCloser(ModalRef, props.setPhoneNumberEditShow, event)}
            >

                <div className="modalcontainer B_Style_withoutHover" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={'ویرایش شماره موبایل'}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>

                            {ChangePhoneNumberState === 'step1'
                                &&
                                <>
                                    <PhoneInput />
                                    <span onClick={handleChangePhoneNumberStep1}>
                                        <OverlayButton
                                            disableOnClick={true}
                                            text='دریافت کد تایید و تغییر شماره'
                                            IsLoading={IsLoading}
                                            Error={Error}
                                        />
                                    </span>
                                </>
                            }

                            {ChangePhoneNumberState === 'step2'
                                &&
                                <div>
                                    <SmsCodeInput
                                        handleChangePhoneNumberStep1={handleChangePhoneNumberStep1}
                                        setChangePhoneNumberState={setChangePhoneNumberState}
                                        SendFromWichComponent='phoneNumberEditModalstep2'
                                        setNewPhoneNumberValue={setNewPhoneNumberValue} />
                                </div>
                            }

                            {ChangePhoneNumberState === 'step3'
                                &&
                                <div>
                                    <SmsCodeInput
                                        setChangePhoneNumberState={setChangePhoneNumberState}
                                        SendFromWichComponent='phoneNumberEditModalstep3'
                                        NewPhoneNumberValue={NewPhoneNumberValue}
                                        TrunOFFCounter={TrunOFFCounter}
                                        setTrunOFFCounter={setTrunOFFCounter}
                                        setPhoneNumberEditShow={props.setPhoneNumberEditShow}
                                    />
                                </div>
                            }

                        </div>

                    </div>
                </div>

            </Modal>
        </>
    )
}

export default PhoneNumberEditModal