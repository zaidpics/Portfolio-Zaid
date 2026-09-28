import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, ChevronDown, ChevronUp, X } from 'lucide-react';

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
    },
    {
        id: 6,
        title: 'Motion Showcase 06',
        url: '/videos/06.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 7,
        title: 'Motion Showcase 07',
        url: '/videos/07.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 8,
        title: 'Motion Showcase 08',
        url: '/videos/08.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 9,
        title: 'Motion Showcase 09',
        url: '/videos/09.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 10,
        title: 'Motion Showcase 10',
        url: '/videos/10.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 11,
        title: 'Motion Showcase 11',
        url: '/videos/11.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 12,
        title: 'Motion Showcase 12',
        url: '/videos/12.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 13,
        title: 'Motion Showcase 13',
        url: '/videos/13.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 14,
        title: 'Motion Showcase 14',
        url: '/videos/14.mp4',
        category: 'Motion Graphic'
    },
    {
        id: 15,
        title: 'Motion Showcase 15',
        url: '/videos/15.mp4',
        category: 'Motion Graphic'
    }
];

const ReelTile = ({ reel, onClick }: { reel: any; onClick: () => void }) => {
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
            onClick={onClick}
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

            {!isPlaying && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)' }}>
                    <Play fill="white" size={48} strokeWidth={0} />
                </div>
            )}

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

const ReelPreviewModal = ({ reel, onClose }: { reel: any | null; onClose: () => void }) => {
    if (!reel) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 10000,
                    background: 'rgba(0, 0, 0, 0.92)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}
                onClick={onClose}
            >
                {/* Header Bar */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '40px',
                    right: '40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 10
                }}>
                    <div>
                        <span style={{ color: 'var(--accent-vibrant)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
                            {reel.category}
                        </span>
                        <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, margin: '4px 0 0' }}>
                            {reel.title}
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Actual Size Video Player */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        maxWidth: '90vw',
                        maxHeight: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <video
                        src={reel.url}
                        controls
                        autoPlay
                        playsInline
                        style={{
                            maxWidth: '100%',
                            maxHeight: '80vh',
                            objectFit: 'contain',
                            borderRadius: '24px',
                            backgroundColor: '#000'
                        }}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const MotionReel = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedReel, setSelectedReel] = useState<any | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const initialReels = reels.slice(0, 5);

    const openPreview = (reel: any) => {
        setSelectedReel(reel);
        document.body.style.overflow = 'hidden';
    };

    const closePreview = () => {
        setSelectedReel(null);
        document.body.style.overflow = 'unset';
    };

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
                    style={{ marginBottom: '60px', textAlign: 'center' }}
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

            {/* Clips Display */}
            {!showAll ? (
                /* Initial 5 Clips Row Slider */
                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        gap: '40px',
                        overflowX: 'auto',
                        padding: '20px 5vw 40px',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch',
                        perspective: '1000px'
                    }}
                    className="hide-scrollbar"
                >
                    {initialReels.map((reel) => (
                        <ReelTile key={reel.id} reel={reel} onClick={() => openPreview(reel)} />
                    ))}
                    <div style={{ flex: '0 0 5vw' }}></div>
                </div>
            ) : (
                /* All 15 Clips Expanded Grid */
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '40px',
                        justifyContent: 'center',
                        padding: '20px 5vw 40px'
                    }}
                >
                    {reels.map((reel) => (
                        <ReelTile key={reel.id} reel={reel} onClick={() => openPreview(reel)} />
                    ))}
                </motion.div>
            )}

            {/* View More / Show Less Button - Bottom Right */}
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '20px 5vw 0',
                position: 'relative',
                zIndex: 20
            }}>
                <motion.button
                    onClick={() => setShowAll(!showAll)}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(114, 65, 255, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '16px 32px',
                        borderRadius: '100px',
                        background: 'var(--accent-vibrant)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '1rem',
                        letterSpacing: '0.5px',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(114, 65, 255, 0.3)',
                        border: 'none',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {showAll ? 'SHOW LESS' : 'VIEW MORE'}
                    {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </motion.button>
            </div>

            {/* Actual Size Preview Modal */}
            <ReelPreviewModal reel={selectedReel} onClose={closePreview} />

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
