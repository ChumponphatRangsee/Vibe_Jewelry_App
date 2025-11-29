import React, { useState } from 'react';
import { jewelryCategories, jewelryItems } from '../../data/jewelryData';

const JewelryPicker = ({ onSelect }) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = activeCategory === 'all'
        ? jewelryItems
        : jewelryItems.filter(item => item.category === activeCategory);

    return (
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            padding: '20px',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
            zIndex: 50,
            maxHeight: '50vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Category Tabs */}
            <div style={{
                display: 'flex',
                gap: '12px',
                overflowX: 'auto',
                paddingBottom: '16px',
                marginBottom: '8px',
                scrollbarWidth: 'none'
            }}>
                {jewelryCategories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            backgroundColor: activeCategory === cat.id ? 'var(--color-primary)' : '#f0f0f0',
                            color: activeCategory === cat.id ? 'white' : 'var(--color-text-main)',
                            fontSize: '14px',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s'
                        }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Jewelry Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                gap: '12px',
                overflowY: 'auto',
                paddingBottom: '20px'
            }}>
                {filteredItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px',
                            borderRadius: '12px',
                            border: '1px solid #eee',
                            backgroundColor: 'white'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            backgroundColor: '#f9f9f9'
                        }}>
                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 500, textAlign: 'center' }}>{item.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default JewelryPicker;
