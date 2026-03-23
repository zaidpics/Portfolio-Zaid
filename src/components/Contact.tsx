import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, Mail, MessageCircle, ExternalLink } from 'lucide-react';

import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="contact-kicker">GET IN TOUCH</span>

                    <h2 className="contact-headline">
                        LET’S<br />CONNECT
                    </h2>

                    <p className="contact-description">
                        I’m always open to new projects, creative ideas, and opportunities
                        to be part of your vision. Let’s create something extraordinary together.
                        Reach out via social media or direct message.
                    </p>

                    <div className="social-links">
                        <motion.a
                            href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="social-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin size={24} />
                        </motion.a>

                        <motion.a
                            href="https://behance.net" target="_blank" rel="noopener noreferrer"
                            className="social-btn primary-platform"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink size={24} />
                            <span className="platform-label">Behance</span>
                        </motion.a>

                        <motion.a
                            href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="social-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Instagram size={24} />
                        </motion.a>

                        <motion.a
                            href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="social-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Facebook size={24} />
                        </motion.a>

                        <motion.a
                            href="mailto:hello@example.com"
                            className="social-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={24} />
                        </motion.a>

                        <motion.a
                            href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer"
                            className="social-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircle size={24} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
