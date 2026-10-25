import React, { useState } from 'react'
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg';
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg'
import { useAppContext } from '../../../../Context/AppContext';


function ProjectDoneAndInProgress(props) {
    const [ShowProject_Done, setShowProject_Done] = useState(false);
    const handleShowProject_Done = () => {
        setShowProject_Done(!ShowProject_Done);
    }

    const { Project_Done_Context, setProject_Done_Context } = useAppContext();
    const handleProject_Done = (value) => {
        setProject_Done_Context(value)
        setShowProject_Done(false)
    }

    const [ShowProject_In_Progress, setShowProject_In_Project] = useState(false);
    const handleProject_In_Project = () => {
        setShowProject_In_Project(!ShowProject_In_Progress);
    }

    const { Project_In_Progress_Context, setProject_In_Progress_Context } = useAppContext();
    const handleProject_In_Progress = (value) => {
        setProject_In_Progress_Context(value)
        setShowProject_In_Project(false)
    }


    const handleProject_Done_Style = () => {
        if (Project_Done_Context !== '' && !ShowProject_Done) {
            return {
                border: '1px solid var(--Success-Border)'
            }
        }
    }

    const handleProject_In_Progress_Style = () => {
        if (Project_In_Progress_Context !== '' && !ShowProject_In_Progress) {
            return {
                border: '1px solid var(--Success-Border)'
            }
        }
    }

    const Project_Done_Array = ['0', '1', '2', '3', '4', '5 یا بیشتر'];
    const Project_In_Progress_Array = ['0', '1', '2', '3', '4', '5 یا بیشتر'];


    return (
        <>
            <div className='ds' style={{ padding: props.padding, margin: props.margin }}>

                <div className='ds-label'>
                    <div> تعداد پروژه(ها) </div>
                    <div style={props.ShouldEnterNumberOfProject ? { color: 'var(--SemanticColor-Error)' } : { display: 'none' }}> * </div>
                </div>

                <div className='dsContainer'>

                    <div className='dsContainer_Part'>

                        <div className='ds_item1'>
                            <label> انجام شده </label>
                        </div>

                        <div className={ShowProject_Done ? 'ds-item2-container-active' : 'ds-item2-container'}>
                            <div style={handleProject_Done_Style()} className={ShowProject_Done ? 'ds-item2-active' : 'ds-item2'} onClick={handleShowProject_Done}>
                                <div className='ds-item2-text'>
                                    <div style={Project_Done_Context === '' ? {} : { display: 'none' }}> صفر </div>
                                    <div style={Project_Done_Context === '' ? { display: 'none' } : { color: 'var(--Text-EZ-01)', fontFamily: 'YekanBakhFaNum-regular', fontSize: '14px', textAlign: 'right' }}>
                                        {Project_Done_Context}
                                    </div>
                                </div>
                                <div className='ds-item2-img'> <img src={Dropdown_Icon} alt='img' /></div>
                                <div className='ds-item2-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /></div>
                            </div>
                            <div style={ShowProject_Done ? {} : { display: 'none' }} className='ds-divider'></div>
                            <div className='ds-item2-list' style={ShowProject_Done ? {} : { display: 'none' }}>
                                <div className='ds-item2-list-items-container'>
                                    {Project_Done_Array.map((value, index) => (
                                        <div key={index} className='ds-item2-list-items' onClick={() => handleProject_Done(value)}> {value} </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='dsContainer_Part'>

                        <div className='ds_item1'>
                            <label> در دست اجرا </label>
                        </div>

                        <div className={ShowProject_In_Progress ? 'ds-item2-container-active' : 'ds-item2-container'}>
                            <div style={handleProject_In_Progress_Style()} className={ShowProject_In_Progress ? 'ds-item2-active' : 'ds-item2'} onClick={handleProject_In_Project}>
                                <div className='ds-item2-text'>
                                    <div style={Project_In_Progress_Context === '' ? {} : { display: 'none' }}> یک </div>
                                    <div style={Project_In_Progress_Context === '' ? { display: 'none' } : { color: 'var(--Text-EZ-01', fontFamily:'YekanBakhFaNum-regular', fontSize: '14px', textAlign: 'right' }}>
                                            {Project_In_Progress_Context}
                                    </div>
                                </div>
                                <div className='ds-item2-img'> <img src={Dropdown_Icon} alt='img' /></div>
                                <div className='ds-item2-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /></div>
                            </div>
                            <div style={ShowProject_In_Progress ? {} : { display: 'none' }} className='ds-divider'></div>
                            <div className='ds-item2-list' style={ShowProject_In_Progress ? {} : { display: 'none' }}>
                                <div className='ds-item2-list-items-container'>
                                    {Project_In_Progress_Array.map((value, index) => (
                                        <div key={index} className='ds-item2-list-items' onClick={() => handleProject_In_Progress(value)}> {value} </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ProjectDoneAndInProgress