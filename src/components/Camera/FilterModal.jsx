import React from 'react';
import { X } from 'lucide-react';
import { filters } from '../../data/filterData';

const FilterModal = ({ isOpen, onClose, currentFilter, onSelectFilter }) => {
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
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Filters</h3>
                <button onClick={onClose} style={{ color: 'white' }}>
                    <X size={24} />
                </button>
            </div>

            {/* Filter Options */}
            <div style={{
                backgroundColor: 'transparent',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                padding: '20px',
                paddingBottom: '40px',
                overflowX: 'auto',
                display: 'flex',
                gap: '16px',
                scrollbarWidth: 'none',
                pointerEvents: 'auto'
            }}>
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => onSelectFilter(filter.id)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            minWidth: '80px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {/* Filter Preview */}
                        <div style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '12px',
                            backgroundColor: '#333',
                            border: currentFilter === filter.id ? '3px solid var(--color-primary)' : '3px solid transparent',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                filter: filter.filter
                            }} />
                        </div>

                        {/* Filter Name */}
                        <span style={{
                            color: currentFilter === filter.id ? 'var(--color-primary)' : 'white',
                            fontSize: '12px',
                            fontWeight: currentFilter === filter.id ? 600 : 400,
                            whiteSpace: 'nowrap'
                        }}>
                            {filter.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterModal;
