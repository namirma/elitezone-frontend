import React from 'react'
import './UserSummeryInfo.css';
import Item1Group1 from './Item1/Group1/Item1Group1';
import Item1Group2 from './Item1/Group2/Item1Group2';
import Item2Group1 from './Item2/Group1/Item2Group1';
import Item2Group2 from './Item2/Group2/Item2Group2';
import Item3Group1 from './Item3/Group1/Item3Group1';
import Item3Group2 from './Item3/Group2/Item3Group2';
import Item4Group1 from './Item4/Group1/Item4Group1';
import Item4Group2 from './Item4/Group2/Item4Group2';

function UserSummeryInfo() {

    return (
        <>
            <div className='usersummery B_Style' style={{overflow:'hidden'}}>

                <div className='table'>

                    <div className='table-items'>

                        <div className='usesummery-item-1'>
                            <Item1Group1 />
                        </div>

                        <div className='usesummery-item-2'>
                            <Item1Group2 />
                        </div>

                    </div>


                    <div className='table-items'>

                        <div className='usesummery-item-1'>
                            <Item2Group1 />
                        </div>

                        <div className='usesummery-item-2'>
                            <Item2Group2 />
                        </div>

                    </div>


                    <div className='table-items'>

                        <div className='usesummery-item-1'>
                            <Item3Group1 />
                        </div>

                        <div className='usesummery-item-2'>
                            <Item3Group2 />
                        </div>

                    </div>

                    <div className='table-items'>

                        <div className='usesummery-item-1'>
                            <Item4Group1 />
                        </div>

                        <div className='usesummery-item-2'>
                            <Item4Group2 />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default UserSummeryInfo