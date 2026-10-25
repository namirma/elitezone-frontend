import React from 'react'
import Flash2_SemanticSuccess_Icon from '../PublicAssets/Arrow_Icons/Flash2_SemanticSuccess_Icon.svg';

function ShortenerButton({expanded, setExpanded, toggleExpand}) {
    return (
        <div style={{ marginTop: '8px', fontFamily:'YekanBakhFaNum-regular', fontSize:'14px' }}>
            <span onClick={toggleExpand}
                style={{
                    display: 'flex', alignItems: 'center', color: 'var(--SemanticColor-Success)', cursor: 'pointer', width: 'max-content',
                    direction: expanded ? 'ltr' : 'rtl'
                }}>
                {expanded ? 'بستن' : 'مشاهده بیشتر'}
                <img src={Flash2_SemanticSuccess_Icon} alt="img"
                    style={expanded ? { marginLeft: '8px', rotate: '180deg', width: '8px' } : { rotate: '0deg', marginRight: '8px', width: '8px' }}
                />
            </span>
        </div>
    )
}

export default ShortenerButton