import React from 'react';

const CameraBottomControls = ({ onCapture }) => {
    return (
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '20px 24px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            zIndex: 20,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
        }}>
            {/* Mode Tabs */}
            <div style={{ display: 'flex', gap: '20px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                <span style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Photo</span>
            </div>

            {/* Shutter Button */}
            <button
                onClick={onCapture}
                style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    border: '4px solid white',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px'
                }}
            >
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    transition: 'transform 0.1s'
                }} />
            </button>
        </div>
    );
};

export default CameraBottomControls;
