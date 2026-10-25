import React, { useContext } from 'react';
import './BI_Description.css';
import { motion } from 'framer-motion';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';

function BI_Description({ BIDescription }) {

  const { Under1600 } = useContext(ResponsiveContext);

  const ContainerVarinet = {
    begin: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        staggerChildren: 0.1
      }
    }
  };

  const ChildVarientsText = {
    begin: {
      opacity: 0,
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: 'tween',
        ease: 'easeInOut'
      }
    }
  };

  const ChildVarinetsImg = {
    begin: {
      opacity: 0,
      y: -120
    },
    visible: {
      opacity: 1,
      y: (Under1600 ? 0 : -60),
      transition: {
        duration: 1,
        type: 'tween',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <>
      <motion.div className='BI_description_Container B_Style'
        variants={ContainerVarinet}
        initial="begin"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div className='BI_desc_Header' variants={ChildVarientsText}>
          {BIDescription.title}
        </motion.div>

        <div className='BI_desc_Explanation'>
          <div className='BI_desc_Explanation_Text'>
            {BIDescription.description}
          </div>
          <motion.div variants={ChildVarinetsImg} className='BI_desc_Explanation_Img'>
            <img src={BIDescription.img} alt='img' />
          </motion.div>
        </div>

      </motion.div>
    </>
  );
}

export default BI_Description;
