import { useEffect, useState } from 'react';
import { useAppContext } from '../Context/AppContext';

const DetectDeviceType = () => {

    const { UserAgent, setUserAgent } = useAppContext();

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Check for iOS (iPhone, iPad, iPod)
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setUserAgent("ios");
        }
        // Check for Android devices
        else if (/android/i.test(userAgent)) {
            setUserAgent("android");
        }
        // Check for macOS
        else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
            setUserAgent("mac");
        }
        // Check for Windows
        else if (/Win32|Win64|Windows|WinCE/.test(userAgent)) {
            setUserAgent("windows");
        }
        // Fallback case if device type is not detected
        else {
            setUserAgent(null);
        }
    }, []);

    return (null)
};

export default DetectDeviceType;

