import React, { useEffect, useState } from 'react'
import './DesginAndSupervision.css';
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg';
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg'
import { useAppContext } from '../../../../Context/AppContext';

function DesginAndSupervision() {

    //Context
    const { setErrorInDesignAndSupervision } = useAppContext();

    // Design_Base_Context
    const [ShowDesign_Base, setShowDesign_Base] = useState(false);
    const handleShowDesign_Base = () => {
        setShowDesign_Base(!ShowDesign_Base);
    }

    //Context
    const { Design_Base_Context, setDesign_Base_Context } = useAppContext();
    const handleDesign_Base = (value) => {
        setDesign_Base_Context(value)
        setShowDesign_Base(false)
    }

    // Supervision_Base_Context
    const [ShowSupervision_Base, setShowSupervision_Base] = useState(false);
    const handleShowSupervision_Base = () => {
        setShowSupervision_Base(!ShowSupervision_Base);
    }

    //Context
    const { Supervision_Base_Context, setSupervision_Base_Context } = useAppContext();
    const handleSupervision_Base = (value) => {
        setSupervision_Base_Context(value)
        setShowSupervision_Base(false)
    }

    const [RedBorder, setRedBorder] = useState(false)
    useEffect(() => {
        if ((Design_Base_Context===DesignBaseArray[0]) && (Supervision_Base_Context===SupervisionBaseArray[0])) {
            setRedBorder(true);
            setErrorInDesignAndSupervision(true);
        } else {
            setRedBorder(false);
            setErrorInDesignAndSupervision(false);
        }

    }, [Design_Base_Context, Supervision_Base_Context])

    const Design_BaseBorderStyle = () => {
        if (!ShowDesign_Base && RedBorder === true) {
            return {
                borderColor: 'var(--SemanticColor-Error)'
            }
        } else if (!ShowDesign_Base && (Design_Base_Context !== '')) {
            return {
                border: '1px solid var(--Success-Border)'
            }
        }
    }

    const Supervision_BaseBorderStyle = () => {
        if (!ShowSupervision_Base && RedBorder === true) {
            return {
                borderColor: 'var(--SemanticColor-Error)'
            }
        } else if (!ShowSupervision_Base && Supervision_Base_Context !== '') {
            return {
                border: '1px solid var(--Success-Border)'
            }
        }
    }

    const DesignBaseArray = ['ندارم', '3', '2', '1', 'ارشد'];

    const SupervisionBaseArray = ['ندارم', '3', '2', '1', 'ارشد'];

    return (
        <>
            <div className='ds'>

                <div className='dsContainer'>

                    <div className='dsContainer_Part'>

                        <div className='ds_item1'>
                            <label> پایه طراحی </label>
                            <span> * </span>
                        </div>

                        <div className={ShowDesign_Base ? 'ds-item2-container-active' : 'ds-item2-container'}>
                            <div style={Design_BaseBorderStyle()} className={ShowDesign_Base ? 'ds-item2-active' : 'ds-item2'} onClick={handleShowDesign_Base}>
                                <div className='ds-item2-text'>
                                    <div style={Design_Base_Context === null ? {} : { display: 'none' }}> {/*if needed placeholder put here*/} </div>
                                    <div style={Design_Base_Context === null ? { display: 'none' } : { color: 'var(--Text-EZ-01', fontFamily:  /* Iran */ 'YekanBakhFaNum-regular', fontSize: '14px' }}>
                                        { Design_Base_Context }
                                    </div>
                                </div>
                                <div className='ds-item2-img'> <img src={Dropdown_Icon} alt='img' /></div>
                                <div className='ds-item2-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /></div>
                            </div>
                            <div style={ShowDesign_Base ? {} : { display: 'none' }} className='ds-divider'></div>
                            <div className='ds-item2-list' style={ShowDesign_Base ? {} : { display: 'none' }}>
                                <div className='ds-item2-list-items-container'>
                                    {DesignBaseArray.map((value, index) => (
                                        <div key={index} className='ds-item2-list-items' onClick={() => handleDesign_Base(value)}> {value} </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='dsContainer_Part'>

                        <div className='ds_item1'>
                            <label> پایه نظارت </label>
                            <span> * </span>
                        </div>

                        <div className={ShowSupervision_Base ? 'ds-item2-container-active' : 'ds-item2-container'}>
                            <div style={Supervision_BaseBorderStyle()} className={ShowSupervision_Base ? 'ds-item2-active' : 'ds-item2'} onClick={handleShowSupervision_Base}>
                                <div className='ds-item2-text'>
                                    <div style={Supervision_Base_Context === null ? {} : { display: 'none' }}> {/*if needed placeholder put here*/} </div>
                                    <div style={Supervision_Base_Context === null ? { display: 'none' } : { color: 'var(--Text-EZ-01)', fontFamily:  /* Iran */ 'YekanBakhFaNum-regular', fontSize: '14px' }}>
                                         { Supervision_Base_Context }
                                    </div>
                                </div>
                                <div className='ds-item2-img'> <img src={Dropdown_Icon} alt='img' /></div>
                                <div className='ds-item2-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /></div>
                            </div>
                            <div style={ShowSupervision_Base ? {} : { display: 'none' }} className='ds-divider'></div>
                            <div className='ds-item2-list' style={ShowSupervision_Base ? {} : { display: 'none' }}>
                                <div className='ds-item2-list-items-container'>
                                    {SupervisionBaseArray.map((value, index) => (
                                        <div key={index} className='ds-item2-list-items' onClick={() => handleSupervision_Base(value)}> {value} </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className={!ShowSupervision_Base && !ShowDesign_Base && RedBorder ? 'ShowDesginAndSupervisionError' : 'hiddenDesginAndSupervisionError'}> اطلاعات وارد شده نادرست است </div>
            </div>
        </>
    )
}
export default DesginAndSupervision;