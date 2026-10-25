import React from 'react';
import './ImplementationProcess.css';
import BackToProfileButton from '../BackToProfileButton/BackToProfileButton';
import EngineerImplementationProcess from '../../../../Contents/Engineer/ImplementationProcess/EngineerImplementationProcess';
import { useAppContext } from '../../../../Context/AppContext';
import ContractorImplementationProcess from '../../../../Contents/Contractor/ImplementationProcess/ContractorImplementationProcess';
import SupplierImplementationProcess from '../../../../Contents/Supplier/ImplementationProcess/SupplierImplementationProcess';
import EmployerImplementationProcess from '../../../../Contents/Employer/EmployerMain/ImplementationProcess/EmployerImplementationProcess';

function ImplementationProcess() {

  const { UserRole } = useAppContext();

  return (
    <>
      <div className='Impl_Proccess_Container B_Style'>

        <BackToProfileButton text='فرآیند اجرایی' padding='16px 32px 0 32px ' />

        {UserRole === 1 &&
          <EngineerImplementationProcess />
        }

        {UserRole === 2 &&
          <ContractorImplementationProcess />
        }

        {UserRole === 3 &&
          <SupplierImplementationProcess />
        }

        {UserRole === 4 &&
          <EmployerImplementationProcess />
        }
        
      </div>
    </>
  )
}

export default ImplementationProcess