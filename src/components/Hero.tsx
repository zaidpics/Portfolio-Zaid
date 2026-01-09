import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span style={{ color: 'var(--accent-vibrant)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '20px' }}>
                        Creative Designer & Developer
                    </span>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '30px' }}>
                        Crafting <span className="text-gradient">Digital</span><br />
                        Experiences<span style={{ color: 'var(--accent-vibrant)' }}>.</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6 }}>
                        Merging aesthetics with functional code to build premium digital products that stand out in the noise.
                    </p>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ background: 'var(--text-main)', color: 'var(--bg-primary)', padding: '16px 32px', borderRadius: '100px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}
                        >
                            View My Work <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass"
                            style={{ color: 'var(--text-main)', padding: '16px 32px', borderRadius: '100px', fontWeight: 600 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, var(--accent-vibrant) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: -1,
                    opacity: 0.3
                }}
            />
        </section>
    );
};

export default Hero;
