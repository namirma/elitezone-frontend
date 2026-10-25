import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../../../../../Context/AppContext'

function Item1Group1Legal() {

    //Context
    const { Company } = useAppContext();

    const [ConstantCompany, setConstantCompany] = useState('');
    useEffect(() => {
        setConstantCompany(Company)
    }, [])

    return (
        <>
            <div className='item-container'>
                <div style={{ width: '100%' }} className='item-rightside'>
                    <div>
                        نام شرکت یا سازمان
                    </div>
                    <div> {ConstantCompany} </div>
                </div>
            </div>
        </>
    )
}

export default Item1Group1Legal