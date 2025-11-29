import React, { useState } from 'react';
import { useCamera } from '../hooks/useCamera';
import CameraPreview from '../components/Camera/CameraPreview';
import CameraTopBar from '../components/Camera/CameraTopBar';
import CameraRightToolbar from '../components/Camera/CameraRightToolbar';
import CameraBottomControls from '../components/Camera/CameraBottomControls';
import JewelryPicker from '../components/TryOn/JewelryPicker';
import OverlayManager from '../components/TryOn/OverlayManager';
import FilterModal from '../components/Camera/FilterModal';

const TryOn = () => {
    const { webcamRef, facingMode, imgSrc, aspectRatio, currentFilter, capture, switchCamera, retake, toggleRatio, setCurrentFilter } = useCamera();
    const [overlays, setOverlays] = useState([]);
    const [showPicker, setShowPicker] = useState(true);
    const [showFilterModal, setShowFilterModal] = useState(false);

    const handleAddJewelry = (item) => {
        const newOverlay = {
            id: Date.now(),
            ...item,
            position: { x: 50, y: 50 },
            scale: 1,
            rotation: 0
        };
        setOverlays(prev => [...prev, newOverlay]);
    };

    if (imgSrc) {
        return (
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                backgroundColor: 'black',
                overflow: 'hidden'
            }}>
                <img
                    src={imgSrc}
                    alt="Captured"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        pointerEvents: 'none'
                    }}
                />

                <OverlayManager overlays={overlays} setOverlays={setOverlays} />
                {showPicker && <JewelryPicker onSelect={handleAddJewelry} />}

                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 40
                }}>
                    <button
                        onClick={() => setShowPicker(!showPicker)}
                        className="btn-secondary"
                        style={{ backgroundColor: 'white', border: 'none', padding: '8px 16px' }}
                    >
                        {showPicker ? 'Hide Menu' : 'Add Jewelry'}
                    </button>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: showPicker ? '280px' : '40px',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    zIndex: 40,
                    transition: 'bottom 0.3s'
                }}>
                    <button
                        onClick={() => {
                            setOverlays([]);
                            retake();
                        }}
                        className="btn-secondary"
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            border: 'none',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                        }}
                    >
                        Retake
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => alert('Save functionality coming in Phase 4!')}
                        style={{ boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)' }}
                    >
                        Save Photo
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            backgroundColor: 'black',
            overflow: 'hidden',
            touchAction: 'none'
        }}>
            <CameraPreview
                webcamRef={webcamRef}
                facingMode={facingMode}
                aspectRatio={aspectRatio}
                currentFilter={currentFilter}
            />

            <CameraTopBar onFlip={switchCamera} />
            <CameraRightToolbar
                onToggleRatio={toggleRatio}
                currentRatio={aspectRatio}
                onFilterClick={() => setShowFilterModal(true)}
            />
            <CameraBottomControls onCapture={capture} />

            <FilterModal
                isOpen={showFilterModal}
                onClose={() => setShowFilterModal(false)}
                currentFilter={currentFilter}
                onSelectFilter={setCurrentFilter}
            />
        </div>
    );
};

export default TryOn;
