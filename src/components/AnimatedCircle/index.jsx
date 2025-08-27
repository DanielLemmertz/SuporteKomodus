// AnimatedCircle.jsx
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const EDGE_MARGIN = 40;
const TURN_RATE = 0.6;

const rand = (min, max) => Math.random() * (max - min) + min;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: screen;
  will-change: transform, filter;
  filter: blur(40px);
`;

const PALETTES = {
    yellow: (intensity) => `
    radial-gradient(
      circle at 35% 35%,
      rgba(255, 222, 89, ${0.95 * intensity}) 0%,
      rgba(255, 222, 89, ${0.55 * intensity}) 40%,
      rgba(255, 222, 89, ${0.2 * intensity}) 70%,
      rgba(255, 222, 89, 0) 85%
    )
  `,
    red: (intensity) => `
    radial-gradient(
      circle at 35% 35%,
      rgba(220, 0, 0, ${0.95 * intensity}) 0%,
      rgba(220, 0, 0, ${0.55 * intensity}) 40%,
      rgba(220, 0, 0, ${0.2 * intensity}) 70%,
      rgba(220, 0, 0, 0) 85%
    )
  `,
    mix: (intensity) => `
    radial-gradient(
      circle at 35% 35%,
      rgba(255, 222, 89, ${0.95 * intensity}) 0%,
      rgba(220, 0, 0, ${0.55 * intensity}) 35%,
      rgba(220, 0, 0, ${0.2 * intensity}) 65%,
      rgba(255, 255, 255, 0) 85%
    )
  `,
};

const AnimatedCircle = ({
    containerRef,
    size = 300,
    speed = 60,
    intensity = 1,
    palette = "yellow", // 👈 default
}) => {
    const ref = useRef(null);
    const st = useRef({
        x: 0,
        y: 0,
        angle: rand(0, Math.PI * 2),
        speed,
        initialized: false,
    });

    useEffect(() => {
        if (!ref.current) return;
        ref.current.style.background = PALETTES[palette](intensity);
        ref.current.style.width = `${size}px`;
        ref.current.style.height = `${size}px`;
    }, [intensity, size, palette]);

    useEffect(() => {
        let raf;
        let lastT = 0;

        const measureBounds = () => {
            const el = containerRef?.current;
            const W = el ? el.clientWidth : window.innerWidth;
            const H = el ? el.clientHeight : window.innerHeight;
            return { W, H };
        };

        const step = (t) => {
            if (!lastT) lastT = t;
            const dt = (t - lastT) / 1000;
            lastT = t;

            const { W, H } = measureBounds();
            const s = st.current;

            if (!s.initialized) {
                s.x = rand(EDGE_MARGIN, Math.max(EDGE_MARGIN, W - EDGE_MARGIN - size));
                s.y = rand(EDGE_MARGIN, Math.max(EDGE_MARGIN, H - EDGE_MARGIN - size));
                s.initialized = true;
            }

            const dTheta =
                (TURN_RATE * Math.PI / 180) * (Math.random() - 0.5) * dt * 60;
            s.angle += dTheta;

            s.x += Math.cos(s.angle) * s.speed * dt;
            s.y += Math.sin(s.angle) * s.speed * dt;

            if (s.x < EDGE_MARGIN) { s.x = EDGE_MARGIN; s.angle = Math.PI - s.angle; }
            if (s.x > W - EDGE_MARGIN - size) { s.x = W - EDGE_MARGIN - size; s.angle = Math.PI - s.angle; }
            if (s.y < EDGE_MARGIN) { s.y = EDGE_MARGIN; s.angle = -s.angle; }
            if (s.y > H - EDGE_MARGIN - size) { s.y = H - EDGE_MARGIN - size; s.angle = -s.angle; }

            if (ref.current) {
                ref.current.style.transform = `translate3d(${s.x}px, ${s.y}px, 0)`;
            }

            raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [containerRef, size, speed]);

    return <Circle ref={ref} />;
};

export default AnimatedCircle;
