import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Sparkles, Camera, ShoppingBag, User } from 'lucide-react';

const BottomNav = () => {
    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/inspire', icon: Sparkles, label: 'Inspire' },
        { path: '/try-on', icon: Camera, label: 'Try-On', isMain: true },
        { path: '/shop', icon: ShoppingBag, label: 'Shop' },
        { path: '/profile', icon: User, label: 'Profile' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            padding: '12px 24px 24px', // Extra padding bottom for safe area
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            maxWidth: '480px', // Match container max-width
            margin: '0 auto' // Center if on desktop
        }}>
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    style={({ isActive }) => ({
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        color: isActive ? 'var(--color-primary)' : 'var(--color-secondary)',
                        textDecoration: 'none',
                        transform: item.isMain ? 'translateY(-20px)' : 'none',
                    })}
                >
                    {item.isMain ? (
                        <div style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '50%',
                            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <item.icon size={28} strokeWidth={2} />
                        </div>
                    ) : (
                        <>
                            <item.icon size={24} strokeWidth={2} />
                            <span style={{ fontSize: '10px', fontWeight: 600 }}>{item.label}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
