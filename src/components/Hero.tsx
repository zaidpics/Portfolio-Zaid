import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroBackground from './HeroBackground';
import './Hero.css';

const words = ["motion", "visuals", "design", "movement", "experiences", "ideas"];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section" id="hero">
            <div className="hero-container">
                <h1 className="hero-headline">
                    <span className="hero-text-content">
                        Turning stories into
                        <span className="hero-spacer"> </span>
                        <div className="hero-anim-wrapper">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[index]}
                                    className="hero-dynamic highlight-italic"
                                    initial={{ y: 0, opacity: 0, filter: 'blur(4px)' }}
                                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ y: 0, opacity: 0, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                >
                                    {words[index]}.
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </span>
                </h1>
            </div>

            {/* Cinematic Background */}
            <HeroBackground />
        </section>
    );
};

export default Hero;
