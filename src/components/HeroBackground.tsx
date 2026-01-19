import { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const lightRef = useRef({ x: 0, opacity: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        };

        window.addEventListener('resize', resize);
        resize();

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        };

        window.addEventListener('mousemove', onMouseMove);

        lightRef.current.x = width / 2;
        mouseRef.current.x = width / 2;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const horizonY = height * 0.75;
            const centerArch = height * 0.65;

            const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
            lightRef.current.x = lerp(lightRef.current.x, mouseRef.current.x, 0.1);

            const t = Math.max(0, Math.min(1, lightRef.current.x / width));
            const lightY = Math.pow(1 - t, 2) * horizonY + 2 * (1 - t) * t * centerArch + Math.pow(t, 2) * horizonY;

            // Horizon - Dark Baseline
            ctx.beginPath();
            ctx.moveTo(0, horizonY);
            ctx.quadraticCurveTo(width / 2, centerArch, width, horizonY);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
            ctx.lineWidth = 1;
            ctx.stroke();

            const x = lightRef.current.x;
            const y = lightY;

            // Bloom
            const bloomRadius = 400;
            const bloom = ctx.createRadialGradient(x, y, 0, x, y, bloomRadius);
            bloom.addColorStop(0, "rgba(200, 220, 255, 0.15)");
            bloom.addColorStop(0.4, "rgba(50, 100, 200, 0.05)");
            bloom.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = bloom;
            ctx.beginPath();
            ctx.rect(x - bloomRadius, y - bloomRadius, bloomRadius * 2, bloomRadius * 2);
            ctx.fill();

            // Horizon Highlight
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, horizonY);
            ctx.quadraticCurveTo(width / 2, centerArch, width, horizonY);

            const strokeGrad = ctx.createLinearGradient(x - 300, y, x + 300, y);
            strokeGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
            strokeGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.9)");
            strokeGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.strokeStyle = strokeGrad;
            ctx.lineWidth = 2;
            ctx.globalCompositeOperation = "screen";
            ctx.stroke();
            ctx.restore();

            // Flares
            ctx.save();
            ctx.globalCompositeOperation = "screen";

            const vGrad = ctx.createLinearGradient(x, y - 300, x, y + 300);
            vGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
            vGrad.addColorStop(0.5, "rgba(200, 230, 255, 0.4)");
            vGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.fillStyle = vGrad;
            ctx.fillRect(x - 1, y - 300, 2, 600);

            const hGrad = ctx.createLinearGradient(x - 300, y, x + 300, y);
            hGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
            hGrad.addColorStop(0.5, "rgba(180, 210, 255, 0.3)");
            hGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.fillStyle = hGrad;
            ctx.fillRect(x - 300, y - 1, 600, 2);

            ctx.restore();

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
                backgroundColor: '#050505',
                pointerEvents: 'none'
            }}
        />
    );
};

export default HeroBackground;
