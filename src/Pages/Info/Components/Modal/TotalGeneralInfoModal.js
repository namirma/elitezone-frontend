import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-overlays/Modal';
import './ModalStyle.css';
import NameInput from '../Inputs/NameInput';
import FamilyInput from '../Inputs/FamilyInput';
import PhoneInput from '../Inputs/PhoneInput';
import NationalCodeInput from '../Inputs/NationalCodeInput';
import BirthdayInput from '../Inputs/BirthdayInput';
import EmailInput from '../Inputs/EmailInput';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';
import Provinces from '../Inputs/Provinces';
import Cities from '../Inputs/Cities';
import { useAppContext } from '../../../../Context/AppContext';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';

function TotalGeneralInfoModal(props) {

    const {
        NameTrue,
        FamilyTrue,
        NationalCodeTrue,
        DayTrue,
        MonthTrue,
        YearTrue,
        setDuplicatedEmail,
        ProvinceId, setProvinceId,
        ProvinceName, setProvinceName,
        setDisableCity,

        CityName, setCityName,
        CityId, setCityId,
        DisableCity
        } = useAppContext();

    

    const TrueArray = [NameTrue, FamilyTrue, NationalCodeTrue]

    // Handle Enable Or Disable Button
    const [EnableButton, setEnableButton] = useState(true)
    useEffect(() => {

        if ((TrueArray.every((item) => item === true)) && (ProvinceId !== null) && (CityId !== null)) {
            setEnableButton(true)
        } else {
            setEnableButton(false)
        }
    }, [...TrueArray, ProvinceId, CityId])

    const handleModalHeaderClick = () => {
        props.setTotalGeneralInfoShow(false)
        setDuplicatedEmail(false)
    }

    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.TotalGeneralInfoShow}
                onClick={(event) => ModalCloser(ModalRef, props.setTotalGeneralInfoShow, event)}
            >
                <div className="modalcontainer B_Style_withoutHover" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={'اطلاعات حساب کاربری'}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>
                            <form id='userinfo'>

                                <NameInput />

                                <FamilyInput />

                                <PhoneInput margin='0 0 20px 0' />

                                <NationalCodeInput margin='0 0 20px 0' />

                                <Provinces
                                 ProvinceId={ProvinceId} 
                                 setProvinceId={setProvinceId}
                                 ProvinceName={ProvinceName}
                                 setProvinceName={setProvinceName}
                                 setDisableCity={setDisableCity}
                                 />

                                <Cities
                                    CityName={CityName}
                                    setCityName={setCityName}
                                    CityId={CityId}
                                    setCityId={setCityId}
                                    ProvinceId={ProvinceId}
                                    DisableCity={DisableCity}
                                />

                            </form>

                            <OverlayButton
                                text='تایید'
                                disabled={EnableButton ? false : true}
                                backgroundcolor={EnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                                Cursor={!EnableButton && 'default'}
                            />

                        </div>
                    </div>

                </div>

            </Modal>

        </>
    )
}

export default TotalGeneralInfoModal