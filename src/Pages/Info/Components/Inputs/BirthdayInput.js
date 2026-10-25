import React, { useEffect, useState } from 'react';
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg';
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg'
import { useAppContext } from '../../../../Context/AppContext';
import './DesginAndSupervision.css';

function BirthdayInput(props) {

    // Day
    const { Day, setDay, DayTrue, setDayTrue } = useAppContext();
    const [ShowDay, setShowDay] = useState(false);
    const handleShowDay = () => {
        setShowDay(!ShowDay);
    }
    const DayElements = [];
    for (let i = 1; i <= 31; i++) {
        DayElements.push(
            <div key={i} className='ds-item2-list-items' onClick={() => [setDay(parseInt(i)), setShowDay(false)]}> {i} </div>
        )
    }

    //Month
    const MonthArray = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const { Month, setMonth, MonthTrue, setMonthTrue } = useAppContext();
    const [ShowMonth, setShowMonth] = useState(false);
    const handleShowMonth = () => {
        setShowMonth(!ShowMonth);
    }

    //Year 
    const { Year, setYear, YearTrue, setYearTrue } = useAppContext();
    const [ShowYear, setShowYear] = useState(false)
    const handleShowYear = () => {
        setShowYear(!ShowYear);
    }
    const YearElements = [];
    for (let i = 1399; i >= 1310; i--) {
        YearElements.push(
            <div key={i} className='ds-item2-list-items' onClick={() => [setYear(parseInt(i)), setShowYear(false)]}> {i} </div>
        )
    }

    useEffect(() => {
        setDayTrue(Day !== null && true)
        setMonthTrue(Month !== null && true)
        setYearTrue(Year !== null && true)
    }, [Day, Month, Year])

    return (
        <>
            <div className='dsContainer'>

                {/* Day */}
                <div className='dsContainer_Part'>

                    <div className='ds_item1'>
                        <label> روز </label>
                        <span> * </span>
                    </div>

                    <div className={ShowDay ? 'ds-item2-container-active' : 'ds-item2-container'}>
                        <div style={Day && !ShowDay ? { border: '1px solid var(--Success-Border)' } : {}} className={ShowDay ? 'ds-item2-active' : 'ds-item2'} onClick={handleShowDay}>
                            <div className='ds-item2-text'>
                                <div style={Day === null ? {} : { display: 'none' }}> {/*if needed placeholder put here*/} </div>
                                <div style={Day === null ? { display: 'none' } : { color: 'var(--Text-EZ-01', fontFamily:  /* Iran */ 'YekanBakhFaNum-regular', fontSize: '14px' }}> {Day} </div>
                            </div>
                            <div className='ds-item2-img'> <img src={Dropdown_Icon} alt='img' /></div>
                            <div className='ds-item2-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /></div>
                        </div>
                        <div style={ShowDay ? {} : { display: 'none' }} className='ds-divider'></div>
                        <div className='ds-item2-list' style={ShowDay ? {} : { display: 'none' }}>
                            <div className='ds-item2-list-items-container'>
                                {DayElements}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Month */}
                <div className='dsContainer_Part'>

                    <div className='ds_item1'>
                        <label> ماه </label>
                        <span> * </span>
                    </div>

                    <div className={ShowMonth ? 'ds-item2-container-active' : 'ds-item2-container'}>
                        <div style={Month && !ShowMonth ? { border: '1px solid var(--Success-Border)' } : {}} className={ShowMonth ? 'ds-item2-active' : 'ds-item2'} onClick={handleShowMonth}>
                            <div className='ds-item2-text'>
                                <div style={Month === null ? {} : { display: 'none' }}> {/*if needed placeholder put here*/} </div>
                                <div style={Month === null ? { display: 'none' } : { color: 'var(--Text-EZ-01', fontFamily:  /* Iran */ 'YekanBakhFaNum-regular', fontSize: '14px' }}> {Month} </div>
                            </div>
                            <div className='ds-item2-img'> <img src={Dropdown_Icon} alt='img' /></div>
                            <div className='ds-item2-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /></div>
                        </div>
                        <div style={ShowMonth ? {} : { display: 'none' }} className='ds-divider'></div>
                        <div className='ds-item2-list' style={ShowMonth ? {} : { display: 'none' }}>
                            <div className='ds-item2-list-items-container'>
                                {MonthArray.map((item, index) => (
                                    <div key={index} className='ds-item2-list-items' onClick={() => [setMonth(parseInt(index + 1)), setShowMonth(false)]}> {item} </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Year */}
                <div className='dsContainer_Part'>

                    <div className='ds_item1'>
                        <label> سال </label>
                        <span> * </span>
                    </div>

                    <div className={ShowYear ? 'ds-item2-container-active' : 'ds-item2-container'}>
                        <div style={Year && !ShowYear ? { border: '1px solid var(--Success-Border)' } : {}} className={ShowYear ? 'ds-item2-active' : 'ds-item2'} onClick={handleShowYear}>
                            <div className='ds-item2-text'>
                                <div style={Year === null ? {} : { display: 'none' }}> {/*if needed placeholder put here*/} </div>
                                <div style={Year === null ? { display: 'none' } : { color: 'var(--Text-EZ-01', fontFamily: 'YekanBakhFaNum-regular', fontSize: '14px' }}> {Year} </div>
                            </div>
                            <div className='ds-item2-img'> <img src={Dropdown_Icon} alt='img' /></div>
                            <div className='ds-item2-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /></div>
                        </div>
                        <div style={ShowYear ? {} : { display: 'none' }} className='ds-divider'></div>
                        <div className='ds-item2-list' style={ShowYear ? {} : { display: 'none' }}>
                            <div className='ds-item2-list-items-container'>
                                {YearElements}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default BirthdayInput