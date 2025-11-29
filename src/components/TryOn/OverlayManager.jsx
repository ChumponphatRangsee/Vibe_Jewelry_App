import React, { useState } from 'react';
import DraggableOverlay from './DraggableOverlay';

const OverlayManager = ({ overlays, setOverlays }) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleUpdate = (id, updates) => {
        setOverlays(prev => prev.map(item =>
            item.id === id ? { ...item, ...updates } : item
        ));
    };

    const handleDelete = (id) => {
        setOverlays(prev => prev.filter(item => item.id !== id));
        setSelectedId(null);
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                zIndex: 20
            }}
            onPointerDown={() => setSelectedId(null)} // Deselect on background tap
        >
            {overlays.map(overlay => (
                <DraggableOverlay
                    key={overlay.id}
                    item={overlay}
                    isSelected={selectedId === overlay.id}
                    onSelect={setSelectedId}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            ))}
        </div>
    );
};

export default OverlayManager;
