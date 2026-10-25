import React, { useRef, useState } from 'react'
import './ConfirmRequestModal.css';
import Modal from 'react-overlays/Modal';
import Info_Blue_Icon from '../../../../PublicAssets/Info_Icons/Info_Blue_Icon.svg';
import LoadingDots from '../../../Auth/Components/LoadingDots';
import ApiBaseUrl from '../../../../Api/axios';
import { useAppContext } from '../../../../Context/AppContext';
import toast from 'react-hot-toast';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';


function ConfirmRequestModal(props) {

    const { Name, Family, NationalCode, Email, setDuplicatedEmail, ProvinceId, CityId, Year, Month, Day } = useAppContext();

    const Birthday = Year + '/' + Month + '/' + Day;

    const [IsLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState(false);

    const handleClick_Accept = async () => {

        if (props.Requested === 'RoleEdit') {
            setIsLoading(true)
            try {
                const sendUserTypes = await ApiBaseUrl.post('api/profile/type', {
                    type_id: props.TypeId
                }, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('Token'),
                        Accept: 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                    }
                })
                if (sendUserTypes.status === 200) {
                    setError(false)
                    window.location.href = '/profile/job-info';
                    toast.dismiss();
                }

            } catch (error) {
                setIsLoading(false)
                setError(true)
            }
        }

        else if (props.Requested === 'DeleteLegalInfo') {
            setIsLoading(true)
            try {
                const SendRequest = await ApiBaseUrl.post('api/profile', {
                    name: Name,
                    family: Family,
                    national_code: NationalCode,
                    email: Email,
                    birthday: Birthday,
                    province_id: ProvinceId,
                    city_id: CityId,
                    entity: 'real',

                    company: undefined,
                    economic_code: undefined,
                    national_id: undefined,
                    register_id: undefined,
                    phone: undefined
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
                    setError(false)
                    window.location.href = '/profile';
                } else {
                    setIsLoading(false)
                    setError(true)
                    setDuplicatedEmail(false)
                }
            }
            catch (error) {
                if (error.response.status === 500) {
                    setIsLoading(false)
                    setError(false)
                    setDuplicatedEmail(true)
                } else {
                    setIsLoading(false)
                    setError(true)
                    setDuplicatedEmail(false)
                }
            }
        }

        else if (props.Requested === 'Logout') {
            localStorage.removeItem('Token');
            window.location.href = '/';
        }

    }

    const handleClick_Reject = () => {
        props.setConfirmRequest(false)
    }

    const handleModalHeaderClick = () => {
        props.setConfirmRequest(false)
        setError(false)
    }

    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.ConfirmRequest}
                onClick={(event) => [ModalCloser(ModalRef, props.setConfirmRequest, event), event.stopPropagation()]}
            >

                <div className="modalcontainer2 F_Style" ref={ModalRef}>
                    <div className='modal-content'>

                        <ModalHeader
                            text={props.text}
                            ModalHeaderClick={handleModalHeaderClick}
                        />


                        <div className='modal_style' style={{ paddingTop: '0px' }}>

                            <span style={{ display: props.desc ? 'flex' : 'none', alignItems: 'center', direction: 'rtl', paddingTop: '18px', cursor: 'default' }} >

                                <div style={{ display: 'flex', maxWidth: '100%', paddingTop: '2px' }}>
                                    <img src={Info_Blue_Icon} alt='img' />
                                </div>

                                <div style={{
                                    paddingRight: '6px',
                                    fontSize: '12px',
                                    color: 'var(--Tint-Primary-04)',
                                    fontFamily: 'YekanBakhFaNum-regular'
                                }}> {props.desc} </div>

                            </span>

                            <div className='confirmrequest-container'>

                                <div
                                    className='confirmrequest-Accept E_Style'
                                    style={{
                                        backgroundColor: props.Requested === 'Logout' && 'var(--CTA-EZ)',
                                        color: props.Requested === 'Logout' && 'white',
                                    }}
                                    onClick={handleClick_Accept}>
                                    {IsLoading ? <LoadingDots Color='var(--CTA-EZ)' /> : `${props.acceptText}`}
                                </div>

                                <div
                                    className='confirmrequest-Reject E_Style'
                                    style={{
                                        backgroundColor: props.Requested === 'Logout' && 'white',
                                        color: props.Requested === 'Logout' && 'var(--CTA-EZ)',
                                        border: props.Requested === 'Logout' && '2px solid var(--CTA-EZ)',
                                    }}
                                    onClick={handleClick_Reject}>
                                    {props.RejectText}
                                </div>

                            </div>

                            <div style={{ display: Error ? '' : 'none' }} className='auth-error'> خطایی رخ داده است </div>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ConfirmRequestModal