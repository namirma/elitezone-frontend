import React, { useRef, useState } from 'react'
import './ModalStyle.css';
import Modal from 'react-overlays/Modal';
import ChangePassInput from '../Inputs/ChangePassInput';
import PhoneInput from '../Inputs/PhoneInput';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';

//Context
import ApiBaseUrl from '../../../../Api/axios';
import SmsCodeInput from '../Inputs/SmsCodeInput';
import { useAppContext } from '../../../../Context/AppContext';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';

function PasswordEditModal(props) {

    //Context
    const { Password, PhoneNumber } = useAppContext();

    const [ChangePassState, setChangePassState] = useState('step1');
    const [Error, setError] = useState(false);
    const [IsLoading, setIsLoading] = useState(false)


    const handleChangePassStep1 = async () => {
        setIsLoading(true)
        try {
            const sendRequest = await ApiBaseUrl.get('api/profile/change-password/first-attempt', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('Token'),
                    Accept: 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                }
            })
            if (sendRequest.status === 200 || sendRequest.status === 202) {
                setChangePassState('step2')
                setIsLoading(false)
            } else {
                setError(true)
                setIsLoading(false)
            }
        } catch (err) {
        }
    }

    const handleModalHeaderClick = () => {
        props.setPasswordEditShow(false)
    }

    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.PasswordEditShow}
                onClick={(event) => ModalCloser(ModalRef, props.setPasswordEditShow, event)}
            >
                <div className="modalcontainer B_Style_withoutHover" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={Password === true ? "ویرایش رمز عبور" : "افزودن پسورد"}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>
                            {Password === true ?
                                <div>
                                    
                                    {ChangePassState === 'step1' &&
                                        <span>
                                            <PhoneInput margin='20px 0' />

                                            <span style={{ width: 'auto' }} onClick={handleChangePassStep1}>
                                                <OverlayButton
                                                    disableOnClick={true}
                                                    IsLoading={IsLoading}
                                                    text='دریافت کد تایید'
                                                    Error={Error}
                                                />
                                            </span>

                                        </span>
                                    }

                                    {ChangePassState === 'step2' &&
                                        <span>
                                            <SmsCodeInput
                                                setChangePassState={setChangePassState}
                                                SendFromWichComponent='passwordEditModal'
                                            />
                                        </span>
                                    }

                                    {ChangePassState === 'step3' &&
                                        <span>
                                            <ChangePassInput />
                                        </span>
                                    }
                                </div>
                                :

                                <div>
                                    <ChangePassInput />
                                </div>
                            }
                        </div>

                    </div>
                </div>

            </Modal>
        </>
    )
}

export default PasswordEditModal