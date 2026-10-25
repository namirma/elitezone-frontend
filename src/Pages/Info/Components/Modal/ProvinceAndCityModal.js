import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-overlays/Modal';
import './ModalStyle.css';
import OverlayButton from '../../../../Buttons/Components/OverlayButton';
import Provinces from '../Inputs/Provinces';
import Cities from '../Inputs/Cities';
import { useAppContext } from '../../../../Context/AppContext';
import CheckDataEquality from '../../../../PersonalFunction/CheckDataEquality';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';
import useSimilarData from '../../../../PersonalFunction/useSimilarData';
import SimilarDataWarning from '../Warnings/SimilarDataWarning';

function ProvinceAndCityModal(props) {

    const {
        ProvinceId, setProvinceId,
        ProvinceName, setProvinceName,
        CityId, setCityId,
        CityName, setCityName,
        setDisableCity,
        DisableCity
    } = useAppContext();

    const Inputs = [ProvinceId, CityId]
    const IsSameData = CheckDataEquality(Inputs)
    const [SimilarData, resetSimilarData] = useSimilarData(IsSameData)
    const [EnableButton, setEnableButton] = useState(false)

    useEffect(() => {
        if (!IsSameData && ProvinceId && CityId) {
            setEnableButton(true)
        } else {
            setEnableButton(false)
        }
    })

    const prevProvinceId = useRef(ProvinceId)
    const prevProvinceName = useRef(ProvinceName)
    const prevCityId = useRef(CityId)
    const prevCityName = useRef(CityName)

    const handleModalHeaderClick = () => {
        props.setProvinceAndCityEditShow(false)
        setProvinceId(prevProvinceId.current)
        setProvinceName(prevProvinceName.current)
        setCityId(prevCityId.current)
        setCityName(prevCityName.current)
        resetSimilarData();
    }

    useEffect(() => {
        if (props.ProvinceAndCityEditShow) {
            setProvinceId(prevProvinceId.current)
            setProvinceName(prevProvinceName.current)
            setCityId(prevCityId.current)
            setCityName(prevCityName.current)
            resetSimilarData();
        }
    }, [props.ProvinceAndCityEditShow]);

    const ModalRef = useRef();

    return (
        <>
            <Modal
                className="modal"
                show={props.ProvinceAndCityEditShow}
                onClick={(event) => ModalCloser(ModalRef, props.setProvinceAndCityEditShow, event)}
            >

                <div className="modalcontainer B_Style_withoutHover" ref={ModalRef}>

                    <div className='modal-content'>

                        <ModalHeader
                            text='شهر و استان'
                            ModalHeaderClick={handleModalHeaderClick}
                        />

                        <div className='modal_style'>
                            <div>
                                <Provinces
                                    ProvinceId={ProvinceId}
                                    setProvinceId={setProvinceId}
                                    ProvinceName={ProvinceName}
                                    setProvinceName={setProvinceName}
                                    setDisableCity={setDisableCity}
                                />
                            </div>

                            <div>
                                <Cities
                                    CityName={CityName}
                                    setCityName={setCityName}
                                    CityId={CityId}
                                    setCityId={setCityId}
                                    ProvinceId={ProvinceId}
                                    DisableCity={DisableCity}
                                />
                            </div>

                            <OverlayButton
                                text='تایید'
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

export default ProvinceAndCityModal