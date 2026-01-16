import { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 }); // Current mouse/target position
    const lightRef = useRef({ x: 0, opacity: 0 }); // Lerped position and opacity

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        // Initialize dimensions
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight; // Full viewport usually, or container size
            // Ensure canvas matches display size for sharpness
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        };

        window.addEventListener('resize', resize);
        resize();

        // Mouse tracking
        const onMouseMove = (e: MouseEvent) => {
            // Get position relative to canvas (if it's not full screen fixed)
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;

            // Target opacity is 1 when mouse is over
            if (mouseRef.current.x >= 0 && mouseRef.current.x <= width &&
                mouseRef.current.y >= 0 && mouseRef.current.y <= height) {
                // Active
            }
        };

        // We actually want the light to follow the HORIZON line based on mouse X.
        // Mouse Y doesn't control position, but maybe acts as a trigger to fade in/out if far away?
        // Request says "mouse-hover interaction", implying presence.
        // Let's keep it simple: Light follows X, stays on Horizon curve.

        window.addEventListener('mousemove', onMouseMove);

        // Initial position center
        lightRef.current.x = width / 2;
        mouseRef.current.x = width / 2;

        const render = () => {
            // Clear
            // Fill with dark background (or transparent if handled by CSS)
            // Reference says "deep black background", we can do it here or CSS.
            // Let's do clearRect to allow CSS background-color (cleaner).
            ctx.clearRect(0, 0, width, height);

            // Horizon Curve Geometry
            // "Soft curved horizon line across the lower third"
            const horizonY = height * 0.75; // Lower third base
            const centerArch = height * 0.65; // Peak of the curve

            // We draw a quadratic curve from left to right
            // Start: (0, horizonY)
            // Control: (width/2, curvePeak)
            // End: (width, horizonY)

            // Calculate curve Y at current X
            // Quadratic Bezier formula: B(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
            // We need Y for a given X. For a symmetric quadratic curve where x goes 0 -> width:
            // t = x / width.
            // Py = (1-t)^2 * horizonY + 2(1-t)t * centerArch + t^2 * horizonY

            // Update Physics
            const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

            // Smoothly move light x towards mouse x
            lightRef.current.x = lerp(lightRef.current.x, mouseRef.current.x, 0.1);

            // Calculate Light Y on the curve
            const t = Math.max(0, Math.min(1, lightRef.current.x / width));
            const lightY = Math.pow(1 - t, 2) * horizonY + 2 * (1 - t) * t * centerArch + Math.pow(t, 2) * horizonY;

            // Draw Background Horizon (Dim)
            ctx.beginPath();
            ctx.moveTo(0, horizonY);
            ctx.quadraticCurveTo(width / 2, centerArch, width, horizonY);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"; // Very dim baseline
            ctx.lineWidth = 1;
            ctx.stroke();


            // LIGHT FLARE & GLOW
            // Only if we want to show it? "The light source dynamically follows... wherever the mouse hovers"
            // Reference image has a permanent faint glow, intensified by hover?
            // Request: "Throughout... A focused glow... fade smoothly in and out... rest remains dim"
            // Let's make opacity always on but varying intensity, or just follow the mouse.

            const x = lightRef.current.x;
            const y = lightY;

            // 1. Light Bloom (Soft radial)
            // Gradient centered at x,y
            const bloomRadius = 400;
            const bloom = ctx.createRadialGradient(x, y, 0, x, y, bloomRadius);
            bloom.addColorStop(0, "rgba(200, 220, 255, 0.15)"); // core blueish tint
            bloom.addColorStop(0.4, "rgba(50, 100, 200, 0.05)");
            bloom.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = bloom;
            ctx.beginPath();
            // Draw a rect covering the area or full canvas
            ctx.rect(x - bloomRadius, y - bloomRadius, bloomRadius * 2, bloomRadius * 2);
            ctx.fill();

            // 2. Horizon Highlight (Localized stroke brightness)
            // We can re-draw a segment of the curve with brighter color around the light
            // Or use a gradient stroke
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, horizonY);
            ctx.quadraticCurveTo(width / 2, centerArch, width, horizonY);

            const strokeGrad = ctx.createLinearGradient(x - 300, y, x + 300, y);
            strokeGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
            strokeGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.9)"); // Bright center
            strokeGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.strokeStyle = strokeGrad;
            ctx.lineWidth = 2;
            ctx.globalCompositeOperation = "screen"; // Additive blending for glow
            ctx.stroke();
            ctx.restore();


            // 3. Flares (Vertical / Horizontal)
            ctx.save();
            ctx.globalCompositeOperation = "screen";

            // Vertical Flare
            const vGrad = ctx.createLinearGradient(x, y - 300, x, y + 300);
            vGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
            vGrad.addColorStop(0.5, "rgba(200, 230, 255, 0.4)");
            vGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.fillStyle = vGrad;
            ctx.fillRect(x - 1, y - 300, 2, 600); // 2px wide vertical beam

            // Horizontal Flare
            const hGrad = ctx.createLinearGradient(x - 300, y, x + 300, y);
            hGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
            hGrad.addColorStop(0.5, "rgba(180, 210, 255, 0.3)");
            hGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.fillStyle = hGrad;
            ctx.fillRect(x - 300, y - 1, 600, 2); // 2px high horizontal beam

            ctx.restore();

            // 4. Lens Dust / Subtle Particles (Optional, minimal as requested)
            // "No particles, sparks" -> Skipping.


            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                backgroundColor: '#050505', // Deep black base
                pointerEvents: 'none' // Allow clicks to pass through to underlying nav etc if needed? 
                // Actually we tracked mouse on window, so this is fine.
            }}
        />
    );
};

export default HeroBackground;
