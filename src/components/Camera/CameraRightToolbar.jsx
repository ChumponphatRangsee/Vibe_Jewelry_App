import React from 'react';
import { Timer, Sparkles, Palette, Ratio } from 'lucide-react';

const CameraRightToolbar = ({ onToggleRatio, currentRatio, onFilterClick, onBeautifyClick }) => {
    const getRatioLabel = (ratio) => {
        if (ratio === 9 / 16) return '9:16';
        if (ratio === 3 / 4) return '3:4';
        if (ratio === 1) return '1:1';
        return 'Ratio';
    };

    const tools = [
        { icon: Ratio, label: getRatioLabel(currentRatio), action: onToggleRatio },
        { icon: Timer, label: 'Timer' },
        { icon: Sparkles, label: 'Beautify', action: onBeautifyClick },
        { icon: Palette, label: 'Filters', action: onFilterClick },
    ];

    return (
        <div style={{
            position: 'absolute',
            top: '80px',
            right: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 20
        }}>
            {tools.map((tool, index) => (
                <button
                    key={index}
                    onClick={tool.action}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'white'
                    }}
                >
                    <div style={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        padding: '10px',
                        borderRadius: '50%',
                        backdropFilter: 'blur(4px)'
                    }}>
                        <tool.icon size={24} strokeWidth={1.5} />
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 500, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {tool.label}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default CameraRightToolbar;
