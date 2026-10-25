import React, { useState } from 'react';
import './AccrodinBox.css';
import Flash2_TextEZ02_Icon from '../PublicAssets/Arrow_Icons/Flash2_TextEZ02_Icon.svg';
import { motion, AnimatePresence } from 'framer-motion';

function AccordinBox({ question, index }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (value) => {
        setActiveIndex((prevIndex) => (prevIndex === value ? null : value));
    }

    return (
        <div key={index} className={`Accordin_Container ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAnswer(index)}>
            <div className={`Accordin_Question ${activeIndex === index ? 'active' : ''}`}>
                {question.question}
                <img src={Flash2_TextEZ02_Icon} alt="Close Icon" style={{ transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(-90deg)' }} />
            </div>

            <AnimatePresence>
                {activeIndex === index && (
                    <motion.div
                        className="Accordin_Answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, type:'tween' }}
                    >
                        {question.answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default AccordinBox;

