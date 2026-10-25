import React, { useState } from 'react'
import './AboutCharStyle.css';
import { ReadMoreImgVarinets } from '../../../PersonalFunction/AnimationVarinets';
import EngineerExplainImg from '../Assets/ExplainImg/EngineerExplain.svg';
import StartSection from '../../Auth/Components/StartSection';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EngineerImplementationProcess from '../../../Contents/Engineer/ImplementationProcess/EngineerImplementationProcess';

function EngineerExplain(props) {

  const navigate = useNavigate();

  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <>
      <div className='Char_Explain_Container'>

        <span className='Char_Explain_Section_1'>
          <StartSection
            closeicon={true}
            onCloseIconClick={() => navigate(-1)}
            EnableLogoRightSide={true}
          />
        </span>

        <div className='Char_Explain_Left' style={{ overflowX: 'hidden' }}>
          <motion.img
            src={EngineerExplainImg}
            alt='img'
            variants={ReadMoreImgVarinets}
            initial="begin"
            animate={isImgLoaded ? "visial" : "begin"}
            onLoad={() => setIsImgLoaded(true)}
          />
        </div>

        <div className='aboutchar-explain-right'>

          <span className='Char_Explain_Section_2'>
            <StartSection
              closeicon={true}
              onCloseIconClick={() => navigate(-1)}
              EnableLogoRightSide={true}
            />
          </span>

          <EngineerImplementationProcess />

        </div>

      </div>

    </>
  )
}

export default EngineerExplain