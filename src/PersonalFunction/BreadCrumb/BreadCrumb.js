import React from 'react';
import './BreadCrumb.css';
import { motion } from 'framer-motion';
import Flash2_DividerBlue_Icon from '../../PublicAssets/Arrow_Icons/Flash2_DividerBlue_Icon.svg'

function BreadCrumb({ One }) {
    return (
        <div className='BreadCrumb_Container'>

            <motion.div
                className='BreadCrumb'
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: .5, ease: 'easeInOut' }}
            >
                <span className='link' onClick={() => window.location.href = '/'}> الیت زون </span>
                <img src={Flash2_DividerBlue_Icon} alt='img' />
                <span className='link' onClick={() => window.location.href = `${One.Link}`}> {One.Text} </span>
            </motion.div>

        </div>
    )
}

export default BreadCrumb