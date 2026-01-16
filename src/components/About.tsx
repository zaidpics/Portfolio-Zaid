import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './About.css';

const StatItem = ({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

    return (
        <div className="stat-item" ref={ref}>
            <h3 className="stat-number">
                {isInView && (
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <CountUp end={end} duration={2} />
                        {suffix}
                    </motion.span>
                )}
            </h3>
            <p className="stat-label">{label}</p>
        </div>
    );
};

// Simple CountUp hook/component wrapper for smoother control if needed, 
// but for now implementing a basic lerp effect or just using animation frames could be overkill.
// Let's use a simple distinct animation for the number if we want to "animate 0 to value".
// Since we want a "smooth numeric count-up", we can create a small helper.

const CountUp = ({ end, duration }: { end: number; duration: number }) => {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Counter value={end} duration={duration} />
        </motion.span>
    )
}

const Counter = ({ value, duration }: { value: number, duration: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        if (!node) return;

        let startTime: number | null = null;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            node.textContent = Math.floor(easeProgress * value).toString();

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [value, duration, inView]);

    return <span ref={nodeRef}>0</span>;
}


import { useEffect } from 'react';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                {/* Left Column: Portrait */}
                <div className="about-image-wrapper">
                    <motion.div
                        className="about-image-inner"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    >
                        {/* Visual Placeholder if image fails or doesn't exist */}
                        <div className="image-placeholder-overlay" />
                        <img
                            src="/src/assets/about-portrait.jpg"
                            alt="Zaid Jauffer"
                            className="about-image"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('image-error-fallback');
                            }}
                        />
                    </motion.div>
                </div>

                {/* Right Column: Content */}
                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="section-label">
                            <span className="line"></span>
                            WHO AM I?
                        </div>

                        <h2 className="about-headline">
                            Motion Graphic <br /><span className="text-stroke">Designer</span>
                        </h2>

                        <p className="about-description">
                            My name is <span className="highlight">Zaid Jauffer</span>, a motion graphic designer with 4+ years of experience, having completed 100+ projects worldwide. I specialize in <span className="highlight">motion design, UI design, web content design, product design, and branding</span>—creating visuals that are purposeful, modern, and marketing-driven.
                        </p>

                        <div className="about-stats">
                            <StatItem end={4} label="Years Experience" suffix="+" />
                            <StatItem end={100} label="Projects Completed" suffix="+" />
                            <div className="stat-item">
                                <h3 className="stat-number">
                                    Global
                                </h3>
                                <p className="stat-label">Clients</p>
                            </div>
                        </div>

                        <motion.a
                            href="#contact"
                            className="about-cta"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Let's Connect <ArrowUpRight size={20} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Background Texture/Grid */}
            <div className="about-bg-grid"></div>
        </section>
    );
};

export default About;
