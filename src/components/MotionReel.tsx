import { motion } from 'framer-motion';

const videos = [
    {
        title: 'Abstract Motion #1',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-shapes-moving-26361-large.mp4',
        category: 'Motion Design'
    },
    {
        title: 'Cyberpunk Aesthetic',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-liquid-blue-and-pink-smoke-background-40760-large.mp4',
        category: 'Visual Effects'
    },
    {
        title: 'Minimal 3D Render',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-circles-of-light-in-a-dark-background-2735-large.mp4',
        category: '3D Animation'
    },
    {
        title: 'Fluid Dynamics',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-ink-in-water-background-94-large.mp4',
        category: 'Motion Graphics'
    },
    {
        title: 'Future Tech',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-rotating-tech-rings-in-blue-and-white-2736-large.mp4',
        category: 'Product Promo'
    }
];

const MotionReel = () => {
    return (
        <section id="motion" style={{ overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Motion <span className="text-gradient">Reel</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Bringing static designs to life through cinematic movement.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '500px' }}
                            className="glass"
                        >
                            <video
                                src={video.url}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, transition: 'opacity 0.3s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
                            />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '30px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', pointerEvents: 'none' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-vibrant)', textTransform: 'uppercase' }}>{video.category}</span>
                                <h3 style={{ fontSize: '1.2rem', marginTop: '5px' }}>{video.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MotionReel;
