import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ padding: '100px 5% 40px', background: 'var(--bg-primary)', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '80px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }} id="contact">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px' }}>Currently available for freelance projects and collaborations.</p>
                        <a href="mailto:hello@zaid.design" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-vibrant)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Mail /> hello@zaid.design
                        </a>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-end' }} className="footer-links">
                        <div style={{ display: 'flex', gap: '24px' }}>
                            <motion.a whileHover={{ y: -5, color: 'var(--accent-vibrant)' }} href="#"><Github /></motion.a>
                            <motion.a whileHover={{ y: -5, color: 'var(--accent-vibrant)' }} href="#"><Twitter /></motion.a>
                            <motion.a whileHover={{ y: -5, color: 'var(--accent-vibrant)' }} href="#"><Instagram /></motion.a>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <h4 style={{ marginBottom: '15px' }}>Location</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Remote / Worldwide</p>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© 2026 ZAID Design. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .footer-links { align-items: flex-start !important; }
          .footer-links div { text-align: left !important; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
