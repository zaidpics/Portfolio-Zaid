import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Maximize2,
    Minimize2,
    Download
} from 'lucide-react';
import { PageFlip } from 'page-flip';
import './EditorialShowcase.css';

const TOTAL_PAGES = 79;
const pageImages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/magazine/pages/page-${num}.jpg`;
});

const EditorialShowcase = () => {
    const bookRef = useRef<HTMLDivElement>(null);
    const pageFlipInstance = useRef<PageFlip | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const initPageFlip = useCallback(() => {
        if (!bookRef.current) return;

        // Clean up previous instance if any
        if (pageFlipInstance.current) {
            try {
                pageFlipInstance.current.destroy();
            } catch {
                // Ignore cleanup error
            }
            pageFlipInstance.current = null;
        }

        const isMobile = window.innerWidth <= 768;
        const baseWidth = isMobile ? 320 : 450;
        const baseHeight = isMobile ? 480 : 660;

        try {
            const flip = new PageFlip(bookRef.current, {
                width: baseWidth,
                height: baseHeight,
                size: 'stretch',
                minWidth: 280,
                maxWidth: 580,
                minHeight: 400,
                maxHeight: 840,
                maxShadowOpacity: 0.5,
                showCover: true,
                mobileScrollSupport: false,
                usePortrait: true,
                startPage: currentPage,
                autoSize: true
            });

            flip.loadFromImages(pageImages);

            flip.on('flip', (e: { data: number }) => {
                setCurrentPage(e.data);
            });

            flip.on('init', () => {
                setIsLoaded(true);
            });

            pageFlipInstance.current = flip;
        } catch (err) {
            console.error('Failed to initialize PageFlip:', err);
        }
    }, [currentPage]);

    useEffect(() => {
        const timer = setTimeout(() => {
            initPageFlip();
        }, 150);

        return () => {
            clearTimeout(timer);
            if (pageFlipInstance.current) {
                try {
                    pageFlipInstance.current.destroy();
                } catch {
                    // Ignore
                }
                pageFlipInstance.current = null;
            }
        };
    }, [initPageFlip]);

    // Handle Keyboard arrow navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!pageFlipInstance.current) return;
            if (e.key === 'ArrowRight') {
                pageFlipInstance.current.flipNext();
            } else if (e.key === 'ArrowLeft') {
                pageFlipInstance.current.flipPrev();
            } else if (e.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen]);

    const handleNext = () => {
        pageFlipInstance.current?.flipNext();
    };

    const handlePrev = () => {
        pageFlipInstance.current?.flipPrev();
    };

    const handleFirst = () => {
        pageFlipInstance.current?.turnToPage(0);
    };

    const handleLast = () => {
        pageFlipInstance.current?.turnToPage(TOTAL_PAGES - 1);
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetPage = Number(e.target.value) - 1;
        pageFlipInstance.current?.turnToPage(targetPage);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
        setTimeout(() => {
            pageFlipInstance.current?.update();
        }, 300);
    };

    return (
        <section className={`editorial-section ${isFullscreen ? 'flipbook-fullscreen-mode' : ''}`} id="editorial">
            <div className="container">
                {/* Header */}
                <motion.div
                    className="editorial-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="editorial-kicker">
                        EDITORIAL SHOWCASE
                    </span>
                    <h2 className="editorial-title">
                        JAM JAM <span className="italic-highlight">Volume 47</span>
                    </h2>
                    <p className="editorial-subtitle">
                        An interactive 79-page retrospective & tribute publication designed for Shalin Balasuriya, featuring stories, letters, quotes, and retro photo archives from the Spa Ceylon marketing family.
                    </p>
                </motion.div>

                {/* Flipbook Stage */}
                <div className="flipbook-stage-wrapper">
                    <div className="flipbook-frame">
                        <div className="flipbook-container">
                            {!isLoaded && (
                                <div style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    color: 'var(--text-muted)'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        border: '3px solid var(--glass-border)',
                                        borderTopColor: 'var(--accent-vibrant)',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite'
                                    }} />
                                    <span style={{ fontSize: '0.9rem' }}>Loading magazine pages...</span>
                                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                                </div>
                            )}
                            <div className="flipbook-viewport" ref={bookRef}></div>
                        </div>
                    </div>

                    {/* Toolbar Controls */}
                    <div className="flipbook-toolbar">
                        <div className="flipbook-nav-group">
                            <button
                                className="flipbook-btn"
                                onClick={handleFirst}
                                disabled={currentPage === 0}
                                title="First Page"
                                aria-label="First Page"
                            >
                                <ChevronsLeft size={18} />
                            </button>
                            <button
                                className="flipbook-btn"
                                onClick={handlePrev}
                                disabled={currentPage === 0}
                                title="Previous Page"
                                aria-label="Previous Page"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <span className="flipbook-page-indicator">
                                Page {currentPage + 1} / {TOTAL_PAGES}
                            </span>

                            <button
                                className="flipbook-btn"
                                onClick={handleNext}
                                disabled={currentPage >= TOTAL_PAGES - 1}
                                title="Next Page"
                                aria-label="Next Page"
                            >
                                <ChevronRight size={20} />
                            </button>
                            <button
                                className="flipbook-btn"
                                onClick={handleLast}
                                disabled={currentPage >= TOTAL_PAGES - 1}
                                title="Last Page"
                                aria-label="Last Page"
                            >
                                <ChevronsRight size={18} />
                            </button>
                        </div>

                        {/* Page Slider */}
                        <div className="flipbook-slider-wrapper">
                            <input
                                type="range"
                                min={1}
                                max={TOTAL_PAGES}
                                value={currentPage + 1}
                                onChange={handleSliderChange}
                                className="flipbook-slider"
                                title="Jump to page"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flipbook-nav-group">
                            <button
                                className="flipbook-action-btn"
                                onClick={toggleFullscreen}
                                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
                            >
                                {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                                <span>{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
                            </button>

                            <a
                                href="/magazine/jam-jam-volume-47.pdf"
                                download="JAM-JAM-Volume-47.pdf"
                                className="flipbook-action-btn"
                                title="Download Full 79-Page PDF"
                            >
                                <Download size={16} />
                                <span>Download PDF</span>
                            </a>
                        </div>
                    </div>

                    <p className="flipbook-hint">
                        💡 Click or drag the corners to flip pages • Use arrow keys (← / →) to navigate
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EditorialShowcase;
