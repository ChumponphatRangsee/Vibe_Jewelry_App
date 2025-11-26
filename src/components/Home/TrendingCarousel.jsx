import React from 'react';

const TrendingCarousel = () => {
    const items = [
        { id: 1, label: 'Septum', color: '#FFD700' },
        { id: 2, label: 'Ear Stack', color: '#C0C0C0' },
        { id: 3, label: 'Nose', color: '#B87333' },
        { id: 4, label: 'Lip', color: '#E5E4E2' },
        { id: 5, label: 'Brow', color: '#A9A9A9' },
    ];

    return (
        <div style={{ padding: '24px 0' }}>
            <div style={{ padding: '0 24px', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Trending Now</h3>
            </div>

            <div style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                padding: '0 24px',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE/Edge
                WebkitOverflowScrolling: 'touch'
            }}>
                {items.map((item) => (
                    <div key={item.id} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        minWidth: '72px'
                    }}>
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${item.color}22 0%, ${item.color}44 100%)`,
                            border: `2px solid ${item.color}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-card)'
                        }}>
                            {/* Placeholder for image */}
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 600 }}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingCarousel;
