import React, { useEffect, useState } from 'react'
import CustomizedInput from '../../../../PersonalFunction/CustomizedInput'
import { useAppContext } from '../../../../Context/AppContext';
import { ValidateLength } from './Validate/ValidateLength';
import Dropdown_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Icon.svg';
import Dropdown_Hover_Icon from '../../../../PublicAssets/DropDown_Icons/Dropdown_Hover_Icon.svg'


function SubjectFAQInput(props) {

    // const { SubjectFAQ, setSubjectFAQ, SubjectFAQTrue, setSubjectFAQTrue } = useAppContext();

    // const handleSubject = (value) => {
    //     const SubjectValue = value
    //     setSubjectFAQ(SubjectValue);
    //     setShowList(false)

    //     if (SubjectValue !== null) {
    //         setSubjectFAQTrue(true)
    //     }else {
    //         setSubjectFAQTrue(false)
    //     }

    //     if (value === SubjectList[SubjectList.length - 1]) {
    //         props.setMoreDetails(true)
    //     }else {
    //         props.setMoreDetails(false)
    //     }
    // }

    // const [ShowList, setShowList] = useState(false);
    // const handleShowList = () => {
    //     setShowList(!ShowList);
    // }

    // const SubjectList = ['پیشنهاد', 'انتقاد و شکایات', 'مدیریت', 'حسابداری و امور مالی', 'گزارش خطا در نحوه عملکرد وب سایت', 'سایر موضوعات']

    // return (
    //     <>
    //         <div style={{ padding: props.padding, margin: props.margin }} className='nameinput'>

    //             {/* Label */}
    //             <label htmlFor='firstname' style={{paddingBottom: '8px'}}>
    //                 <span style={{ display: 'flex', justifyContent: 'flex-end' }}> <span style={{ color: 'var(--SemanticColor-Error)' }}> * </span>
    //                     <span> موضوع </span>
    //                 </span>
    //             </label>

    //             <div className={ShowList ? 'Province-container-active' : 'Provinces-container'}
    //                 style={{
    //                     border: SubjectFAQ && !ShowList && '1px solid var(--Success-Border)',
    //                     overflow: 'auto'
    //                 }}
    //             >

    //                 <div className={ShowList ? 'Province-Box-Active' : 'Province-Box'} onClick={handleShowList}>
    //                     <div className='Province-Box-Content'>

    //                         {/* Placeholder */}
    //                         <div className='Province-Box-Placeholder' style={SubjectFAQ === null ? {} : { display: 'none' }}> انتخاب کنید </div>

    //                         {/* Selected Province */}
    //                         <div className='Province-Box-Value' style={SubjectFAQ === null ? { display: 'none' } : {}}>
    //                             <div>
    //                                 {SubjectFAQ}
    //                             </div>
    //                         </div>

    //                     </div>
    //                     <div className='Province-Box-img'> <img src={Dropdown_Icon} alt='img' /> </div>
    //                     <div className='Province-Box-img-hover'> <img src={Dropdown_Hover_Icon} alt='img' /> </div>
    //                 </div>

    //                 {/*Divider Between Title and List*/}
    //                 <div className='Provinces-List-Divider' style={ShowList ? {} : { display: 'none' }}> </div>

    //                 <div className='Province-List' style={ShowList ? {} : { display: 'none' }}>

    //                     <div className='Province-List-Items-Container'>
    //                         {SubjectList.map((item, index) => (
    //                             <div key={index} className='Province-List-Items' onClick={() => handleSubject(item)}> {item} </div>
    //                         ))}
    //                     </div>

    //                 </div>

    //             </div>
    //         </div>
    //     </>
    // )

    const { SubjectFAQ, setSubjectFAQ, SubjectFAQTrue, setSubjectFAQTrue } = useAppContext();
    const [SubjectEmpty, setSubjectEmpty] = useState(false);

    const handleCompany = (event) => {
        const Value = event.target.value;
        setSubjectFAQ(Value);

        const rules = ValidateLength(Value)
        setSubjectEmpty(rules.nullValue)
    }

    useEffect(() => {
        if (SubjectFAQ.length === 0) {
            setSubjectFAQTrue(false)
        }else {
            setSubjectFAQTrue(true)
        }
    }, [SubjectFAQ])

    return (
        <>
            <div style={{ padding: props.padding, margin: props.margin }} className='CompanyInput'>

                <div className='CompanyInput-label'>
                    <label htmlFor='CompanyName'> موضوع </label>
                    <span> * </span>
                </div>

                <CustomizedInput
                    value={SubjectFAQ}
                    onChange={handleCompany}
                    type="text"
                    id="CompanyName"
                    placeholder='موضوع را تایپ کنید'
                    redBorder={SubjectEmpty}
                    valueTrue={!SubjectEmpty}
                />

                <div style={SubjectEmpty ? {} : { display: 'none' }} className='EmptyName'>موضوع نمی تواند خالی باشد </div>
            </div>
        </>
    )
}

export default SubjectFAQInput