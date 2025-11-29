import React from 'react';
import { X, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CameraTopBar = ({ onFlip }) => {
    const navigate = useNavigate();

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 20,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)'
        }}>
            <button onClick={() => navigate('/')} style={{ color: 'white' }}>
                <X size={28} strokeWidth={2} />
            </button>

            <div style={{
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
                Try-On
            </div>

            <button onClick={onFlip} style={{ color: 'white' }}>
                <RefreshCw size={24} strokeWidth={2} />
            </button>
        </div>
    );
};

export default CameraTopBar;
