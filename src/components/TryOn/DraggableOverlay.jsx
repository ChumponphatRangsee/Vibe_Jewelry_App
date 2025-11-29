import React, { useState, useRef, useEffect } from 'react';
import { X, RotateCw, Maximize } from 'lucide-react';

const DraggableOverlay = ({ item, isSelected, onSelect, onDelete, onUpdate }) => {
    const [position, setPosition] = useState(item.position || { x: 50, y: 50 }); // Percentage
    const [scale, setScale] = useState(item.scale || 1);
    const [rotation, setRotation] = useState(item.rotation || 0);
    const elementRef = useRef(null);
    const isDragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handlePointerMove = (e) => {
            if (!isDragging.current) return;

            const deltaX = e.clientX - dragStart.current.x;
            const deltaY = e.clientY - dragStart.current.y;

            // Convert px delta to percentage relative to parent
            const parent = elementRef.current.parentElement;
            const percentX = (deltaX / parent.offsetWidth) * 100;
            const percentY = (deltaY / parent.offsetHeight) * 100;

            setPosition(prev => ({
                x: prev.x + percentX,
                y: prev.y + percentY
            }));

            dragStart.current = { x: e.clientX, y: e.clientY };
        };

        const handlePointerUp = () => {
            if (isDragging.current) {
                isDragging.current = false;
                onUpdate(item.id, { position, scale, rotation });
            }
        };

        if (isSelected) {
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
        }
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isSelected, item.id, onUpdate, position, scale, rotation]);

    const handlePointerDown = (e) => {
        e.stopPropagation();
        onSelect(item.id);
        isDragging.current = true;
        dragStart.current = { x: e.clientX, y: e.clientY };
    };

    return (
        <div
            ref={elementRef}
            onPointerDown={handlePointerDown}
            style={{
                position: 'absolute',
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                width: '100px', // Base size
                height: '100px',
                cursor: 'move',
                zIndex: isSelected ? 100 : 10,
                touchAction: 'none'
            }}
        >
            <img
                src={item.image}
                alt={item.name}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
                }}
            />

            {/* Selection UI */}
            {isSelected && (
                <div style={{
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    right: -10,
                    bottom: -10,
                    border: '1px dashed var(--color-primary)',
                    borderRadius: '8px',
                    pointerEvents: 'none'
                }}>
                    {/* Delete Handle */}
                    <button
                        onPointerDown={(e) => { e.stopPropagation(); onDelete(item.id); }}
                        style={{
                            position: 'absolute',
                            top: -12,
                            left: -12,
                            background: 'var(--color-error)',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '4px',
                            pointerEvents: 'auto',
                            border: '2px solid white'
                        }}
                    >
                        <X size={12} />
                    </button>

                    {/* Rotate Handle */}
                    <button
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            // Simple rotation logic placeholder
                            setRotation(r => r + 45);
                            onUpdate(item.id, { rotation: rotation + 45 });
                        }}
                        style={{
                            position: 'absolute',
                            top: -12,
                            right: -12,
                            background: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '4px',
                            pointerEvents: 'auto',
                            border: '2px solid white'
                        }}
                    >
                        <RotateCw size={12} />
                    </button>

                    {/* Scale Handle */}
                    <button
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            // Simple scale logic placeholder
                            setScale(s => s > 1.5 ? 0.5 : s + 0.25);
                            onUpdate(item.id, { scale: scale > 1.5 ? 0.5 : scale + 0.25 });
                        }}
                        style={{
                            position: 'absolute',
                            bottom: -12,
                            right: -12,
                            background: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '4px',
                            pointerEvents: 'auto',
                            border: '2px solid white'
                        }}
                    >
                        <Maximize size={12} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default DraggableOverlay;
