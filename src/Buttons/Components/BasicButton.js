import React from 'react'
import './BasicButton.css';
import { useNavigate } from 'react-router-dom';

function BasicButton({ Text, margin, LinkTo, ButtonMode }) {

    const navigate = useNavigate();

    const handleclick = () => {
        navigate(LinkTo)
    }

    const HandleButtonShadow = () => {
        if (ButtonMode === 1) {
            return (
                'welcome-shadow1'
            )
        }
        else if (ButtonMode === 2) {
            return (
                'welcome-shadow2'
            )
        }
        else {
            return ''
        }
    }

    const HandleWelcomeStyle = () => {
        return {
            backgroundColor: ButtonMode === 1 ? 'var(--CTA-EZ)' : ButtonMode === 2 ? 'var(--Primary-EZ)' : 'var(--Primary-EZ)',
            borderRadius: '8px',
        };
    }

    return (
        <>
            <div onClick={handleclick} className={`${HandleButtonShadow()}`}
                style={{ margin: margin }}
            >
                <button
                    className='welcome E_Style'
                    style={HandleWelcomeStyle()}
                >
                    <div className='welcome-text'>

                        <div className='welcome-text-content'>
                            {Text}
                        </div>

                    </div>
                </button>
            </div>
        </>
    )
}

export default BasicButton