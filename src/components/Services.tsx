import { motion } from 'framer-motion';
import { Play, Palette, LayoutGrid, FileText, Bot } from 'lucide-react';

const topServices = [
    {
        icon: <Play size={36} strokeWidth={1.8} />,
        title: 'MOTION GRAPHICS',
        desc: 'Animated brand stories, explainer videos, and dynamic visual content that captures attention.'
    },
    {
        icon: <Palette size={36} strokeWidth={1.8} />,
        title: 'STATIC DESIGN',
        desc: 'Brand identities, marketing materials, and visual systems designed for lasting impact.'
    },
    {
        icon: <LayoutGrid size={36} strokeWidth={1.8} />,
        title: 'UX / UI',
        desc: 'User-centered digital experiences from concept to polished interface design.'
    }
];

const bottomServices = [
    {
        icon: <FileText size={36} strokeWidth={1.8} />,
        title: 'PRINTABLES',
        desc: 'Packaging, editorial layouts, and print collateral with tactile appeal.'
    },
    {
        icon: <Bot size={36} strokeWidth={1.8} />,
        title: 'AI CREATIONS',
        desc: 'Harnessing the power of generative AI to push creative boundaries and explore new visual frontiers.'
    }
];

const Services = () => {
    return (
        <section id="services" style={{ background: 'var(--bg-primary)', padding: '120px 5%', transition: 'background-color 0.4s ease, color 0.4s ease' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <span style={{ color: 'var(--accent-vibrant)', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '16px' }}>
                        WHAT I OFFER
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-main)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                        SERVICES
                    </h2>
                </motion.div>

                {/* Top Row - 3 Items */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '60px 40px',
                    justifyContent: 'center',
                    marginBottom: '60px'
                }}>
                    {topServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            style={{
                                textAlign: 'center',
                                padding: '20px 15px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{
                                color: 'var(--text-main)',
                                marginBottom: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--text-main)',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                marginBottom: '14px',
                                fontFamily: 'var(--font-family)'
                            }}>
                                {service.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                maxWidth: '320px',
                                margin: '0 auto',
                                fontWeight: 400
                            }}>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Row - 2 Items Centered */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '60px 80px'
                }} className="services-bottom-row">
                    {bottomServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            whileHover={{ y: -8 }}
                            style={{
                                textAlign: 'center',
                                padding: '20px 15px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: '340px'
                            }}
                        >
                            <div style={{
                                color: 'var(--text-main)',
                                marginBottom: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--text-main)',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                marginBottom: '14px',
                                fontFamily: 'var(--font-family)'
                            }}>
                                {service.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                maxWidth: '320px',
                                margin: '0 auto',
                                fontWeight: 400
                            }}>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .services-bottom-row {
                        gap: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
