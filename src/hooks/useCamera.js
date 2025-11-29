import { useRef, useState, useCallback } from 'react';
import { filters } from '../data/filterData';

export const useCamera = () => {
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = useState('user');
    const [imgSrc, setImgSrc] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(1); // Default to 1:1 (square)
    const [currentFilter, setCurrentFilter] = useState('none');

    const toggleRatio = useCallback(() => {
        setAspectRatio((prev) => {
            if (prev === 9 / 16) return 3 / 4; // 4:3
            if (prev === 3 / 4) return 1;      // 1:1
            return 9 / 16;                     // Back to 9:16
        });
    }, []);

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();

            // If no filter is applied, just set the image
            if (currentFilter === 'none') {
                setImgSrc(imageSrc);
                return;
            }

            // Apply filter using canvas
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                // Get filter CSS from filterData
                const filterObj = filters.find(f => f.id === currentFilter);
                const filterCSS = filterObj ? filterObj.filter : 'none';

                // Apply filter and draw image
                ctx.filter = filterCSS;
                ctx.drawImage(img, 0, 0);

                // Convert canvas to data URL
                const filteredImageSrc = canvas.toDataURL('image/jpeg');
                setImgSrc(filteredImageSrc);
            };
            img.src = imageSrc;
        }
    }, [webcamRef, currentFilter]);

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
        capture,
        switchCamera,
        retake,
        toggleRatio,
        setCurrentFilter
    };
};
