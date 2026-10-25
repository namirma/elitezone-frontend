import React, { useState, useEffect, useRef } from 'react'
import './ModalStyle.css';
import Modal from 'react-overlays/Modal';
import NationalIDInput from '../Inputs/NationalIDInput';
import RegistrationIDInput from '../Inputs/RegistrationIDInput';
import LandlineNumberInput from '../Inputs/LandlineNumberInput';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';
import DeleteButton from '../../../../Buttons/Components/DeleteButton';
import EconomicCodeInput from '../Inputs/EconomicCodeInput';
import CompanyInput from '../Inputs/CompanyInput';
import { useAppContext } from '../../../../Context/AppContext';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';
import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';

function LegalInfoEditModal(props) {

    //Context
    const { Company, setCompany,
        EconomicCode, setEconomicCode,
        NationalId, setNationalId,
        RegisterId, setRegisterId,
        LandlineNumber, setLandlineNumber } = useAppContext();

    const Inputs = [Company, EconomicCode, NationalId, RegisterId, LandlineNumber]

    const [EnableButton, setEnableButton] = useState(false)
    const IsSameData = CheckDataEquality(Inputs)
    const [SimilarData, resetSimilarData] = useSimilarData(IsSameData)

    useEffect(() => {
        if (Inputs.every((item) => item.length >= 1) && !IsSameData) {
            setEnableButton(true)
        } else {
            setEnableButton(false)
        }
    })


    const PrevCompany = useRef(Company)
    const PrevEconomicCode = useRef(EconomicCode)
    const PrevNationalId = useRef(NationalId)
    const PrevRegisterId = useRef(RegisterId)
    const PrevLandlineNumber = useRef(LandlineNumber)

    const handleModalHeaderClick = () => {
        props.setLegalEditShow(false)
        setCompany(PrevCompany.current)
        setEconomicCode(PrevEconomicCode.current)
        setNationalId(PrevNationalId.current)
        setRegisterId(PrevRegisterId.current)
        setLandlineNumber(PrevLandlineNumber.current)
    }

    useEffect(() => {
        if (props.LegalEditShow) {
            setCompany(PrevCompany.current)
            setEconomicCode(PrevEconomicCode.current)
            setNationalId(PrevNationalId.current)
            setRegisterId(PrevRegisterId.current)
            setLandlineNumber(PrevLandlineNumber.current)
            resetSimilarData();
        }
    }, [props.LegalEditShow]);


    const handleClearData = () => {
        setCompany('')
        setEconomicCode('')
        setNationalId('')
        setRegisterId('')
        setLandlineNumber('')
    }

    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.LegalEditShow}
                onClick={(event) => ModalCloser(ModalRef, props.setLegalEditShow, event)}
            >
                <div className="modalcontainer B_Style_withoutHover" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={'ثبت اطلاعات حقوقی '}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>
                            <CompanyInput
                                margin={'0 0 16px 0'}
                            />

                            <EconomicCodeInput
                                margin={'0 0 16px 0'}
                            />

                            <NationalIDInput
                                margin={'0 0 16px 0'}
                            />

                            <RegistrationIDInput
                                margin={'0 0 16px 0'}
                            />

                            <LandlineNumberInput
                                margin='0 0 24px 0'
                            />

                            <div style={{display:'flex', flexDirection: 'column', direction: 'rtl'}}>

                                <DeleteButton Text={'پاک کردن اطلاعات'} onClick={handleClearData} />

                                <OverlayButton
                                    text='ذخیره اطلاعات'
                                    disabled={EnableButton ? false : true}
                                    backgroundcolor={EnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                                    Cursor={EnableButton ? '' : 'default'}
                                />
                            </div>

                            <SimilarDataWarning SimilarData={SimilarData} />

                        </div>

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default LegalInfoEditModal