import React from 'react';

const InspirationGrid = () => {
    // Placeholder data
    const items = [1, 2, 3, 4];

    return (
        <div style={{ padding: '0 24px 24px' }}>
            <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Fresh Inspiration</h3>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
            }}>
                {items.map((item) => (
                    <div key={item} style={{
                        backgroundColor: '#eee',
                        borderRadius: 'var(--radius-md)',
                        height: item % 2 === 0 ? '200px' : '160px', // Staggered heights
                        backgroundImage: `url(https://picsum.photos/200/300?random=${item})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '8px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                            color: 'white',
                            fontSize: '10px'
                        }}>
                            @user{item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InspirationGrid;
