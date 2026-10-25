import React, { useState, forwardRef } from 'react';
import './CustomizedInput.css';
import Eye_Blue_Icon from '../PublicAssets/Eye_Icons/Eye_Blue_Icon.svg';
import EyeSlash_Blue_Icon from '../PublicAssets/Eye_Icons/EyeSlash_Blue_Icon.svg';

const CustomizedInput = forwardRef(({ value, onChange, onKeyDown, inputMode, onBlur,
  onlyNum, style, valueTrue, valueTrue2, redBorder, disabled, PasswordInput, onPasswordInputClick, autocomplete, ...rest }, ref) => {


  const [Focus, setFocus] = useState(false);

  const handleBlur = () => {
    setFocus(false);
    if (onBlur) {
      onBlur();
    }
  };


  return (
    <span className='Customized_Input'>
      <input
        value={value ? value : ''}
        onChange={onChange}
        onKeyDown={onKeyDown}
        inputMode={inputMode}
        ref={ref}
        onFocus={() => {setFocus(true)}}
        onBlur={handleBlur}
        style={{
          border: value && !disabled && !Focus && !valueTrue && '1px solid var(--Divider-Background-Color)' ||
            value && !disabled && !Focus && valueTrue && '1px solid var(--Success-Border)' ||
            valueTrue2 && '1px solid var(--Success-Border)',
          transition: '.1s ease',
          letterSpacing: value && onlyNum && 'var(--letterSpacing)',
          paddingLeft: onPasswordInputClick && '48px',
          direction: onPasswordInputClick && 'ltr',
          ...style,
          ...(Focus && { border: '1px solid var(--Primary-EZ)' }),
          ...(redBorder && { border: '1px solid red' }),
          ...(disabled && { backgroundColor: 'var(--Disable-Button-BackGround01)', color: 'var(--Disable-Button-Text02)' })
        }}

        disabled={disabled}
        autoComplete={autocomplete ? autocomplete : 'off'} 
        {...rest}
      />

      {onPasswordInputClick &&
        <img src={PasswordInput ? EyeSlash_Blue_Icon : Eye_Blue_Icon} alt='img'
          onClick={() => [onPasswordInputClick()]}
        />
      }
    </span>
  );
});

export default CustomizedInput;