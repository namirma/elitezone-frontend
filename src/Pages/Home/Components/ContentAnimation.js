import React, { useContext } from 'react';
import {motion } from 'framer-motion'
import { ResponsiveContext } from '../../../Context/ResponsiveContext';
import './ContentAnimation.css';

function ContentAnimation({  Content, gridColumns, gridTemplateColumns }) {

    const { Under700 } = useContext(ResponsiveContext);

    const Varinets = {
        beginImg: {
            opacity: 0,
            y: -100
        },
        exitImg: {
            opacity: 0,
            y: -100,
            viewport: {
                amount: .9
            }
        },

        beginText: {
            opacity: 0,
            x: 100
        },
        exitText: {
            opacity: 0,
            x: 100,
            viewport: {
                amount: .3
            }
        },

        visibale: {
            opacity: 1,
            y: 0,
            x: 0,
        },

        viewport: {
            amount: 0.7
        }
    }

    return (
        <>
            <div className='AnimateContent_Container' style={{ gridTemplateColumns: gridTemplateColumns ? gridTemplateColumns : 'repeat(2, 1fr)' }}>
                {
                    Content.map((item, index) => (
                        <div key={index} className='AnimateContent'
                            style={{ gridColumn: gridColumns ? gridColumns[index] : (!Under700 ? 'span 1' : 'span 2') }}
                        >

                            <motion.div
                                className='AnimateContent_Img'
                                variants={Varinets}
                                initial="beginImg"
                                whileInView="visibale"
                                exit="exitImg"
                                transition={{ duration: .5, ease: 'easeInOut', type: 'tween' }}
                                viewport="viewport"
                            >
                                <img src={item.Img} alt='img' />
                            </motion.div>

                            <motion.span
                                variants={Varinets}
                                initial="beginText"
                                whileInView="visibale"
                                exit="exitText"
                                transition={{ duration: .6, ease: 'easeInOut', type: 'tween' }}
                                viewport="viewport"
                            >
                                <div className='AnimateContent_Title'>
                                    {item.Tilte}
                                </div>
                                <div className='AnimateContent_Description'>
                                    {item.Description}
                                </div>
                            </motion.span>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ContentAnimation