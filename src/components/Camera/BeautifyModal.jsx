import React from 'react';
import { X, RotateCcw } from 'lucide-react';
import { beautifySettings, defaultBeautifyValues } from '../../data/beautifyData';

const BeautifyModal = ({ isOpen, onClose, values, onValueChange, onReset }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            pointerEvents: 'none'
        }}>
            {/* Header */}
            <div style={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                pointerEvents: 'auto'
            }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Beautify</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={onReset} style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <RotateCcw size={20} />
                        <span style={{ fontSize: '14px' }}>Reset</span>
                    </button>
                    <button onClick={onClose} style={{ color: 'white' }}>
                        <X size={24} />
                    </button>
                </div>
            </div>

            {/* Beautify Controls */}
            <div style={{
                backgroundColor: 'rgba(0,0,0,0.95)',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                padding: '24px',
                paddingBottom: '40px',
                maxHeight: '60vh',
                overflowY: 'auto',
                pointerEvents: 'auto'
            }}>
                {Object.values(beautifySettings).map((setting) => (
                    <div key={setting.id} style={{ marginBottom: '24px' }}>
                        {/* Label and Value */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '12px',
                            color: 'white'
                        }}>
                            <span style={{ fontSize: '14px', fontWeight: 500 }}>{setting.label}</span>
                            <span style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'var(--color-primary)',
                                minWidth: '50px',
                                textAlign: 'right'
                            }}>
                                {values[setting.id]}{setting.unit}
                            </span>
                        </div>

                        {/* Slider */}
                        <input
                            type="range"
                            min={setting.min}
                            max={setting.max}
                            value={values[setting.id]}
                            onChange={(e) => onValueChange(setting.id, parseInt(e.target.value))}
                            style={{
                                width: '100%',
                                height: '6px',
                                borderRadius: '3px',
                                outline: 'none',
                                background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((values[setting.id] - setting.min) / (setting.max - setting.min)) * 100}%, rgba(255,255,255,0.2) ${((values[setting.id] - setting.min) / (setting.max - setting.min)) * 100}%, rgba(255,255,255,0.2) 100%)`,
                                WebkitAppearance: 'none',
                                appearance: 'none'
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeautifyModal;
