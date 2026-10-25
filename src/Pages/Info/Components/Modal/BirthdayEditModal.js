import React, { useState, useEffect, useRef } from 'react'
import './ModalStyle.css';
import Modal from 'react-overlays/Modal';
import BirthdayInput from '../Inputs/BirthdayInput';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';
import { useAppContext } from '../../../../Context/AppContext';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';
import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';

function BirthdayEditModal(props) {

    //Constext
    const {
        Day, setDay, DayTrue,
        Month, setMonth, MonthTrue,
        Year, setYear, YearTrue
    } = useAppContext();

    const TrueInput = [DayTrue, MonthTrue, YearTrue]
    const Inputs = [Day, Month, Year]

    const IsSameData = CheckDataEquality(Inputs);
    const [SimilarData, resetSimilarData] = useSimilarData(IsSameData)
    const [WrongFormat, setWrongFormat] = useState(false);
    const [EnableButton, setEnableButton] = useState(false)

    useEffect(() => {
        if ((TrueInput.every((item) => item === true)) && !IsSameData) {
            if (Day === 31 && [7, 8, 9, 10, 11, 12].includes(Month)) {
                setEnableButton(false)
                setWrongFormat(true)
            }
            else {
                setEnableButton(true)
                setWrongFormat(false)
            }
        } else {
            setEnableButton(false)
            setWrongFormat(false)
        }
    }, [Inputs, TrueInput, IsSameData])

    const PrevDay = useRef(Day)
    const PrevMonth = useRef(Month)
    const PrevYear = useRef(Year)

    const handleModalHeaderClick = () => {
        props.setBirthdayEditShow(false)
        setDay(PrevDay.current)
        setMonth(PrevMonth.current)
        setYear(PrevYear.current)
        resetSimilarData();
    }

    useEffect(() => {
        if (props.BirthdayEditShow) {
            setDay(PrevDay.current)
            setMonth(PrevMonth.current)
            setYear(PrevYear.current)
            resetSimilarData();
        }
    }, [props.BirthdayEditShow]);


    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.BirthdayEditShow}
                onClick={(event) => ModalCloser(ModalRef, props.setBirthdayEditShow, event)}
            >
                <div className="modalcontainer B_Style_withoutHover" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text={'تاریخ تولد'}
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>
                            <BirthdayInput
                                margin='20px 0'
                            />

                            <OverlayButton
                                text='تایید'
                                disableOnClick={true}
                                sendFromBirthday={true}
                                disabled={EnableButton ? false : true}
                                backgroundcolor={EnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                                Cursor={!EnableButton && 'default'}
                            />

                            <div style={{display: !WrongFormat && 'none' }} className='auth-error'> تاریخ وارد شده نادرست است </div>
                            
                            <SimilarDataWarning SimilarData={SimilarData} />
                        </div>

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default BirthdayEditModal