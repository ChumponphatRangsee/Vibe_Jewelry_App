import { useRef, useState, useCallback } from 'react';
import { filters } from '../data/filterData';
import { defaultBeautifyValues, getBeautifyFilter } from '../data/beautifyData';

export const useCamera = () => {
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = useState('user');
    const [imgSrc, setImgSrc] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(9 / 16); // Default to 9:16 (vertical)
    const [currentFilter, setCurrentFilter] = useState('none');
    const [beautifyValues, setBeautifyValues] = useState(defaultBeautifyValues);

    const toggleRatio = useCallback(() => {
        setAspectRatio((prev) => {
            if (prev === 9 / 16) return 3 / 4; // 4:3
            if (prev === 3 / 4) return 1;      // 1:1
            return 9 / 16;                     // Back to 9:16
        });
    }, []);

    const updateBeautifyValue = useCallback((key, value) => {
        setBeautifyValues(prev => ({
            ...prev,
            [key]: value
        }));
    }, []);

    const resetBeautify = useCallback(() => {
        setBeautifyValues(defaultBeautifyValues);
    }, []);

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();

            // Get filter and beautify CSS
            const filterObj = filters.find(f => f.id === currentFilter);
            const filterCSS = filterObj ? filterObj.filter : 'none';
            const beautifyCSS = getBeautifyFilter(beautifyValues);

            // Combine filters
            const combinedFilter = [filterCSS, beautifyCSS].filter(f => f !== 'none').join(' ');

            // If no effects applied, just set the image
            if (combinedFilter === '') {
                setImgSrc(imageSrc);
                return;
            }

            // Apply effects using canvas
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                // Apply combined filter and draw image
                ctx.filter = combinedFilter;
                ctx.drawImage(img, 0, 0);

                // Convert canvas to data URL
                const processedImageSrc = canvas.toDataURL('image/jpeg');
                setImgSrc(processedImageSrc);
            };
            img.src = imageSrc;
        }
    }, [webcamRef, currentFilter, beautifyValues]);

    const switchCamera = useCallback(() => {
        setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
    }, []);

    const retake = useCallback(() => {
        setImgSrc(null);
    }, []);

    return {
        webcamRef,
        facingMode,
        imgSrc,
        aspectRatio,
        currentFilter,
        beautifyValues,
        capture,
        switchCamera,
        retake,
        toggleRatio,
        setCurrentFilter,
        updateBeautifyValue,
        resetBeautify
    };
};
