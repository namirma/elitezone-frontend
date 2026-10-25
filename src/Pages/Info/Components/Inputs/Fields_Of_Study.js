import React, {useState} from 'react'
import './Fields_Of_Study.css';
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg';
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg';
import { useAppContext } from '../../../../Context/AppContext';

function Fields_Of_Study(props) {
    
    const [ShowList, setShowList] = useState(false);
    const handleShowList = () => {
        setShowList(!ShowList);
    }

    const {Fields_Of_Study_Context, setFields_Of_Study_Context} = useAppContext();
    const handleFields_Of_Study = (value) => {
        setFields_Of_Study_Context(value);
        setShowList(false)
    }

    const Array = ['عمران', 'معماری', 'مکانیک', 'برق', 'نقشه برداری', 'شهر سازی', 'ترافیک'];
   
  return (
    <>
        <div className='Fields_Of_Study'>
            {/* Label */}
            <div className='Fields_Of_Study-label'>
                <label> رشته تحصیلی </label>
                <span>*</span>
            </div>

            <div className={ShowList ? 'Fields_Of_Study-container-active' : 'Fields_Of_Study-container'}>

                <div style={Fields_Of_Study_Context !== '' && !ShowList ? {border:'1px solid var(--Success-Border)'} : {}} className={ShowList ? 'multiselect-Fields_Of_Study-active' : 'multiselect-Fields_Of_Study'} onClick={handleShowList}>

                    <div className='multiselect-Fields_Of_Study-content'>
                        <div className='multiselect-Fields_Of_Study-content-placeholder' style={Fields_Of_Study_Context === '' ? {} : {display:'none'}}> انتخاب کنید </div>
                        <div className='multiselect-Fields_Of_Study-content-item' style={Fields_Of_Study_Context === '' ? {display:'none'} : {}}> {Fields_Of_Study_Context} </div>
                    </div>

                    <div className='multiselect-Fields_Of_Study-img'> <img src={Dropdown_Icon} alt='img' /> </div>
                    <div className='multiselect-Fields_Of_Study-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /> </div>

                </div>

                <div className='Fields_Of_Study-divider' style={ShowList ? {} : { display: 'none' }}> {/*Divider Between Title and List*/} </div>

                <div className='list-Fields_Of_Study' style={ShowList ? {} : {display: 'none'}}>
                    <div className='list-Fields_Of_Study-items-container'>
                        {Array.map((item, index) => (
                            <div key={index} className='list-Fields_Of_Study-items' onClick={() => handleFields_Of_Study(item)}> {item} </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>    
    </>
  )
}

export default Fields_Of_Study