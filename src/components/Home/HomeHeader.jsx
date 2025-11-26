import React from 'react';
import { Crown } from 'lucide-react';

const HomeHeader = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 24px',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(250, 250, 250, 0.9)',
            backdropFilter: 'blur(8px)'
        }}>
            <div style={{
                fontFamily: 'var(--font-main)',
                fontWeight: 700,
                fontSize: '24px',
                letterSpacing: '-0.5px',
                color: 'var(--color-text-main)'
            }}>
                Lume
            </div>

            <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
                <Crown size={16} color="var(--color-primary)" fill="var(--color-primary)" />
                <span style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>Pro</span>
            </button>
        </header>
    );
};

export default HomeHeader;
