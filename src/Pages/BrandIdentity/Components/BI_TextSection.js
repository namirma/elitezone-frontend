import React from 'react'
import './BITextSection.css';

function BI_TextSection({BITextSection}) {
    return (
        <>
            <div className='bi_textsection'>
                <div> {BITextSection.title} </div>
                <div> {BITextSection.decription} </div>
            </div>
        </>
    )
}

export default BI_TextSection