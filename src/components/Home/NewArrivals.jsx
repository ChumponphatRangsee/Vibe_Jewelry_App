import React from 'react';
import { Heart } from 'lucide-react';

const NewArrivals = () => {
    const products = [
        { id: 1, name: 'Gold Hoop', price: '$45' },
        { id: 2, name: 'Diamond Stud', price: '$120' },
        { id: 3, name: 'Silver Ring', price: '$30' },
    ];

    return (
        <div style={{ padding: '0 24px 24px' }}>
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>New Arrivals</h3>
                <span style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>View All</span>
            </div>

            <div style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                paddingBottom: '8px',
                scrollbarWidth: 'none'
            }}>
                {products.map((product) => (
                    <div key={product.id} style={{
                        minWidth: '140px',
                        backgroundColor: 'var(--color-white)',
                        borderRadius: 'var(--radius-md)',
                        padding: '12px',
                        boxShadow: 'var(--shadow-card)'
                    }}>
                        <div style={{
                            height: '100px',
                            backgroundColor: '#f5f5f5',
                            borderRadius: 'var(--radius-sm)',
                            marginBottom: '12px',
                            position: 'relative'
                        }}>
                            <button style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                padding: '4px',
                                backgroundColor: 'rgba(255,255,255,0.8)',
                                borderRadius: '50%'
                            }}>
                                <Heart size={14} />
                            </button>
                        </div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>{product.name}</h4>
                        <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewArrivals;
