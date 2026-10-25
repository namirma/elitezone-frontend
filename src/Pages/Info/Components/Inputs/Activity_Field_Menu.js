import React, { useEffect, useRef, useState } from 'react'
import './Activity_Field_Menu.css';
import SaveButton from '../../../../Buttons/Components/SaveButton'
import Flash2_TextEZ02_Icon from '../../../../PublicAssets/Arrow_Icons/Flash2_TextEZ02_Icon.svg';
import CheckDataEquality2 from '../../../../PersonalFunction/CheckDataEquality2';
import { useAppContext } from '../../../../Context/AppContext';
import LoadingDots from '../../../Auth/Components/LoadingDots';

function Activity_Field_Menu(props) {

    const { Activity_Field_Menu_List } = useAppContext();

    const columnKeys = Object.keys(Activity_Field_Menu_List); // Extract keys dynamically
    const totalKeys = columnKeys.length; // Total number of keys
    const columnSize = Math.ceil(totalKeys / 3); // Round up to ensure all keys are included

    const Column1 = columnKeys.slice(0, columnSize).map((key) => ({
        key,
        items: Activity_Field_Menu_List[key],
    }));

    const Column2 = columnKeys.slice(columnSize, columnSize * 2).map((key) => ({
        key,
        items: Activity_Field_Menu_List[key],
    }));
    
    const Column3 = columnKeys.slice(columnSize * 2).map((key) => ({
        key,
        items: Activity_Field_Menu_List[key],
    }));

    const [ShowMenu, setShowMenu] = useState([]);
    const handleShowMenu = (value) => {
        const IsMenuOpen = ShowMenu.includes(value)
        if (IsMenuOpen) {
            setShowMenu(ShowMenu.filter((CloseOpenMenu) => CloseOpenMenu !== value))
        } else {
            setShowMenu([...ShowMenu, value])
        }
    }

    //Context 
    const { Activity_Field_Menu_Context, setActivity_Field_Menu_Context } = useAppContext();
    const handleSelectClick = (id) => {
        const alreadyExists = Activity_Field_Menu_Context.includes(id);
        if (alreadyExists) {
            setActivity_Field_Menu_Context(Activity_Field_Menu_Context.filter(itemId => itemId !== id));
        } else {
            setActivity_Field_Menu_Context([...Activity_Field_Menu_Context, id]);
        }
    };

    const [supportsHover, setSupportsHover] = useState(false)
    useEffect(() => {
        const hoverMediaQuery = window.matchMedia('(hover: hover)');
        setSupportsHover(hoverMediaQuery.matches);

        const handleHoverChange = (e) => {
            setSupportsHover(e.matches);
        };

        hoverMediaQuery.addEventListener('change', handleHoverChange);
        return () => hoverMediaQuery.removeEventListener('change', handleHoverChange);

    }, [])

    const [MouseOver, setMouseOver] = useState(false);
    const [ItemMouseOver, setItemMouseOver] = useState([]);

    const handleMouseOver = (value) => {
        setMouseOver(true);
        setItemMouseOver(value);
    };

    const handleMouseLeave = () => {
        setMouseOver(false);
        setItemMouseOver(null);
    };

    const handleTouchStart = (value) => {
        handleMouseOver(value);
    };

    const handleTouchEnd = () => {
        handleMouseLeave();
    };

    const [EnableButton, setEnableButton] = useState(false)
    const EqualData = CheckDataEquality2(Activity_Field_Menu_Context)

    useEffect(() => {
        if (Activity_Field_Menu_Context.length >= 1 && !EqualData) {
            setEnableButton(true)
        } else {
            setEnableButton(false)
        }
    }, [Activity_Field_Menu_Context, EqualData, EnableButton])

    const handleSaveClick = () => {
        if (EnableButton) {
            props.setActivity_Field_Menu_Show(false)
        }
    }

    const [Loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (!Activity_Field_Menu_List || Object.keys(Activity_Field_Menu_List).length === 0) {
            setLoaded(false)
        } else {
            setLoaded(true)
        }
    }, [Activity_Field_Menu_List])

    const SpaceList = ['بلوک', 'شبکه مش', 'قلوه سنگ', 'نئوپان', 'عایق صوتی', 'چسب های ساختمانی', 'پلی وود', 'تیرچه، بلوک و فوم',
        'کناف', 'موکت', 'نماهای چوبی یا ترمو وود', 'اینه ها و تجهیزات جانبی', 'یراق آلات در و پنجره',
        'کمدهای دیواری و اطاق لباس', 'اینه ها',
        'عایق های طبیعی', 'موکت یا کف پوش عایق صدا', 'ژئو ممبران', 'عایق های نانو', 'عایق های حرارتی با پوشش فویلی ',
        'شیر آلات', 'سیستم های تهویه', 'پمپ های فاضلاب', 'شیرآلات کنترلی', 'تجهیزات ایمنی', 'شیرهای آتش نشانی',
        'لوله های عبور سیم و کابل', 'کلیدها و قطع کننده ها', 'باکس های توزیع', 'آسانسور و تجهیزات جانبی ', 'سیستم های هشدار', 'خانه های هوشمند', 'باتری ها و ذخیره سازها',
        'بتن فوق‌مقاوم (UHPC)', 'عایق‌های حرارتی انعکاسی', 'شیشه‌های چندلایه ضد گلوله و ضد انفجار', 'الیاف FRP (Fiber Reinforced Polymer)', 'آجرهای زیستی', 'فولادهای سبک و فوق‌مقاوم', 'نانوذرات در بتن', 'پانل‌های سه‌بعدی (3D Panels)', 'کف‌پوش‌های هوشمند', 'مصالح تغییرپذیر (PCM - Phase Change Materials)' 
    ]

    return (
        <>

            <div
                style={{
                    height: '10px',
                    backgroundColor: 'rgba(255, 255, 255, .8)',
                    position: 'sticky',
                    top: '84px',
                    zIndex: '1',
                    backdropFilter: 'blur(7px)'
                }}>
            </div>


            <div className='AFM_Menu_Template'>

                <div className='AFM_Menu_Template_Content'>
                    <span className='AFM_Menu_Template_Content_Title'> موارد انتخاب شده: </span>
                    <div className='AFM_Menu_Template_Content_Array_Container'>
                        {Activity_Field_Menu_Context.map((id, index) => {
                            // Find the name based on the id
                            let itemName = null;
                            for (const key in Activity_Field_Menu_List) {
                                const foundItem = Activity_Field_Menu_List[key]?.find(item => item.id === id);
                                if (foundItem) {
                                    itemName = foundItem.name;
                                    break;
                                }
                            }
                            return (
                                <span key={id}>
                                    {itemName}
                                    <span style={{ display: (Activity_Field_Menu_Context.length <= 1 || (index === Activity_Field_Menu_Context.length - 1)) && 'none' }}> - </span>
                                </span>
                            );
                        })}
                    </div>
                </div>

                <div className='AFM_Menu_Template_Button'>
                    <div onClick={handleSaveClick}>
                        <SaveButton
                            text="ذخیره"
                            BackgroundColor={EnableButton ? '' : 'var(--Disable-Button-BackGround02)'}
                            Color={EnableButton ? '' : 'var(--Disable-Button-Text01)'}
                            Cursor={EnableButton ? '' : 'default'}
                        />
                    </div>
                    <div className='delete'>
                        <span style={Activity_Field_Menu_Context.length === 0 ? { color: 'var(--Hover-On-Items)', cursor: 'default' } : {}} onClick={() => setActivity_Field_Menu_Context([])}>
                            پاک کردن موارد انتخاب شده
                        </span>
                    </div>
                </div>

            </div>

            <div className='AFM_Menu_Container F_Style'>

                {Loaded ?
                    <div className='AFM_Menu' >

                        {/* Column 1 */}
                        <div className='AFM_Menu_Column'>
                            {Column1.map((column) => (
                                <div key={column.key} className='AFM_Menu_Column_Container'>

                                    {/* Title */}
                                    <div className='AFM_Menu_Column_Title' onClick={() => handleShowMenu(column.key)}>
                                        <div style={{ paddingLeft: '8px' }}> {column.key} </div>
                                        <img
                                            style={{ rotate: ShowMenu.includes(column.key) ? '90deg' : '-90deg', transition: '.2s ease' }}
                                            src={Flash2_TextEZ02_Icon}
                                            alt='img'
                                        />
                                        <div
                                            className='AFM_Menu_Column_Title_Counter'
                                            style={{
                                                visibility: column.items.filter(item => Activity_Field_Menu_Context.includes(item.id)).length === 0 ? 'hidden' : ''
                                            }}
                                        >
                                            {column.items.filter(item => Activity_Field_Menu_Context.includes(item.id)).length}
                                        </div>
                                    </div>

                                    {/* Items */}
                                    {ShowMenu.includes(column.key) && (
                                        <div>

                                            {column.items.map((item) => (
                                                <div
                                                    key={item.id} // Use id as the key
                                                    className='AFM_Menu_Column_Items'
                                                    style={{
                                                        backgroundColor: Activity_Field_Menu_Context.includes(item.name) || (MouseOver && ItemMouseOver === item.name) ? 'var(--Hover-On-Items)' : '',
                                                        marginBottom: SpaceList.includes(item.name) ? '24px' : '0'
                                                    }}
                                                    onClick={() => handleSelectClick(item.id)} // Pass only id // Use name for selection
                                                    onMouseOver={supportsHover ? () => handleMouseOver(item.name) : null}
                                                    onMouseLeave={supportsHover ? handleMouseLeave : null}
                                                    onTouchStart={!supportsHover ? () => handleTouchStart(item.name) : null}
                                                    onTouchEnd={!supportsHover ? handleTouchEnd : null}
                                                >
                                                    <span style={{ paddingRight: '8px' }}>{item.name}</span>
                                                    <input
                                                        type='checkbox'
                                                        readOnly
                                                        checked={Activity_Field_Menu_Context.includes(item.id)} // Check if the item is in the context
                                                        style={{
                                                            visibility: (MouseOver && ItemMouseOver === item.name) || Activity_Field_Menu_Context.includes(item.id) ? '' : 'hidden',
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className='AFM_Menu_Column'>
                            {Column2.map((column) => (
                                <div key={column.key} className='AFM_Menu_Column_Container'>

                                    {/* Title */}
                                    <div className='AFM_Menu_Column_Title' onClick={() => handleShowMenu(column.key)}>
                                        <div style={{ paddingLeft: '8px' }}> {column.key} </div>
                                        <img
                                            style={{ rotate: ShowMenu.includes(column.key) ? '90deg' : '-90deg', transition: '.2s ease' }}
                                            src={Flash2_TextEZ02_Icon}
                                            alt='img'
                                        />
                                        <div
                                            className='AFM_Menu_Column_Title_Counter'
                                            style={{
                                                visibility: column.items.filter(item => Activity_Field_Menu_Context.includes(item.id)).length === 0 ? 'hidden' : ''
                                            }}
                                        >
                                            {column.items.filter(item => Activity_Field_Menu_Context.includes(item.id)).length}
                                        </div>
                                    </div>

                                    {/* Items */}
                                    {ShowMenu.includes(column.key) && (
                                        <div>

                                            {column.items.map((item) => (
                                                <div
                                                    key={item.id} // Use id as the key
                                                    className='AFM_Menu_Column_Items'
                                                    style={{
                                                        backgroundColor: Activity_Field_Menu_Context.includes(item.name) || (MouseOver && ItemMouseOver === item.name) ? 'var(--Hover-On-Items)' : '',
                                                        marginBottom: SpaceList.includes(item.name) ? '24px' : '0'
                                                    }}
                                                    onClick={() => handleSelectClick(item.id)} // Pass only id // Use name for selection
                                                    onMouseOver={supportsHover ? () => handleMouseOver(item.name) : null}
                                                    onMouseLeave={supportsHover ? handleMouseLeave : null}
                                                    onTouchStart={!supportsHover ? () => handleTouchStart(item.name) : null}
                                                    onTouchEnd={!supportsHover ? handleTouchEnd : null}
                                                >
                                                    <span style={{ paddingRight: '8px' }}>{item.name}</span>
                                                    <input
                                                        type='checkbox'
                                                        readOnly
                                                        checked={Activity_Field_Menu_Context.includes(item.id)} // Check if the item is in the context
                                                        style={{
                                                            visibility: (MouseOver && ItemMouseOver === item.name) || Activity_Field_Menu_Context.includes(item.id) ? '' : 'hidden',
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className='AFM_Menu_Column'>
                            {Column3.map((column) => (
                                <div key={column.key} className='AFM_Menu_Column_Container'>

                                    {/* Title */}
                                    <div className='AFM_Menu_Column_Title' onClick={() => handleShowMenu(column.key)}>
                                        <div style={{ paddingLeft: '8px' }}> {column.key} </div>
                                        <img
                                            style={{ rotate: ShowMenu.includes(column.key) ? '90deg' : '-90deg', transition: '.2s ease' }}
                                            src={Flash2_TextEZ02_Icon}
                                            alt='img'
                                        />
                                        <div
                                            className='AFM_Menu_Column_Title_Counter'
                                            style={{
                                                visibility: column.items.filter(item => Activity_Field_Menu_Context.includes(item.id)).length === 0 ? 'hidden' : ''
                                            }}
                                        >
                                            {column.items.filter(item => Activity_Field_Menu_Context.includes(item.id)).length}
                                        </div>
                                    </div>

                                    {/* Items */}
                                    {ShowMenu.includes(column.key) && (
                                        <div>

                                            {column.items.map((item) => (
                                                <div
                                                    key={item.id} // Use id as the key
                                                    className='AFM_Menu_Column_Items'
                                                    style={{
                                                        backgroundColor: Activity_Field_Menu_Context.includes(item.name) || (MouseOver && ItemMouseOver === item.name) ? 'var(--Hover-On-Items)' : '',
                                                         marginBottom: SpaceList.includes(item.name) ? '24px' : '0'
                                                    }}
                                                    onClick={() => handleSelectClick(item.id)} // Pass only id // Use name for selection
                                                    onMouseOver={supportsHover ? () => handleMouseOver(item.name) : null}
                                                    onMouseLeave={supportsHover ? handleMouseLeave : null}
                                                    onTouchStart={!supportsHover ? () => handleTouchStart(item.name) : null}
                                                    onTouchEnd={!supportsHover ? handleTouchEnd : null}
                                                >
                                                    <span style={{ paddingRight: '8px' }}>{item.name}</span>
                                                    <input
                                                        type='checkbox'
                                                        readOnly
                                                        checked={Activity_Field_Menu_Context.includes(item.id)} // Check if the item is in the context
                                                        style={{
                                                            visibility: (MouseOver && ItemMouseOver === item.name) || Activity_Field_Menu_Context.includes(item.id) ? '' : 'hidden',
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                    :
                    <LoadingDots Color='var(--Primary-EZ)' />
                }
            </div>

        </>
    )
}

export default Activity_Field_Menu