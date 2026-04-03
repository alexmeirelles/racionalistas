"use client";

import { useEffect, useRef } from "react";

interface ParticleBGProps {
    particleColor?: string; // RGB values e.g. "255,255,255"
}

export function ParticleBG({ particleColor = "255,255,255" }: ParticleBGProps) {
    const ref = useRef<HTMLCanvasElement>(null);
    const colorRef = useRef(particleColor);

    useEffect(() => {
        colorRef.current = particleColor;
    }, [particleColor]);

    useEffect(() => {
        const c = ref.current;
        if (!c) return;
        const ctx = c.getContext("2d")!;
        let anim: number;

        const ps: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
        const resize = () => {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        for (let i = 0; i < 60; i++) {
            ps.push({
                x: Math.random() * c.width,
                y: Math.random() * c.height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: Math.random() * 2 + 1,
                o: Math.random() * 0.35 + 0.2,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            const col = colorRef.current;
            ps.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = c.width;
                if (p.x > c.width) p.x = 0;
                if (p.y < 0) p.y = c.height;
                if (p.y > c.height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${col},${p.o})`;
                ctx.fill();
            });
            for (let i = 0; i < ps.length; i++) {
                for (let j = i + 1; j < ps.length; j++) {
                    const d = Math.hypot(ps[i].x - ps[j].x, ps[i].y - ps[j].y);
                    if (d < 130) {
                        ctx.beginPath();
                        ctx.moveTo(ps[i].x, ps[i].y);
                        ctx.lineTo(ps[j].x, ps[j].y);
                        ctx.lineWidth = 0.8;
                        ctx.strokeStyle = `rgba(${col},${0.18 * (1 - d / 130)})`;
                        ctx.stroke();
                    }
                }
            }
            anim = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(anim);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={ref}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}
