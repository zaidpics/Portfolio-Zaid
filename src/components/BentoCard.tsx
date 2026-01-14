import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface BentoCardProps {
    children: ReactNode;
    span?: string; // e.g., "col-span-2 row-span-2" equivalent or just style gridColumn/Row
    className?: string; // for additional styling
    onClick?: () => void;
    style?: React.CSSProperties;
}

const BentoCard = ({ children, span = "1 / 1", className = "", onClick, style }: BentoCardProps) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.02,
                borderColor: "rgba(255, 255, 255, 0.3)" // Brighten border on hover
            }}
            transition={{ duration: 0.4 }}
            className={`bento-card ${className}`}
            style={{
                borderRadius: '24px',
                background: 'linear-gradient(145deg, rgba(25, 25, 25, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%)', // Reference gradient
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '30px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gridArea: span,
                cursor: 'pointer',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                ...style
            }}
        >
            {children}
        </motion.div>
    );
};

export default BentoCard;
