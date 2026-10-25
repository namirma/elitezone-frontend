import React, { useContext } from 'react'
import UserSummeryInfo from './UserSummery/UserSummeryInfo'
import LegalInformation from './LegalInformation/LegalInformation'
import { NavbarContext } from '../../../../Context/NavbarContext';

function UserAccountInformation() {

  const { sections } = useContext(NavbarContext);

  return (
    <>
      <span ref={sections.UserAccountInfoRef}>
        <UserSummeryInfo />

        <LegalInformation />
      </span>
    </>
  )
}

export default UserAccountInformation