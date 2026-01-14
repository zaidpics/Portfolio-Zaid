import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className={`theme-toggle ${theme}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                right: '20px',
                bottom: '20px',
                zIndex: 9999,
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50%',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
        >
            {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
        </motion.button>
    );
};

export default ThemeToggle;
