import React, { useState, useEffect, useRef } from 'react'
import './ModalStyle.css';
import './InfoEditModal.css'
import Modal from 'react-overlays/Modal';
import NameInput from '../Inputs/NameInput';
import FamilyInput from '../Inputs/FamilyInput';
import NationalCodeInput from '../Inputs/NationalCodeInput';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';
import { useAppContext } from '../../../../Context/AppContext';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';

import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';

function InfoEditModal(props) {

    const {
        Name,
        setName,
        NameTrue,

        Family,
        setFamily,
        FamilyTrue,

        NationalCode,
        setNationalCode,
        NationalCodeTrue } = useAppContext();

    const TrueArray = [NameTrue, FamilyTrue, NationalCodeTrue];
    const Inputs = [Name, Family, NationalCode]

    const IsSameData = CheckDataEquality(Inputs)
    const [SimilarData, resetSimilarData] = useSimilarData(IsSameData)
    const [EnableButton, setEnableButton] = useState(false)

    useEffect(() => {
        if (TrueArray.every(item => item === true) && !IsSameData) {
            setEnableButton(true);
        } else {
            setEnableButton(false);
        }

    }, [IsSameData, TrueArray]);


    const PrevName = useRef(Name)
    const PrevFamily = useRef(Family)
    const PrevNationalCode = useRef(NationalCode)

    const handleModalHeaderClick = () => {
        props.setInfoEditShow(false)
        setName(PrevName.current)
        setFamily(PrevFamily.current)
        setNationalCode(PrevNationalCode.current)
        resetSimilarData();
    }

    useEffect(() => {
        if (props.InfoEditShow) {
            setName(PrevName.current)
            setFamily(PrevFamily.current)
            setNationalCode(PrevNationalCode.current)
            resetSimilarData();
        }
    }, [props.InfoEditShow]);

    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.InfoEditShow}
                onClick={(event) => ModalCloser(ModalRef, props.setInfoEditShow, event)}
            >
                <div className="modalcontainer B_Style_withoutHover" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={'ثبت اطلاعات شناسایی'}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>

                            <div className='infoedit-text'>
                                لطفا اطلاعات شناسایی خود را وارد کنید .
                                <br /> نام و نام خانوادگی شما باید با
                                اطلاعات که وارد می کنید همخوانی داشته باشند
                            </div>

                            <div className='infoedit-container'>
                                <div className='infoedit-2info'>

                                    <div>
                                        <NameInput />
                                    </div>

                                    <span style={{ padding: '0 17px 0 0' }}></span>

                                    <div>
                                        <FamilyInput />
                                    </div>

                                </div>
                                <NationalCodeInput />
                            </div>


                            <OverlayButton text='ویرایش اطلاعات'
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

export default InfoEditModal