import React, { useContext } from 'react'
import './CardSorting.css'
import Credit from './../Assets/CartSorting/Credit.svg';
import Promiser from './../Assets/CartSorting/Promiser.svg';
import Pioneer from './../Assets/CartSorting/Pioneer.svg';
import { motion } from 'framer-motion';
import { ResponsiveContext } from '../../../Context/ResponsiveContext';

function CardSorting() {

  const { Under700 } = useContext(ResponsiveContext);

  const ContainerVarinerts = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        staggerChildren: .6,
      }
    },
    exit: {
      opacity: 0,
      viewport: {
        amount: 0.5
      }
    }
  }


  const CardItemVariants = {
    initial: { y: -100, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 100,
      }
    },
    exit: { y: -100, opacity: 0 }
  };

  // const ChildrenVarinets = (delay = 0) =>
  //   !Under700 ? {
  //     fromRight: { x: 100, opacity: 0 },
  //     startScale: { scale: 0.8, opacity: 0 },
  //     fromLeft: { x: -100, opacity: 0 },
  //     inView: {
  //       x: 0,
  //       y: 0,
  //       scale: 1,
  //       opacity: 1,
  //       transition: {
  //         duration: .5,
  //         type: 'tween',
  //         ease: 'easeInOut'
  //       }
  //     },
  //     exitfromRight: { x: 100, opacity: 0 },
  //     exitScale: { scale: 0.8, opacity: 0 },
  //     exitfromLeft: { x: -100, opacity: 0 }
  //   } :

  //     {
  //       fromRight: { x: 100, opacity: 0 },
  //       startScale: { x: 100, opacity: 0 },
  //       fromLeft: { x: 100, opacity: 0 },
  //       inView: {
  //         x: 0,
  //         opacity: 1,
  //         transition: {
  //           duration: 0.5,
  //           delay,
  //           type: 'tween',
  //           ease: 'easeInOut'
  //         }
  //       },
  //       exitfromRight: { x: 100, opacity: 0 },
  //       exitScale: { x: 100, opacity: 0 },
  //       exitfromLeft: { x: 100, opacity: 0 },
  //     }


  // return (
  //   <>
  //     <div className='card-container'>

  //       <motion.div className='card-style'
  //         variants={ContainerVarinerts}
  //         initial="initial"
  //         whileInView="whileInView"
  //         exit="exit"
  //         viewport="viewport"
  //       >

  //         {/* <motion.div
  //           className='card-item B_Style_withoutHover'
  //           initial={{ x: 200, opacity: 0 }}
  //           whileInView={{ x: 0, opacity: 1 }}
  //           exit={{ x: 200, opacity: 0 }}
  //           transition={!Under700 ? {duration: 0.5, type:'keyframes', delay: 0.2 } : {delay: 0.2}}
  //         > */}
  //         <motion.div
  //           className='card-item B_Style_withoutHover'
  //           variants={ChildrenVarinets}
  //           initial="initial1"
  //           whileInView="whileinView"
  //           exit="exit"
  //         >
  //           <img src={Credit} alt='img'

  //           />
  //           <div className='card-item-container'>
  //             <div className='card-item-title'>
  //               ۳۰ ســــــال اعتـــــبـار
  //             </div>
  //             <div className='card-item-description'>
  //               شاخص اعتبار، نرم افزار ملی SAZE90
  //             </div>
  //           </div>
  //         </motion.div>
  //         {/* </motion.div> */}


  //         {/* <motion.div
  //           className='card-item B_Style_withoutHover'
  //           initial={!Under700 ? { scale: 0.8, opacity: 0 } : { x: 200, opacity: 0 }}
  //           whileInView={!Under700 ? { scale: 1, opacity: 1 } : { x: 0, opacity: 1 }}
  //           exit={!Under700 ? { scale: 0.8, opacity: 0 } : { x: 200, opacity: 0 }}
  //           transition={!Under700 ? { duration: 0.5, type: 'keyframes', delay: 0.2 } : { delay: 0.4 }}
  //         > */}
  //         <div className='card-item B_Style_withoutHover'>
  //           <img src={Promiser} alt='img' />

  //           <div className='card-item-container'>
  //             <div className='card-item-title'>
  //               تعهد به صنعت ساختمان
  //             </div>
  //             <div className='card-item-description'>
  //               بنیانگذاران، مهندسین ارشد ساختمان
  //             </div>
  //           </div>
  //         </div>
  //         {/* </motion.div> */}


  //         {/* <motion.div
  //           className='card-item B_Style_withoutHover'
  //           initial={!Under700 ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
  //           whileInView={!Under700 ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
  //           exit={!Under700 ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
  //           transition={!Under700 ? { duration: 0.5, type: 'keyframes', delay: 0.2 } : { delay: 0.6 }}
  //         > */}
  //         <div className='card-item B_Style_withoutHover'>
  //           <img src={Pioneer} alt='img' />
  //           <div className='card-item-container'>
  //             <div className='card-item-title'>
  //               پیـــــشگام در نــــوآوری
  //             </div>
  //             <div className='card-item-description'>
  //               همواره روی لبه تکنولوژی
  //             </div>
  //           </div>
  //           {/* </motion.div> */}

  //         </div>
  //       </motion.div>
  //     </div>
  //   </>
  // )

  return (
    <div className='card-container'>

      <motion.div
        className='card-style'
        variants={ContainerVarinerts}
        initial="initial"
        whileInView="whileInView"
        viewport={{ amount: 0.6, once: true}}
        exit="exit"
      >

        <motion.span
          className='card-item'
          variants={CardItemVariants}
        >
          <div>
            <img src={Credit} alt='img' />
            <div className='card-item-container'>
              <div className='card-item-title'>۳۰ ســــــال اعتـــــبـار</div>
              <div className='card-item-description'>شاخص اعتبار، نرم افزار ملی SAZE90</div>
            </div>
          </div>
        </motion.span>

        {/* Second card-item enters from the top */}
        <motion.span
          className='card-item'
          variants={CardItemVariants}
        >
          <div>
            <img src={Promiser} alt='img' />
            <div className='card-item-container'>
              <div className='card-item-title'>تعهد به صنعت ساختمان</div>
              <div className='card-item-description'>بنیانگذاران، مهندسین ارشد ساختمان</div>
            </div>
          </div>
        </motion.span>

        {/* Third card-item enters from the left */}
        <motion.span
          className='card-item'
          variants={CardItemVariants}
        >
          <div>
            <img src={Pioneer} alt='img' />
            <div className='card-item-container'>
              <div className='card-item-title'>پیـــــشگام در نــــوآوری</div>
              <div className='card-item-description'>همواره روی لبه تکنولوژی</div>
            </div>
          </div>
        </motion.span>

      </motion.div>

    </div>
  )


}

export default CardSorting