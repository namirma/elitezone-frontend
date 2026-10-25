import React, { useContext, useState } from 'react';
import './AboutUsContent.css';
import { ResponsiveContext } from '../../../../Context/ResponsiveContext';
import Flash2_SAZEOrange_Icon from '../../../../PublicAssets/Arrow_Icons/Flash2_SAZEOrange_Icon.svg';
import { AnimatePresence, motion } from 'framer-motion';

function AboutUsContent(props) {

    const { Under1280 } = useContext(ResponsiveContext);
    const [currentImg, setCurrentImg] = useState(0);

    const handleTextHover = index => {
        setCurrentImg(index);
    };

    const [ImgShow, setImgShow] = useState([]);
    const handleShowImg = (value) => {
        const alreadyExist = ImgShow.includes(value);
        if (alreadyExist) {
            setImgShow(ImgShow.filter((item) => item !== value));
        } else {
            setImgShow([value]);
        }
    };

    return (
        <>
            <div style={{ flexDirection: props.reverse ? 'row-reverse' : 'row' }} className='abtusctn-container'>

                {Under1280 ?
                    <>
                        <div className='abtusctn-item'>
                            {props.Content.texts.map((item, index) => (
                                <div key={index}
                                    style={{
                                        width: '100%',
                                        borderBottom: '1px solid rgba(68, 68, 68, 0.2)',
                                        padding: '8px 0'
                                    }}
                                >

                                    <div className='abtusctn-text' onClick={() => handleShowImg(index)}
                                        style={{
                                            display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between',
                                            boxSizing: 'border-box',
                                            direction: 'rtl',
                                        }}
                                    >
                                        <img
                                            src={Flash2_SAZEOrange_Icon}
                                            alt='img'
                                            style={{
                                                maxWidth: '12px',
                                                marginRight: '8px',
                                                transform: ImgShow.includes(index) ? 'rotate(-270deg)' : 'rotate(-90deg)',
                                                transition: '.2s'
                                            }}
                                        />

                                        <div>
                                            <span className='text'
                                                style={{
                                                    color: ImgShow.includes(index) ? '#FFC113' : '',
                                                    textAlign: 'right'
                                                }}>
                                                {item.text}
                                            </span>
                                        </div>

                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            className="abtusctn-item-img"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: ImgShow.includes(index) ? 'auto' : 0, opacity: 1 }}
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        >
                                            <img
                                                src={props.Content.images[index]}
                                                alt={`Image ${index + 1}`}
                                                onClick={() => item.link ? window.open(item.link, "_blank") : ''}
                                            />
                                        </motion.div>
                                    </AnimatePresence>


                                </div>
                            ))}
                        </div>

                    </>
                    :
                    <>
                        <div className='abtusctn-img'>
                            <motion.div
                                key={currentImg}
                                initial={{ opacity: .5, scale: .8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ marginLeft: props.reverse ? '32px' : '0', marginRight: props.reverse ? '0' : '32px' }}
                            >
                                <img
                                    src={props.Content?.images[currentImg]}
                                    alt="img"
                                    style={{ cursor: props.Content.texts[currentImg]?.link ? 'pointer' : 'default' }}
                                    onClick={() => props.Content.texts[currentImg]?.link ? window.open(props.Content.texts[currentImg]?.link, "_blank") : ''}
                                />
                            </motion.div>
                        </div>

                        <div style={{ textAlign: props.reverse ? 'right' : 'left' }} className='abtusctn-text'>
                            {props.Content?.texts.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseOver={() => handleTextHover(index)}
                                    style={{
                                        color: index === currentImg ? '#FFC113' : '',
                                        cursor: item.link ? 'pointer' : 'default',
                                        direction: props.reverse ? 'rtl' : 'ltr'
                                    }}
                                    onClick={() => item.link ? window.open(item.link, "_blank") : ''}
                                >
                                    {item.text}

                                </div>
                            ))}
                        </div>
                    </>
                }

            </div>
        </>
    );
}

export default AboutUsContent;
