import { motion } from 'framer-motion';
import { Home, Briefcase, User, Mail } from 'lucide-react';

const FloatingNavbar = () => {
    const navLinks = [
        { name: 'Home', icon: <Home size={18} />, href: '#' },
        { name: 'Work', icon: <Briefcase size={18} />, href: '#work' },
        { name: 'About', icon: <User size={18} />, href: '#about' },
        { name: 'Contact', icon: <Mail size={18} />, href: '#contact' },
    ];

    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: 'max-content'
        }}>
            <motion.nav
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    display: 'flex',
                    gap: '8px',
                    padding: '8px 12px',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '50px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.15)' // Inner glow added here
                }}
            >
                {navLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '24px',
                            color: 'var(--text-main)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                            transition: 'background-color 0.2s',
                            position: 'relative'
                        }}
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </motion.a>
                ))}
            </motion.nav>
        </div>
    );
};

export default FloatingNavbar;
