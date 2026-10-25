import React, { useState, forwardRef } from 'react'
import './CustomizedTextarea.css';

const CustomizedTextarea = forwardRef(({ value, onChange, onKeyDown, onBlur, onlyNum, style, valueTrue, redBorder, disabled, ...rest }, ref) => {
    const [Focus, setFocus] = useState(false);
    const handleBlur = () => {
        setFocus(false);
        if (onBlur) {
            onBlur();
        }
    };
    return (
        <textarea
            value={value ? value : ''}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={ref}
            onFocus={() => { setFocus(true); }}
            onBlur={handleBlur}
            style={{   
                border: value && !disabled && !Focus && !valueTrue && '1px solid var(--Divider-Background-Color)' ||
                        value && !disabled && !Focus && valueTrue && '1px solid var(--Success-Border)',
                transition: '.1s ease',
                ...style,
                ...(Focus && { border: '1px solid var(--Primary-EZ)' }),
                ...(redBorder && { border: '1px solid red' }),
                ...(disabled && { backgroundColor: 'var(--Disable-Button-BackGround01)', color: 'var(--Disable-Button-Text02)' })

            }}
            disabled={disabled}
            autoComplete='off'
            {...rest}
        />
    )
});

export default CustomizedTextarea