import React from 'react'
import { useAppContext } from '../../../../Context/AppContext';
import EngineerProfile from '../Profiles/EngineerProfile';
import ContractorProfile from '../Profiles/ContractorProfile';
import SupplierProfile from '../Profiles/SupplierProfile';
import EmployerProfile from '../Profiles/EmployerProfile';
import StartSection from '../../../Auth/Components/StartSection';
import { useNavigate } from 'react-router-dom';


function JobInfoEditModal() {

    //Context
    const { UserRole } = useAppContext();

    const navigate = useNavigate();

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                {UserRole === 1 &&
                    <EngineerProfile />
                }

                {UserRole === 2 &&
                    <ContractorProfile />
                }

                {UserRole === 3 &&
                    <SupplierProfile />
                }

                {UserRole === 4 &&
                    <EmployerProfile />
                }


            </div>
        </>
    )
}

export default JobInfoEditModal