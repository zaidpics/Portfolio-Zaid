import { motion } from 'framer-motion';
import React from 'react';
import './Hero.css';
import DistortionImage from './DistortionImage';

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            {/* Full Screen WebGL Distortion Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                opacity: 0.3,
                pointerEvents: 'auto',
            }}>
                <React.Suspense fallback={null}>
                    <DistortionImage image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" />
                </React.Suspense>
            </div>

            <div className="hero-container">
                <motion.div
                    className="hero-centered-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="hero-name">Zaid Jauffer</h1>
                    <h2 className="hero-role">CREATIVE DESIGNER</h2>
                </motion.div>
            </div>

            <style>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 5%;
                    width: 100%;
                    position: relative;
                    background: var(--hero-gradient); /* Pure Black */
                    overflow: hidden;
                }

                .hero-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    max-width: 1600px;
                    position: relative;
                    z-index: 10;
                    pointer-events: none;
                }

                .hero-centered-content {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .hero-name {
                    font-family: var(--font-serif);
                    font-style: italic;
                    font-size: clamp(4rem, 15vw, 10rem); /* Significantly bigger */
                    font-weight: 400;
                    color: var(--text-main);
                    letter-spacing: -0.04em;
                    line-height: 1;
                    white-space: nowrap; /* Prevent wrapping if possible on large screens */
                }

                .hero-role {
                    font-family: var(--font-family);
                    font-size: clamp(1rem, 2vw, 1.5rem);
                    font-weight: 600;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                    margin-top: 16px;
                }

                /* Responsive */
                @media (max-width: 768px) {
                   .hero-name {
                        font-size: 3.5rem;
                   }
                }
            `}</style>
        </section>
    );
};

export default Hero;
