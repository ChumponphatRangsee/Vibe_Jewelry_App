import React from 'react';
import Webcam from 'react-webcam';
import { filters } from '../../data/filterData';
import { getBeautifyFilter } from '../../data/beautifyData';

const CameraPreview = ({ webcamRef, facingMode, aspectRatio = 9 / 16, currentFilter = 'none', beautifyValues }) => {
    const [error, setError] = React.useState(null);
    const [zoom, setZoom] = React.useState(1);
    const touchDistance = React.useRef(0);

    const videoConstraints = {
        facingMode: facingMode,
        aspectRatio: aspectRatio,
        width: { ideal: 1920 },
        height: { ideal: 1080 },
        frameRate: { ideal: 30 }
    };

    const handleUserMediaError = (err) => {
        console.error('Camera Error:', err);
        if (err.name === 'NotAllowedError') {
            setError('Camera access denied. Please allow camera permissions in your browser settings.');
        } else if (err.name === 'NotFoundError') {
            setError('No camera found on this device.');
        } else {
            setError(`Unable to access camera. (${err.name}: ${err.message})`);
        }
    };

    // Check if browser supports camera API
    React.useEffect(() => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setError('Camera API not supported in this browser. Please ensure you are using HTTPS (https://...) and try Safari (iOS) or Chrome (Android).');
        }
    }, []);

    // Pinch-to-zoom handlers
    const handleTouchStart = (e) => {
        if (e.touches.length === 2) {
            const distance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            touchDistance.current = distance;
        }
    };

    const handleTouchMove = (e) => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const distance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );

            const delta = distance - touchDistance.current;
            const zoomDelta = delta * 0.01;

            setZoom(prev => Math.min(Math.max(prev + zoomDelta, 1), 3));
            touchDistance.current = distance;
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY * -0.001;
        setZoom(prev => Math.min(Math.max(prev + delta, 1), 3));
    };

    // Get combined filter CSS (filter + beautify)
    const getCombinedFilter = () => {
        const filter = filters.find(f => f.id === currentFilter);
        const filterCSS = filter ? filter.filter : 'none';
        const beautifyCSS = getBeautifyFilter(beautifyValues || {});

        const combined = [filterCSS, beautifyCSS].filter(f => f !== 'none').join(' ');
        return combined || 'none';
    };

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel}
        >
            {error ? (
                <div style={{
                    padding: '24px',
                    textAlign: 'center',
                    color: 'white',
                    maxWidth: '80%'
                }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>📷🚫</div>
                    <h3 style={{ marginBottom: '8px' }}>Camera Error</h3>
                    <p style={{ fontSize: '14px', opacity: 0.8 }}>{error}</p>
                </div>
            ) : (
                <>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        onUserMediaError={handleUserMediaError}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: `${facingMode === 'user' ? 'scaleX(-1)' : 'none'} scale(${zoom})`,
                            transition: 'transform 0.1s ease-out',
                            filter: getCombinedFilter()
                        }}
                    />
                    {/* Zoom indicator */}
                    {zoom > 1 && (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 600,
                            pointerEvents: 'none',
                            zIndex: 10
                        }}>
                            {zoom.toFixed(1)}x
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CameraPreview;
