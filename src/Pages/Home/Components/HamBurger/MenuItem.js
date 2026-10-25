import React from 'react';
import './MenuItem.css';
import Arrow_White_Icon from '../../../../PublicAssets/Arrow_Icons/Arrow_White_Icon.svg';

const MenuItem = ({ delay, onClick, children, Component, ArrowImg, LastItemOfMenuArray }) => {

  return (
    <>
      <div className="menu-item-container" style={{ animationDelay: delay }}>

        <div
          className='menu-item'
          onClick={onClick}
          style={{
            animationDelay: delay, padding: Component && '0',
            borderBottom: (Component || ArrowImg || LastItemOfMenuArray) && 'none'
          }}
          
        >

          <div className='menu-item-children'>
            {children}
          </div>

          {ArrowImg &&
            <img src={Arrow_White_Icon} alt='img' />
          }

        </div>

      </div>
    </>
  );
};

export default MenuItem;
