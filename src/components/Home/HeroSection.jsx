import React from 'react';
import { Camera, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '0 24px 24px' }}>
            <div style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 24px',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '24px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative background blob */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, rgba(250,250,250,0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <div style={{ zIndex: 1 }}>
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: 700,
                        marginBottom: '8px',
                        lineHeight: 1.2
                    }}>
                        Ready to try<br />something new?
                    </h2>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '15px'
                    }}>
                        Experience hyper-realistic virtual try-on with our studio AI.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    width: '100%',
                    zIndex: 1
                }}>
                    <button
                        onClick={() => navigate('/try-on')}
                        className="btn-primary"
                        style={{ width: '100%', fontSize: '16px' }}
                    >
                        <Camera size={20} />
                        Start Try-On Camera
                    </button>

                    <button
                        className="btn-secondary"
                        style={{
                            width: '100%',
                            fontSize: '14px',
                            border: 'none',
                            color: 'var(--color-text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}
                    >
                        <Upload size={16} />
                        Or upload from photos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
