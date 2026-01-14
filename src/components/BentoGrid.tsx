import { motion } from 'framer-motion';
import BentoCard from './BentoCard';
import { projects } from './Work';
import { ArrowRight, MapPin, Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

const BentoGrid = () => {
    return (
        <section style={{ padding: '40px 5% 120px', maxWidth: '1600px', margin: '0 auto' }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Auto-fit allows it to be responsive
                    gap: '24px', // Standardized gap as requested
                    gridAutoRows: 'minmax(200px, auto)'
                }}
            >
                {/* 1. Intro / Bio Card - Large 2x2 or 2x1 equivalent depending on screen */}
                <BentoCard span="span 2 / span 2" className="intro-card">
                    <span style={{ color: 'var(--accent-vibrant)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 600 }}>
                        Hello, I'm Zaid
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginTop: '20px', marginBottom: '20px' }}>
                        Creative Designer & <br />
                        <span style={{ color: 'var(--text-muted)' }}>Developer.</span>
                    </h1>
                    <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '80%' }}>
                        Helping brands thrive in the digital world. Located in India, working globally.
                    </p>
                    <div style={{ marginTop: 'auto', paddingTop: '40px', display: 'flex', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
                            <MapPin size={18} /> Remote / Worldwide
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4caf50' }}>
                            <div style={{ width: '8px', height: '8px', background: 'currentColor', borderRadius: '50%' }} /> Available for work
                        </div>
                    </div>
                </BentoCard>

                {/* 2. Services List - 1x2 or 1x1 */}
                <BentoCard className="services-card">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Services</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#ccc' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowRight size={16} /> Brand Identity</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowRight size={16} /> UI/UX Design</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowRight size={16} /> Web Development</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowRight size={16} /> Motion Graphics</li>
                    </ul>
                </BentoCard>

                {/* 3. Socials / Contact - 1x1 */}
                <BentoCard>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Connect</h3>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a href="#" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><Twitter /></a>
                        <a href="#" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><Linkedin /></a>
                        <a href="#" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><Instagram /></a>
                        <a href="#" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><Mail /></a>
                    </div>
                </BentoCard>

                {/* 4. Selected Work - Grid of items */}
                {projects.slice(0, 4).map((project, i) => ( // Showing first 4 projects as cards
                    <BentoCard key={i} className="project-card" span={i === 0 ? "span 2 / span 1" : "span 1 / span 1"}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 0
                        }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                            />
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                        </div>
                        <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                            <span style={{ fontSize: '0.8rem', color: project.color, fontWeight: 600 }}>{project.category}</span>
                            <h3 style={{ fontSize: '1.4rem', marginTop: '5px' }}>{project.title}</h3>
                        </div>
                    </BentoCard>
                ))}

                {/* 5. Call to Action - Span 2 */}
                <BentoCard span="span 2 / span 1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem' }}>Ready to start a project?</h2>
                        <p style={{ color: '#aaa' }}>Let's create something extraordinary together.</p>
                    </div>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '16px 32px',
                            background: 'var(--accent-vibrant)',
                            color: 'white',
                            borderRadius: '100px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        Get in touch <ArrowRight />
                    </motion.a>
                </BentoCard>
            </div>

            {/* CSS Grid Helper for responsive layout */}
            <style>{`
                @media (min-width: 1024px) {
                    .intro-card { grid-column: span 2; grid-row: span 2; }
                    .project-card:nth-of-type(4) { grid-column: span 2; } /* First project span 2 */
                }
            `}</style>
        </section>
    );
};

export default BentoGrid;
