import React from 'react';
import './UserMenu.css';
import UserMenuPart1 from './UserMenuPart1';
import UserMenuPart2 from './UserMenuPart2';

function UserMenu() {

    return (
        <>
            <div className='userprofile-rightside-style B_Style'>
                <UserMenuPart1 />
                <UserMenuPart2 />
            </div>
        </>
    )
}

export default UserMenu