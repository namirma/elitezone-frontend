import React from 'react';
import './HmgburgerMenuContainer.css';
import Arrow_White_Icon from '../../../../PublicAssets/Arrow_Icons/Arrow_White_Icon.svg'

const HmgburgerMenuContainer = ({ open, children, AboutUsDropDownValue, setAboutUsDropDownValue }) => {

    return (
        <>
            <div className={`hmg-menu-container ${open ? 'open' : ''}`}>

                {AboutUsDropDownValue &&
                    <div style={{ direction: 'rtl', padding: '24px', paddingBottom: '0' }}>
                        <img src={Arrow_White_Icon} alt='img' 
                        onClick={() => setAboutUsDropDownValue(false)}
                        />
                    </div>
                }

                {open &&
                    <div className="hmg-menu-list" style={{paddingTop: AboutUsDropDownValue && '0px' }}>
                        {children}
                    </div>
                }

            </div>
        </>
    );
};

export default HmgburgerMenuContainer;