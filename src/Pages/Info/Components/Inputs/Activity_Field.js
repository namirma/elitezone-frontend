import React, { useState } from 'react'
import './Activity_Field.css'
import Add_Icon from '../../../../PublicAssets/Add_Icons/Add_Icon.svg';
import Add_Hover_Icon from '../../../../PublicAssets/Add_Icons/Add_Hover_Icon.svg';
import ActivityFieldMenuModal from '../Modal/ActivityFieldMenuModal';
import Plus_Green_Icon from '../../../../PublicAssets/Plus_Icons/Plus_Green_Icon.svg';
import Trashbin_Blue_Icon from '../../../../PublicAssets/Trashbin_Icons/Trashbin_Blue_Icon.svg';
import Trashbin_Red_Icon from '../../../../PublicAssets/Trashbin_Icons/Trashbin_Red_Icon.svg';
import { useAppContext } from '../../../../Context/AppContext';


function Activity_Field() {

    //Context
    const { Activity_Field_Menu_List, Activity_Field_Menu_Context, setActivity_Field_Menu_Context } = useAppContext();

    const [Activity_Field_Menu_Show, setActivity_Field_Menu_Show] = useState(false)
    const HandleShowList = () => {
        setActivity_Field_Menu_Show(true)
    }

    const DeleteText = (item) => {
        setActivity_Field_Menu_Context(Activity_Field_Menu_Context.filter((DeleteItem) => DeleteItem !== item))
    }

    const handleDeleteAllClick = () => {
        setActivity_Field_Menu_Context([]);
    }

    // Recursive function to render hierarchical menu
    const renderMenu = (data) => {
        return data.map((item) => (
            <div key={item.id}>
                <div
                    className='foa-menu-item'
                    onClick={() => setActivity_Field_Menu_Context([...Activity_Field_Menu_Context, item.name])}
                >
                    {item.name}
                </div>
                {item.children && item.children.length > 0 && (
                    <div className='foa-menu-children'>
                        {renderMenu(item.children)}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <>
            <div className='foa-container'>

                <div className='foa-label'>
                    <div> زمینه فعالیت </div>
                    <div> * </div>
                </div>

                <div style={{ border: (Activity_Field_Menu_Context.length > 0) ? '1px solid var(--Success-Border)' : '', transition: '.1s ease' }} className='foa-entry' onClick={HandleShowList}>
                    <div className='foa-entry-placeholder'> انتخاب زمینه فعالیت </div>
                    <div className='foa-entry-img'> <img src={Add_Icon} alt="img" /> </div>
                    <div className='foa-entry-img-hover'> <img src={Add_Hover_Icon} alt="img" /> </div>
                </div>
            </div>

            {/* Code Below Use For Show Selected Foa Menu Value To Use. its Use Products Brand Style */}
            {Activity_Field_Menu_Context.map((id, index) => {
                let itemName = null;

                // Find the name of the item based on its ID
                for (const key in Activity_Field_Menu_List) {
                    const foundItem = Activity_Field_Menu_List[key]?.find(item => item.id === id);
                    if (foundItem) {
                        itemName = foundItem.name;
                        break;
                    }
                }

                // Return the JSX for the current item
                return (
                    <div key={id} className='foa-menu-entered'>
                        <div className='foa-menu-entered-item1'>
                            <span>
                                <img src={Plus_Green_Icon} alt="img" />
                            </span>
                            <span>
                                <div> {itemName || "خطا در نمایش"} </div>
                            </span>
                        </div>
                        <div className='foa-menu-entered-itme2'>
                            <img
                                style={{ cursor: 'pointer'}}
                                src={Trashbin_Blue_Icon}
                                alt="img"
                                onClick={() => DeleteText(id)}
                            />
                        </div>
                    </div>
                );
            })}

            <div
                style={{
                    display: Activity_Field_Menu_Context.length === 0 && 'none',
                    flexDirection: 'row',
                    alignItems: 'center',
                    direction: 'rtl',
                    fontFamily: 'YekanBakhFaNum-Light',
                    fontSize: '12px',
                    color: 'var(--SemanticColor-Error)',
                    marginBottom: '8px',
                    userSelect: 'none',
                    marginRight: '4px'
                }}

            >
                <span onClick={handleDeleteAllClick} style={{ cursor: 'pointer', width: 'max-content', display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center', }}>
                    <img src={Trashbin_Red_Icon} alt='img' style={{ marginLeft: '4px'}} />
                    پاک کردن همه
                </span>
            </div>

            {Activity_Field_Menu_Show &&
                <ActivityFieldMenuModal
                    Activity_Field_Menu_Show={Activity_Field_Menu_Show}
                    setActivity_Field_Menu_Show={setActivity_Field_Menu_Show} />
            }


        </>
    )
}

export default Activity_Field