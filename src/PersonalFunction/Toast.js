import { useCallback } from 'react';
import toast from "react-hot-toast";

export const useToast = () => {

    const showToastButton = (message) => {
        toast.dismiss();
        toast((t) => (
            <span style={{ direction: 'rtl', display:'flex', lineHeight:'2' }}>
                <div>
                    {message}
                </div>
                <button
                    style={{
                        border: 'none', background: 'none',
                        fontSize: '14px',
                        color: 'var(--SemanticColor-Success)',
                        borderRadius: 'var(--Small-Radius)',
                        marginRight: '12px',
                        fontFamily: 'YekanBakhFaNum-ExtraBold',
                        cursor: 'pointer',
                    }}
                    onClick={() => toast.dismiss(t.id)}
                >
                    باشه
                </button>
            </span>
        ), {
            style: {
                border: '2px solid var(--Secondary-EZ)',
                padding: '10px 8px',
                color: 'white',
                fontFamily: 'YekanBakhFaNum-semiBold',
                fontSize: '12px',
                borderRadius: '16px',
                backgroundColor: 'var(--Text-EZ-01)',
            },
            duration: 15000,
        });
    };


    const showToastRole = (message) => {
        toast.dismiss();
        toast.success(message, {
            style: {
                fontFamily: 'YekanBakhFaNum-semiBold',
                borderRadius: '16px',
                backgroundColor: 'var(--Text-EZ-01)',
                textAlign: 'left',
                lineHeight: 1.5,
                border: '2px solid var(--Secondary-EZ)',
                padding: '10px 2px 10px 12px',
                fontSize: '12px',
                color: 'white',
                display: 'flex',
                justifyContent: 'flex-start'
            },
            iconTheme: {
                primary: 'var(--SemanticColor-Success)',
                secondary: '#FFFFFF',
            },
            duration: 4000
        }
        )
    };

    const showToastError = (message) => {
        toast.dismiss();

        toast.error(message, {
            style: {
                backgroundColor: 'var(--Text-EZ-01)',
                border: '2px solid var(--SemanticColor-Error)',
                padding: '10px 2px 10px 12px',
                color: 'white',
                fontFamily: 'YekanBakhFaNum-semiBold',
                fontSize: '12px',
                borderRadius: '16px'
            },
            iconTheme: {
                primary: 'var(--SemanticColor-Error)',
                secondary: '#FFFFFF',
            },
            duration: 4000
        }
        )
    };

    const showToastSuccess = (message) => {
        toast.success(message, {
            style: {
                backgroundColor: 'var(--Text-EZ-01)',
                border: '2px solid var(--SemanticColor-Success)',
                padding: '10px 2px 10px 12px',
                color: 'white',
                fontFamily: 'YekanBakhFaNum-semiBold',
                borderRadius: '16px',
                fontSize: '12px',
            },
            iconTheme: {
                primary: 'var(--SemanticColor-Success)',
                secondary: '#FFFFFF',
            },
            duration: 4000
        }
        )
    }

    const reset = useCallback(() => {
        toast.dismiss();
    }, []);

    return { showToastButton, showToastRole, showToastError, showToastSuccess, reset };
}