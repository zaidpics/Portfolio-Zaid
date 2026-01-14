import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

const reels = [
    {
        id: 1,
        title: 'Pure Essential Oils',
        url: '/videos/skincare.mp4',
        category: 'Product Film'
    },
    {
        id: 2,
        title: 'Sleep Intense',
        url: '/videos/sleep_elixir.mp4',
        category: 'Body Elixir'
    },
    {
        id: 3,
        title: 'Orchid Paradise',
        url: '/videos/orchid_paradise.mp4',
        category: 'Luxury Skincare'
    },
    {
        id: 4,
        title: 'The Essential Ritual',
        url: '/videos/sleep_ritual.mp4',
        category: 'Sleep Care'
    },
    {
        id: 5,
        title: 'CECO New Year',
        url: '/videos/ceco_new_year.mp4',
        category: 'Seasonal Wish'
    }
];

const ReelTile = ({ reel }: { reel: any }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            const newMuted = !videoRef.current.muted;
            videoRef.current.muted = newMuted;
            setIsMuted(newMuted);
        }
    };

    useEffect(() => {
        // We only want to set initial playing state, not start playback
        if (videoRef.current) {
            setIsPlaying(!videoRef.current.paused);
        }
    }, []);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <motion.div
            className="reel-tile"
            whileHover={{ y: -15, scale: 1.02 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
                flex: '0 0 auto',
                width: '320px',
                height: '560px',
                borderRadius: '32px',
                overflow: 'hidden',
                position: 'relative',
                scrollSnapAlign: 'center',
                backgroundColor: 'var(--card-bg)',
                boxShadow: 'var(--card-shadow)',
                cursor: 'pointer',
            }}
        >
            <video
                ref={videoRef}
                src={reel.url}
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Loading/Play fallback if not autoplaying */}
            {!isPlaying && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)' }}>
                    <Play fill="white" size={48} strokeWidth={0} />
                </div>
            )}

            {/* Content Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.85))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '32px',
                pointerEvents: 'none'
            }}>
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--accent-vibrant)',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        marginBottom: '10px'
                    }}
                >
                    {reel.category}
                </motion.span>
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.5px' }}
                >
                    {reel.title}
                </motion.h3>
            </div>

            {/* Mute Toggle Control */}
            <motion.button
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'absolute',
                    bottom: '32px',
                    right: '32px',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    zIndex: 20,
                    pointerEvents: 'auto',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
            >
                <AnimatePresence mode="wait">
                    {isMuted ? (
                        <motion.div key="muted" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
                            <VolumeX size={20} fill="currentColor" strokeWidth={0} />
                        </motion.div>
                    ) : (
                        <motion.div key="unmuted" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
                            <Volume2 size={20} fill="currentColor" strokeWidth={0} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </motion.div>
    );
};

const MotionReel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section id="motion" style={{
            padding: '140px 0',
            background: 'var(--motion-bg)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <span style={{ color: 'var(--accent-vibrant)', fontWeight: 600, letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '20px' }}>
                        Cinematic Experience
                    </span>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1, fontWeight: 800 }}>
                        Motion <span className="text-gradient">Portfolio</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '20px auto 0', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        A curated selection of motion narratives designed to captivate and inspire.
                    </p>
                </motion.div>
            </div>

            <div
                ref={scrollRef}
                style={{
                    display: 'flex',
                    gap: '40px',
                    overflowX: 'auto',
                    padding: '20px 5vw 80px',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch',
                    perspective: '1000px'
                }}
                className="hide-scrollbar"
            >
                {reels.map((reel) => (
                    <ReelTile key={reel.id} reel={reel} />
                ))}
                {/* Spacer for end scroll balance */}
                <div style={{ flex: '0 0 5vw' }}></div>
            </div>

            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .reel-tile video {
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .reel-tile:hover video {
          transform: scale(1.1);
        }
      `}</style>
        </section>
    );
};

export default MotionReel;
