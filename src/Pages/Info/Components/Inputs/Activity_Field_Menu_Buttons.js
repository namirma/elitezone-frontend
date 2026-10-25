import React from 'react'
import './Activity_Field_Menu_Buttons.css';
import { useAppContext } from '../../../../Context/AppContext';

function Activity_Field_Menu_Buttons({ Arrays, ShowMenu }) {

  const { Activity_Field_Menu_Context, setActivity_Field_Menu_Context } = useAppContext();

  const HandleSaveAllOption = (Arrays) => {
    const newItems = Arrays.filter((item, index) => index !== 0);
    setActivity_Field_Menu_Context([...new Set([...Activity_Field_Menu_Context, ...newItems])])
  }

  const HandleResetAllOption = (Arrays) => {
    const itemsToRemove = Arrays.filter((item, index) => index !== 0)
    setActivity_Field_Menu_Context(...new Set([Activity_Field_Menu_Context.filter(item => !itemsToRemove.includes(item))]))
  }

  const allItemsSelected = Arrays.slice(1).every(item => Activity_Field_Menu_Context.includes(item));
  const selectedItemsCount = Arrays.slice(1).some(item => Activity_Field_Menu_Context.includes(item));

  const handleCheckboxClick = (Arrays) => {
    const allSelected = Arrays.slice(1).every(item => Activity_Field_Menu_Context.includes(item));
    if (allSelected) {
      HandleResetAllOption(Arrays);
    } else {
      HandleSaveAllOption(Arrays);
    }
  }

  return (
    <div className='AFM_Menu_Coumn_Item' style={{ display: ShowMenu.includes(Arrays[0]) ? '' : 'none' }}>
      <div className='AFM_Options_Button'>

        <span style={{ display: 'flex', alignItems: 'center' }} onClick={() => HandleSaveAllOption(Arrays)}>
          <input
            type='checkbox'
            checked={allItemsSelected}
            onClick={() => handleCheckboxClick(Arrays)}
            readOnly
          />
          <span style={{ marginRight: '8px' }}>
            انتخاب همه
          </span>
        </span>

        {selectedItemsCount && (
          <span onClick={() => HandleResetAllOption(Arrays)}>پاک کردن</span>
        )}

      </div>
    </div>
  )
}

export default Activity_Field_Menu_Buttons