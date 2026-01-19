import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        category: string;
        images?: string[];
    } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100,
                        background: 'rgba(0, 0, 0, 0.9)',
                        backdropFilter: 'blur(20px)',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onClick={onClose}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '24px 5%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            position: 'sticky',
                            top: 0,
                            zIndex: 10,
                            background: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-family)', fontWeight: 600 }}>{project.title}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{project.category}</p>
                        </div>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content Area */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '0 5% 100px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            alignItems: 'center',
                        }}
                        onClick={(e) => e.stopPropagation()}
                        data-lenis-prevent
                    >
                        {project.images?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${project.title} screenshot ${index + 1}`}
                                style={{
                                    width: '100%',
                                    maxWidth: '1200px',
                                    borderRadius: '16px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
